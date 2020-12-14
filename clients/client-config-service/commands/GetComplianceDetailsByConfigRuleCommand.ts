import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetComplianceDetailsByConfigRuleRequest, GetComplianceDetailsByConfigRuleResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommand,
  serializeAws_json1_1GetComplianceDetailsByConfigRuleCommand,
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

export type GetComplianceDetailsByConfigRuleCommandInput = GetComplianceDetailsByConfigRuleRequest;
export type GetComplianceDetailsByConfigRuleCommandOutput = GetComplianceDetailsByConfigRuleResponse & __MetadataBearer;

/**
 * <p>Returns the evaluation results for the specified AWS Config
 * 			rule. The results indicate which AWS resources were evaluated by the
 * 			rule, when each resource was last evaluated, and whether each
 * 			resource complies with the rule.</p>
 */
export class GetComplianceDetailsByConfigRuleCommand extends $Command<
  GetComplianceDetailsByConfigRuleCommandInput,
  GetComplianceDetailsByConfigRuleCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetComplianceDetailsByConfigRuleCommandInput) {
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
  ): Handler<GetComplianceDetailsByConfigRuleCommandInput, GetComplianceDetailsByConfigRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetComplianceDetailsByConfigRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetComplianceDetailsByConfigRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetComplianceDetailsByConfigRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetComplianceDetailsByConfigRuleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetComplianceDetailsByConfigRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetComplianceDetailsByConfigRuleCommandOutput> {
    return deserializeAws_json1_1GetComplianceDetailsByConfigRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
