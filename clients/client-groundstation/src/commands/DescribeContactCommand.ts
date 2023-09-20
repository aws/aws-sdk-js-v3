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

import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { DescribeContactRequest, DescribeContactResponse } from "../models/models_0";
import { de_DescribeContactCommand, se_DescribeContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeContactCommand}.
 */
export interface DescribeContactCommandInput extends DescribeContactRequest {}
/**
 * @public
 *
 * The output of {@link DescribeContactCommand}.
 */
export interface DescribeContactCommandOutput extends DescribeContactResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes an existing contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, DescribeContactCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, DescribeContactCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // DescribeContactRequest
 *   contactId: "STRING_VALUE", // required
 * };
 * const command = new DescribeContactCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContactResponse
 * //   contactId: "STRING_VALUE",
 * //   missionProfileArn: "STRING_VALUE",
 * //   satelliteArn: "STRING_VALUE",
 * //   startTime: new Date("TIMESTAMP"),
 * //   endTime: new Date("TIMESTAMP"),
 * //   prePassStartTime: new Date("TIMESTAMP"),
 * //   postPassEndTime: new Date("TIMESTAMP"),
 * //   groundStation: "STRING_VALUE",
 * //   contactStatus: "STRING_VALUE",
 * //   errorMessage: "STRING_VALUE",
 * //   maximumElevation: { // Elevation
 * //     value: Number("double"), // required
 * //     unit: "STRING_VALUE", // required
 * //   },
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   region: "STRING_VALUE",
 * //   dataflowList: [ // DataflowList
 * //     { // DataflowDetail
 * //       source: { // Source
 * //         configType: "STRING_VALUE",
 * //         configId: "STRING_VALUE",
 * //         configDetails: { // ConfigDetails Union: only one key present
 * //           endpointDetails: { // EndpointDetails
 * //             securityDetails: { // SecurityDetails
 * //               subnetIds: [ // SubnetList // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               securityGroupIds: [ // SecurityGroupIdList // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               roleArn: "STRING_VALUE", // required
 * //             },
 * //             endpoint: { // DataflowEndpoint
 * //               name: "STRING_VALUE",
 * //               address: { // SocketAddress
 * //                 name: "STRING_VALUE", // required
 * //                 port: Number("int"), // required
 * //               },
 * //               status: "STRING_VALUE",
 * //               mtu: Number("int"),
 * //             },
 * //             awsGroundStationAgentEndpoint: { // AwsGroundStationAgentEndpoint
 * //               name: "STRING_VALUE", // required
 * //               egressAddress: { // ConnectionDetails
 * //                 socketAddress: {
 * //                   name: "STRING_VALUE", // required
 * //                   port: Number("int"), // required
 * //                 },
 * //                 mtu: Number("int"),
 * //               },
 * //               ingressAddress: { // RangedConnectionDetails
 * //                 socketAddress: { // RangedSocketAddress
 * //                   name: "STRING_VALUE", // required
 * //                   portRange: { // IntegerRange
 * //                     minimum: Number("int"), // required
 * //                     maximum: Number("int"), // required
 * //                   },
 * //                 },
 * //                 mtu: Number("int"),
 * //               },
 * //               agentStatus: "STRING_VALUE",
 * //               auditResults: "STRING_VALUE",
 * //             },
 * //             healthStatus: "STRING_VALUE",
 * //             healthReasons: [ // CapabilityHealthReasonList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           antennaDemodDecodeDetails: { // AntennaDemodDecodeDetails
 * //             outputNode: "STRING_VALUE",
 * //           },
 * //           s3RecordingDetails: { // S3RecordingDetails
 * //             bucketArn: "STRING_VALUE",
 * //             keyTemplate: "STRING_VALUE",
 * //           },
 * //         },
 * //         dataflowSourceRegion: "STRING_VALUE",
 * //       },
 * //       destination: { // Destination
 * //         configType: "STRING_VALUE",
 * //         configId: "STRING_VALUE",
 * //         configDetails: {//  Union: only one key present
 * //           endpointDetails: {
 * //             securityDetails: {
 * //               subnetIds: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               securityGroupIds: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               roleArn: "STRING_VALUE", // required
 * //             },
 * //             endpoint: {
 * //               name: "STRING_VALUE",
 * //               address: {
 * //                 name: "STRING_VALUE", // required
 * //                 port: Number("int"), // required
 * //               },
 * //               status: "STRING_VALUE",
 * //               mtu: Number("int"),
 * //             },
 * //             awsGroundStationAgentEndpoint: {
 * //               name: "STRING_VALUE", // required
 * //               egressAddress: {
 * //                 socketAddress: {
 * //                   name: "STRING_VALUE", // required
 * //                   port: Number("int"), // required
 * //                 },
 * //                 mtu: Number("int"),
 * //               },
 * //               ingressAddress: {
 * //                 socketAddress: {
 * //                   name: "STRING_VALUE", // required
 * //                   portRange: {
 * //                     minimum: Number("int"), // required
 * //                     maximum: Number("int"), // required
 * //                   },
 * //                 },
 * //                 mtu: Number("int"),
 * //               },
 * //               agentStatus: "STRING_VALUE",
 * //               auditResults: "STRING_VALUE",
 * //             },
 * //             healthStatus: "STRING_VALUE",
 * //             healthReasons: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           antennaDemodDecodeDetails: {
 * //             outputNode: "STRING_VALUE",
 * //           },
 * //           s3RecordingDetails: {
 * //             bucketArn: "STRING_VALUE",
 * //             keyTemplate: "STRING_VALUE",
 * //           },
 * //         },
 * //         dataflowDestinationRegion: "STRING_VALUE",
 * //       },
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeContactCommandInput - {@link DescribeContactCommandInput}
 * @returns {@link DescribeContactCommandOutput}
 * @see {@link DescribeContactCommandInput} for command's `input` shape.
 * @see {@link DescribeContactCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 */
export class DescribeContactCommand extends $Command<
  DescribeContactCommandInput,
  DescribeContactCommandOutput,
  GroundStationClientResolvedConfig
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
  constructor(readonly input: DescribeContactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeContactCommandInput, DescribeContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeContactCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "DescribeContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GroundStation",
        operation: "DescribeContact",
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
  private serialize(input: DescribeContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeContactCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeContactCommandOutput> {
    return de_DescribeContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
