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
import {
  deserializeAws_json1_1CreateOrganizationCommand,
  serializeAws_json1_1CreateOrganizationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

export interface CreateOrganizationCommandInput extends CreateOrganizationRequest {}
export interface CreateOrganizationCommandOutput extends CreateOrganizationResponse, __MetadataBearer {}

/**
 * <p>Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html">Adding an organization</a> in the <i>WorkMail Administrator Guide</i>.</p>
 *          <p>You can associate multiple email domains with an organization, then choose your
 *          default email domain from the WorkMail console. You can also associate a domain that is managed
 *          in an Amazon Route 53 public hosted zone. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a
 *             domain</a> and <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html">Choosing the default domain</a>
 *          in the <i>WorkMail Administrator Guide</i>.</p>
 *          <p>Optionally, you can use a customer managed key from AWS Key Management Service (AWS
 *          KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, WorkMail
 *          creates a default, AWS managed key for you.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CreateOrganizationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CreateOrganizationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new CreateOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOrganizationCommandInput} for command's `input` shape.
 * @see {@link CreateOrganizationCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 */
export class CreateOrganizationCommand extends $Command<
  CreateOrganizationCommandInput,
  CreateOrganizationCommandOutput,
  WorkMailClientResolvedConfig
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
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateOrganizationCommandInput, CreateOrganizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateOrganizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
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
