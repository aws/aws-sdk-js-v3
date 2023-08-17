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

import { DescribeCasesRequest, DescribeCasesResponse } from "../models/models_0";
import { de_DescribeCasesCommand, se_DescribeCasesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCasesCommand}.
 */
export interface DescribeCasesCommandInput extends DescribeCasesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCasesCommand}.
 */
export interface DescribeCasesCommandOutput extends DescribeCasesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of cases that you specify by passing one or more case IDs. You can use
 *             the <code>afterTime</code> and <code>beforeTime</code> parameters to filter the cases by
 *             date. You can set values for the <code>includeResolvedCases</code> and
 *                 <code>includeCommunications</code> parameters to specify how much information to
 *             return.</p>
 *          <p>The response returns the following in JSON format:</p>
 *          <ul>
 *             <li>
 *                <p>One or more <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a> data types.</p>
 *             </li>
 *             <li>
 *                <p>One or more <code>nextToken</code> values, which specify where to paginate the
 *                     returned records represented by the <code>CaseDetails</code> objects.</p>
 *             </li>
 *          </ul>
 *          <p>Case data is available for 12 months after creation. If a case was created more than
 *             12 months ago, a request might return an error.</p>
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
 * import { SupportClient, DescribeCasesCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeCasesCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const input = { // DescribeCasesRequest
 *   caseIdList: [ // CaseIdList
 *     "STRING_VALUE",
 *   ],
 *   displayId: "STRING_VALUE",
 *   afterTime: "STRING_VALUE",
 *   beforeTime: "STRING_VALUE",
 *   includeResolvedCases: true || false,
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   language: "STRING_VALUE",
 *   includeCommunications: true || false,
 * };
 * const command = new DescribeCasesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCasesResponse
 * //   cases: [ // CaseList
 * //     { // CaseDetails
 * //       caseId: "STRING_VALUE",
 * //       displayId: "STRING_VALUE",
 * //       subject: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       serviceCode: "STRING_VALUE",
 * //       categoryCode: "STRING_VALUE",
 * //       severityCode: "STRING_VALUE",
 * //       submittedBy: "STRING_VALUE",
 * //       timeCreated: "STRING_VALUE",
 * //       recentCommunications: { // RecentCaseCommunications
 * //         communications: [ // CommunicationList
 * //           { // Communication
 * //             caseId: "STRING_VALUE",
 * //             body: "STRING_VALUE",
 * //             submittedBy: "STRING_VALUE",
 * //             timeCreated: "STRING_VALUE",
 * //             attachmentSet: [ // AttachmentSet
 * //               { // AttachmentDetails
 * //                 attachmentId: "STRING_VALUE",
 * //                 fileName: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         nextToken: "STRING_VALUE",
 * //       },
 * //       ccEmailAddresses: [ // CcEmailAddressList
 * //         "STRING_VALUE",
 * //       ],
 * //       language: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCasesCommandInput - {@link DescribeCasesCommandInput}
 * @returns {@link DescribeCasesCommandOutput}
 * @see {@link DescribeCasesCommandInput} for command's `input` shape.
 * @see {@link DescribeCasesCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
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
export class DescribeCasesCommand extends $Command<
  DescribeCasesCommandInput,
  DescribeCasesCommandOutput,
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
  constructor(readonly input: DescribeCasesCommandInput) {
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
  ): Handler<DescribeCasesCommandInput, DescribeCasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeCasesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "DescribeCasesCommand";
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
  private serialize(input: DescribeCasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCasesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCasesCommandOutput> {
    return de_DescribeCasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
