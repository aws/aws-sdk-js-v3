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

import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import {
  DescribeAffectedEntitiesForOrganizationRequest,
  DescribeAffectedEntitiesForOrganizationRequestFilterSensitiveLog,
  DescribeAffectedEntitiesForOrganizationResponse,
  DescribeAffectedEntitiesForOrganizationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand,
  serializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeAffectedEntitiesForOrganizationCommandInput
  extends DescribeAffectedEntitiesForOrganizationRequest {}
export interface DescribeAffectedEntitiesForOrganizationCommandOutput
  extends DescribeAffectedEntitiesForOrganizationResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of entities that have been affected by one or more events for one or more
 *          accounts in your organization in Organizations, based on the filter criteria. Entities can refer
 *          to individual customer resources, groups of customer resources, or any other construct,
 *          depending on the Amazon Web Services service.</p>
 *          <p>At least one event Amazon Resource Name (ARN) and account ID are required.</p>
 *          <p>Before you can call this operation, you must first enable Health to work with
 *          Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's
 *          management account.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *                </li>
 *                <li>
 *                   <p>This operation doesn't support resource-level permissions. You can't use this operation to allow or deny access to specific Health events. For more
 *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p>
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
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 */
export class DescribeAffectedEntitiesForOrganizationCommand extends $Command<
  DescribeAffectedEntitiesForOrganizationCommandInput,
  DescribeAffectedEntitiesForOrganizationCommandOutput,
  HealthClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeAffectedEntitiesForOrganizationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeAffectedEntitiesForOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAffectedEntitiesForOrganizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAffectedEntitiesForOrganizationResponseFilterSensitiveLog,
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
