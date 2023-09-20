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
import {
  GetConformancePackComplianceDetailsRequest,
  GetConformancePackComplianceDetailsResponse,
} from "../models/models_0";
import {
  de_GetConformancePackComplianceDetailsCommand,
  se_GetConformancePackComplianceDetailsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConformancePackComplianceDetailsCommand}.
 */
export interface GetConformancePackComplianceDetailsCommandInput extends GetConformancePackComplianceDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetConformancePackComplianceDetailsCommand}.
 */
export interface GetConformancePackComplianceDetailsCommandOutput
  extends GetConformancePackComplianceDetailsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns compliance details of a conformance pack for all Amazon Web Services resources that are monitered by conformance pack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetConformancePackComplianceDetailsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetConformancePackComplianceDetailsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // GetConformancePackComplianceDetailsRequest
 *   ConformancePackName: "STRING_VALUE", // required
 *   Filters: { // ConformancePackEvaluationFilters
 *     ConfigRuleNames: [ // ConformancePackConfigRuleNames
 *       "STRING_VALUE",
 *     ],
 *     ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "INSUFFICIENT_DATA",
 *     ResourceType: "STRING_VALUE",
 *     ResourceIds: [ // ConformancePackComplianceResourceIds
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetConformancePackComplianceDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetConformancePackComplianceDetailsResponse
 * //   ConformancePackName: "STRING_VALUE", // required
 * //   ConformancePackRuleEvaluationResults: [ // ConformancePackRuleEvaluationResultsList
 * //     { // ConformancePackEvaluationResult
 * //       ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "INSUFFICIENT_DATA", // required
 * //       EvaluationResultIdentifier: { // EvaluationResultIdentifier
 * //         EvaluationResultQualifier: { // EvaluationResultQualifier
 * //           ConfigRuleName: "STRING_VALUE",
 * //           ResourceType: "STRING_VALUE",
 * //           ResourceId: "STRING_VALUE",
 * //           EvaluationMode: "DETECTIVE" || "PROACTIVE",
 * //         },
 * //         OrderingTimestamp: new Date("TIMESTAMP"),
 * //         ResourceEvaluationId: "STRING_VALUE",
 * //       },
 * //       ConfigRuleInvokedTime: new Date("TIMESTAMP"), // required
 * //       ResultRecordedTime: new Date("TIMESTAMP"), // required
 * //       Annotation: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConformancePackComplianceDetailsCommandInput - {@link GetConformancePackComplianceDetailsCommandInput}
 * @returns {@link GetConformancePackComplianceDetailsCommandOutput}
 * @see {@link GetConformancePackComplianceDetailsCommandInput} for command's `input` shape.
 * @see {@link GetConformancePackComplianceDetailsCommandOutput} for command's `response` shape.
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
export class GetConformancePackComplianceDetailsCommand extends $Command<
  GetConformancePackComplianceDetailsCommandInput,
  GetConformancePackComplianceDetailsCommandOutput,
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
  constructor(readonly input: GetConformancePackComplianceDetailsCommandInput) {
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
  ): Handler<GetConformancePackComplianceDetailsCommandInput, GetConformancePackComplianceDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConformancePackComplianceDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetConformancePackComplianceDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StarlingDoveService",
        operation: "GetConformancePackComplianceDetails",
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
    input: GetConformancePackComplianceDetailsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetConformancePackComplianceDetailsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetConformancePackComplianceDetailsCommandOutput> {
    return de_GetConformancePackComplianceDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
