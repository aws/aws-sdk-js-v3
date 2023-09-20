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

import { DescribeInstancesRequest, DescribeInstancesResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeInstancesCommand, se_DescribeInstancesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstancesCommand}.
 */
export interface DescribeInstancesCommandInput extends DescribeInstancesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstancesCommand}.
 */
export interface DescribeInstancesCommandOutput extends DescribeInstancesResult, __MetadataBearer {}

/**
 * @public
 * <p>Requests a description of a set of instances.</p>
 *          <note>
 *             <p>This call accepts only one resource-identifying parameter.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeInstancesCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeInstancesCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeInstancesRequest
 *   StackId: "STRING_VALUE",
 *   LayerId: "STRING_VALUE",
 *   InstanceIds: [ // Strings
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstancesResult
 * //   Instances: [ // Instances
 * //     { // Instance
 * //       AgentVersion: "STRING_VALUE",
 * //       AmiId: "STRING_VALUE",
 * //       Architecture: "x86_64" || "i386",
 * //       Arn: "STRING_VALUE",
 * //       AutoScalingType: "load" || "timer",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       BlockDeviceMappings: [ // BlockDeviceMappings
 * //         { // BlockDeviceMapping
 * //           DeviceName: "STRING_VALUE",
 * //           NoDevice: "STRING_VALUE",
 * //           VirtualName: "STRING_VALUE",
 * //           Ebs: { // EbsBlockDevice
 * //             SnapshotId: "STRING_VALUE",
 * //             Iops: Number("int"),
 * //             VolumeSize: Number("int"),
 * //             VolumeType: "gp2" || "io1" || "standard",
 * //             DeleteOnTermination: true || false,
 * //           },
 * //         },
 * //       ],
 * //       CreatedAt: "STRING_VALUE",
 * //       EbsOptimized: true || false,
 * //       Ec2InstanceId: "STRING_VALUE",
 * //       EcsClusterArn: "STRING_VALUE",
 * //       EcsContainerInstanceArn: "STRING_VALUE",
 * //       ElasticIp: "STRING_VALUE",
 * //       Hostname: "STRING_VALUE",
 * //       InfrastructureClass: "STRING_VALUE",
 * //       InstallUpdatesOnBoot: true || false,
 * //       InstanceId: "STRING_VALUE",
 * //       InstanceProfileArn: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       LastServiceErrorId: "STRING_VALUE",
 * //       LayerIds: [ // Strings
 * //         "STRING_VALUE",
 * //       ],
 * //       Os: "STRING_VALUE",
 * //       Platform: "STRING_VALUE",
 * //       PrivateDns: "STRING_VALUE",
 * //       PrivateIp: "STRING_VALUE",
 * //       PublicDns: "STRING_VALUE",
 * //       PublicIp: "STRING_VALUE",
 * //       RegisteredBy: "STRING_VALUE",
 * //       ReportedAgentVersion: "STRING_VALUE",
 * //       ReportedOs: { // ReportedOs
 * //         Family: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //       RootDeviceType: "ebs" || "instance-store",
 * //       RootDeviceVolumeId: "STRING_VALUE",
 * //       SecurityGroupIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       SshHostDsaKeyFingerprint: "STRING_VALUE",
 * //       SshHostRsaKeyFingerprint: "STRING_VALUE",
 * //       SshKeyName: "STRING_VALUE",
 * //       StackId: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       Tenancy: "STRING_VALUE",
 * //       VirtualizationType: "paravirtual" || "hvm",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeInstancesCommandInput - {@link DescribeInstancesCommandInput}
 * @returns {@link DescribeInstancesCommandOutput}
 * @see {@link DescribeInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancesCommandOutput} for command's `response` shape.
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
export class DescribeInstancesCommand extends $Command<
  DescribeInstancesCommandInput,
  DescribeInstancesCommandOutput,
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
  constructor(readonly input: DescribeInstancesCommandInput) {
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
  ): Handler<DescribeInstancesCommandInput, DescribeInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "DescribeInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OpsWorks_20130218",
        operation: "DescribeInstances",
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
  private serialize(input: DescribeInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInstancesCommandOutput> {
    return de_DescribeInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
