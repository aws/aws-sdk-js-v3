// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AddCommunicationToCaseRequest, AddCommunicationToCaseResponse } from "../models/models_0";
import { de_AddCommunicationToCaseCommand, se_AddCommunicationToCaseCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddCommunicationToCaseCommand}.
 */
export interface AddCommunicationToCaseCommandInput extends AddCommunicationToCaseRequest {}
/**
 * @public
 *
 * The output of {@link AddCommunicationToCaseCommand}.
 */
export interface AddCommunicationToCaseCommandOutput extends AddCommunicationToCaseResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // AddCommunicationToCaseRequest
 *   caseId: "STRING_VALUE",
 *   communicationBody: "STRING_VALUE", // required
 *   ccEmailAddresses: [ // CcEmailAddressList
 *     "STRING_VALUE",
 *   ],
 *   attachmentSetId: "STRING_VALUE",
 * };
 * const command = new AddCommunicationToCaseCommand(input);
 * const response = await client.send(command);
 * // { // AddCommunicationToCaseResponse
 * //   result: true || false,
 * // };
 *
 * ```
 *
 * @param AddCommunicationToCaseCommandInput - {@link AddCommunicationToCaseCommandInput}
 * @returns {@link AddCommunicationToCaseCommandOutput}
 * @see {@link AddCommunicationToCaseCommandInput} for command's `input` shape.
 * @see {@link AddCommunicationToCaseCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 * @throws {@link AttachmentSetExpired} (client fault)
 *  <p>The expiration time of the attachment set has passed. The set expires 1 hour after it
 *             is created.</p>
 *
 * @throws {@link AttachmentSetIdNotFound} (client fault)
 *  <p>An attachment set with the specified ID could not be found.</p>
 *
 * @throws {@link CaseIdNotFound} (client fault)
 *  <p>The requested <code>caseId</code> couldn't be located.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link SupportServiceException}
 * <p>Base exception class for all service exceptions from Support service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSSupport_20130415",
        operation: "AddCommunicationToCase",
      },
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
  private serialize(input: AddCommunicationToCaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddCommunicationToCaseCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddCommunicationToCaseCommandOutput> {
    return de_AddCommunicationToCaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
