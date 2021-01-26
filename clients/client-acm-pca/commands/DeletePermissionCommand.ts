import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { DeletePermissionRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeletePermissionCommand,
  serializeAws_json1_1DeletePermissionCommand,
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

export type DeletePermissionCommandInput = DeletePermissionRequest;
export type DeletePermissionCommandOutput = __MetadataBearer;

/**
 * <p>Revokes permissions on a private CA granted to the AWS Certificate Manager (ACM) service principal
 * 			(acm.amazonaws.com). </p>
 * 		       <p>These permissions allow ACM to issue and renew ACM certificates that reside in the
 * 			same AWS account as the CA. If you revoke these permissions, ACM will no longer
 * 			renew the affected certificates automatically.</p>
 * 		       <p>Permissions can be granted with the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action and
 * 			listed with the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action. </p>
 * 		       <p class="title">
 *             <b>About Permissions</b>
 *          </p>
 *          <ul>
 *             <li>
 * 			            <p>If the private CA and the certificates it issues reside in the same
 * 			account, you can use <code>CreatePermission</code> to grant permissions for ACM to
 * 			carry out automatic certificate renewals.</p>
 * 		          </li>
 *             <li>
 * 			            <p>For automatic certificate renewal to succeed, the ACM service principal
 * 			needs permissions to create, retrieve, and list certificates.</p>
 * 		          </li>
 *             <li>
 * 			            <p>If the private CA and the ACM certificates reside in different accounts,
 * 			then permissions cannot be used to enable automatic renewals. Instead,
 * 			the ACM certificate owner must set up a resource-based policy to enable
 * 			cross-account issuance and renewals. For more information, see
 * 			<a href="acm-pca/latest/userguide/pca-rbp.html">Using a Resource
 * 			Based Policy with ACM Private CA</a>.</p>
 * 		          </li>
 *          </ul>
 */
export class DeletePermissionCommand extends $Command<
  DeletePermissionCommandInput,
  DeletePermissionCommandOutput,
  ACMPCAClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMPCAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePermissionCommandInput, DeletePermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ACMPCAClient";
    const commandName = "DeletePermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePermissionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeletePermissionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePermissionCommandOutput> {
    return deserializeAws_json1_1DeletePermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
