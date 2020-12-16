import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { UpdateIPSetRequest, UpdateIPSetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateIPSetCommand,
  serializeAws_json1_1UpdateIPSetCommand,
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

export type UpdateIPSetCommandInput = UpdateIPSetRequest;
export type UpdateIPSetCommandOutput = UpdateIPSetResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Updates the specified <a>IPSet</a>.</p>
 */
export class UpdateIPSetCommand extends $Command<
  UpdateIPSetCommandInput,
  UpdateIPSetCommandOutput,
  WAFV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateIPSetCommandInput) {
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
  ): Handler<UpdateIPSetCommandInput, UpdateIPSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "UpdateIPSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateIPSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateIPSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateIPSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateIPSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateIPSetCommandOutput> {
    return deserializeAws_json1_1UpdateIPSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
