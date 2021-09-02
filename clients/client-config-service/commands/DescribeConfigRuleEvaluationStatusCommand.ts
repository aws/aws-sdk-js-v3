import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  DescribeConfigRuleEvaluationStatusRequest,
  DescribeConfigRuleEvaluationStatusResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand,
  serializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand,
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

export interface DescribeConfigRuleEvaluationStatusCommandInput extends DescribeConfigRuleEvaluationStatusRequest {}
export interface DescribeConfigRuleEvaluationStatusCommandOutput
  extends DescribeConfigRuleEvaluationStatusResponse,
    __MetadataBearer {}

/**
 * <p>Returns status information for each of your Config managed rules. The status includes information such as the last time Config invoked the rule, the last time Config failed to invoke
 * 			the rule, and the related error for the last failure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConfigRuleEvaluationStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConfigRuleEvaluationStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeConfigRuleEvaluationStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConfigRuleEvaluationStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigRuleEvaluationStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeConfigRuleEvaluationStatusCommand extends $Command<
  DescribeConfigRuleEvaluationStatusCommandInput,
  DescribeConfigRuleEvaluationStatusCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeConfigRuleEvaluationStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConfigRuleEvaluationStatusCommandInput, DescribeConfigRuleEvaluationStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeConfigRuleEvaluationStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConfigRuleEvaluationStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeConfigRuleEvaluationStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeConfigRuleEvaluationStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConfigRuleEvaluationStatusCommandOutput> {
    return deserializeAws_json1_1DescribeConfigRuleEvaluationStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
