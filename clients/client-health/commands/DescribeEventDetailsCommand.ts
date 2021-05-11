import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeEventDetailsRequest, DescribeEventDetailsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEventDetailsCommand,
  serializeAws_json1_1DescribeEventDetailsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DescribeEventDetailsCommandInput extends DescribeEventDetailsRequest {}
export interface DescribeEventDetailsCommandOutput extends DescribeEventDetailsResponse, __MetadataBearer {}

/**
 * <p>Returns detailed information about one or more specified events. Information includes
 *          standard event data (AWS Region, service, and so on, as returned by <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a>), a detailed event description, and possible additional metadata
 *          that depends upon the nature of the event. Affected entities are not included. To retrieve
 *          the entities, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operation.</p>
 *          <p>If a specified event can't be retrieved, an error message is returned for that
 *          event.</p>
 *          <note>
 *             <p>This operation supports resource-level permissions. You can use this operation to allow or deny access to specific AWS Health events. For more
 *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>AWS Health User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventDetailsCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEventDetailsCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeEventDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventDetailsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventDetailsCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeEventDetailsCommand extends $Command<
  DescribeEventDetailsCommandInput,
  DescribeEventDetailsCommandOutput,
  HealthClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEventDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEventDetailsCommandInput, DescribeEventDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeEventDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEventDetailsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEventDetailsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEventDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEventDetailsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEventDetailsCommandOutput> {
    return deserializeAws_json1_1DescribeEventDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
