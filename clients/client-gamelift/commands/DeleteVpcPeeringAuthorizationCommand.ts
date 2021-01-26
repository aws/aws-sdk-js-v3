import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteVpcPeeringAuthorizationInput, DeleteVpcPeeringAuthorizationOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommand,
  serializeAws_json1_1DeleteVpcPeeringAuthorizationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DeleteVpcPeeringAuthorizationCommandInput = DeleteVpcPeeringAuthorizationInput;
export type DeleteVpcPeeringAuthorizationCommandOutput = DeleteVpcPeeringAuthorizationOutput & __MetadataBearer;

/**
 * <p>Cancels a pending VPC peering authorization for the specified VPC. If you need to
 *             delete an existing VPC peering connection, call <a>DeleteVpcPeeringConnection</a>. </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateVpcPeeringAuthorization</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeVpcPeeringAuthorizations</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteVpcPeeringAuthorization</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateVpcPeeringConnection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeVpcPeeringConnections</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteVpcPeeringConnection</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class DeleteVpcPeeringAuthorizationCommand extends $Command<
  DeleteVpcPeeringAuthorizationCommandInput,
  DeleteVpcPeeringAuthorizationCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DeleteVpcPeeringAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVpcPeeringAuthorizationInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteVpcPeeringAuthorizationOutput.filterSensitiveLog,
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
