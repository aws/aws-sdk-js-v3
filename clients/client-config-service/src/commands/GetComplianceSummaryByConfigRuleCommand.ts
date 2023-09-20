// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetComplianceSummaryByConfigRuleResponse } from "../models/models_0";
import {
  de_GetComplianceSummaryByConfigRuleCommand,
  se_GetComplianceSummaryByConfigRuleCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetComplianceSummaryByConfigRuleCommand}.
 */
export interface GetComplianceSummaryByConfigRuleCommandInput {}
/**
 * @public
 *
 * The output of {@link GetComplianceSummaryByConfigRuleCommand}.
 */
export interface GetComplianceSummaryByConfigRuleCommandOutput
  extends GetComplianceSummaryByConfigRuleResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the number of Config rules that are compliant and
 * 			noncompliant, up to a maximum of 25 for each.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetComplianceSummaryByConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetComplianceSummaryByConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = {};
 * const command = new GetComplianceSummaryByConfigRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetComplianceSummaryByConfigRuleResponse
 * //   ComplianceSummary: { // ComplianceSummary
 * //     CompliantResourceCount: { // ComplianceContributorCount
 * //       CappedCount: Number("int"),
 * //       CapExceeded: true || false,
 * //     },
 * //     NonCompliantResourceCount: {
 * //       CappedCount: Number("int"),
 * //       CapExceeded: true || false,
 * //     },
 * //     ComplianceSummaryTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetComplianceSummaryByConfigRuleCommandInput - {@link GetComplianceSummaryByConfigRuleCommandInput}
 * @returns {@link GetComplianceSummaryByConfigRuleCommandOutput}
 * @see {@link GetComplianceSummaryByConfigRuleCommandInput} for command's `input` shape.
 * @see {@link GetComplianceSummaryByConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class GetComplianceSummaryByConfigRuleCommand extends $Command<
  GetComplianceSummaryByConfigRuleCommandInput,
  GetComplianceSummaryByConfigRuleCommandOutput,
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

  /**
   * @public
   */
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetComplianceSummaryByConfigRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetComplianceSummaryByConfigRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StarlingDoveService",
        operation: "GetComplianceSummaryByConfigRule",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: GetComplianceSummaryByConfigRuleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetComplianceSummaryByConfigRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetComplianceSummaryByConfigRuleCommandOutput> {
    return de_GetComplianceSummaryByConfigRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
