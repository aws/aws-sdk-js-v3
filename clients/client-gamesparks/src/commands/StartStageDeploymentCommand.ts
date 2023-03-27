// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GameSparksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameSparksClient";
import { StartStageDeploymentRequest, StartStageDeploymentResult } from "../models/models_0";
import {
  deserializeAws_restJson1StartStageDeploymentCommand,
  serializeAws_restJson1StartStageDeploymentCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link StartStageDeploymentCommand}.
 */
export interface StartStageDeploymentCommandInput extends StartStageDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link StartStageDeploymentCommand}.
 */
export interface StartStageDeploymentCommandOutput extends StartStageDeploymentResult, __MetadataBearer {}

/**
 * @public
 * <p>Deploys a snapshot to the stage and creates a new game runtime.</p>
 *          <p>
 *       After you call this operation, you can check the deployment status by using <code>GetStageDeployment</code>.
 *       </p>
 *          <p>
 *       If there are any players connected to the previous game runtime, then both runtimes persist.
 *       Existing connections to the previous runtime are maintained.
 *       When players disconnect and reconnect, they connect to the new runtime.
 *       After there are no connections to the previous game runtime, it is deleted.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameSparksClient, StartStageDeploymentCommand } from "@aws-sdk/client-gamesparks"; // ES Modules import
 * // const { GameSparksClient, StartStageDeploymentCommand } = require("@aws-sdk/client-gamesparks"); // CommonJS import
 * const client = new GameSparksClient(config);
 * const input = { // StartStageDeploymentRequest
 *   GameName: "STRING_VALUE", // required
 *   StageName: "STRING_VALUE", // required
 *   SnapshotId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new StartStageDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartStageDeploymentCommandInput - {@link StartStageDeploymentCommandInput}
 * @returns {@link StartStageDeploymentCommandOutput}
 * @see {@link StartStageDeploymentCommandInput} for command's `input` shape.
 * @see {@link StartStageDeploymentCommandOutput} for command's `response` shape.
 * @see {@link GameSparksClientResolvedConfig | config} for GameSparksClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
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
 *
 */
export class StartStageDeploymentCommand extends $Command<
  StartStageDeploymentCommandInput,
  StartStageDeploymentCommandOutput,
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
  constructor(readonly input: StartStageDeploymentCommandInput) {
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
  ): Handler<StartStageDeploymentCommandInput, StartStageDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartStageDeploymentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameSparksClient";
    const commandName = "StartStageDeploymentCommand";
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
  private serialize(input: StartStageDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartStageDeploymentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartStageDeploymentCommandOutput> {
    return deserializeAws_restJson1StartStageDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
