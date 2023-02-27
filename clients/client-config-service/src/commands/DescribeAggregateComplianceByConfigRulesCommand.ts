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
  DescribeAggregateComplianceByConfigRulesRequest,
  DescribeAggregateComplianceByConfigRulesRequestFilterSensitiveLog,
  DescribeAggregateComplianceByConfigRulesResponse,
  DescribeAggregateComplianceByConfigRulesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand,
  serializeAws_json1_1DescribeAggregateComplianceByConfigRulesCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DescribeAggregateComplianceByConfigRulesCommand}.
 */
export interface DescribeAggregateComplianceByConfigRulesCommandInput
  extends DescribeAggregateComplianceByConfigRulesRequest {}
/**
 * The output of {@link DescribeAggregateComplianceByConfigRulesCommand}.
 */
export interface DescribeAggregateComplianceByConfigRulesCommandOutput
  extends DescribeAggregateComplianceByConfigRulesResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of compliant and noncompliant rules with the
 * 			number of resources for compliant and noncompliant rules. Does not display rules that do not have compliance results.
 * 			</p>
 * 		       <note>
 * 			         <p>The results can return an empty result page, but if you
 * 				have a <code>nextToken</code>, the results are displayed on the next
 * 				page.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeAggregateComplianceByConfigRulesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeAggregateComplianceByConfigRulesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeAggregateComplianceByConfigRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAggregateComplianceByConfigRulesCommandInput} for command's `input` shape.
 * @see {@link DescribeAggregateComplianceByConfigRulesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class DescribeAggregateComplianceByConfigRulesCommand extends $Command<
  DescribeAggregateComplianceByConfigRulesCommandInput,
  DescribeAggregateComplianceByConfigRulesCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeAggregateComplianceByConfigRulesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeAggregateComplianceByConfigRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAggregateComplianceByConfigRulesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAggregateComplianceByConfigRulesResponseFilterSensitiveLog,
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
