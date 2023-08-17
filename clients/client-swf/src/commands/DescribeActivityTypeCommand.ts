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

import { ActivityTypeDetail, DescribeActivityTypeInput } from "../models/models_0";
import { de_DescribeActivityTypeCommand, se_DescribeActivityTypeCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeActivityTypeCommand}.
 */
export interface DescribeActivityTypeCommandInput extends DescribeActivityTypeInput {}
/**
 * @public
 *
 * The output of {@link DescribeActivityTypeCommand}.
 */
export interface DescribeActivityTypeCommandOutput extends ActivityTypeDetail, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the specified activity type. This includes configuration
 *       settings provided when the type was registered and other general information about the
 *       type.</p>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
 *       follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
 *           only specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this
 *           action.</p>
 *             </li>
 *             <li>
 *                <p>Constrain the following parameters by using a <code>Condition</code> element with
 *           the appropriate keys.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>activityType.name</code>: String constraint. The key is
 *                 <code>swf:activityType.name</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>activityType.version</code>: String constraint. The key is
 *                 <code>swf:activityType.version</code>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *       parameter values fall outside the specified constraints, the action fails. The associated
 *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
 *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
 *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, DescribeActivityTypeCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, DescribeActivityTypeCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const input = { // DescribeActivityTypeInput
 *   domain: "STRING_VALUE", // required
 *   activityType: { // ActivityType
 *     name: "STRING_VALUE", // required
 *     version: "STRING_VALUE", // required
 *   },
 * };
 * const command = new DescribeActivityTypeCommand(input);
 * const response = await client.send(command);
 * // { // ActivityTypeDetail
 * //   typeInfo: { // ActivityTypeInfo
 * //     activityType: { // ActivityType
 * //       name: "STRING_VALUE", // required
 * //       version: "STRING_VALUE", // required
 * //     },
 * //     status: "REGISTERED" || "DEPRECATED", // required
 * //     description: "STRING_VALUE",
 * //     creationDate: new Date("TIMESTAMP"), // required
 * //     deprecationDate: new Date("TIMESTAMP"),
 * //   },
 * //   configuration: { // ActivityTypeConfiguration
 * //     defaultTaskStartToCloseTimeout: "STRING_VALUE",
 * //     defaultTaskHeartbeatTimeout: "STRING_VALUE",
 * //     defaultTaskList: { // TaskList
 * //       name: "STRING_VALUE", // required
 * //     },
 * //     defaultTaskPriority: "STRING_VALUE",
 * //     defaultTaskScheduleToStartTimeout: "STRING_VALUE",
 * //     defaultTaskScheduleToCloseTimeout: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeActivityTypeCommandInput - {@link DescribeActivityTypeCommandInput}
 * @returns {@link DescribeActivityTypeCommandOutput}
 * @see {@link DescribeActivityTypeCommandInput} for command's `input` shape.
 * @see {@link DescribeActivityTypeCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *  <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
 *
 * @throws {@link UnknownResourceFault} (client fault)
 *  <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
 *
 * @throws {@link SWFServiceException}
 * <p>Base exception class for all service exceptions from SWF service.</p>
 *
 */
export class DescribeActivityTypeCommand extends $Command<
  DescribeActivityTypeCommandInput,
  DescribeActivityTypeCommandOutput,
  SWFClientResolvedConfig
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
  constructor(readonly input: DescribeActivityTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SWFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeActivityTypeCommandInput, DescribeActivityTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeActivityTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SWFClient";
    const commandName = "DescribeActivityTypeCommand";
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
  private serialize(input: DescribeActivityTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeActivityTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeActivityTypeCommandOutput> {
    return de_DescribeActivityTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
