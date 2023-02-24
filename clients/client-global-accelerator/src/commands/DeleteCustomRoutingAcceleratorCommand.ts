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
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import {
  DeleteCustomRoutingAcceleratorRequest,
  DeleteCustomRoutingAcceleratorRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteCustomRoutingAcceleratorCommand,
  serializeAws_json1_1DeleteCustomRoutingAcceleratorCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteCustomRoutingAcceleratorCommandInput extends DeleteCustomRoutingAcceleratorRequest {}
export interface DeleteCustomRoutingAcceleratorCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete a custom routing accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources
 * 		(listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p>
 *          <important>
 *             <p>When you create a custom routing accelerator, by default, Global Accelerator provides you with a set of two static IP addresses.
 * 	</p>
 * 		          <p>The IP
 * 			addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and
 * 			it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the
 * 			static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them.
 * 			As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You
 * 			can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information,
 * 			see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in
 * 		    the <i>Global Accelerator Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DeleteCustomRoutingAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DeleteCustomRoutingAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DeleteCustomRoutingAcceleratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomRoutingAcceleratorCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomRoutingAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 */
export class DeleteCustomRoutingAcceleratorCommand extends $Command<
  DeleteCustomRoutingAcceleratorCommandInput,
  DeleteCustomRoutingAcceleratorCommandOutput,
  GlobalAcceleratorClientResolvedConfig
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

  constructor(readonly input: DeleteCustomRoutingAcceleratorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCustomRoutingAcceleratorCommandInput, DeleteCustomRoutingAcceleratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCustomRoutingAcceleratorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "DeleteCustomRoutingAcceleratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCustomRoutingAcceleratorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteCustomRoutingAcceleratorCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteCustomRoutingAcceleratorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteCustomRoutingAcceleratorCommandOutput> {
    return deserializeAws_json1_1DeleteCustomRoutingAcceleratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
