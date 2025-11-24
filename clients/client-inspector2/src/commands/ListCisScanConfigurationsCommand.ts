// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { ListCisScanConfigurationsRequest, ListCisScanConfigurationsResponse } from "../models/models_0";
import { ListCisScanConfigurations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCisScanConfigurationsCommand}.
 */
export interface ListCisScanConfigurationsCommandInput extends ListCisScanConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListCisScanConfigurationsCommand}.
 */
export interface ListCisScanConfigurationsCommandOutput extends ListCisScanConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Lists CIS scan configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListCisScanConfigurationsCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListCisScanConfigurationsCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // ListCisScanConfigurationsRequest
 *   filterCriteria: { // ListCisScanConfigurationsFilterCriteria
 *     scanNameFilters: [ // CisScanNameFilterList
 *       { // CisStringFilter
 *         comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     targetResourceTagFilters: [ // ResourceTagFilterList
 *       { // TagFilter
 *         comparison: "EQUALS", // required
 *         key: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     scanConfigurationArnFilters: [ // CisScanConfigurationArnFilterList
 *       {
 *         comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   sortBy: "SCAN_NAME" || "SCAN_CONFIGURATION_ARN",
 *   sortOrder: "ASC" || "DESC",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCisScanConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCisScanConfigurationsResponse
 * //   scanConfigurations: [ // CisScanConfigurationList
 * //     { // CisScanConfiguration
 * //       scanConfigurationArn: "STRING_VALUE", // required
 * //       ownerId: "STRING_VALUE",
 * //       scanName: "STRING_VALUE",
 * //       securityLevel: "LEVEL_1" || "LEVEL_2",
 * //       schedule: { // Schedule Union: only one key present
 * //         oneTime: {},
 * //         daily: { // DailySchedule
 * //           startTime: { // Time
 * //             timeOfDay: "STRING_VALUE", // required
 * //             timezone: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         weekly: { // WeeklySchedule
 * //           startTime: {
 * //             timeOfDay: "STRING_VALUE", // required
 * //             timezone: "STRING_VALUE", // required
 * //           },
 * //           days: [ // DaysList // required
 * //             "SUN" || "MON" || "TUE" || "WED" || "THU" || "FRI" || "SAT",
 * //           ],
 * //         },
 * //         monthly: { // MonthlySchedule
 * //           startTime: {
 * //             timeOfDay: "STRING_VALUE", // required
 * //             timezone: "STRING_VALUE", // required
 * //           },
 * //           day: "SUN" || "MON" || "TUE" || "WED" || "THU" || "FRI" || "SAT", // required
 * //         },
 * //       },
 * //       targets: { // CisTargets
 * //         accountIds: [ // CisAccountIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         targetResourceTags: { // TargetResourceTags
 * //           "<keys>": [ // TagValueList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       tags: { // CisTagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCisScanConfigurationsCommandInput - {@link ListCisScanConfigurationsCommandInput}
 * @returns {@link ListCisScanConfigurationsCommandOutput}
 * @see {@link ListCisScanConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListCisScanConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @example Sample ListCisScanConfigurations Call
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListCisScanConfigurationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   scanConfigurations: [
 *     {
 *       ownerId: "123412341234",
 *       scanConfigurationArn: "arn:aws:inspector2:us-east-1:123412341234:owner/123412341234/cis-configuration/624b746d-e080-44ae-8c1d-48e653365a38",
 *       scanName: "sample",
 *       schedule: {
 *         daily: {
 *           startTime: {
 *             timeOfDay: "12:34",
 *             timezone: "UTC"
 *           }
 *         }
 *       },
 *       securityLevel: "LEVEL_1",
 *       targets: {
 *         accountIds: [
 *           "123412341234"
 *         ],
 *         targetResourceTags: {
 *           key: [
 *             "value"
 *           ]
 *         }
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListCisScanConfigurationsCommand extends $Command
  .classBuilder<
    ListCisScanConfigurationsCommandInput,
    ListCisScanConfigurationsCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Inspector2", "ListCisScanConfigurations", {})
  .n("Inspector2Client", "ListCisScanConfigurationsCommand")
  .sc(ListCisScanConfigurations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCisScanConfigurationsRequest;
      output: ListCisScanConfigurationsResponse;
    };
    sdk: {
      input: ListCisScanConfigurationsCommandInput;
      output: ListCisScanConfigurationsCommandOutput;
    };
  };
}
