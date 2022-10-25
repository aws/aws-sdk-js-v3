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
import {
  PutRetentionSettingsRequest,
  PutRetentionSettingsRequestFilterSensitiveLog,
  PutRetentionSettingsResponse,
  PutRetentionSettingsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1PutRetentionSettingsCommand,
  serializeAws_restJson1PutRetentionSettingsCommand,
} from "../protocols/Aws_restJson1";

export interface PutRetentionSettingsCommandInput extends PutRetentionSettingsRequest {}
export interface PutRetentionSettingsCommandOutput extends PutRetentionSettingsResponse, __MetadataBearer {}

/**
 * <p>
 * Puts retention settings for the specified Amazon Chime Enterprise account. We recommend using AWS CloudTrail to monitor usage of this API for your account. For more information, see
 * <a href="https://docs.aws.amazon.com/chime/latest/ag/cloudtrail.html">Logging Amazon Chime API Calls with AWS CloudTrail</a>
 * in the <i>Amazon Chime Administration Guide</i>.</p>
 *
 *          <p>
 * To turn off existing retention settings, remove the number of days from the corresponding
 * <b>RetentionDays</b>
 * field in the
 * <b>RetentionSettings</b>
 * object. For more information about retention settings, see
 * <a href="https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html">Managing Chat Retention Policies</a>
 * in the <i>Amazon Chime Administration Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutRetentionSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutRetentionSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new PutRetentionSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRetentionSettingsCommandInput} for command's `input` shape.
 * @see {@link PutRetentionSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class PutRetentionSettingsCommand extends $Command<
  PutRetentionSettingsCommandInput,
  PutRetentionSettingsCommandOutput,
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

  constructor(readonly input: PutRetentionSettingsCommandInput) {
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
  ): Handler<PutRetentionSettingsCommandInput, PutRetentionSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutRetentionSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "PutRetentionSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRetentionSettingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutRetentionSettingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutRetentionSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutRetentionSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRetentionSettingsCommandOutput> {
    return deserializeAws_restJson1PutRetentionSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
