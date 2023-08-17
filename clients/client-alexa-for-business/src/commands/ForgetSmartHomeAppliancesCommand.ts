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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ForgetSmartHomeAppliancesRequest, ForgetSmartHomeAppliancesResponse } from "../models/models_0";
import { de_ForgetSmartHomeAppliancesCommand, se_ForgetSmartHomeAppliancesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ForgetSmartHomeAppliancesCommand}.
 */
export interface ForgetSmartHomeAppliancesCommandInput extends ForgetSmartHomeAppliancesRequest {}
/**
 * @public
 *
 * The output of {@link ForgetSmartHomeAppliancesCommand}.
 */
export interface ForgetSmartHomeAppliancesCommandOutput extends ForgetSmartHomeAppliancesResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Forgets smart home appliances associated to a room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ForgetSmartHomeAppliancesCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ForgetSmartHomeAppliancesCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // ForgetSmartHomeAppliancesRequest
 *   RoomArn: "STRING_VALUE", // required
 * };
 * const command = new ForgetSmartHomeAppliancesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ForgetSmartHomeAppliancesCommandInput - {@link ForgetSmartHomeAppliancesCommandInput}
 * @returns {@link ForgetSmartHomeAppliancesCommandOutput}
 * @see {@link ForgetSmartHomeAppliancesCommandInput} for command's `input` shape.
 * @see {@link ForgetSmartHomeAppliancesCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class ForgetSmartHomeAppliancesCommand extends $Command<
  ForgetSmartHomeAppliancesCommandInput,
  ForgetSmartHomeAppliancesCommandOutput,
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
  constructor(readonly input: ForgetSmartHomeAppliancesCommandInput) {
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
  ): Handler<ForgetSmartHomeAppliancesCommandInput, ForgetSmartHomeAppliancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ForgetSmartHomeAppliancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "ForgetSmartHomeAppliancesCommand";
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
  private serialize(input: ForgetSmartHomeAppliancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ForgetSmartHomeAppliancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ForgetSmartHomeAppliancesCommandOutput> {
    return de_ForgetSmartHomeAppliancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
