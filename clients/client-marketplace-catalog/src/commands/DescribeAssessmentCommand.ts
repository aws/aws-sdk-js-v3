// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAssessmentRequest, DescribeAssessmentResponse } from "../models/models_0";
import { DescribeAssessment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAssessmentCommand}.
 */
export interface DescribeAssessmentCommandInput extends DescribeAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssessmentCommand}.
 */
export interface DescribeAssessmentCommandOutput extends DescribeAssessmentResponse, __MetadataBearer {}

/**
 * <p>Returns the metadata and detailed results of a single assessment, including the
 *             framework that was evaluated, the overall assessment result, and a paginated list of
 *             individual control evaluation results.</p>
 *          <p>To list available assessments before describing one, use the
 *             <code>ListAssessments</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, DescribeAssessmentCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, DescribeAssessmentCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * // import type { MarketplaceCatalogClientConfig } from "@aws-sdk/client-marketplace-catalog";
 * const config = {}; // type is MarketplaceCatalogClientConfig
 * const client = new MarketplaceCatalogClient(config);
 * const input = { // DescribeAssessmentRequest
 *   Catalog: "STRING_VALUE", // required
 *   AssessmentIdentifier: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssessmentResponse
 * //   AssessmentArn: "STRING_VALUE",
 * //   AssessmentId: "STRING_VALUE",
 * //   FrameworkId: "STRING_VALUE",
 * //   AssessmentTargetSummary: { // AssessmentTargetSummary
 * //     EntityId: "STRING_VALUE",
 * //     ChangeSetId: "STRING_VALUE",
 * //   },
 * //   FrameworkSummary: { // FrameworkSummary Union: only one key present
 * //     AMISecuritySummary: { // AMISecuritySummary
 * //       DeliveryOptionId: "STRING_VALUE",
 * //     },
 * //     ContainerSecuritySummary: { // ContainerSecuritySummary
 * //       DeliveryOptionId: "STRING_VALUE",
 * //     },
 * //   },
 * //   AssessmentResult: "PASS" || "FAIL",
 * //   CreatedAt: "STRING_VALUE",
 * //   ExpiresAt: "STRING_VALUE",
 * //   ControlAssessments: [ // ControlAssessmentList
 * //     { // ControlAssessment
 * //       ControlId: "STRING_VALUE",
 * //       ControlAssessmentResult: "PASS" || "FAIL" || "NOT_EXECUTED" || "EXEMPTION_PASS",
 * //       Errors: [ // ControlErrorList
 * //         { // ControlError
 * //           Code: "STRING_VALUE",
 * //           Message: "STRING_VALUE",
 * //           Scope: [ // ErrorScopeList
 * //             { // ErrorScope
 * //               Name: "STRING_VALUE",
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAssessmentCommandInput - {@link DescribeAssessmentCommandInput}
 * @returns {@link DescribeAssessmentCommandOutput}
 * @see {@link DescribeAssessmentCommandInput} for command's `input` shape.
 * @see {@link DescribeAssessmentCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for MarketplaceCatalogClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *          <p>HTTP status code: 403</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>There was an internal service exception.</p>
 *          <p>HTTP status code: 500</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource wasn't found.</p>
 *          <p>HTTP status code: 404</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Too many requests.</p>
 *          <p>HTTP status code: 429</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An error occurred during validation.</p>
 *          <p>HTTP status code: 422</p>
 *
 * @throws {@link MarketplaceCatalogServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceCatalog service.</p>
 *
 *
 * @public
 */
export class DescribeAssessmentCommand extends command<DescribeAssessmentCommandInput, DescribeAssessmentCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAssessment",
  DescribeAssessment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAssessmentRequest;
      output: DescribeAssessmentResponse;
    };
    sdk: {
      input: DescribeAssessmentCommandInput;
      output: DescribeAssessmentCommandOutput;
    };
  };
}
