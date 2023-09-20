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

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import {
  DescribeAgentsRequest,
  DescribeAgentsResponse,
  DescribeAgentsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeAgentsCommand, se_DescribeAgentsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAgentsCommand}.
 */
export interface DescribeAgentsCommandInput extends DescribeAgentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAgentsCommand}.
 */
export interface DescribeAgentsCommandOutput extends DescribeAgentsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists agents or collectors as specified by ID or other filters. All agents/collectors
 *       associated with your user can be listed if you call <code>DescribeAgents</code> as is
 *       without passing any parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeAgentsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DescribeAgentsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // DescribeAgentsRequest
 *   agentIds: [ // AgentIds
 *     "STRING_VALUE",
 *   ],
 *   filters: [ // Filters
 *     { // Filter
 *       name: "STRING_VALUE", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       condition: "STRING_VALUE", // required
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAgentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAgentsResponse
 * //   agentsInfo: [ // AgentsInfo
 * //     { // AgentInfo
 * //       agentId: "STRING_VALUE",
 * //       hostName: "STRING_VALUE",
 * //       agentNetworkInfoList: [ // AgentNetworkInfoList
 * //         { // AgentNetworkInfo
 * //           ipAddress: "STRING_VALUE",
 * //           macAddress: "STRING_VALUE",
 * //         },
 * //       ],
 * //       connectorId: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       health: "HEALTHY" || "UNHEALTHY" || "RUNNING" || "UNKNOWN" || "BLACKLISTED" || "SHUTDOWN",
 * //       lastHealthPingTime: "STRING_VALUE",
 * //       collectionStatus: "STRING_VALUE",
 * //       agentType: "STRING_VALUE",
 * //       registeredTime: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAgentsCommandInput - {@link DescribeAgentsCommandInput}
 * @returns {@link DescribeAgentsCommandOutput}
 * @see {@link DescribeAgentsCommandInput} for command's `input` shape.
 * @see {@link DescribeAgentsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The user does not have permission to perform the action. Check the IAM
 *       policy associated with this user.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home Region is not set. Set the home Region to continue.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 * <p>Base exception class for all service exceptions from ApplicationDiscoveryService service.</p>
 *
 */
export class DescribeAgentsCommand extends $Command<
  DescribeAgentsCommandInput,
  DescribeAgentsCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
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
  constructor(readonly input: DescribeAgentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAgentsCommandInput, DescribeAgentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAgentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "DescribeAgentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeAgentsResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSPoseidonService_V2015_11_01",
        operation: "DescribeAgents",
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
  private serialize(input: DescribeAgentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAgentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAgentsCommandOutput> {
    return de_DescribeAgentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
