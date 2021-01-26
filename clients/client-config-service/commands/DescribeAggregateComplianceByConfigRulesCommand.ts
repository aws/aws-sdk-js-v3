import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  DescribeAggregateComplianceByConfigRulesRequest,
  DescribeAggregateComplianceByConfigRulesResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand,
  serializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand,
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

export type DescribeAggregateComplianceByConfigRulesCommandInput = DescribeAggregateComplianceByConfigRulesRequest;
export type DescribeAggregateComplianceByConfigRulesCommandOutput = DescribeAggregateComplianceByConfigRulesResponse &
  __MetadataBearer;

/**
 * <p>Returns a list of compliant and noncompliant rules with the
 * 			number of resources for compliant and noncompliant rules.
 * 			</p>
 * 		       <note>
 * 			         <p>The results can return an empty result page, but if you
 * 				have a <code>nextToken</code>, the results are displayed on the next
 * 				page.</p>
 * 		       </note>
 */
export class DescribeAggregateComplianceByConfigRulesCommand extends $Command<
  DescribeAggregateComplianceByConfigRulesCommandInput,
  DescribeAggregateComplianceByConfigRulesCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAggregateComplianceByConfigRulesCommandInput) {
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
    DescribeAggregateComplianceByConfigRulesCommandInput,
    DescribeAggregateComplianceByConfigRulesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeAggregateComplianceByConfigRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAggregateComplianceByConfigRulesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAggregateComplianceByConfigRulesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeAggregateComplianceByConfigRulesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAggregateComplianceByConfigRulesCommandOutput> {
    return deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
