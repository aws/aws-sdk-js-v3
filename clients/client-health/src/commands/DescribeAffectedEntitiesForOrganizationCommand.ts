// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import type {
  DescribeAffectedEntitiesForOrganizationRequest,
  DescribeAffectedEntitiesForOrganizationResponse,
} from "../models/models_0";
import { DescribeAffectedEntitiesForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAffectedEntitiesForOrganizationCommand}.
 */
export interface DescribeAffectedEntitiesForOrganizationCommandInput extends DescribeAffectedEntitiesForOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAffectedEntitiesForOrganizationCommand}.
 */
export interface DescribeAffectedEntitiesForOrganizationCommandOutput extends DescribeAffectedEntitiesForOrganizationResponse, __MetadataBearer {}

/**
 * <p>Returns a list of entities that have been affected by one or more events for one or more
 *          accounts in your organization in Organizations, based on the filter criteria. Entities can refer
 *          to individual customer resources, groups of customer resources, or any other construct,
 *          depending on the Amazon Web Services service.</p>
 *          <p>At least one event Amazon Resource Name (ARN) and account ID are required.</p>
 *          <p>Before you can call this operation, you must first enable Health to work with
 *          Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's
 *          management account.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *                </li>
 *                <li>
 *                   <p>This operation doesn't support resource-level permissions. You can't use this operation to allow or deny access to specific Health events. For more
 *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeAffectedEntitiesForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeAffectedEntitiesForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = { // DescribeAffectedEntitiesForOrganizationRequest
 *   organizationEntityFilters: [ // OrganizationEntityFiltersList
 *     { // EventAccountFilter
 *       eventArn: "STRING_VALUE", // required
 *       awsAccountId: "STRING_VALUE",
 *     },
 *   ],
 *   locale: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   organizationEntityAccountFilters: [ // OrganizationEntityAccountFiltersList
 *     { // EntityAccountFilter
 *       eventArn: "STRING_VALUE", // required
 *       awsAccountId: "STRING_VALUE",
 *       statusCodes: [ // entityStatusCodeList
 *         "IMPAIRED" || "UNIMPAIRED" || "UNKNOWN" || "PENDING" || "RESOLVED",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeAffectedEntitiesForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAffectedEntitiesForOrganizationResponse
 * //   entities: [ // EntityList
 * //     { // AffectedEntity
 * //       entityArn: "STRING_VALUE",
 * //       eventArn: "STRING_VALUE",
 * //       entityValue: "STRING_VALUE",
 * //       entityUrl: "STRING_VALUE",
 * //       awsAccountId: "STRING_VALUE",
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //       statusCode: "IMPAIRED" || "UNIMPAIRED" || "UNKNOWN" || "PENDING" || "RESOLVED",
 * //       tags: { // tagSet
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       entityMetadata: { // entityMetadata
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   failedSet: [ // DescribeAffectedEntitiesForOrganizationFailedSet
 * //     { // OrganizationAffectedEntitiesErrorItem
 * //       awsAccountId: "STRING_VALUE",
 * //       eventArn: "STRING_VALUE",
 * //       errorName: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAffectedEntitiesForOrganizationCommandInput - {@link DescribeAffectedEntitiesForOrganizationCommandInput}
 * @returns {@link DescribeAffectedEntitiesForOrganizationCommandOutput}
 * @see {@link DescribeAffectedEntitiesForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeAffectedEntitiesForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link InvalidPaginationToken} (client fault)
 *  <p>The specified pagination token (<code>nextToken</code>) is not valid.</p>
 *
 * @throws {@link UnsupportedLocale} (client fault)
 *  <p>The specified locale is not supported.</p>
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 *
 * @public
 */
export class DescribeAffectedEntitiesForOrganizationCommand extends $Command
  .classBuilder<
    DescribeAffectedEntitiesForOrganizationCommandInput,
    DescribeAffectedEntitiesForOrganizationCommandOutput,
    HealthClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: HealthClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHealth_20160804", "DescribeAffectedEntitiesForOrganization", {})
  .n("HealthClient", "DescribeAffectedEntitiesForOrganizationCommand")
  .sc(DescribeAffectedEntitiesForOrganization$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAffectedEntitiesForOrganizationRequest;
      output: DescribeAffectedEntitiesForOrganizationResponse;
    };
    sdk: {
      input: DescribeAffectedEntitiesForOrganizationCommandInput;
      output: DescribeAffectedEntitiesForOrganizationCommandOutput;
    };
  };
}
