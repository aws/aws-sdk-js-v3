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

import {
  DeleteGatewayInput,
  DeleteGatewayInputFilterSensitiveLog,
  DeleteGatewayOutput,
  DeleteGatewayOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteGatewayCommand,
  serializeAws_json1_1DeleteGatewayCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface DeleteGatewayCommandInput extends DeleteGatewayInput {}
export interface DeleteGatewayCommandOutput extends DeleteGatewayOutput, __MetadataBearer {}

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
 *                <a href="http://aws.amazon.com/storagegateway">Storage Gateway detail
 *             page</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteGatewayCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DeleteGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteGatewayCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class DeleteGatewayCommand extends $Command<
  DeleteGatewayCommandInput,
  DeleteGatewayCommandOutput,
  StorageGatewayClientResolvedConfig
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
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteGatewayCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DeleteGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteGatewayInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteGatewayOutputFilterSensitiveLog,
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
