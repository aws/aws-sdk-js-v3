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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListRemoteAccessSessionsRequest, ListRemoteAccessSessionsResult } from "../models/models_0";
import { de_ListRemoteAccessSessionsCommand, se_ListRemoteAccessSessionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRemoteAccessSessionsCommand}.
 */
export interface ListRemoteAccessSessionsCommandInput extends ListRemoteAccessSessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListRemoteAccessSessionsCommand}.
 */
export interface ListRemoteAccessSessionsCommandOutput extends ListRemoteAccessSessionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of all currently running remote access sessions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListRemoteAccessSessionsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListRemoteAccessSessionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // ListRemoteAccessSessionsRequest
 *   arn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRemoteAccessSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListRemoteAccessSessionsResult
 * //   remoteAccessSessions: [ // RemoteAccessSessions
 * //     { // RemoteAccessSession
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       created: new Date("TIMESTAMP"),
 * //       status: "PENDING" || "PENDING_CONCURRENCY" || "PENDING_DEVICE" || "PROCESSING" || "SCHEDULING" || "PREPARING" || "RUNNING" || "COMPLETED" || "STOPPING",
 * //       result: "PENDING" || "PASSED" || "WARNED" || "FAILED" || "SKIPPED" || "ERRORED" || "STOPPED",
 * //       message: "STRING_VALUE",
 * //       started: new Date("TIMESTAMP"),
 * //       stopped: new Date("TIMESTAMP"),
 * //       device: { // Device
 * //         arn: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //         manufacturer: "STRING_VALUE",
 * //         model: "STRING_VALUE",
 * //         modelId: "STRING_VALUE",
 * //         formFactor: "PHONE" || "TABLET",
 * //         platform: "ANDROID" || "IOS",
 * //         os: "STRING_VALUE",
 * //         cpu: { // CPU
 * //           frequency: "STRING_VALUE",
 * //           architecture: "STRING_VALUE",
 * //           clock: Number("double"),
 * //         },
 * //         resolution: { // Resolution
 * //           width: Number("int"),
 * //           height: Number("int"),
 * //         },
 * //         heapSize: Number("long"),
 * //         memory: Number("long"),
 * //         image: "STRING_VALUE",
 * //         carrier: "STRING_VALUE",
 * //         radio: "STRING_VALUE",
 * //         remoteAccessEnabled: true || false,
 * //         remoteDebugEnabled: true || false,
 * //         fleetType: "STRING_VALUE",
 * //         fleetName: "STRING_VALUE",
 * //         instances: [ // DeviceInstances
 * //           { // DeviceInstance
 * //             arn: "STRING_VALUE",
 * //             deviceArn: "STRING_VALUE",
 * //             labels: [ // InstanceLabels
 * //               "STRING_VALUE",
 * //             ],
 * //             status: "IN_USE" || "PREPARING" || "AVAILABLE" || "NOT_AVAILABLE",
 * //             udid: "STRING_VALUE",
 * //             instanceProfile: { // InstanceProfile
 * //               arn: "STRING_VALUE",
 * //               packageCleanup: true || false,
 * //               excludeAppPackagesFromCleanup: [ // PackageIds
 * //                 "STRING_VALUE",
 * //               ],
 * //               rebootAfterUse: true || false,
 * //               name: "STRING_VALUE",
 * //               description: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         availability: "TEMPORARY_NOT_AVAILABLE" || "BUSY" || "AVAILABLE" || "HIGHLY_AVAILABLE",
 * //       },
 * //       instanceArn: "STRING_VALUE",
 * //       remoteDebugEnabled: true || false,
 * //       remoteRecordEnabled: true || false,
 * //       remoteRecordAppArn: "STRING_VALUE",
 * //       hostAddress: "STRING_VALUE",
 * //       clientId: "STRING_VALUE",
 * //       billingMethod: "METERED" || "UNMETERED",
 * //       deviceMinutes: { // DeviceMinutes
 * //         total: Number("double"),
 * //         metered: Number("double"),
 * //         unmetered: Number("double"),
 * //       },
 * //       endpoint: "STRING_VALUE",
 * //       deviceUdid: "STRING_VALUE",
 * //       interactionMode: "INTERACTIVE" || "NO_VIDEO" || "VIDEO_ONLY",
 * //       skipAppResign: true || false,
 * //       vpcConfig: { // VpcConfig
 * //         securityGroupIds: [ // VpcSecurityGroupIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //         subnetIds: [ // VpcSubnetIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //         vpcId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRemoteAccessSessionsCommandInput - {@link ListRemoteAccessSessionsCommandInput}
 * @returns {@link ListRemoteAccessSessionsCommandOutput}
 * @see {@link ListRemoteAccessSessionsCommandInput} for command's `input` shape.
 * @see {@link ListRemoteAccessSessionsCommandOutput} for command's `response` shape.
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
 * @example To get information about a remote access session
 * ```javascript
 * // The following example returns information about a specific Device Farm remote access session.
 * const input = {
 *   "arn": "arn:aws:devicefarm:us-west-2:123456789101:session:EXAMPLE-GUID-123-456",
 *   "nextToken": "RW5DdDJkMWYwZjM2MzM2VHVpOHJIUXlDUXlhc2QzRGViYnc9SEXAMPLE="
 * };
 * const command = new ListRemoteAccessSessionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "remoteAccessSessions": []
 * }
 * *\/
 * // example id: to-get-information-about-a-remote-access-session-1472581144803
 * ```
 *
 */
export class ListRemoteAccessSessionsCommand extends $Command<
  ListRemoteAccessSessionsCommandInput,
  ListRemoteAccessSessionsCommandOutput,
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
  constructor(readonly input: ListRemoteAccessSessionsCommandInput) {
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
  ): Handler<ListRemoteAccessSessionsCommandInput, ListRemoteAccessSessionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRemoteAccessSessionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListRemoteAccessSessionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DeviceFarm_20150623",
        operation: "ListRemoteAccessSessions",
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
  private serialize(input: ListRemoteAccessSessionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRemoteAccessSessionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRemoteAccessSessionsCommandOutput> {
    return de_ListRemoteAccessSessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
