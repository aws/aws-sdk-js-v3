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
  DescribeCasesRequest,
  DescribeCasesRequestFilterSensitiveLog,
  DescribeCasesResponse,
  DescribeCasesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeCasesCommand,
  serializeAws_json1_1DescribeCasesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

export interface DescribeCasesCommandInput extends DescribeCasesRequest {}
export interface DescribeCasesCommandOutput extends DescribeCasesResponse, __MetadataBearer {}

/**
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
 * const command = new DescribeCasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCasesCommandInput} for command's `input` shape.
 * @see {@link DescribeCasesCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
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
      inputFilterSensitiveLog: DescribeCasesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeCasesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCasesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCasesCommandOutput> {
    return deserializeAws_json1_1DescribeCasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
