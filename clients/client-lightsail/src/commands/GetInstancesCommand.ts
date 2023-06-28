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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetInstancesRequest, GetInstancesResult } from "../models/models_1";
import { de_GetInstancesCommand, se_GetInstancesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetInstancesCommand}.
 */
export interface GetInstancesCommandInput extends GetInstancesRequest {}
/**
 * @public
 *
 * The output of {@link GetInstancesCommand}.
 */
export interface GetInstancesCommandOutput extends GetInstancesResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about all Amazon Lightsail virtual private servers, or
 *         <i>instances</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetInstancesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetInstancesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetInstancesRequest
 *   pageToken: "STRING_VALUE",
 * };
 * const command = new GetInstancesCommand(input);
 * const response = await client.send(command);
 * // { // GetInstancesResult
 * //   instances: [ // InstanceList
 * //     { // Instance
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       supportCode: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       location: { // ResourceLocation
 * //         availabilityZone: "STRING_VALUE",
 * //         regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1",
 * //       },
 * //       resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       blueprintId: "STRING_VALUE",
 * //       blueprintName: "STRING_VALUE",
 * //       bundleId: "STRING_VALUE",
 * //       addOns: [ // AddOnList
 * //         { // AddOn
 * //           name: "STRING_VALUE",
 * //           status: "STRING_VALUE",
 * //           snapshotTimeOfDay: "STRING_VALUE",
 * //           nextSnapshotTimeOfDay: "STRING_VALUE",
 * //           threshold: "STRING_VALUE",
 * //           duration: "STRING_VALUE",
 * //         },
 * //       ],
 * //       isStaticIp: true || false,
 * //       privateIpAddress: "STRING_VALUE",
 * //       publicIpAddress: "STRING_VALUE",
 * //       ipv6Addresses: [ // Ipv6AddressList
 * //         "STRING_VALUE",
 * //       ],
 * //       ipAddressType: "dualstack" || "ipv4",
 * //       hardware: { // InstanceHardware
 * //         cpuCount: Number("int"),
 * //         disks: [ // DiskList
 * //           { // Disk
 * //             name: "STRING_VALUE",
 * //             arn: "STRING_VALUE",
 * //             supportCode: "STRING_VALUE",
 * //             createdAt: new Date("TIMESTAMP"),
 * //             location: {
 * //               availabilityZone: "STRING_VALUE",
 * //               regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1",
 * //             },
 * //             resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //             tags: [
 * //               {
 * //                 key: "STRING_VALUE",
 * //                 value: "STRING_VALUE",
 * //               },
 * //             ],
 * //             addOns: [
 * //               {
 * //                 name: "STRING_VALUE",
 * //                 status: "STRING_VALUE",
 * //                 snapshotTimeOfDay: "STRING_VALUE",
 * //                 nextSnapshotTimeOfDay: "STRING_VALUE",
 * //                 threshold: "STRING_VALUE",
 * //                 duration: "STRING_VALUE",
 * //               },
 * //             ],
 * //             sizeInGb: Number("int"),
 * //             isSystemDisk: true || false,
 * //             iops: Number("int"),
 * //             path: "STRING_VALUE",
 * //             state: "pending" || "error" || "available" || "in-use" || "unknown",
 * //             attachedTo: "STRING_VALUE",
 * //             isAttached: true || false,
 * //             attachmentState: "STRING_VALUE",
 * //             gbInUse: Number("int"),
 * //             autoMountStatus: "Failed" || "Pending" || "Mounted" || "NotMounted",
 * //           },
 * //         ],
 * //         ramSizeInGb: Number("float"),
 * //       },
 * //       networking: { // InstanceNetworking
 * //         monthlyTransfer: { // MonthlyTransfer
 * //           gbPerMonthAllocated: Number("int"),
 * //         },
 * //         ports: [ // InstancePortInfoList
 * //           { // InstancePortInfo
 * //             fromPort: Number("int"),
 * //             toPort: Number("int"),
 * //             protocol: "tcp" || "all" || "udp" || "icmp",
 * //             accessFrom: "STRING_VALUE",
 * //             accessType: "Public" || "Private",
 * //             commonName: "STRING_VALUE",
 * //             accessDirection: "inbound" || "outbound",
 * //             cidrs: [ // StringList
 * //               "STRING_VALUE",
 * //             ],
 * //             ipv6Cidrs: [
 * //               "STRING_VALUE",
 * //             ],
 * //             cidrListAliases: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       state: { // InstanceState
 * //         code: Number("int"),
 * //         name: "STRING_VALUE",
 * //       },
 * //       username: "STRING_VALUE",
 * //       sshKeyName: "STRING_VALUE",
 * //       metadataOptions: { // InstanceMetadataOptions
 * //         state: "pending" || "applied",
 * //         httpTokens: "optional" || "required",
 * //         httpEndpoint: "disabled" || "enabled",
 * //         httpPutResponseHopLimit: Number("int"),
 * //         httpProtocolIpv6: "disabled" || "enabled",
 * //       },
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInstancesCommandInput - {@link GetInstancesCommandInput}
 * @returns {@link GetInstancesCommandOutput}
 * @see {@link GetInstancesCommandInput} for command's `input` shape.
 * @see {@link GetInstancesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 */
export class GetInstancesCommand extends $Command<
  GetInstancesCommandInput,
  GetInstancesCommandOutput,
  LightsailClientResolvedConfig
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
  constructor(readonly input: GetInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInstancesCommandInput, GetInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetInstancesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetInstancesCommand";
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
  private serialize(input: GetInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInstancesCommandOutput> {
    return de_GetInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
