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

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  DeleteVpcPeeringAuthorizationInput,
  DeleteVpcPeeringAuthorizationInputFilterSensitiveLog,
  DeleteVpcPeeringAuthorizationOutput,
  DeleteVpcPeeringAuthorizationOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommand,
  serializeAws_json1_1DeleteVpcPeeringAuthorizationCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteVpcPeeringAuthorizationCommandInput extends DeleteVpcPeeringAuthorizationInput {}
export interface DeleteVpcPeeringAuthorizationCommandOutput
  extends DeleteVpcPeeringAuthorizationOutput,
    __MetadataBearer {}

/**
 * <p>Cancels a pending VPC peering authorization for the specified VPC. If you need to
 *             delete an existing VPC peering connection, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringConnection.html">DeleteVpcPeeringConnection</a>.</p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteVpcPeeringAuthorizationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteVpcPeeringAuthorizationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeleteVpcPeeringAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpcPeeringAuthorizationCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcPeeringAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class DeleteVpcPeeringAuthorizationCommand extends $Command<
  DeleteVpcPeeringAuthorizationCommandInput,
  DeleteVpcPeeringAuthorizationCommandOutput,
  GameLiftClientResolvedConfig
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

  constructor(readonly input: DeleteVpcPeeringAuthorizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteVpcPeeringAuthorizationCommandInput, DeleteVpcPeeringAuthorizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteVpcPeeringAuthorizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DeleteVpcPeeringAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVpcPeeringAuthorizationInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteVpcPeeringAuthorizationOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteVpcPeeringAuthorizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteVpcPeeringAuthorizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteVpcPeeringAuthorizationCommandOutput> {
    return deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
