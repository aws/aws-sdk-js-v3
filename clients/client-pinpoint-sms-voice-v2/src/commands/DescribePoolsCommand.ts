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
  DescribePoolsRequest,
  DescribePoolsRequestFilterSensitiveLog,
  DescribePoolsResult,
  DescribePoolsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  deserializeAws_json1_0DescribePoolsCommand,
  serializeAws_json1_0DescribePoolsCommand,
} from "../protocols/Aws_json1_0";

export interface DescribePoolsCommandInput extends DescribePoolsRequest {}
export interface DescribePoolsCommandOutput extends DescribePoolsResult, __MetadataBearer {}

/**
 * <p>Retrieves the specified pools or all pools associated with your Amazon Web Services
 *             account.</p>
 *         <p>If you specify pool IDs, the output includes information for only the specified pools.
 *             If you specify filters, the output includes information for only those pools that meet
 *             the filter criteria. If you don't specify pool IDs or filters, the output includes
 *             information for all pools.</p>
 *         <p>If you specify a pool ID that isn't valid, an Error is returned.</p>
 *         <p>A pool is a collection of phone numbers and SenderIds. A pool can include one or more
 *             phone numbers and SenderIds that are associated with your Amazon Web Services
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribePoolsCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribePoolsCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const command = new DescribePoolsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePoolsCommandInput} for command's `input` shape.
 * @see {@link DescribePoolsCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 */
export class DescribePoolsCommand extends $Command<
  DescribePoolsCommandInput,
  DescribePoolsCommandOutput,
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

  constructor(readonly input: DescribePoolsCommandInput) {
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
  ): Handler<DescribePoolsCommandInput, DescribePoolsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribePoolsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointSMSVoiceV2Client";
    const commandName = "DescribePoolsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePoolsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribePoolsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePoolsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribePoolsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePoolsCommandOutput> {
    return deserializeAws_json1_0DescribePoolsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
