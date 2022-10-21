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
  ForgetSmartHomeAppliancesRequest,
  ForgetSmartHomeAppliancesRequestFilterSensitiveLog,
  ForgetSmartHomeAppliancesResponse,
  ForgetSmartHomeAppliancesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ForgetSmartHomeAppliancesCommand,
  serializeAws_json1_1ForgetSmartHomeAppliancesCommand,
} from "../protocols/Aws_json1_1";

export interface ForgetSmartHomeAppliancesCommandInput extends ForgetSmartHomeAppliancesRequest {}
export interface ForgetSmartHomeAppliancesCommandOutput extends ForgetSmartHomeAppliancesResponse, __MetadataBearer {}

/**
 * <p>Forgets smart home appliances associated to a room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ForgetSmartHomeAppliancesCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ForgetSmartHomeAppliancesCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new ForgetSmartHomeAppliancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ForgetSmartHomeAppliancesCommandInput} for command's `input` shape.
 * @see {@link ForgetSmartHomeAppliancesCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
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
      inputFilterSensitiveLog: ForgetSmartHomeAppliancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ForgetSmartHomeAppliancesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ForgetSmartHomeAppliancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ForgetSmartHomeAppliancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ForgetSmartHomeAppliancesCommandOutput> {
    return deserializeAws_json1_1ForgetSmartHomeAppliancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
