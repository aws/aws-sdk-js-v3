import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutOrganizationConformancePackRequest, PutOrganizationConformancePackResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutOrganizationConformancePackCommand,
  serializeAws_json1_1PutOrganizationConformancePackCommand,
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

export type PutOrganizationConformancePackCommandInput = PutOrganizationConformancePackRequest;
export type PutOrganizationConformancePackCommandOutput = PutOrganizationConformancePackResponse & __MetadataBearer;

/**
 * <p>Deploys conformance packs across member accounts in an AWS Organization.</p>
 * 		       <p>Only a master account and a delegated administrator can call this API.
 * 			When calling this API with a delegated administrator, you must ensure AWS Organizations
 * 			<code>ListDelegatedAdministrator</code> permissions are added.</p>
 * 		       <p>This API enables organization service access for <code>config-multiaccountsetup.amazonaws.com</code>
 * 			through the <code>EnableAWSServiceAccess</code> action and creates a
 * 			service linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the master or delegated administrator account of your organization.
 * 			The service linked role is created only when the role does not exist in the caller account.
 * 			To use this API with delegated administrator, register a delegated administrator by calling AWS Organization
 * 			<code>register-delegate-admin</code> for <code>config-multiaccountsetup.amazonaws.com</code>.</p>
 *
 *
 *
 * 		       <note>
 * 			         <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p>
 * 			         <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both.
 * 			If you provide both AWS Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p>
 * 			         <p>AWS Config sets the state of a conformance pack to CREATE_IN_PROGRESS and UPDATE_IN_PROGRESS until the conformance pack is created or updated.
 * 				You cannot update a conformance pack while it is in this state.</p>
 * 			         <p>You can create 6 conformance packs with 25 AWS Config rules in each pack and 3 delegated administrator per organization. </p>
 *          </note>
 */
export class PutOrganizationConformancePackCommand extends $Command<
  PutOrganizationConformancePackCommandInput,
  PutOrganizationConformancePackCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutOrganizationConformancePackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutOrganizationConformancePackCommandInput, PutOrganizationConformancePackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutOrganizationConformancePackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutOrganizationConformancePackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutOrganizationConformancePackResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutOrganizationConformancePackCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1PutOrganizationConformancePackCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutOrganizationConformancePackCommandOutput> {
    return deserializeAws_json1_1PutOrganizationConformancePackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
