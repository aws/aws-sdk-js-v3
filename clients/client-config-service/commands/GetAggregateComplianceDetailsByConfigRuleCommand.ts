import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  GetAggregateComplianceDetailsByConfigRuleRequest,
  GetAggregateComplianceDetailsByConfigRuleResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand,
  serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand,
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

export type GetAggregateComplianceDetailsByConfigRuleCommandInput = GetAggregateComplianceDetailsByConfigRuleRequest;
export type GetAggregateComplianceDetailsByConfigRuleCommandOutput = GetAggregateComplianceDetailsByConfigRuleResponse &
  __MetadataBearer;

/**
 * <p>Returns the evaluation results for the specified AWS Config
 * 			rule for a specific resource in a rule. The results indicate which
 * 			AWS resources were evaluated by the rule, when each resource was
 * 			last evaluated, and whether each resource complies with the rule. </p>
 * 		       <note>
 * 			         <p>The results can return an empty result page. But if you
 * 				have a <code>nextToken</code>, the results are displayed on the next
 * 				page.</p>
 * 		       </note>
 */
export class GetAggregateComplianceDetailsByConfigRuleCommand extends $Command<
  GetAggregateComplianceDetailsByConfigRuleCommandInput,
  GetAggregateComplianceDetailsByConfigRuleCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAggregateComplianceDetailsByConfigRuleCommandInput) {
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
  ): Handler<
    GetAggregateComplianceDetailsByConfigRuleCommandInput,
    GetAggregateComplianceDetailsByConfigRuleCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetAggregateComplianceDetailsByConfigRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAggregateComplianceDetailsByConfigRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAggregateComplianceDetailsByConfigRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetAggregateComplianceDetailsByConfigRuleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAggregateComplianceDetailsByConfigRuleCommandOutput> {
    return deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
