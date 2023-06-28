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
import { StartGeneratedCodeJobRequest, StartGeneratedCodeJobResult } from "../models/models_0";
import { de_StartGeneratedCodeJobCommand, se_StartGeneratedCodeJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartGeneratedCodeJobCommand}.
 */
export interface StartGeneratedCodeJobCommandInput extends StartGeneratedCodeJobRequest {}
/**
 * @public
 *
 * The output of {@link StartGeneratedCodeJobCommand}.
 */
export interface StartGeneratedCodeJobCommandOutput extends StartGeneratedCodeJobResult, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Starts an asynchronous process that generates client code for system-defined and custom messages.
 *       The resulting code is collected as a .zip file and uploaded to a pre-signed Amazon S3 URL.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameSparksClient, StartGeneratedCodeJobCommand } from "@aws-sdk/client-gamesparks"; // ES Modules import
 * // const { GameSparksClient, StartGeneratedCodeJobCommand } = require("@aws-sdk/client-gamesparks"); // CommonJS import
 * const client = new GameSparksClient(config);
 * const input = { // StartGeneratedCodeJobRequest
 *   GameName: "STRING_VALUE", // required
 *   SnapshotId: "STRING_VALUE", // required
 *   Generator: { // Generator
 *     TargetPlatform: "STRING_VALUE",
 *     Language: "STRING_VALUE",
 *     GameSdkVersion: "STRING_VALUE",
 *   },
 * };
 * const command = new StartGeneratedCodeJobCommand(input);
 * const response = await client.send(command);
 * // { // StartGeneratedCodeJobResult
 * //   GeneratedCodeJobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartGeneratedCodeJobCommandInput - {@link StartGeneratedCodeJobCommandInput}
 * @returns {@link StartGeneratedCodeJobCommandOutput}
 * @see {@link StartGeneratedCodeJobCommandInput} for command's `input` shape.
 * @see {@link StartGeneratedCodeJobCommandOutput} for command's `response` shape.
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
export class StartGeneratedCodeJobCommand extends $Command<
  StartGeneratedCodeJobCommandInput,
  StartGeneratedCodeJobCommandOutput,
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
  constructor(readonly input: StartGeneratedCodeJobCommandInput) {
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
  ): Handler<StartGeneratedCodeJobCommandInput, StartGeneratedCodeJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartGeneratedCodeJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameSparksClient";
    const commandName = "StartGeneratedCodeJobCommand";
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
  private serialize(input: StartGeneratedCodeJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartGeneratedCodeJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartGeneratedCodeJobCommandOutput> {
    return de_StartGeneratedCodeJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
