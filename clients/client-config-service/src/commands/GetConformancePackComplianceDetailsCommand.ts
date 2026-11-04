// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetConformancePackComplianceDetailsRequest,
  GetConformancePackComplianceDetailsResponse,
} from "../models/models_0";
import { GetConformancePackComplianceDetails$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetConformancePackComplianceDetailsCommandOutput extends GetConformancePackComplianceDetailsResponse, __MetadataBearer {}

/**
 * Returns compliance details of a conformance pack for all Amazon Web Services resources that are monitered by conformance pack.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetConformancePackComplianceDetailsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetConformancePackComplianceDetailsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
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
 *
 * The specified limit is outside the allowable range.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The specified next token is not valid. Specify the `nextToken` string that was returned in the previous response to get the next page of results.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more of the specified parameters are not valid. Verify that your parameters are valid and try again.
 *
 * @throws {@link NoSuchConfigRuleInConformancePackException} (client fault)
 *
 * Config rule that you passed in the filter does not exist.
 *
 * @throws {@link NoSuchConformancePackException} (client fault)
 *
 * You specified one or more conformance packs that do not exist.
 *
 * @throws {@link ConfigServiceServiceException}
 *
 * Base exception class for all service exceptions from ConfigService service.
 *
 * @public
 */
export class GetConformancePackComplianceDetailsCommand extends command<GetConformancePackComplianceDetailsCommandInput, GetConformancePackComplianceDetailsCommandOutput>(
  _ep0,
  _mw0,
  "GetConformancePackComplianceDetails",
  GetConformancePackComplianceDetails$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConformancePackComplianceDetailsRequest;
      output: GetConformancePackComplianceDetailsResponse;
    };
    sdk: {
      input: GetConformancePackComplianceDetailsCommandInput;
      output: GetConformancePackComplianceDetailsCommandOutput;
    };
  };
}
