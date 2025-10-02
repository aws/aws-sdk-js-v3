// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { GetCisScanResultDetailsRequest, GetCisScanResultDetailsResponse } from "../models/models_1";
import { de_GetCisScanResultDetailsCommand, se_GetCisScanResultDetailsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCisScanResultDetailsCommand}.
 */
export interface GetCisScanResultDetailsCommandInput extends GetCisScanResultDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetCisScanResultDetailsCommand}.
 */
export interface GetCisScanResultDetailsCommandOutput extends GetCisScanResultDetailsResponse, __MetadataBearer {}

/**
 * <p>Retrieves CIS scan result details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, GetCisScanResultDetailsCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, GetCisScanResultDetailsCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // GetCisScanResultDetailsRequest
 *   scanArn: "STRING_VALUE", // required
 *   targetResourceId: "STRING_VALUE", // required
 *   accountId: "STRING_VALUE", // required
 *   filterCriteria: { // CisScanResultDetailsFilterCriteria
 *     findingStatusFilters: [ // CisFindingStatusFilterList
 *       { // CisFindingStatusFilter
 *         comparison: "EQUALS", // required
 *         value: "PASSED" || "FAILED" || "SKIPPED", // required
 *       },
 *     ],
 *     checkIdFilters: [ // CheckIdFilterList
 *       { // CisStringFilter
 *         comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     titleFilters: [ // TitleFilterList
 *       {
 *         comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     securityLevelFilters: [ // CisSecurityLevelFilterList
 *       { // CisSecurityLevelFilter
 *         comparison: "EQUALS", // required
 *         value: "LEVEL_1" || "LEVEL_2", // required
 *       },
 *     ],
 *     findingArnFilters: [ // CisFindingArnFilterList
 *       {
 *         comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   sortBy: "CHECK_ID" || "STATUS",
 *   sortOrder: "ASC" || "DESC",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetCisScanResultDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetCisScanResultDetailsResponse
 * //   scanResultDetails: [ // CisScanResultDetailsList
 * //     { // CisScanResultDetails
 * //       scanArn: "STRING_VALUE", // required
 * //       accountId: "STRING_VALUE",
 * //       targetResourceId: "STRING_VALUE",
 * //       platform: "STRING_VALUE",
 * //       status: "PASSED" || "FAILED" || "SKIPPED",
 * //       statusReason: "STRING_VALUE",
 * //       checkId: "STRING_VALUE",
 * //       title: "STRING_VALUE",
 * //       checkDescription: "STRING_VALUE",
 * //       remediation: "STRING_VALUE",
 * //       level: "LEVEL_1" || "LEVEL_2",
 * //       findingArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCisScanResultDetailsCommandInput - {@link GetCisScanResultDetailsCommandInput}
 * @returns {@link GetCisScanResultDetailsCommandOutput}
 * @see {@link GetCisScanResultDetailsCommandInput} for command's `input` shape.
 * @see {@link GetCisScanResultDetailsCommandOutput} for command's `response` shape.
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
 * @example Sample GetCisScanResultDetails Call
 * ```javascript
 * //
 * const input = {
 *   accountId: "123412341234",
 *   scanArn: "arn:aws:inspector2:us-east-1:123412341234:owner/123412341234/cis-scan/624b746d-e080-44ae-8c1d-48e653365a38",
 *   targetResourceId: "i-12341234"
 * };
 * const command = new GetCisScanResultDetailsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   scanResultDetails: [
 *     {
 *       accountId: "123412341234",
 *       checkDescription: "description",
 *       checkId: "1.1.1.1",
 *       level: "LEVEL_1",
 *       platform: "AMAZON_LINUX_2",
 *       remediation: "fix",
 *       scanArn: "arn:aws:inspector2:us-east-1:123412341234:owner/123412341234/cis-scan/624b746d-e080-44ae-8c1d-48e653365a38",
 *       status: "PASSED",
 *       targetResourceId: "i-12341234",
 *       title: "title1"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetCisScanResultDetailsCommand extends $Command
  .classBuilder<
    GetCisScanResultDetailsCommandInput,
    GetCisScanResultDetailsCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "GetCisScanResultDetails", {})
  .n("Inspector2Client", "GetCisScanResultDetailsCommand")
  .f(void 0, void 0)
  .ser(se_GetCisScanResultDetailsCommand)
  .de(de_GetCisScanResultDetailsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCisScanResultDetailsRequest;
      output: GetCisScanResultDetailsResponse;
    };
    sdk: {
      input: GetCisScanResultDetailsCommandInput;
      output: GetCisScanResultDetailsCommandOutput;
    };
  };
}
