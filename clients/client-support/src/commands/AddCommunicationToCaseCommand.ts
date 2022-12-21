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
  AddCommunicationToCaseRequest,
  AddCommunicationToCaseRequestFilterSensitiveLog,
  AddCommunicationToCaseResponse,
  AddCommunicationToCaseResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AddCommunicationToCaseCommand,
  serializeAws_json1_1AddCommunicationToCaseCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

export interface AddCommunicationToCaseCommandInput extends AddCommunicationToCaseRequest {}
export interface AddCommunicationToCaseCommandOutput extends AddCommunicationToCaseResponse, __MetadataBearer {}

/**
 * <p>Adds additional customer communication to an Amazon Web Services Support case. Use the <code>caseId</code>
 *             parameter to identify the case to which to add communication. You can list a set of
 *             email addresses to copy on the communication by using the <code>ccEmailAddresses</code>
 *             parameter. The <code>communicationBody</code> value contains the text of the
 *             communication.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 *                         API. </p>
 *                </li>
 *                <li>
 *                   <p>If you call the Amazon Web Services Support API from an account that doesn't have a
 *                         Business, Enterprise On-Ramp, or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, AddCommunicationToCaseCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, AddCommunicationToCaseCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new AddCommunicationToCaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddCommunicationToCaseCommandInput} for command's `input` shape.
 * @see {@link AddCommunicationToCaseCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 */
export class AddCommunicationToCaseCommand extends $Command<
  AddCommunicationToCaseCommandInput,
  AddCommunicationToCaseCommandOutput,
  SupportClientResolvedConfig
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

  constructor(readonly input: AddCommunicationToCaseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SupportClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddCommunicationToCaseCommandInput, AddCommunicationToCaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddCommunicationToCaseCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "AddCommunicationToCaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddCommunicationToCaseRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AddCommunicationToCaseResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddCommunicationToCaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddCommunicationToCaseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddCommunicationToCaseCommandOutput> {
    return deserializeAws_json1_1AddCommunicationToCaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
