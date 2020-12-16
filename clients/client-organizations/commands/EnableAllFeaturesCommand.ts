import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { EnableAllFeaturesRequest, EnableAllFeaturesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1EnableAllFeaturesCommand,
  serializeAws_json1_1EnableAllFeaturesCommand,
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

export type EnableAllFeaturesCommandInput = EnableAllFeaturesRequest;
export type EnableAllFeaturesCommandOutput = EnableAllFeaturesResponse & __MetadataBearer;

/**
 * <p>Enables all features in an organization. This enables the use of organization policies
 *             that can restrict the services and actions that can be called in each account. Until you
 *             enable all features, you have access only to consolidated billing, and you can't use any
 *             of the advanced account administration features that AWS Organizations supports. For more
 *             information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling All Features in Your Organization</a> in the
 *                 <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <important>
 *             <p>This operation is required only for organizations that were created explicitly
 *                 with only the consolidated billing features enabled. Calling this operation sends a
 *                 handshake to every invited account in the organization. The feature set change can
 *                 be finalized and the additional features enabled only after all administrators in
 *                 the invited accounts approve the change by accepting the handshake.</p>
 *         </important>
 *         <p>After you enable all features, you can separately enable or disable individual policy
 *             types in a root using <a>EnablePolicyType</a> and <a>DisablePolicyType</a>. To see the status of policy types in a root, use
 *                 <a>ListRoots</a>.</p>
 *         <p>After all invited member accounts accept the handshake, you finalize the feature set
 *             change by accepting the handshake that contains <code>"Action":
 *                 "ENABLE_ALL_FEATURES"</code>. This completes the change.</p>
 *         <p>After you enable all features in your organization, the management account in the
 *             organization can apply policies on all member accounts. These policies can restrict what
 *             users and even administrators in those accounts can do. The management account can apply
 *             policies that prevent accounts from leaving the organization. Ensure that your account
 *             administrators are aware of this.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 */
export class EnableAllFeaturesCommand extends $Command<
  EnableAllFeaturesCommandInput,
  EnableAllFeaturesCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableAllFeaturesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableAllFeaturesCommandInput, EnableAllFeaturesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "EnableAllFeaturesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableAllFeaturesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableAllFeaturesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableAllFeaturesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableAllFeaturesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableAllFeaturesCommandOutput> {
    return deserializeAws_json1_1EnableAllFeaturesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
