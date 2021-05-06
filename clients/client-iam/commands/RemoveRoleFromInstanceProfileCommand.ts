import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { RemoveRoleFromInstanceProfileRequest } from "../models/models_0";
import {
  deserializeAws_queryRemoveRoleFromInstanceProfileCommand,
  serializeAws_queryRemoveRoleFromInstanceProfileCommand,
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

export interface RemoveRoleFromInstanceProfileCommandInput extends RemoveRoleFromInstanceProfileRequest {}
export interface RemoveRoleFromInstanceProfileCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified IAM role from the specified EC2 instance profile.</p>
 *         <important>
 *             <p>Make sure that you do not have any Amazon EC2 instances running with the role you
 *                 are about to remove from the instance profile. Removing a role from an instance
 *                 profile that is associated with a running instance might break any applications
 *                 running on the instance.</p>
 *         </important>
 *         <p> For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more
 *             information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance
 *             profiles</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, RemoveRoleFromInstanceProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, RemoveRoleFromInstanceProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new RemoveRoleFromInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveRoleFromInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link RemoveRoleFromInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RemoveRoleFromInstanceProfileCommand extends $Command<
  RemoveRoleFromInstanceProfileCommandInput,
  RemoveRoleFromInstanceProfileCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveRoleFromInstanceProfileCommandInput) {
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
  ): Handler<RemoveRoleFromInstanceProfileCommandInput, RemoveRoleFromInstanceProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "RemoveRoleFromInstanceProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveRoleFromInstanceProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveRoleFromInstanceProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRemoveRoleFromInstanceProfileCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveRoleFromInstanceProfileCommandOutput> {
    return deserializeAws_queryRemoveRoleFromInstanceProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
