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
  CreateOrganizationRequest,
  CreateOrganizationRequestFilterSensitiveLog,
  CreateOrganizationResponse,
  CreateOrganizationResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1CreateOrganizationCommand,
  serializeAws_json1_1CreateOrganizationCommand,
} from "../protocols/Aws_json1_1";

export interface CreateOrganizationCommandInput extends CreateOrganizationRequest {}
export interface CreateOrganizationCommandOutput extends CreateOrganizationResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Web Services organization. The account whose user is calling the
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, CreateOrganizationCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, CreateOrganizationCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new CreateOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOrganizationCommandInput} for command's `input` shape.
 * @see {@link CreateOrganizationCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 */
export class CreateOrganizationCommand extends $Command<
  CreateOrganizationCommandInput,
  CreateOrganizationCommandOutput,
  OrganizationsClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateOrganizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "CreateOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateOrganizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateOrganizationResponseFilterSensitiveLog,
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
