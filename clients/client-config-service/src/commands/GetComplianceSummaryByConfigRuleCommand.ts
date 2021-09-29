import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetComplianceSummaryByConfigRuleResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetComplianceSummaryByConfigRuleCommand,
  serializeAws_json1_1GetComplianceSummaryByConfigRuleCommand,
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

export interface GetComplianceSummaryByConfigRuleCommandInput {}
export interface GetComplianceSummaryByConfigRuleCommandOutput
  extends GetComplianceSummaryByConfigRuleResponse,
    __MetadataBearer {}

/**
 * <p>Returns the number of Config rules that are compliant and
 * 			noncompliant, up to a maximum of 25 for each.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetComplianceSummaryByConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetComplianceSummaryByConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetComplianceSummaryByConfigRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComplianceSummaryByConfigRuleCommandInput} for command's `input` shape.
 * @see {@link GetComplianceSummaryByConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetComplianceSummaryByConfigRuleCommand extends $Command<
  GetComplianceSummaryByConfigRuleCommandInput,
  GetComplianceSummaryByConfigRuleCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetComplianceSummaryByConfigRuleCommandInput) {
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
  ): Handler<GetComplianceSummaryByConfigRuleCommandInput, GetComplianceSummaryByConfigRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetComplianceSummaryByConfigRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: GetComplianceSummaryByConfigRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetComplianceSummaryByConfigRuleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetComplianceSummaryByConfigRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetComplianceSummaryByConfigRuleCommandOutput> {
    return deserializeAws_json1_1GetComplianceSummaryByConfigRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
