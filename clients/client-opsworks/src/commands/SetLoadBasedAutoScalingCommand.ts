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

import { SetLoadBasedAutoScalingRequest } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_SetLoadBasedAutoScalingCommand, se_SetLoadBasedAutoScalingCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetLoadBasedAutoScalingCommand}.
 */
export interface SetLoadBasedAutoScalingCommandInput extends SetLoadBasedAutoScalingRequest {}
/**
 * @public
 *
 * The output of {@link SetLoadBasedAutoScalingCommand}.
 */
export interface SetLoadBasedAutoScalingCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Specify the load-based auto scaling configuration for a specified layer. For more
 *       information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing
 *         Load with Time-based and Load-based Instances</a>.</p>
 *          <note>
 *             <p>To use load-based auto scaling, you must create a set of load-based auto scaling instances. Load-based auto scaling operates only on the instances from that set, so you must ensure that you have created enough instances to handle the maximum anticipated load.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, SetLoadBasedAutoScalingCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, SetLoadBasedAutoScalingCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // SetLoadBasedAutoScalingRequest
 *   LayerId: "STRING_VALUE", // required
 *   Enable: true || false,
 *   UpScaling: { // AutoScalingThresholds
 *     InstanceCount: Number("int"),
 *     ThresholdsWaitTime: Number("int"),
 *     IgnoreMetricsTime: Number("int"),
 *     CpuThreshold: Number("double"),
 *     MemoryThreshold: Number("double"),
 *     LoadThreshold: Number("double"),
 *     Alarms: [ // Strings
 *       "STRING_VALUE",
 *     ],
 *   },
 *   DownScaling: {
 *     InstanceCount: Number("int"),
 *     ThresholdsWaitTime: Number("int"),
 *     IgnoreMetricsTime: Number("int"),
 *     CpuThreshold: Number("double"),
 *     MemoryThreshold: Number("double"),
 *     LoadThreshold: Number("double"),
 *     Alarms: [
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new SetLoadBasedAutoScalingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetLoadBasedAutoScalingCommandInput - {@link SetLoadBasedAutoScalingCommandInput}
 * @returns {@link SetLoadBasedAutoScalingCommandOutput}
 * @see {@link SetLoadBasedAutoScalingCommandInput} for command's `input` shape.
 * @see {@link SetLoadBasedAutoScalingCommandOutput} for command's `response` shape.
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
export class SetLoadBasedAutoScalingCommand extends $Command<
  SetLoadBasedAutoScalingCommandInput,
  SetLoadBasedAutoScalingCommandOutput,
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
  constructor(readonly input: SetLoadBasedAutoScalingCommandInput) {
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
  ): Handler<SetLoadBasedAutoScalingCommandInput, SetLoadBasedAutoScalingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetLoadBasedAutoScalingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "SetLoadBasedAutoScalingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OpsWorks_20130218",
        operation: "SetLoadBasedAutoScaling",
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
  private serialize(input: SetLoadBasedAutoScalingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetLoadBasedAutoScalingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetLoadBasedAutoScalingCommandOutput> {
    return de_SetLoadBasedAutoScalingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
