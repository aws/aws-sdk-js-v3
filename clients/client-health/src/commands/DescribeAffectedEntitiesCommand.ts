// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import type { DescribeAffectedEntitiesRequest, DescribeAffectedEntitiesResponse } from "../models/models_0";
import { DescribeAffectedEntities$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAffectedEntitiesCommand}.
 */
export interface DescribeAffectedEntitiesCommandInput extends DescribeAffectedEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAffectedEntitiesCommand}.
 */
export interface DescribeAffectedEntitiesCommandOutput extends DescribeAffectedEntitiesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of entities that have been affected by the specified events, based on the
 *          specified filter criteria. Entities can refer to individual customer resources, groups of
 *          customer resources, or any other construct, depending on the Amazon Web Services service. Events that
 *          have impact beyond that of the affected entities, or where the extent of impact is unknown,
 *          include at least one entity indicating this.</p>
 *          <p>At least one event ARN is required.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *                </li>
 *                <li>
 *                   <p>This operation supports resource-level permissions. You can use this operation to allow or deny access to specific Health events. For more
 *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeAffectedEntitiesCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeAffectedEntitiesCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = { // DescribeAffectedEntitiesRequest
 *   filter: { // EntityFilter
 *     eventArns: [ // eventArnList // required
 *       "STRING_VALUE",
 *     ],
 *     entityArns: [ // entityArnList
 *       "STRING_VALUE",
 *     ],
 *     entityValues: [ // entityValueList
 *       "STRING_VALUE",
 *     ],
 *     lastUpdatedTimes: [ // dateTimeRangeList
 *       { // DateTimeRange
 *         from: new Date("TIMESTAMP"),
 *         to: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     tags: [ // tagFilter
 *       { // tagSet
 *         "<keys>": "STRING_VALUE",
 *       },
 *     ],
 *     statusCodes: [ // entityStatusCodeList
 *       "IMPAIRED" || "UNIMPAIRED" || "UNKNOWN" || "PENDING" || "RESOLVED",
 *     ],
 *   },
 *   locale: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeAffectedEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAffectedEntitiesResponse
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
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAffectedEntitiesCommandInput - {@link DescribeAffectedEntitiesCommandInput}
 * @returns {@link DescribeAffectedEntitiesCommandOutput}
 * @see {@link DescribeAffectedEntitiesCommandInput} for command's `input` shape.
 * @see {@link DescribeAffectedEntitiesCommandOutput} for command's `response` shape.
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
export class DescribeAffectedEntitiesCommand extends $Command
  .classBuilder<
    DescribeAffectedEntitiesCommandInput,
    DescribeAffectedEntitiesCommandOutput,
    HealthClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: HealthClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHealth_20160804", "DescribeAffectedEntities", {})
  .n("HealthClient", "DescribeAffectedEntitiesCommand")
  .sc(DescribeAffectedEntities$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAffectedEntitiesRequest;
      output: DescribeAffectedEntitiesResponse;
    };
    sdk: {
      input: DescribeAffectedEntitiesCommandInput;
      output: DescribeAffectedEntitiesCommandOutput;
    };
  };
}
