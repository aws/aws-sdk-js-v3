import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { CreateRegexPatternSetRequest, CreateRegexPatternSetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateRegexPatternSetCommand,
  serializeAws_json1_1CreateRegexPatternSetCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface CreateRegexPatternSetCommandInput extends CreateRegexPatternSetRequest {}
export interface CreateRegexPatternSetCommandOutput extends CreateRegexPatternSetResponse, __MetadataBearer {}

/**
 * <p>Creates a <a>RegexPatternSet</a>, which you reference in a <a>RegexPatternSetReferenceStatement</a>, to have WAF inspect a web request
 *          component for the specified patterns.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, CreateRegexPatternSetCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, CreateRegexPatternSetCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new CreateRegexPatternSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRegexPatternSetCommandInput} for command's `input` shape.
 * @see {@link CreateRegexPatternSetCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateRegexPatternSetCommand extends $Command<
  CreateRegexPatternSetCommandInput,
  CreateRegexPatternSetCommandOutput,
  WAFV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRegexPatternSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRegexPatternSetCommandInput, CreateRegexPatternSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "CreateRegexPatternSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRegexPatternSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRegexPatternSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRegexPatternSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateRegexPatternSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRegexPatternSetCommandOutput> {
    return deserializeAws_json1_1CreateRegexPatternSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
