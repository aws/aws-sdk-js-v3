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
  DescribeCommunicationsRequest,
  DescribeCommunicationsRequestFilterSensitiveLog,
  DescribeCommunicationsResponse,
  DescribeCommunicationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeCommunicationsCommand,
  serializeAws_json1_1DescribeCommunicationsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

export interface DescribeCommunicationsCommandInput extends DescribeCommunicationsRequest {}
export interface DescribeCommunicationsCommandOutput extends DescribeCommunicationsResponse, __MetadataBearer {}

/**
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
 * const command = new DescribeCommunicationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCommunicationsCommandInput} for command's `input` shape.
 * @see {@link DescribeCommunicationsCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
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
      inputFilterSensitiveLog: DescribeCommunicationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeCommunicationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCommunicationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCommunicationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCommunicationsCommandOutput> {
    return deserializeAws_json1_1DescribeCommunicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
