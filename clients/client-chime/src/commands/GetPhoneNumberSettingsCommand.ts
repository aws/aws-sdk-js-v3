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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { GetPhoneNumberSettingsResponse, GetPhoneNumberSettingsResponseFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1GetPhoneNumberSettingsCommand,
  serializeAws_restJson1GetPhoneNumberSettingsCommand,
} from "../protocols/Aws_restJson1";

export interface GetPhoneNumberSettingsCommandInput {}
export interface GetPhoneNumberSettingsCommandOutput extends GetPhoneNumberSettingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the phone number settings for the administrator's AWS account, such as the default outbound calling name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetPhoneNumberSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetPhoneNumberSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetPhoneNumberSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPhoneNumberSettingsCommandInput} for command's `input` shape.
 * @see {@link GetPhoneNumberSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class GetPhoneNumberSettingsCommand extends $Command<
  GetPhoneNumberSettingsCommandInput,
  GetPhoneNumberSettingsCommandOutput,
  ChimeClientResolvedConfig
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

  constructor(readonly input: GetPhoneNumberSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPhoneNumberSettingsCommandInput, GetPhoneNumberSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPhoneNumberSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "GetPhoneNumberSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: GetPhoneNumberSettingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPhoneNumberSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPhoneNumberSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPhoneNumberSettingsCommandOutput> {
    return deserializeAws_restJson1GetPhoneNumberSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
