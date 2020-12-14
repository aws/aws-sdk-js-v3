import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteGatewayInput, DeleteGatewayOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteGatewayCommand,
  serializeAws_json1_1DeleteGatewayCommand,
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

export type DeleteGatewayCommandInput = DeleteGatewayInput;
export type DeleteGatewayCommandOutput = DeleteGatewayOutput & __MetadataBearer;

/**
 * <p>Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name
 *          (ARN) of the gateway in your request. The operation deletes the gateway; however, it does
 *          not delete the gateway virtual machine (VM) from your host computer.</p>
 *
 *          <p>After you delete a gateway, you cannot reactivate it. Completed snapshots of the gateway
 *          volumes are not deleted upon deleting the gateway, however, pending snapshots will not
 *          complete. After you delete a gateway, your next step is to remove it from your
 *          environment.</p>
 *
 *          <important>
 *             <p>You no longer pay software charges after the gateway is deleted; however, your
 *             existing Amazon EBS snapshots persist and you will continue to be billed for these
 *             snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your
 *             Amazon EC2 subscription.  If you prefer not to cancel your Amazon EC2 subscription, you
 *             can delete your snapshots using the Amazon EC2 console. For more information, see the
 *                <a href="http://aws.amazon.com/storagegateway">AWS Storage Gateway detail
 *             page</a>.</p>
 *          </important>
 */
export class DeleteGatewayCommand extends $Command<
  DeleteGatewayCommandInput,
  DeleteGatewayCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteGatewayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteGatewayCommandInput, DeleteGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DeleteGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteGatewayInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteGatewayOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteGatewayCommandOutput> {
    return deserializeAws_json1_1DeleteGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
