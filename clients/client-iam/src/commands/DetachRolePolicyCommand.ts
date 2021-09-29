import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DetachRolePolicyRequest } from "../models/models_0";
import {
  deserializeAws_queryDetachRolePolicyCommand,
  serializeAws_queryDetachRolePolicyCommand,
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

export interface DetachRolePolicyCommandInput extends DetachRolePolicyRequest {}
export interface DetachRolePolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified managed policy from the specified role.</p>
 *         <p>A role can also have inline policies embedded with it. To delete an inline policy, use
 *                 <a>DeleteRolePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DetachRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DetachRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DetachRolePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachRolePolicyCommandInput} for command's `input` shape.
 * @see {@link DetachRolePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DetachRolePolicyCommand extends $Command<
  DetachRolePolicyCommandInput,
  DetachRolePolicyCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetachRolePolicyCommandInput) {
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
  ): Handler<DetachRolePolicyCommandInput, DetachRolePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DetachRolePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetachRolePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetachRolePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDetachRolePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetachRolePolicyCommandOutput> {
    return deserializeAws_queryDetachRolePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
