import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { CreateOrganizationRequest, CreateOrganizationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateOrganizationCommand,
  serializeAws_json1_1CreateOrganizationCommand,
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

export type CreateOrganizationCommandInput = CreateOrganizationRequest;
export type CreateOrganizationCommandOutput = CreateOrganizationResponse & __MetadataBearer;

/**
 * <p>Creates an AWS organization. The account whose user is calling the
 *                 <code>CreateOrganization</code> operation automatically becomes the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">management account</a> of the new organization.</p>
 *         <p>This operation must be called using credentials from the account that is to become the
 *             new organization's management account. The principal must also have the relevant IAM
 *             permissions.</p>
 *         <p>By default (or if you set the <code>FeatureSet</code> parameter to <code>ALL</code>),
 *             the new organization is created with all features enabled and service control policies
 *             automatically enabled in the root. If you instead choose to create the organization
 *             supporting only the consolidated billing features by setting the <code>FeatureSet</code>
 *             parameter to <code>CONSOLIDATED_BILLING"</code>, no policy types are enabled by default,
 *             and you can't use organization policies</p>
 */
export class CreateOrganizationCommand extends $Command<
  CreateOrganizationCommandInput,
  CreateOrganizationCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateOrganizationCommandInput) {
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
  ): Handler<CreateOrganizationCommandInput, CreateOrganizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "CreateOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateOrganizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateOrganizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateOrganizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateOrganizationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateOrganizationCommandOutput> {
    return deserializeAws_json1_1CreateOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
