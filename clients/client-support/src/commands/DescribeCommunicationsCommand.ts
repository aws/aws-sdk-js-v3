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

import { DescribeCommunicationsRequest, DescribeCommunicationsResponse } from "../models/models_0";
import { de_DescribeCommunicationsCommand, se_DescribeCommunicationsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCommunicationsCommand}.
 */
export interface DescribeCommunicationsCommandInput extends DescribeCommunicationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCommunicationsCommand}.
 */
export interface DescribeCommunicationsCommandOutput extends DescribeCommunicationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns communications and attachments for one or more support cases. Use the
 *                 <code>afterTime</code> and <code>beforeTime</code> parameters to filter by date. You
 *             can use the <code>caseId</code> parameter to restrict the results to a specific
 *             case.</p>
 *          <p>Case data is available for 12 months after creation. If a case was created more than
 *             12 months ago, a request for data might cause an error.</p>
 *          <p>You can use the <code>maxResults</code> and <code>nextToken</code> parameters to
 *             control the pagination of the results. Set <code>maxResults</code> to the number of
 *             cases that you want to display on each page, and use <code>nextToken</code> to specify
 *             the resumption of pagination.</p>
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
 * import { SupportClient, DescribeCommunicationsCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeCommunicationsCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const input = { // DescribeCommunicationsRequest
 *   caseId: "STRING_VALUE", // required
 *   beforeTime: "STRING_VALUE",
 *   afterTime: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeCommunicationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCommunicationsResponse
 * //   communications: [ // CommunicationList
 * //     { // Communication
 * //       caseId: "STRING_VALUE",
 * //       body: "STRING_VALUE",
 * //       submittedBy: "STRING_VALUE",
 * //       timeCreated: "STRING_VALUE",
 * //       attachmentSet: [ // AttachmentSet
 * //         { // AttachmentDetails
 * //           attachmentId: "STRING_VALUE",
 * //           fileName: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCommunicationsCommandInput - {@link DescribeCommunicationsCommandInput}
 * @returns {@link DescribeCommunicationsCommandOutput}
 * @see {@link DescribeCommunicationsCommandInput} for command's `input` shape.
 * @see {@link DescribeCommunicationsCommandOutput} for command's `response` shape.
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
export class DescribeCommunicationsCommand extends $Command<
  DescribeCommunicationsCommandInput,
  DescribeCommunicationsCommandOutput,
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
  constructor(readonly input: DescribeCommunicationsCommandInput) {
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
  ): Handler<DescribeCommunicationsCommandInput, DescribeCommunicationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCommunicationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "DescribeCommunicationsCommand";
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
  private serialize(input: DescribeCommunicationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCommunicationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCommunicationsCommandOutput> {
    return de_DescribeCommunicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
