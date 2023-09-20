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
import { RegisterAgentRequest, RegisterAgentResponse } from "../models/models_0";
import { de_RegisterAgentCommand, se_RegisterAgentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterAgentCommand}.
 */
export interface RegisterAgentCommandInput extends RegisterAgentRequest {}
/**
 * @public
 *
 * The output of {@link RegisterAgentCommand}.
 */
export interface RegisterAgentCommandOutput extends RegisterAgentResponse, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p>
 *          </note>
 *          <p> Registers a new agent with AWS Ground Station. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, RegisterAgentCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, RegisterAgentCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // RegisterAgentRequest
 *   discoveryData: { // DiscoveryData
 *     publicIpAddresses: [ // IpAddressList // required
 *       "STRING_VALUE",
 *     ],
 *     privateIpAddresses: [ // required
 *       "STRING_VALUE",
 *     ],
 *     capabilityArns: [ // CapabilityArnList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   agentDetails: { // AgentDetails
 *     agentVersion: "STRING_VALUE", // required
 *     instanceId: "STRING_VALUE", // required
 *     instanceType: "STRING_VALUE", // required
 *     reservedCpuCores: [ // AgentCpuCoresList
 *       Number("int"),
 *     ],
 *     agentCpuCores: [
 *       Number("int"),
 *     ],
 *     componentVersions: [ // ComponentVersionList // required
 *       { // ComponentVersion
 *         componentType: "STRING_VALUE", // required
 *         versions: [ // VersionStringList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new RegisterAgentCommand(input);
 * const response = await client.send(command);
 * // { // RegisterAgentResponse
 * //   agentId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterAgentCommandInput - {@link RegisterAgentCommandInput}
 * @returns {@link RegisterAgentCommandOutput}
 * @see {@link RegisterAgentCommandInput} for command's `input` shape.
 * @see {@link RegisterAgentCommandOutput} for command's `response` shape.
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
export class RegisterAgentCommand extends $Command<
  RegisterAgentCommandInput,
  RegisterAgentCommandOutput,
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
  constructor(readonly input: RegisterAgentCommandInput) {
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
  ): Handler<RegisterAgentCommandInput, RegisterAgentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RegisterAgentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "RegisterAgentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GroundStation",
        operation: "RegisterAgent",
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
  private serialize(input: RegisterAgentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RegisterAgentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterAgentCommandOutput> {
    return de_RegisterAgentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
