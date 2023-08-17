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
import { GetStageDeploymentRequest, GetStageDeploymentResult } from "../models/models_0";
import { de_GetStageDeploymentCommand, se_GetStageDeploymentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetStageDeploymentCommand}.
 */
export interface GetStageDeploymentCommandInput extends GetStageDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link GetStageDeploymentCommand}.
 */
export interface GetStageDeploymentCommandOutput extends GetStageDeploymentResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a stage deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameSparksClient, GetStageDeploymentCommand } from "@aws-sdk/client-gamesparks"; // ES Modules import
 * // const { GameSparksClient, GetStageDeploymentCommand } = require("@aws-sdk/client-gamesparks"); // CommonJS import
 * const client = new GameSparksClient(config);
 * const input = { // GetStageDeploymentRequest
 *   GameName: "STRING_VALUE", // required
 *   StageName: "STRING_VALUE", // required
 *   DeploymentId: "STRING_VALUE",
 * };
 * const command = new GetStageDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // GetStageDeploymentResult
 * //   StageDeployment: { // StageDeploymentDetails
 * //     DeploymentId: "STRING_VALUE",
 * //     SnapshotId: "STRING_VALUE",
 * //     DeploymentAction: "STRING_VALUE",
 * //     DeploymentState: "STRING_VALUE",
 * //     Created: new Date("TIMESTAMP"),
 * //     LastUpdated: new Date("TIMESTAMP"),
 * //     DeploymentResult: { // DeploymentResult
 * //       ResultCode: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStageDeploymentCommandInput - {@link GetStageDeploymentCommandInput}
 * @returns {@link GetStageDeploymentCommandOutput}
 * @see {@link GetStageDeploymentCommandInput} for command's `input` shape.
 * @see {@link GetStageDeploymentCommandOutput} for command's `response` shape.
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
export class GetStageDeploymentCommand extends $Command<
  GetStageDeploymentCommandInput,
  GetStageDeploymentCommandOutput,
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
  constructor(readonly input: GetStageDeploymentCommandInput) {
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
  ): Handler<GetStageDeploymentCommandInput, GetStageDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetStageDeploymentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameSparksClient";
    const commandName = "GetStageDeploymentCommand";
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
  private serialize(input: GetStageDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetStageDeploymentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetStageDeploymentCommandOutput> {
    return de_GetStageDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
