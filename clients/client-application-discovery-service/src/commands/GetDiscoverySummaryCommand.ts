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

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { GetDiscoverySummaryRequest, GetDiscoverySummaryResponse } from "../models/models_0";
import { de_GetDiscoverySummaryCommand, se_GetDiscoverySummaryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDiscoverySummaryCommand}.
 */
export interface GetDiscoverySummaryCommandInput extends GetDiscoverySummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetDiscoverySummaryCommand}.
 */
export interface GetDiscoverySummaryCommandOutput extends GetDiscoverySummaryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a short summary of discovered assets.</p>
 *          <p>This API operation takes no request parameters and is called as is at the command
 *       prompt as shown in the example.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, GetDiscoverySummaryCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, GetDiscoverySummaryCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = {};
 * const command = new GetDiscoverySummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetDiscoverySummaryResponse
 * //   servers: Number("long"),
 * //   applications: Number("long"),
 * //   serversMappedToApplications: Number("long"),
 * //   serversMappedtoTags: Number("long"),
 * //   agentSummary: { // CustomerAgentInfo
 * //     activeAgents: Number("int"), // required
 * //     healthyAgents: Number("int"), // required
 * //     blackListedAgents: Number("int"), // required
 * //     shutdownAgents: Number("int"), // required
 * //     unhealthyAgents: Number("int"), // required
 * //     totalAgents: Number("int"), // required
 * //     unknownAgents: Number("int"), // required
 * //   },
 * //   connectorSummary: { // CustomerConnectorInfo
 * //     activeConnectors: Number("int"), // required
 * //     healthyConnectors: Number("int"), // required
 * //     blackListedConnectors: Number("int"), // required
 * //     shutdownConnectors: Number("int"), // required
 * //     unhealthyConnectors: Number("int"), // required
 * //     totalConnectors: Number("int"), // required
 * //     unknownConnectors: Number("int"), // required
 * //   },
 * //   meCollectorSummary: { // CustomerMeCollectorInfo
 * //     activeMeCollectors: Number("int"), // required
 * //     healthyMeCollectors: Number("int"), // required
 * //     denyListedMeCollectors: Number("int"), // required
 * //     shutdownMeCollectors: Number("int"), // required
 * //     unhealthyMeCollectors: Number("int"), // required
 * //     totalMeCollectors: Number("int"), // required
 * //     unknownMeCollectors: Number("int"), // required
 * //   },
 * //   agentlessCollectorSummary: { // CustomerAgentlessCollectorInfo
 * //     activeAgentlessCollectors: Number("int"), // required
 * //     healthyAgentlessCollectors: Number("int"), // required
 * //     denyListedAgentlessCollectors: Number("int"), // required
 * //     shutdownAgentlessCollectors: Number("int"), // required
 * //     unhealthyAgentlessCollectors: Number("int"), // required
 * //     totalAgentlessCollectors: Number("int"), // required
 * //     unknownAgentlessCollectors: Number("int"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDiscoverySummaryCommandInput - {@link GetDiscoverySummaryCommandInput}
 * @returns {@link GetDiscoverySummaryCommandOutput}
 * @see {@link GetDiscoverySummaryCommandInput} for command's `input` shape.
 * @see {@link GetDiscoverySummaryCommandOutput} for command's `response` shape.
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
export class GetDiscoverySummaryCommand extends $Command<
  GetDiscoverySummaryCommandInput,
  GetDiscoverySummaryCommandOutput,
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
  constructor(readonly input: GetDiscoverySummaryCommandInput) {
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
  ): Handler<GetDiscoverySummaryCommandInput, GetDiscoverySummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDiscoverySummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "GetDiscoverySummaryCommand";
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
  private serialize(input: GetDiscoverySummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDiscoverySummaryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDiscoverySummaryCommandOutput> {
    return de_GetDiscoverySummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
