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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DescribeStackSummaryRequest, DescribeStackSummaryResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeStackSummaryCommand, se_DescribeStackSummaryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStackSummaryCommand}.
 */
export interface DescribeStackSummaryCommandInput extends DescribeStackSummaryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStackSummaryCommand}.
 */
export interface DescribeStackSummaryCommandOutput extends DescribeStackSummaryResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the number of layers and apps in a specified stack, and the number of instances in
 *       each state, such as <code>running_setup</code> or <code>online</code>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeStackSummaryCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeStackSummaryCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeStackSummaryRequest
 *   StackId: "STRING_VALUE", // required
 * };
 * const command = new DescribeStackSummaryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStackSummaryResult
 * //   StackSummary: { // StackSummary
 * //     StackId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     LayersCount: Number("int"),
 * //     AppsCount: Number("int"),
 * //     InstancesCount: { // InstancesCount
 * //       Assigning: Number("int"),
 * //       Booting: Number("int"),
 * //       ConnectionLost: Number("int"),
 * //       Deregistering: Number("int"),
 * //       Online: Number("int"),
 * //       Pending: Number("int"),
 * //       Rebooting: Number("int"),
 * //       Registered: Number("int"),
 * //       Registering: Number("int"),
 * //       Requested: Number("int"),
 * //       RunningSetup: Number("int"),
 * //       SetupFailed: Number("int"),
 * //       ShuttingDown: Number("int"),
 * //       StartFailed: Number("int"),
 * //       StopFailed: Number("int"),
 * //       Stopped: Number("int"),
 * //       Stopping: Number("int"),
 * //       Terminated: Number("int"),
 * //       Terminating: Number("int"),
 * //       Unassigning: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStackSummaryCommandInput - {@link DescribeStackSummaryCommandInput}
 * @returns {@link DescribeStackSummaryCommandOutput}
 * @see {@link DescribeStackSummaryCommandInput} for command's `input` shape.
 * @see {@link DescribeStackSummaryCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that a request was not valid.</p>
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 */
export class DescribeStackSummaryCommand extends $Command<
  DescribeStackSummaryCommandInput,
  DescribeStackSummaryCommandOutput,
  OpsWorksClientResolvedConfig
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
  constructor(readonly input: DescribeStackSummaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStackSummaryCommandInput, DescribeStackSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStackSummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "DescribeStackSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OpsWorks_20130218",
        operation: "DescribeStackSummary",
      },
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
  private serialize(input: DescribeStackSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeStackSummaryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStackSummaryCommandOutput> {
    return de_DescribeStackSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
