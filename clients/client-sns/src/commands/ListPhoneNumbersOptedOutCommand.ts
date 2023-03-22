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

import { ListPhoneNumbersOptedOutInput, ListPhoneNumbersOptedOutResponse } from "../models/models_0";
import {
  deserializeAws_queryListPhoneNumbersOptedOutCommand,
  serializeAws_queryListPhoneNumbersOptedOutCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 *
 * The input for {@link ListPhoneNumbersOptedOutCommand}.
 */
export interface ListPhoneNumbersOptedOutCommandInput extends ListPhoneNumbersOptedOutInput {}
/**
 * @public
 *
 * The output of {@link ListPhoneNumbersOptedOutCommand}.
 */
export interface ListPhoneNumbersOptedOutCommandOutput extends ListPhoneNumbersOptedOutResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of phone numbers that are opted out, meaning you cannot send SMS
 *             messages to them.</p>
 *          <p>The results for <code>ListPhoneNumbersOptedOut</code> are paginated, and each page
 *             returns up to 100 phone numbers. If additional phone numbers are available after the
 *             first page of results, then a <code>NextToken</code> string will be returned. To receive
 *             the next page, you call <code>ListPhoneNumbersOptedOut</code> again using the
 *                 <code>NextToken</code> string received from the previous call. When there are no
 *             more records to return, <code>NextToken</code> will be null.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListPhoneNumbersOptedOutCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListPhoneNumbersOptedOutCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new ListPhoneNumbersOptedOutCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListPhoneNumbersOptedOutCommandInput - {@link ListPhoneNumbersOptedOutCommandInput}
 * @returns {@link ListPhoneNumbersOptedOutCommandOutput}
 * @see {@link ListPhoneNumbersOptedOutCommandInput} for command's `input` shape.
 * @see {@link ListPhoneNumbersOptedOutCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>Indicates that the rate at which requests have been submitted for this action exceeds the limit for your Amazon Web Services account.</p>
 *
 *
 */
export class ListPhoneNumbersOptedOutCommand extends $Command<
  ListPhoneNumbersOptedOutCommandInput,
  ListPhoneNumbersOptedOutCommandOutput,
  SNSClientResolvedConfig
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
  constructor(readonly input: ListPhoneNumbersOptedOutCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPhoneNumbersOptedOutCommandInput, ListPhoneNumbersOptedOutCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPhoneNumbersOptedOutCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "ListPhoneNumbersOptedOutCommand";
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
  private serialize(input: ListPhoneNumbersOptedOutCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListPhoneNumbersOptedOutCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPhoneNumbersOptedOutCommandOutput> {
    return deserializeAws_queryListPhoneNumbersOptedOutCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
