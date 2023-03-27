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

import { DeregisterMailDomainRequest, DeregisterMailDomainResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterMailDomainCommand,
  serializeAws_json1_1DeregisterMailDomainCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 *
 * The input for {@link DeregisterMailDomainCommand}.
 */
export interface DeregisterMailDomainCommandInput extends DeregisterMailDomainRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterMailDomainCommand}.
 */
export interface DeregisterMailDomainCommandOutput extends DeregisterMailDomainResponse, __MetadataBearer {}

/**
 * @public
 * <p>Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first
 *          remove any email address used by WorkMail entities before you remove the domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeregisterMailDomainCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeregisterMailDomainCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // DeregisterMailDomainRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DeregisterMailDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeregisterMailDomainCommandInput - {@link DeregisterMailDomainCommandInput}
 * @returns {@link DeregisterMailDomainCommandOutput}
 * @see {@link DeregisterMailDomainCommandInput} for command's `input` shape.
 * @see {@link DeregisterMailDomainCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidCustomSesConfigurationException} (client fault)
 *  <p>You SES configuration has customizations that WorkMail cannot save. The error message lists the invalid setting. For examples of invalid settings, refer to
 *          <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRule.html">CreateReceiptRule</a>.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link MailDomainInUseException} (client fault)
 *  <p>The domain you're trying to change is in use by another user or organization in your account. See the error message for details.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 *
 */
export class DeregisterMailDomainCommand extends $Command<
  DeregisterMailDomainCommandInput,
  DeregisterMailDomainCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DeregisterMailDomainCommandInput) {
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
  ): Handler<DeregisterMailDomainCommandInput, DeregisterMailDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeregisterMailDomainCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "DeregisterMailDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeregisterMailDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterMailDomainCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeregisterMailDomainCommandOutput> {
    return deserializeAws_json1_1DeregisterMailDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
