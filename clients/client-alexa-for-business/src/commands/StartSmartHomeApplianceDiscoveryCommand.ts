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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import {
  StartSmartHomeApplianceDiscoveryRequest,
  StartSmartHomeApplianceDiscoveryRequestFilterSensitiveLog,
  StartSmartHomeApplianceDiscoveryResponse,
  StartSmartHomeApplianceDiscoveryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand,
  serializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand,
} from "../protocols/Aws_json1_1";

export interface StartSmartHomeApplianceDiscoveryCommandInput extends StartSmartHomeApplianceDiscoveryRequest {}
export interface StartSmartHomeApplianceDiscoveryCommandOutput
  extends StartSmartHomeApplianceDiscoveryResponse,
    __MetadataBearer {}

/**
 * <p>Initiates the discovery of any smart home appliances associated with the
 *          room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, StartSmartHomeApplianceDiscoveryCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, StartSmartHomeApplianceDiscoveryCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new StartSmartHomeApplianceDiscoveryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSmartHomeApplianceDiscoveryCommandInput} for command's `input` shape.
 * @see {@link StartSmartHomeApplianceDiscoveryCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 */
export class StartSmartHomeApplianceDiscoveryCommand extends $Command<
  StartSmartHomeApplianceDiscoveryCommandInput,
  StartSmartHomeApplianceDiscoveryCommandOutput,
  AlexaForBusinessClientResolvedConfig
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

  constructor(readonly input: StartSmartHomeApplianceDiscoveryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartSmartHomeApplianceDiscoveryCommandInput, StartSmartHomeApplianceDiscoveryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartSmartHomeApplianceDiscoveryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "StartSmartHomeApplianceDiscoveryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartSmartHomeApplianceDiscoveryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartSmartHomeApplianceDiscoveryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartSmartHomeApplianceDiscoveryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartSmartHomeApplianceDiscoveryCommandOutput> {
    return deserializeAws_json1_1StartSmartHomeApplianceDiscoveryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
