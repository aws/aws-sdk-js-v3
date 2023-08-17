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

import { CreateInstanceRequest, CreateInstanceResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_CreateInstanceCommand, se_CreateInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateInstanceCommand}.
 */
export interface CreateInstanceCommandInput extends CreateInstanceRequest {}
/**
 * @public
 *
 * The output of {@link CreateInstanceCommand}.
 */
export interface CreateInstanceCommandOutput extends CreateInstanceResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates an instance in a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html">Adding an
 *         Instance to a Layer</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, CreateInstanceCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, CreateInstanceCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // CreateInstanceRequest
 *   StackId: "STRING_VALUE", // required
 *   LayerIds: [ // Strings // required
 *     "STRING_VALUE",
 *   ],
 *   InstanceType: "STRING_VALUE", // required
 *   AutoScalingType: "STRING_VALUE",
 *   Hostname: "STRING_VALUE",
 *   Os: "STRING_VALUE",
 *   AmiId: "STRING_VALUE",
 *   SshKeyName: "STRING_VALUE",
 *   AvailabilityZone: "STRING_VALUE",
 *   VirtualizationType: "STRING_VALUE",
 *   SubnetId: "STRING_VALUE",
 *   Architecture: "STRING_VALUE",
 *   RootDeviceType: "STRING_VALUE",
 *   BlockDeviceMappings: [ // BlockDeviceMappings
 *     { // BlockDeviceMapping
 *       DeviceName: "STRING_VALUE",
 *       NoDevice: "STRING_VALUE",
 *       VirtualName: "STRING_VALUE",
 *       Ebs: { // EbsBlockDevice
 *         SnapshotId: "STRING_VALUE",
 *         Iops: Number("int"),
 *         VolumeSize: Number("int"),
 *         VolumeType: "STRING_VALUE",
 *         DeleteOnTermination: true || false,
 *       },
 *     },
 *   ],
 *   InstallUpdatesOnBoot: true || false,
 *   EbsOptimized: true || false,
 *   AgentVersion: "STRING_VALUE",
 *   Tenancy: "STRING_VALUE",
 * };
 * const command = new CreateInstanceCommand(input);
 * const response = await client.send(command);
 * // { // CreateInstanceResult
 * //   InstanceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateInstanceCommandInput - {@link CreateInstanceCommandInput}
 * @returns {@link CreateInstanceCommandOutput}
 * @see {@link CreateInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceCommandOutput} for command's `response` shape.
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
export class CreateInstanceCommand extends $Command<
  CreateInstanceCommandInput,
  CreateInstanceCommandOutput,
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
  constructor(readonly input: CreateInstanceCommandInput) {
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
  ): Handler<CreateInstanceCommandInput, CreateInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "CreateInstanceCommand";
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
  private serialize(input: CreateInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateInstanceCommandOutput> {
    return de_CreateInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
