import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListVirtualMFADevicesRequest, ListVirtualMFADevicesResponse } from "../models/models_0";
import {
  deserializeAws_queryListVirtualMFADevicesCommand,
  serializeAws_queryListVirtualMFADevicesCommand,
} from "../protocols/Aws_query";
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

export interface ListVirtualMFADevicesCommandInput extends ListVirtualMFADevicesRequest {}
export interface ListVirtualMFADevicesCommandOutput extends ListVirtualMFADevicesResponse, __MetadataBearer {}

/**
 * <p>Lists the virtual MFA devices defined in the AWS account by assignment status. If
 *             you do not specify an assignment status, the operation returns a list of all virtual MFA
 *             devices. Assignment status can be <code>Assigned</code>, <code>Unassigned</code>, or
 *                 <code>Any</code>.</p>
 *         <note>
 *             <p>IAM resource-listing operations return a subset of the available
 *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a virtual MFA device, see
 *                     <a>ListVirtualMFADevices</a>.</p>
 *         </note>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListVirtualMFADevicesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListVirtualMFADevicesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListVirtualMFADevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVirtualMFADevicesCommandInput} for command's `input` shape.
 * @see {@link ListVirtualMFADevicesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListVirtualMFADevicesCommand extends $Command<
  ListVirtualMFADevicesCommandInput,
  ListVirtualMFADevicesCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListVirtualMFADevicesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVirtualMFADevicesCommandInput, ListVirtualMFADevicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListVirtualMFADevicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVirtualMFADevicesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListVirtualMFADevicesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVirtualMFADevicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListVirtualMFADevicesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVirtualMFADevicesCommandOutput> {
    return deserializeAws_queryListVirtualMFADevicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
