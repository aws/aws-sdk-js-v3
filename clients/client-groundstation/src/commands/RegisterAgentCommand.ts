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
import { RegisterAgentRequest, RegisterAgentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RegisterAgentCommand,
  serializeAws_restJson1RegisterAgentCommand,
} from "../protocols/Aws_restJson1";

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
 * <p>Registers a new agent with AWS Groundstation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, RegisterAgentCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, RegisterAgentCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = {
 *   discoveryData: {
 *     publicIpAddresses: [ // required
 *       "STRING_VALUE",
 *     ],
 *     privateIpAddresses: [ // required
 *       "STRING_VALUE",
 *     ],
 *     capabilityArns: [ // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   agentDetails: {
 *     agentVersion: "STRING_VALUE", // required
 *     instanceId: "STRING_VALUE", // required
 *     instanceType: "STRING_VALUE", // required
 *     reservedCpuCores: [ // required
 *       Number("int"),
 *     ],
 *     componentVersions: [ // required
 *       {
 *         componentType: "STRING_VALUE", // required
 *         versions: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new RegisterAgentCommand(input);
 * const response = await client.send(command);
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
    return serializeAws_restJson1RegisterAgentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterAgentCommandOutput> {
    return deserializeAws_restJson1RegisterAgentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
