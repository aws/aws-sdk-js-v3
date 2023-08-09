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

import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { GetDataflowEndpointGroupRequest, GetDataflowEndpointGroupResponse } from "../models/models_0";
import { de_GetDataflowEndpointGroupCommand, se_GetDataflowEndpointGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDataflowEndpointGroupCommand}.
 */
export interface GetDataflowEndpointGroupCommandInput extends GetDataflowEndpointGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetDataflowEndpointGroupCommand}.
 */
export interface GetDataflowEndpointGroupCommandOutput extends GetDataflowEndpointGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the dataflow endpoint group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, GetDataflowEndpointGroupCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, GetDataflowEndpointGroupCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // GetDataflowEndpointGroupRequest
 *   dataflowEndpointGroupId: "STRING_VALUE", // required
 * };
 * const command = new GetDataflowEndpointGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetDataflowEndpointGroupResponse
 * //   dataflowEndpointGroupId: "STRING_VALUE",
 * //   dataflowEndpointGroupArn: "STRING_VALUE",
 * //   endpointsDetails: [ // EndpointDetailsList
 * //     { // EndpointDetails
 * //       securityDetails: { // SecurityDetails
 * //         subnetIds: [ // SubnetList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         securityGroupIds: [ // SecurityGroupIdList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         roleArn: "STRING_VALUE", // required
 * //       },
 * //       endpoint: { // DataflowEndpoint
 * //         name: "STRING_VALUE",
 * //         address: { // SocketAddress
 * //           name: "STRING_VALUE", // required
 * //           port: Number("int"), // required
 * //         },
 * //         status: "STRING_VALUE",
 * //         mtu: Number("int"),
 * //       },
 * //       awsGroundStationAgentEndpoint: { // AwsGroundStationAgentEndpoint
 * //         name: "STRING_VALUE", // required
 * //         egressAddress: { // ConnectionDetails
 * //           socketAddress: {
 * //             name: "STRING_VALUE", // required
 * //             port: Number("int"), // required
 * //           },
 * //           mtu: Number("int"),
 * //         },
 * //         ingressAddress: { // RangedConnectionDetails
 * //           socketAddress: { // RangedSocketAddress
 * //             name: "STRING_VALUE", // required
 * //             portRange: { // IntegerRange
 * //               minimum: Number("int"), // required
 * //               maximum: Number("int"), // required
 * //             },
 * //           },
 * //           mtu: Number("int"),
 * //         },
 * //         agentStatus: "STRING_VALUE",
 * //         auditResults: "STRING_VALUE",
 * //       },
 * //       healthStatus: "STRING_VALUE",
 * //       healthReasons: [ // CapabilityHealthReasonList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   contactPrePassDurationSeconds: Number("int"),
 * //   contactPostPassDurationSeconds: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetDataflowEndpointGroupCommandInput - {@link GetDataflowEndpointGroupCommandInput}
 * @returns {@link GetDataflowEndpointGroupCommandOutput}
 * @see {@link GetDataflowEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link GetDataflowEndpointGroupCommandOutput} for command's `response` shape.
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
export class GetDataflowEndpointGroupCommand extends $Command<
  GetDataflowEndpointGroupCommandInput,
  GetDataflowEndpointGroupCommandOutput,
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
  constructor(readonly input: GetDataflowEndpointGroupCommandInput) {
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
  ): Handler<GetDataflowEndpointGroupCommandInput, GetDataflowEndpointGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDataflowEndpointGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "GetDataflowEndpointGroupCommand";
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
  private serialize(input: GetDataflowEndpointGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDataflowEndpointGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataflowEndpointGroupCommandOutput> {
    return de_GetDataflowEndpointGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
