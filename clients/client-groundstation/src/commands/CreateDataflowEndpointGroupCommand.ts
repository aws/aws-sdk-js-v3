// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { CreateDataflowEndpointGroupRequest, DataflowEndpointGroupIdResponse } from "../models/models_0";
import {
  de_CreateDataflowEndpointGroupCommand,
  se_CreateDataflowEndpointGroupCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateDataflowEndpointGroupCommand}.
 */
export interface CreateDataflowEndpointGroupCommandInput extends CreateDataflowEndpointGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataflowEndpointGroupCommand}.
 */
export interface CreateDataflowEndpointGroupCommandOutput extends DataflowEndpointGroupIdResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a <code>DataflowEndpoint</code> group containing the specified list of <code>DataflowEndpoint</code> objects.</p>
 *          <p>The <code>name</code> field in each endpoint is used in your mission profile <code>DataflowEndpointConfig</code>
 *          to specify which endpoints to use during a contact.</p>
 *          <p>When a contact uses multiple <code>DataflowEndpointConfig</code> objects, each <code>Config</code>
 *          must match a <code>DataflowEndpoint</code> in the same group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, CreateDataflowEndpointGroupCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, CreateDataflowEndpointGroupCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // CreateDataflowEndpointGroupRequest
 *   endpointDetails: [ // EndpointDetailsList // required
 *     { // EndpointDetails
 *       securityDetails: { // SecurityDetails
 *         subnetIds: [ // SubnetList // required
 *           "STRING_VALUE",
 *         ],
 *         securityGroupIds: [ // SecurityGroupIdList // required
 *           "STRING_VALUE",
 *         ],
 *         roleArn: "STRING_VALUE", // required
 *       },
 *       endpoint: { // DataflowEndpoint
 *         name: "STRING_VALUE",
 *         address: { // SocketAddress
 *           name: "STRING_VALUE", // required
 *           port: Number("int"), // required
 *         },
 *         status: "STRING_VALUE",
 *         mtu: Number("int"),
 *       },
 *       awsGroundStationAgentEndpoint: { // AwsGroundStationAgentEndpoint
 *         name: "STRING_VALUE", // required
 *         egressAddress: { // ConnectionDetails
 *           socketAddress: {
 *             name: "STRING_VALUE", // required
 *             port: Number("int"), // required
 *           },
 *           mtu: Number("int"),
 *         },
 *         ingressAddress: { // RangedConnectionDetails
 *           socketAddress: { // RangedSocketAddress
 *             name: "STRING_VALUE", // required
 *             portRange: { // IntegerRange
 *               minimum: Number("int"), // required
 *               maximum: Number("int"), // required
 *             },
 *           },
 *           mtu: Number("int"),
 *         },
 *         agentStatus: "STRING_VALUE",
 *         auditResults: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   contactPrePassDurationSeconds: Number("int"),
 *   contactPostPassDurationSeconds: Number("int"),
 * };
 * const command = new CreateDataflowEndpointGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateDataflowEndpointGroupCommandInput - {@link CreateDataflowEndpointGroupCommandInput}
 * @returns {@link CreateDataflowEndpointGroupCommandOutput}
 * @see {@link CreateDataflowEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDataflowEndpointGroupCommandOutput} for command's `response` shape.
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
 *
 */
export class CreateDataflowEndpointGroupCommand extends $Command<
  CreateDataflowEndpointGroupCommandInput,
  CreateDataflowEndpointGroupCommandOutput,
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
  constructor(readonly input: CreateDataflowEndpointGroupCommandInput) {
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
  ): Handler<CreateDataflowEndpointGroupCommandInput, CreateDataflowEndpointGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDataflowEndpointGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "CreateDataflowEndpointGroupCommand";
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
  private serialize(input: CreateDataflowEndpointGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDataflowEndpointGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDataflowEndpointGroupCommandOutput> {
    return de_CreateDataflowEndpointGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
