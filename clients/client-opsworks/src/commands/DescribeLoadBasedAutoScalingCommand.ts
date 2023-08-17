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

import { DescribeLoadBasedAutoScalingRequest, DescribeLoadBasedAutoScalingResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import {
  de_DescribeLoadBasedAutoScalingCommand,
  se_DescribeLoadBasedAutoScalingCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLoadBasedAutoScalingCommand}.
 */
export interface DescribeLoadBasedAutoScalingCommandInput extends DescribeLoadBasedAutoScalingRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLoadBasedAutoScalingCommand}.
 */
export interface DescribeLoadBasedAutoScalingCommandOutput
  extends DescribeLoadBasedAutoScalingResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes load-based auto scaling configurations for specified layers.</p>
 *          <note>
 *             <p>You must specify at least one of the parameters.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeLoadBasedAutoScalingCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeLoadBasedAutoScalingCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeLoadBasedAutoScalingRequest
 *   LayerIds: [ // Strings // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeLoadBasedAutoScalingCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLoadBasedAutoScalingResult
 * //   LoadBasedAutoScalingConfigurations: [ // LoadBasedAutoScalingConfigurations
 * //     { // LoadBasedAutoScalingConfiguration
 * //       LayerId: "STRING_VALUE",
 * //       Enable: true || false,
 * //       UpScaling: { // AutoScalingThresholds
 * //         InstanceCount: Number("int"),
 * //         ThresholdsWaitTime: Number("int"),
 * //         IgnoreMetricsTime: Number("int"),
 * //         CpuThreshold: Number("double"),
 * //         MemoryThreshold: Number("double"),
 * //         LoadThreshold: Number("double"),
 * //         Alarms: [ // Strings
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       DownScaling: {
 * //         InstanceCount: Number("int"),
 * //         ThresholdsWaitTime: Number("int"),
 * //         IgnoreMetricsTime: Number("int"),
 * //         CpuThreshold: Number("double"),
 * //         MemoryThreshold: Number("double"),
 * //         LoadThreshold: Number("double"),
 * //         Alarms: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeLoadBasedAutoScalingCommandInput - {@link DescribeLoadBasedAutoScalingCommandInput}
 * @returns {@link DescribeLoadBasedAutoScalingCommandOutput}
 * @see {@link DescribeLoadBasedAutoScalingCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBasedAutoScalingCommandOutput} for command's `response` shape.
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
export class DescribeLoadBasedAutoScalingCommand extends $Command<
  DescribeLoadBasedAutoScalingCommandInput,
  DescribeLoadBasedAutoScalingCommandOutput,
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
  constructor(readonly input: DescribeLoadBasedAutoScalingCommandInput) {
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
  ): Handler<DescribeLoadBasedAutoScalingCommandInput, DescribeLoadBasedAutoScalingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLoadBasedAutoScalingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "DescribeLoadBasedAutoScalingCommand";
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
  private serialize(input: DescribeLoadBasedAutoScalingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeLoadBasedAutoScalingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLoadBasedAutoScalingCommandOutput> {
    return de_DescribeLoadBasedAutoScalingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
