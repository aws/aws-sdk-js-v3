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
} from "@smithy/types";

import { ListOriginationNumbersRequest, ListOriginationNumbersResult } from "../models/models_0";
import { de_ListOriginationNumbersCommand, se_ListOriginationNumbersCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListOriginationNumbersCommand}.
 */
export interface ListOriginationNumbersCommandInput extends ListOriginationNumbersRequest {}
/**
 * @public
 *
 * The output of {@link ListOriginationNumbersCommand}.
 */
export interface ListOriginationNumbersCommandOutput extends ListOriginationNumbersResult, __MetadataBearer {}

/**
 * @public
 * <p>Lists the calling Amazon Web Services account's dedicated origination numbers and their metadata.
 *             For more information about origination numbers, see <a href="https://docs.aws.amazon.com/sns/latest/dg/channels-sms-originating-identities-origination-numbers.html">Origination numbers</a> in the <i>Amazon SNS Developer
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListOriginationNumbersCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListOriginationNumbersCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const input = { // ListOriginationNumbersRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListOriginationNumbersCommand(input);
 * const response = await client.send(command);
 * // { // ListOriginationNumbersResult
 * //   NextToken: "STRING_VALUE",
 * //   PhoneNumbers: [ // PhoneNumberInformationList
 * //     { // PhoneNumberInformation
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       PhoneNumber: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       Iso2CountryCode: "STRING_VALUE",
 * //       RouteType: "Transactional" || "Promotional" || "Premium",
 * //       NumberCapabilities: [ // NumberCapabilityList
 * //         "SMS" || "MMS" || "VOICE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListOriginationNumbersCommandInput - {@link ListOriginationNumbersCommandInput}
 * @returns {@link ListOriginationNumbersCommandOutput}
 * @see {@link ListOriginationNumbersCommandInput} for command's `input` shape.
 * @see {@link ListOriginationNumbersCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that a parameter in the request is invalid.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 */
export class ListOriginationNumbersCommand extends $Command<
  ListOriginationNumbersCommandInput,
  ListOriginationNumbersCommandOutput,
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
  constructor(readonly input: ListOriginationNumbersCommandInput) {
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
  ): Handler<ListOriginationNumbersCommandInput, ListOriginationNumbersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListOriginationNumbersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "ListOriginationNumbersCommand";
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
  private serialize(input: ListOriginationNumbersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListOriginationNumbersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOriginationNumbersCommandOutput> {
    return de_ListOriginationNumbersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
