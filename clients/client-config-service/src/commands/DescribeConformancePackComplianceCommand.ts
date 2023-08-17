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
} from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  DescribeConformancePackComplianceRequest,
  DescribeConformancePackComplianceResponse,
} from "../models/models_0";
import {
  de_DescribeConformancePackComplianceCommand,
  se_DescribeConformancePackComplianceCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeConformancePackComplianceCommand}.
 */
export interface DescribeConformancePackComplianceCommandInput extends DescribeConformancePackComplianceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConformancePackComplianceCommand}.
 */
export interface DescribeConformancePackComplianceCommandOutput
  extends DescribeConformancePackComplianceResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns compliance details for each rule in that conformance pack.</p>
 *          <note>
 *             <p>You must provide exact rule names.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConformancePackComplianceCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConformancePackComplianceCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeConformancePackComplianceRequest
 *   ConformancePackName: "STRING_VALUE", // required
 *   Filters: { // ConformancePackComplianceFilters
 *     ConfigRuleNames: [ // ConformancePackConfigRuleNames
 *       "STRING_VALUE",
 *     ],
 *     ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "INSUFFICIENT_DATA",
 *   },
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeConformancePackComplianceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConformancePackComplianceResponse
 * //   ConformancePackName: "STRING_VALUE", // required
 * //   ConformancePackRuleComplianceList: [ // ConformancePackRuleComplianceList // required
 * //     { // ConformancePackRuleCompliance
 * //       ConfigRuleName: "STRING_VALUE",
 * //       ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "INSUFFICIENT_DATA",
 * //       Controls: [ // ControlsList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConformancePackComplianceCommandInput - {@link DescribeConformancePackComplianceCommandInput}
 * @returns {@link DescribeConformancePackComplianceCommandOutput}
 * @see {@link DescribeConformancePackComplianceCommandInput} for command's `input` shape.
 * @see {@link DescribeConformancePackComplianceCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidLimitException} (client fault)
 *  <p>The specified limit is outside the allowable range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link NoSuchConfigRuleInConformancePackException} (client fault)
 *  <p>Config rule that you passed in the filter does not exist.</p>
 *
 * @throws {@link NoSuchConformancePackException} (client fault)
 *  <p>You specified one or more conformance packs that do not exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class DescribeConformancePackComplianceCommand extends $Command<
  DescribeConformancePackComplianceCommandInput,
  DescribeConformancePackComplianceCommandOutput,
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
  constructor(readonly input: DescribeConformancePackComplianceCommandInput) {
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
  ): Handler<DescribeConformancePackComplianceCommandInput, DescribeConformancePackComplianceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConformancePackComplianceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeConformancePackComplianceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
    input: DescribeConformancePackComplianceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeConformancePackComplianceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConformancePackComplianceCommandOutput> {
    return de_DescribeConformancePackComplianceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
