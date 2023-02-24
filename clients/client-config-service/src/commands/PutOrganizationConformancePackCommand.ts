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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  PutOrganizationConformancePackRequest,
  PutOrganizationConformancePackRequestFilterSensitiveLog,
  PutOrganizationConformancePackResponse,
  PutOrganizationConformancePackResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1PutOrganizationConformancePackCommand,
  serializeAws_json1_1PutOrganizationConformancePackCommand,
} from "../protocols/Aws_json1_1";

export interface PutOrganizationConformancePackCommandInput extends PutOrganizationConformancePackRequest {}
export interface PutOrganizationConformancePackCommandOutput
  extends PutOrganizationConformancePackResponse,
    __MetadataBearer {}

/**
 * <p>Deploys conformance packs across member accounts in an Amazon Web Services Organization. For information on how many organization conformance packs and how many Config rules you can have per account,
 * 			see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
 *                <b>Service Limits</b>
 *             </a> in the Config Developer Guide.</p>
 * 		       <p>Only a management account and a delegated administrator can call this API.
 * 			When calling this API with a delegated administrator, you must ensure Organizations
 * 			<code>ListDelegatedAdministrator</code> permissions are added. An organization can have up to 3 delegated administrators.</p>
 * 		       <p>This API enables organization service access for <code>config-multiaccountsetup.amazonaws.com</code>
 * 			through the <code>EnableAWSServiceAccess</code> action and creates a
 * 			service-linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the management or delegated administrator account of your organization.
 * 			The service-linked role is created only when the role does not exist in the caller account.
 * 			To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization
 * 			<code>register-delegate-admin</code> for <code>config-multiaccountsetup.amazonaws.com</code>.</p>
 *
 *
 *
 * 		       <note>
 * 			         <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p>
 * 			         <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both.
 * 			If you provide both Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p>
 * 			         <p>Config sets the state of a conformance pack to CREATE_IN_PROGRESS and UPDATE_IN_PROGRESS until the conformance pack is created or updated.
 * 				You cannot update a conformance pack while it is in this state.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutOrganizationConformancePackCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutOrganizationConformancePackCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutOrganizationConformancePackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutOrganizationConformancePackCommandInput} for command's `input` shape.
 * @see {@link PutOrganizationConformancePackCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class PutOrganizationConformancePackCommand extends $Command<
  PutOrganizationConformancePackCommandInput,
  PutOrganizationConformancePackCommandOutput,
  ConfigServiceClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutOrganizationConformancePackCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutOrganizationConformancePackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutOrganizationConformancePackRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutOrganizationConformancePackResponseFilterSensitiveLog,
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
