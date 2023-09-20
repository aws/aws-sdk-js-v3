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

import { AddAttachmentsToSetRequest, AddAttachmentsToSetResponse } from "../models/models_0";
import { de_AddAttachmentsToSetCommand, se_AddAttachmentsToSetCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddAttachmentsToSetCommand}.
 */
export interface AddAttachmentsToSetCommandInput extends AddAttachmentsToSetRequest {}
/**
 * @public
 *
 * The output of {@link AddAttachmentsToSetCommand}.
 */
export interface AddAttachmentsToSetCommandOutput extends AddAttachmentsToSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds one or more attachments to an attachment set. </p>
 *          <p>An attachment set is a temporary container for attachments that you add to a case or
 *             case communication. The set is available for 1 hour after it's created. The
 *                 <code>expiryTime</code> returned in the response is when the set expires. </p>
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
 * import { SupportClient, AddAttachmentsToSetCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, AddAttachmentsToSetCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const input = { // AddAttachmentsToSetRequest
 *   attachmentSetId: "STRING_VALUE",
 *   attachments: [ // Attachments // required
 *     { // Attachment
 *       fileName: "STRING_VALUE",
 *       data: "BLOB_VALUE",
 *     },
 *   ],
 * };
 * const command = new AddAttachmentsToSetCommand(input);
 * const response = await client.send(command);
 * // { // AddAttachmentsToSetResponse
 * //   attachmentSetId: "STRING_VALUE",
 * //   expiryTime: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddAttachmentsToSetCommandInput - {@link AddAttachmentsToSetCommandInput}
 * @returns {@link AddAttachmentsToSetCommandOutput}
 * @see {@link AddAttachmentsToSetCommandInput} for command's `input` shape.
 * @see {@link AddAttachmentsToSetCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 * @throws {@link AttachmentLimitExceeded} (client fault)
 *  <p>The limit for the number of attachment sets created in a short period of time has been
 *             exceeded.</p>
 *
 * @throws {@link AttachmentSetExpired} (client fault)
 *  <p>The expiration time of the attachment set has passed. The set expires 1 hour after it
 *             is created.</p>
 *
 * @throws {@link AttachmentSetIdNotFound} (client fault)
 *  <p>An attachment set with the specified ID could not be found.</p>
 *
 * @throws {@link AttachmentSetSizeLimitExceeded} (client fault)
 *  <p>A limit for the size of an attachment set has been exceeded. The limits are three
 *             attachments and 5 MB per attachment.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link SupportServiceException}
 * <p>Base exception class for all service exceptions from Support service.</p>
 *
 */
export class AddAttachmentsToSetCommand extends $Command<
  AddAttachmentsToSetCommandInput,
  AddAttachmentsToSetCommandOutput,
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
  constructor(readonly input: AddAttachmentsToSetCommandInput) {
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
  ): Handler<AddAttachmentsToSetCommandInput, AddAttachmentsToSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddAttachmentsToSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "AddAttachmentsToSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSSupport_20130415",
        operation: "AddAttachmentsToSet",
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
  private serialize(input: AddAttachmentsToSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddAttachmentsToSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddAttachmentsToSetCommandOutput> {
    return de_AddAttachmentsToSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
