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
  ListPoolOriginationIdentitiesRequest,
  ListPoolOriginationIdentitiesRequestFilterSensitiveLog,
  ListPoolOriginationIdentitiesResult,
  ListPoolOriginationIdentitiesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  deserializeAws_json1_0ListPoolOriginationIdentitiesCommand,
  serializeAws_json1_0ListPoolOriginationIdentitiesCommand,
} from "../protocols/Aws_json1_0";

export interface ListPoolOriginationIdentitiesCommandInput extends ListPoolOriginationIdentitiesRequest {}
export interface ListPoolOriginationIdentitiesCommandOutput
  extends ListPoolOriginationIdentitiesResult,
    __MetadataBearer {}

/**
 * <p>Lists all associated origination identities in your pool.</p>
 *         <p>If you specify filters, the output includes information for only those origination
 *             identities that meet the filter criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, ListPoolOriginationIdentitiesCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, ListPoolOriginationIdentitiesCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const command = new ListPoolOriginationIdentitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPoolOriginationIdentitiesCommandInput} for command's `input` shape.
 * @see {@link ListPoolOriginationIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 */
export class ListPoolOriginationIdentitiesCommand extends $Command<
  ListPoolOriginationIdentitiesCommandInput,
  ListPoolOriginationIdentitiesCommandOutput,
  PinpointSMSVoiceV2ClientResolvedConfig
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

  constructor(readonly input: ListPoolOriginationIdentitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointSMSVoiceV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPoolOriginationIdentitiesCommandInput, ListPoolOriginationIdentitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPoolOriginationIdentitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "ListPoolOriginationIdentitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPoolOriginationIdentitiesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPoolOriginationIdentitiesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPoolOriginationIdentitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListPoolOriginationIdentitiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPoolOriginationIdentitiesCommandOutput> {
    return deserializeAws_json1_0ListPoolOriginationIdentitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
