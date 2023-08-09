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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { StartInstancesRequest, StartInstancesResult } from "../models/models_7";
import { de_StartInstancesCommand, se_StartInstancesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartInstancesCommand}.
 */
export interface StartInstancesCommandInput extends StartInstancesRequest {}
/**
 * @public
 *
 * The output of {@link StartInstancesCommand}.
 */
export interface StartInstancesCommandOutput extends StartInstancesResult, __MetadataBearer {}

/**
 * @public
 * <p>Starts an Amazon EBS-backed instance that you've previously stopped.</p>
 *          <p>Instances that use Amazon EBS volumes as their root devices can be quickly stopped and
 *             started. When an instance is stopped, the compute resources are released and you are not
 *             billed for instance usage. However, your root partition Amazon EBS volume remains and
 *             continues to persist your data, and you are charged for Amazon EBS volume usage. You can
 *             restart your instance at any time. Every time you start your instance, Amazon EC2
 *             charges a one-minute minimum for instance usage, and thereafter charges per second for
 *             instance usage.</p>
 *          <p>Before stopping an instance, make sure it is in a state from which it can be
 *             restarted. Stopping an instance does not preserve data stored in RAM.</p>
 *          <p>Performing this operation on an instance that uses an instance store as its root
 *             device returns an error.</p>
 *          <p>If you attempt to start a T3 instance with <code>host</code> tenancy and the
 *                 <code>unlimted</code> CPU credit option, the request fails. The
 *                 <code>unlimited</code> CPU credit option is not supported on Dedicated Hosts. Before
 *             you start the instance, either change its CPU credit option to <code>standard</code>, or
 *             change its tenancy to <code>default</code> or <code>dedicated</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html">Stop and start your instance</a>
 *             in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, StartInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, StartInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // StartInstancesRequest
 *   InstanceIds: [ // InstanceIdStringList // required
 *     "STRING_VALUE",
 *   ],
 *   AdditionalInfo: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new StartInstancesCommand(input);
 * const response = await client.send(command);
 * // { // StartInstancesResult
 * //   StartingInstances: [ // InstanceStateChangeList
 * //     { // InstanceStateChange
 * //       CurrentState: { // InstanceState
 * //         Code: Number("int"),
 * //         Name: "pending" || "running" || "shutting-down" || "terminated" || "stopping" || "stopped",
 * //       },
 * //       InstanceId: "STRING_VALUE",
 * //       PreviousState: {
 * //         Code: Number("int"),
 * //         Name: "pending" || "running" || "shutting-down" || "terminated" || "stopping" || "stopped",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param StartInstancesCommandInput - {@link StartInstancesCommandInput}
 * @returns {@link StartInstancesCommandOutput}
 * @see {@link StartInstancesCommandInput} for command's `input` shape.
 * @see {@link StartInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To start a stopped EC2 instance
 * ```javascript
 * // This example starts the specified EC2 instance.
 * const input = {
 *   "InstanceIds": [
 *     "i-1234567890abcdef0"
 *   ]
 * };
 * const command = new StartInstancesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "StartingInstances": [
 *     {
 *       "CurrentState": {
 *         "Code": 0,
 *         "Name": "pending"
 *       },
 *       "InstanceId": "i-1234567890abcdef0",
 *       "PreviousState": {
 *         "Code": 80,
 *         "Name": "stopped"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-start-a-stopped-ec2-instance-1529358792730
 * ```
 *
 */
export class StartInstancesCommand extends $Command<
  StartInstancesCommandInput,
  StartInstancesCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: StartInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartInstancesCommandInput, StartInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "StartInstancesCommand";
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
  private serialize(input: StartInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartInstancesCommandOutput> {
    return de_StartInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
