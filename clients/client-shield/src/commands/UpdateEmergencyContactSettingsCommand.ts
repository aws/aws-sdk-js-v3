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

import {
  UpdateEmergencyContactSettingsRequest,
  UpdateEmergencyContactSettingsRequestFilterSensitiveLog,
  UpdateEmergencyContactSettingsResponse,
  UpdateEmergencyContactSettingsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateEmergencyContactSettingsCommand,
  serializeAws_json1_1UpdateEmergencyContactSettingsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

export interface UpdateEmergencyContactSettingsCommandInput extends UpdateEmergencyContactSettingsRequest {}
export interface UpdateEmergencyContactSettingsCommandOutput
  extends UpdateEmergencyContactSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Updates the details of the list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, UpdateEmergencyContactSettingsCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, UpdateEmergencyContactSettingsCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new UpdateEmergencyContactSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEmergencyContactSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateEmergencyContactSettingsCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 */
export class UpdateEmergencyContactSettingsCommand extends $Command<
  UpdateEmergencyContactSettingsCommandInput,
  UpdateEmergencyContactSettingsCommandOutput,
  ShieldClientResolvedConfig
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

  constructor(readonly input: UpdateEmergencyContactSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateEmergencyContactSettingsCommandInput, UpdateEmergencyContactSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateEmergencyContactSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "UpdateEmergencyContactSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateEmergencyContactSettingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateEmergencyContactSettingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateEmergencyContactSettingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateEmergencyContactSettingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateEmergencyContactSettingsCommandOutput> {
    return deserializeAws_json1_1UpdateEmergencyContactSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
