import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import {
  DescribeAffectedEntitiesForOrganizationRequest,
  DescribeAffectedEntitiesForOrganizationResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand,
  serializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand,
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

export interface DescribeAffectedEntitiesForOrganizationCommandInput
  extends DescribeAffectedEntitiesForOrganizationRequest {}
export interface DescribeAffectedEntitiesForOrganizationCommandOutput
  extends DescribeAffectedEntitiesForOrganizationResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of entities that have been affected by one or more events for one or more
 *          accounts in your organization in AWS Organizations, based on the filter criteria. Entities can refer
 *          to individual customer resources, groups of customer resources, or any other construct,
 *          depending on the AWS service.</p>
 *          <p>At least one event Amazon Resource Name (ARN) and account ID are required. Results are
 *          sorted by the <code>lastUpdatedTime</code> of the entity, starting with the most
 *          recent.</p>
 *          <p>Before you can call this operation, you must first enable AWS Health to work with
 *          AWS Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a>
 *          operation from your organization's management account.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *                </li>
 *                <li>
 *                   <p>This operation doesn't support resource-level permissions. You can't use this operation to allow or deny access to specific AWS Health events. For more
 *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>AWS Health User Guide</i>.</p>
 *                </li>
 *             </ul>
 *
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeAffectedEntitiesForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeAffectedEntitiesForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeAffectedEntitiesForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAffectedEntitiesForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeAffectedEntitiesForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeAffectedEntitiesForOrganizationCommand extends $Command<
  DescribeAffectedEntitiesForOrganizationCommandInput,
  DescribeAffectedEntitiesForOrganizationCommandOutput,
  HealthClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAffectedEntitiesForOrganizationCommandInput) {
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
  ): Handler<
    DescribeAffectedEntitiesForOrganizationCommandInput,
    DescribeAffectedEntitiesForOrganizationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeAffectedEntitiesForOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAffectedEntitiesForOrganizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAffectedEntitiesForOrganizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeAffectedEntitiesForOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAffectedEntitiesForOrganizationCommandOutput> {
    return deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
