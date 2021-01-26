import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { AddRoleToInstanceProfileRequest } from "../models/models_0";
import {
  deserializeAws_queryAddRoleToInstanceProfileCommand,
  serializeAws_queryAddRoleToInstanceProfileCommand,
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

export type AddRoleToInstanceProfileCommandInput = AddRoleToInstanceProfileRequest;
export type AddRoleToInstanceProfileCommandOutput = __MetadataBearer;

/**
 * <p>Adds the specified IAM role to the specified instance profile. An instance profile can
 *          contain only one role. (The number and size of IAM resources in an AWS account are limited. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS Quotas</a> in the <i>IAM User Guide</i>.) You can remove the existing role
 *          and then add a different role to an instance profile. You must then wait for the change to
 *          appear across all of AWS because of <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>.
 *          To force the change, you must <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html">disassociate
 *             the instance profile</a> and then <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIamInstanceProfile.html">associate the
 *             instance profile</a>, or you can stop your instance and then restart it.</p>
 *          <note>
 *             <p>The caller of this API must be granted the <code>PassRole</code> permission on the
 *             IAM role by a permissions policy.</p>
 *          </note>
 *          <p>For more information about roles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with Roles</a>. For more
 *          information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About Instance Profiles</a>.</p>
 */
export class AddRoleToInstanceProfileCommand extends $Command<
  AddRoleToInstanceProfileCommandInput,
  AddRoleToInstanceProfileCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddRoleToInstanceProfileCommandInput) {
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
  ): Handler<AddRoleToInstanceProfileCommandInput, AddRoleToInstanceProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "AddRoleToInstanceProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddRoleToInstanceProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddRoleToInstanceProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAddRoleToInstanceProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddRoleToInstanceProfileCommandOutput> {
    return deserializeAws_queryAddRoleToInstanceProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
