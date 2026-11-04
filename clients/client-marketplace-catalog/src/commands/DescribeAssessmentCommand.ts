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
 * Returns the metadata and detailed results of a single assessment, including the framework that was evaluated, the overall assessment result, and a paginated list of individual control evaluation results.
 *
 * To list available assessments before describing one, use the `ListAssessments` action.
 *
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
 *
 * Access is denied.
 *
 * HTTP status code: 403
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * There was an internal service exception.
 *
 * HTTP status code: 500
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource wasn't found.
 *
 * HTTP status code: 404
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Too many requests.
 *
 * HTTP status code: 429
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An error occurred during validation.
 *
 * HTTP status code: 422
 *
 * @throws {@link MarketplaceCatalogServiceException}
 *
 * Base exception class for all service exceptions from MarketplaceCatalog service.
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
