// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { GameSparksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameSparksClient";
import { GetGeneratedCodeJobRequest, GetGeneratedCodeJobResult } from "../models/models_0";
import { de_GetGeneratedCodeJobCommand, se_GetGeneratedCodeJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetGeneratedCodeJobCommand}.
 */
export interface GetGeneratedCodeJobCommandInput extends GetGeneratedCodeJobRequest {}
/**
 * @public
 *
 * The output of {@link GetGeneratedCodeJobCommand}.
 */
export interface GetGeneratedCodeJobCommandOutput extends GetGeneratedCodeJobResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets details about a job that is generating code for a snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameSparksClient, GetGeneratedCodeJobCommand } from "@aws-sdk/client-gamesparks"; // ES Modules import
 * // const { GameSparksClient, GetGeneratedCodeJobCommand } = require("@aws-sdk/client-gamesparks"); // CommonJS import
 * const client = new GameSparksClient(config);
 * const input = { // GetGeneratedCodeJobRequest
 *   GameName: "STRING_VALUE", // required
 *   SnapshotId: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new GetGeneratedCodeJobCommand(input);
 * const response = await client.send(command);
 * // { // GetGeneratedCodeJobResult
 * //   GeneratedCodeJob: { // GeneratedCodeJobDetails
 * //     S3Url: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     ExpirationTime: new Date("TIMESTAMP"),
 * //     GeneratedCodeJobId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGeneratedCodeJobCommandInput - {@link GetGeneratedCodeJobCommandInput}
 * @returns {@link GetGeneratedCodeJobCommandOutput}
 * @see {@link GetGeneratedCodeJobCommandInput} for command's `input` shape.
 * @see {@link GetGeneratedCodeJobCommandOutput} for command's `response` shape.
 * @see {@link GameSparksClientResolvedConfig | config} for GameSparksClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link GameSparksServiceException}
 * <p>Base exception class for all service exceptions from GameSparks service.</p>
 *
 */
export class GetGeneratedCodeJobCommand extends $Command<
  GetGeneratedCodeJobCommandInput,
  GetGeneratedCodeJobCommandOutput,
  GameSparksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetGeneratedCodeJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameSparksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetGeneratedCodeJobCommandInput, GetGeneratedCodeJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetGeneratedCodeJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameSparksClient";
    const commandName = "GetGeneratedCodeJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetGeneratedCodeJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetGeneratedCodeJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGeneratedCodeJobCommandOutput> {
    return de_GetGeneratedCodeJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
