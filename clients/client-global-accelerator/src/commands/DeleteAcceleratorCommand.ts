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
import { DeleteAcceleratorRequest, DeleteAcceleratorRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteAcceleratorCommand,
  serializeAws_json1_1DeleteAcceleratorCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteAcceleratorCommandInput extends DeleteAcceleratorRequest {}
export interface DeleteAcceleratorCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete an accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources
 * 			(listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p>
 * 	        <important>
 *             <p>When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses.
 * 	        Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges.
 * 		</p>
 * 		          <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and
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
 * import { GlobalAcceleratorClient, DeleteAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DeleteAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DeleteAcceleratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAcceleratorCommandInput} for command's `input` shape.
 * @see {@link DeleteAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 */
export class DeleteAcceleratorCommand extends $Command<
  DeleteAcceleratorCommandInput,
  DeleteAcceleratorCommandOutput,
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

  constructor(readonly input: DeleteAcceleratorCommandInput) {
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
  ): Handler<DeleteAcceleratorCommandInput, DeleteAcceleratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAcceleratorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "DeleteAcceleratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAcceleratorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAcceleratorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteAcceleratorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAcceleratorCommandOutput> {
    return deserializeAws_json1_1DeleteAcceleratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
