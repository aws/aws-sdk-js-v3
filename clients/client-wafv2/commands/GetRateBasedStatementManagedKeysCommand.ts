import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { GetRateBasedStatementManagedKeysRequest, GetRateBasedStatementManagedKeysResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetRateBasedStatementManagedKeysCommand,
  serializeAws_json1_1GetRateBasedStatementManagedKeysCommand,
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

export type GetRateBasedStatementManagedKeysCommandInput = GetRateBasedStatementManagedKeysRequest;
export type GetRateBasedStatementManagedKeysCommandOutput = GetRateBasedStatementManagedKeysResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>.  </p>
 *          </note>
 *          <p>Retrieves the keys that are currently blocked by a rate-based rule. The maximum number of managed keys that can be blocked for a single rate-based rule is 10,000. If more than 10,000 addresses exceed the rate limit, those with the highest rates are blocked.</p>
 */
export class GetRateBasedStatementManagedKeysCommand extends $Command<
  GetRateBasedStatementManagedKeysCommandInput,
  GetRateBasedStatementManagedKeysCommandOutput,
  WAFV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRateBasedStatementManagedKeysCommandInput) {
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
  ): Handler<GetRateBasedStatementManagedKeysCommandInput, GetRateBasedStatementManagedKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "GetRateBasedStatementManagedKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRateBasedStatementManagedKeysRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRateBasedStatementManagedKeysResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetRateBasedStatementManagedKeysCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRateBasedStatementManagedKeysCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRateBasedStatementManagedKeysCommandOutput> {
    return deserializeAws_json1_1GetRateBasedStatementManagedKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
