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
  DescribeConfigurationSetsRequest,
  DescribeConfigurationSetsRequestFilterSensitiveLog,
  DescribeConfigurationSetsResult,
  DescribeConfigurationSetsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  deserializeAws_json1_0DescribeConfigurationSetsCommand,
  serializeAws_json1_0DescribeConfigurationSetsCommand,
} from "../protocols/Aws_json1_0";

export interface DescribeConfigurationSetsCommandInput extends DescribeConfigurationSetsRequest {}
export interface DescribeConfigurationSetsCommandOutput extends DescribeConfigurationSetsResult, __MetadataBearer {}

/**
 * <p>Describes the specified configuration sets or all in your account.</p>
 *         <p>If you specify configuration set names, the output includes information for only the
 *             specified configuration sets. If you specify filters, the output includes information
 *             for only those configuration sets that meet the filter criteria. If you don't specify
 *             configuration set names or filters, the output includes information for all
 *             configuration sets.</p>
 *         <p>If you specify a configuration set name that isn't valid, an error is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeConfigurationSetsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeConfigurationSetsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const command = new DescribeConfigurationSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConfigurationSetsCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationSetsCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 */
export class DescribeConfigurationSetsCommand extends $Command<
  DescribeConfigurationSetsCommandInput,
  DescribeConfigurationSetsCommandOutput,
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

  constructor(readonly input: DescribeConfigurationSetsCommandInput) {
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
  ): Handler<DescribeConfigurationSetsCommandInput, DescribeConfigurationSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConfigurationSetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "DescribeConfigurationSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConfigurationSetsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeConfigurationSetsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeConfigurationSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeConfigurationSetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConfigurationSetsCommandOutput> {
    return deserializeAws_json1_0DescribeConfigurationSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
