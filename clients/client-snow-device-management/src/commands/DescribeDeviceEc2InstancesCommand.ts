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

import { DescribeDeviceEc2Input, DescribeDeviceEc2Output } from "../models/models_0";
import { de_DescribeDeviceEc2InstancesCommand, se_DescribeDeviceEc2InstancesCommand } from "../protocols/Aws_restJson1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SnowDeviceManagementClientResolvedConfig,
} from "../SnowDeviceManagementClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDeviceEc2InstancesCommand}.
 */
export interface DescribeDeviceEc2InstancesCommandInput extends DescribeDeviceEc2Input {}
/**
 * @public
 *
 * The output of {@link DescribeDeviceEc2InstancesCommand}.
 */
export interface DescribeDeviceEc2InstancesCommandOutput extends DescribeDeviceEc2Output, __MetadataBearer {}

/**
 * @public
 * <p>Checks the current state of the Amazon EC2 instances. The output is similar to
 *         <code>describeDevice</code>, but the results are sourced from the device cache in the
 *       Amazon Web Services Cloud and include a subset of the available fields. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowDeviceManagementClient, DescribeDeviceEc2InstancesCommand } from "@aws-sdk/client-snow-device-management"; // ES Modules import
 * // const { SnowDeviceManagementClient, DescribeDeviceEc2InstancesCommand } = require("@aws-sdk/client-snow-device-management"); // CommonJS import
 * const client = new SnowDeviceManagementClient(config);
 * const input = { // DescribeDeviceEc2Input
 *   managedDeviceId: "STRING_VALUE", // required
 *   instanceIds: [ // InstanceIdsList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeDeviceEc2InstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeviceEc2Output
 * //   instances: [ // InstanceSummaryList
 * //     { // InstanceSummary
 * //       instance: { // Instance
 * //         imageId: "STRING_VALUE",
 * //         amiLaunchIndex: Number("int"),
 * //         instanceId: "STRING_VALUE",
 * //         state: { // InstanceState
 * //           code: Number("int"),
 * //           name: "STRING_VALUE",
 * //         },
 * //         instanceType: "STRING_VALUE",
 * //         privateIpAddress: "STRING_VALUE",
 * //         publicIpAddress: "STRING_VALUE",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         updatedAt: new Date("TIMESTAMP"),
 * //         blockDeviceMappings: [ // InstanceBlockDeviceMappingList
 * //           { // InstanceBlockDeviceMapping
 * //             deviceName: "STRING_VALUE",
 * //             ebs: { // EbsInstanceBlockDevice
 * //               attachTime: new Date("TIMESTAMP"),
 * //               deleteOnTermination: true || false,
 * //               status: "STRING_VALUE",
 * //               volumeId: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         securityGroups: [ // SecurityGroupIdentifierList
 * //           { // SecurityGroupIdentifier
 * //             groupId: "STRING_VALUE",
 * //             groupName: "STRING_VALUE",
 * //           },
 * //         ],
 * //         cpuOptions: { // CpuOptions
 * //           coreCount: Number("int"),
 * //           threadsPerCore: Number("int"),
 * //         },
 * //         rootDeviceName: "STRING_VALUE",
 * //       },
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDeviceEc2InstancesCommandInput - {@link DescribeDeviceEc2InstancesCommandInput}
 * @returns {@link DescribeDeviceEc2InstancesCommandOutput}
 * @see {@link DescribeDeviceEc2InstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeDeviceEc2InstancesCommandOutput} for command's `response` shape.
 * @see {@link SnowDeviceManagementClientResolvedConfig | config} for SnowDeviceManagementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SnowDeviceManagementServiceException}
 * <p>Base exception class for all service exceptions from SnowDeviceManagement service.</p>
 *
 */
export class DescribeDeviceEc2InstancesCommand extends $Command<
  DescribeDeviceEc2InstancesCommandInput,
  DescribeDeviceEc2InstancesCommandOutput,
  SnowDeviceManagementClientResolvedConfig
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
  constructor(readonly input: DescribeDeviceEc2InstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowDeviceManagementClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDeviceEc2InstancesCommandInput, DescribeDeviceEc2InstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDeviceEc2InstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowDeviceManagementClient";
    const commandName = "DescribeDeviceEc2InstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SnowDeviceManagement",
        operation: "DescribeDeviceEc2Instances",
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
  private serialize(input: DescribeDeviceEc2InstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDeviceEc2InstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDeviceEc2InstancesCommandOutput> {
    return de_DescribeDeviceEc2InstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
