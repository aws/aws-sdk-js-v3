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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  GetAggregateComplianceDetailsByConfigRuleRequest,
  GetAggregateComplianceDetailsByConfigRuleRequestFilterSensitiveLog,
  GetAggregateComplianceDetailsByConfigRuleResponse,
  GetAggregateComplianceDetailsByConfigRuleResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand,
  serializeAws_json1_1GetAggregateComplianceDetailsByConfigRuleCommand,
} from "../protocols/Aws_json1_1";

export interface GetAggregateComplianceDetailsByConfigRuleCommandInput
  extends GetAggregateComplianceDetailsByConfigRuleRequest {}
export interface GetAggregateComplianceDetailsByConfigRuleCommandOutput
  extends GetAggregateComplianceDetailsByConfigRuleResponse,
    __MetadataBearer {}

/**
 * <p>Returns the evaluation results for the specified Config
 * 			rule for a specific resource in a rule. The results indicate which
 * 			Amazon Web Services resources were evaluated by the rule, when each resource was
 * 			last evaluated, and whether each resource complies with the rule. </p>
 * 		       <note>
 * 			         <p>The results can return an empty result page. But if you
 * 				have a <code>nextToken</code>, the results are displayed on the next
 * 				page.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetAggregateComplianceDetailsByConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetAggregateComplianceDetailsByConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetAggregateComplianceDetailsByConfigRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAggregateComplianceDetailsByConfigRuleCommandInput} for command's `input` shape.
 * @see {@link GetAggregateComplianceDetailsByConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class GetAggregateComplianceDetailsByConfigRuleCommand extends $Command<
  GetAggregateComplianceDetailsByConfigRuleCommandInput,
  GetAggregateComplianceDetailsByConfigRuleCommandOutput,
  ConfigServiceClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetAggregateComplianceDetailsByConfigRuleCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetAggregateComplianceDetailsByConfigRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAggregateComplianceDetailsByConfigRuleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetAggregateComplianceDetailsByConfigRuleResponseFilterSensitiveLog,
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
