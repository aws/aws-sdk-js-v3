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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateRemoteAccessSessionRequest, CreateRemoteAccessSessionResult } from "../models/models_0";
import { de_CreateRemoteAccessSessionCommand, se_CreateRemoteAccessSessionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateRemoteAccessSessionCommand}.
 */
export interface CreateRemoteAccessSessionCommandInput extends CreateRemoteAccessSessionRequest {}
/**
 * @public
 *
 * The output of {@link CreateRemoteAccessSessionCommand}.
 */
export interface CreateRemoteAccessSessionCommandOutput extends CreateRemoteAccessSessionResult, __MetadataBearer {}

/**
 * @public
 * <p>Specifies and starts a remote access session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateRemoteAccessSessionCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateRemoteAccessSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // CreateRemoteAccessSessionRequest
 *   projectArn: "STRING_VALUE", // required
 *   deviceArn: "STRING_VALUE", // required
 *   instanceArn: "STRING_VALUE",
 *   sshPublicKey: "STRING_VALUE",
 *   remoteDebugEnabled: true || false,
 *   remoteRecordEnabled: true || false,
 *   remoteRecordAppArn: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   clientId: "STRING_VALUE",
 *   configuration: { // CreateRemoteAccessSessionConfiguration
 *     billingMethod: "METERED" || "UNMETERED",
 *     vpceConfigurationArns: [ // AmazonResourceNames
 *       "STRING_VALUE",
 *     ],
 *   },
 *   interactionMode: "INTERACTIVE" || "NO_VIDEO" || "VIDEO_ONLY",
 *   skipAppResign: true || false,
 * };
 * const command = new CreateRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * // { // CreateRemoteAccessSessionResult
 * //   remoteAccessSession: { // RemoteAccessSession
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     created: new Date("TIMESTAMP"),
 * //     status: "PENDING" || "PENDING_CONCURRENCY" || "PENDING_DEVICE" || "PROCESSING" || "SCHEDULING" || "PREPARING" || "RUNNING" || "COMPLETED" || "STOPPING",
 * //     result: "PENDING" || "PASSED" || "WARNED" || "FAILED" || "SKIPPED" || "ERRORED" || "STOPPED",
 * //     message: "STRING_VALUE",
 * //     started: new Date("TIMESTAMP"),
 * //     stopped: new Date("TIMESTAMP"),
 * //     device: { // Device
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       manufacturer: "STRING_VALUE",
 * //       model: "STRING_VALUE",
 * //       modelId: "STRING_VALUE",
 * //       formFactor: "PHONE" || "TABLET",
 * //       platform: "ANDROID" || "IOS",
 * //       os: "STRING_VALUE",
 * //       cpu: { // CPU
 * //         frequency: "STRING_VALUE",
 * //         architecture: "STRING_VALUE",
 * //         clock: Number("double"),
 * //       },
 * //       resolution: { // Resolution
 * //         width: Number("int"),
 * //         height: Number("int"),
 * //       },
 * //       heapSize: Number("long"),
 * //       memory: Number("long"),
 * //       image: "STRING_VALUE",
 * //       carrier: "STRING_VALUE",
 * //       radio: "STRING_VALUE",
 * //       remoteAccessEnabled: true || false,
 * //       remoteDebugEnabled: true || false,
 * //       fleetType: "STRING_VALUE",
 * //       fleetName: "STRING_VALUE",
 * //       instances: [ // DeviceInstances
 * //         { // DeviceInstance
 * //           arn: "STRING_VALUE",
 * //           deviceArn: "STRING_VALUE",
 * //           labels: [ // InstanceLabels
 * //             "STRING_VALUE",
 * //           ],
 * //           status: "IN_USE" || "PREPARING" || "AVAILABLE" || "NOT_AVAILABLE",
 * //           udid: "STRING_VALUE",
 * //           instanceProfile: { // InstanceProfile
 * //             arn: "STRING_VALUE",
 * //             packageCleanup: true || false,
 * //             excludeAppPackagesFromCleanup: [ // PackageIds
 * //               "STRING_VALUE",
 * //             ],
 * //             rebootAfterUse: true || false,
 * //             name: "STRING_VALUE",
 * //             description: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       availability: "TEMPORARY_NOT_AVAILABLE" || "BUSY" || "AVAILABLE" || "HIGHLY_AVAILABLE",
 * //     },
 * //     instanceArn: "STRING_VALUE",
 * //     remoteDebugEnabled: true || false,
 * //     remoteRecordEnabled: true || false,
 * //     remoteRecordAppArn: "STRING_VALUE",
 * //     hostAddress: "STRING_VALUE",
 * //     clientId: "STRING_VALUE",
 * //     billingMethod: "METERED" || "UNMETERED",
 * //     deviceMinutes: { // DeviceMinutes
 * //       total: Number("double"),
 * //       metered: Number("double"),
 * //       unmetered: Number("double"),
 * //     },
 * //     endpoint: "STRING_VALUE",
 * //     deviceUdid: "STRING_VALUE",
 * //     interactionMode: "INTERACTIVE" || "NO_VIDEO" || "VIDEO_ONLY",
 * //     skipAppResign: true || false,
 * //     vpcConfig: { // VpcConfig
 * //       securityGroupIds: [ // VpcSecurityGroupIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       subnetIds: [ // VpcSubnetIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       vpcId: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRemoteAccessSessionCommandInput - {@link CreateRemoteAccessSessionCommandInput}
 * @returns {@link CreateRemoteAccessSessionCommandOutput}
 * @see {@link CreateRemoteAccessSessionCommandInput} for command's `input` shape.
 * @see {@link CreateRemoteAccessSessionCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 * @example To create a remote access session
 * ```javascript
 * // The following example creates a remote access session named MySession.
 * const input = {
 *   "name": "MySession",
 *   "configuration": {
 *     "billingMethod": "METERED"
 *   },
 *   "deviceArn": "arn:aws:devicefarm:us-west-2::device:123EXAMPLE",
 *   "projectArn": "arn:aws:devicefarm:us-west-2:123456789101:project:EXAMPLE-GUID-123-456"
 * };
 * const command = new CreateRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "remoteAccessSession": {}
 * }
 * *\/
 * // example id: to-create-a-remote-access-session-1470970668274
 * ```
 *
 */
export class CreateRemoteAccessSessionCommand extends $Command<
  CreateRemoteAccessSessionCommandInput,
  CreateRemoteAccessSessionCommandOutput,
  DeviceFarmClientResolvedConfig
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
  constructor(readonly input: CreateRemoteAccessSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRemoteAccessSessionCommandInput, CreateRemoteAccessSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRemoteAccessSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "CreateRemoteAccessSessionCommand";
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
  private serialize(input: CreateRemoteAccessSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateRemoteAccessSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateRemoteAccessSessionCommandOutput> {
    return de_CreateRemoteAccessSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
