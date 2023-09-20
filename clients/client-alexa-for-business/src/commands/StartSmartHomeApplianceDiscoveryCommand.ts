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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { StartSmartHomeApplianceDiscoveryRequest, StartSmartHomeApplianceDiscoveryResponse } from "../models/models_0";
import {
  de_StartSmartHomeApplianceDiscoveryCommand,
  se_StartSmartHomeApplianceDiscoveryCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartSmartHomeApplianceDiscoveryCommand}.
 */
export interface StartSmartHomeApplianceDiscoveryCommandInput extends StartSmartHomeApplianceDiscoveryRequest {}
/**
 * @public
 *
 * The output of {@link StartSmartHomeApplianceDiscoveryCommand}.
 */
export interface StartSmartHomeApplianceDiscoveryCommandOutput
  extends StartSmartHomeApplianceDiscoveryResponse,
    __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Initiates the discovery of any smart home appliances associated with the
 *          room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, StartSmartHomeApplianceDiscoveryCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, StartSmartHomeApplianceDiscoveryCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // StartSmartHomeApplianceDiscoveryRequest
 *   RoomArn: "STRING_VALUE", // required
 * };
 * const command = new StartSmartHomeApplianceDiscoveryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartSmartHomeApplianceDiscoveryCommandInput - {@link StartSmartHomeApplianceDiscoveryCommandInput}
 * @returns {@link StartSmartHomeApplianceDiscoveryCommandOutput}
 * @see {@link StartSmartHomeApplianceDiscoveryCommandInput} for command's `input` shape.
 * @see {@link StartSmartHomeApplianceDiscoveryCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AlexaForBusiness",
        operation: "StartSmartHomeApplianceDiscovery",
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
  private serialize(
    input: StartSmartHomeApplianceDiscoveryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_StartSmartHomeApplianceDiscoveryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartSmartHomeApplianceDiscoveryCommandOutput> {
    return de_StartSmartHomeApplianceDiscoveryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
