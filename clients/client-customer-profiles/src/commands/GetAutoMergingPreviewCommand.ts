// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAutoMergingPreviewRequest, GetAutoMergingPreviewResponse } from "../models/models_0";
import { de_GetAutoMergingPreviewCommand, se_GetAutoMergingPreviewCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAutoMergingPreviewCommand}.
 */
export interface GetAutoMergingPreviewCommandInput extends GetAutoMergingPreviewRequest {}
/**
 * @public
 *
 * The output of {@link GetAutoMergingPreviewCommand}.
 */
export interface GetAutoMergingPreviewCommandOutput extends GetAutoMergingPreviewResponse, __MetadataBearer {}

/**
 * <p>Tests the auto-merging settings of your Identity Resolution Job without merging your data. It randomly
 *          selects a sample of matching groups from the existing matching results, and applies the
 *          automerging settings that you provided. You can then view the number of profiles in the
 *          sample, the number of matches, and the number of profiles identified to be merged. This
 *          enables you to evaluate the accuracy of the attributes in your matching list. </p>
 *          <p>You can't view which profiles are matched and would be merged.</p>
 *          <important>
 *             <p>We strongly recommend you use this API to do a dry run of the automerging process
 *             before running the Identity Resolution Job. Include <b>at least</b> two matching
 *             attributes. If your matching list includes too few attributes (such as only
 *                <code>FirstName</code> or only <code>LastName</code>), there may be a large number of
 *             matches. This increases the chances of erroneous merges.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetAutoMergingPreviewCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetAutoMergingPreviewCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetAutoMergingPreviewRequest
 *   DomainName: "STRING_VALUE", // required
 *   Consolidation: { // Consolidation
 *     MatchingAttributesList: [ // MatchingAttributesList // required
 *       [ // MatchingAttributes
 *         "STRING_VALUE",
 *       ],
 *     ],
 *   },
 *   ConflictResolution: { // ConflictResolution
 *     ConflictResolvingModel: "RECENCY" || "SOURCE", // required
 *     SourceName: "STRING_VALUE",
 *   },
 *   MinAllowedConfidenceScoreForMerging: Number("double"),
 * };
 * const command = new GetAutoMergingPreviewCommand(input);
 * const response = await client.send(command);
 * // { // GetAutoMergingPreviewResponse
 * //   DomainName: "STRING_VALUE", // required
 * //   NumberOfMatchesInSample: Number("long"),
 * //   NumberOfProfilesInSample: Number("long"),
 * //   NumberOfProfilesWillBeMerged: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetAutoMergingPreviewCommandInput - {@link GetAutoMergingPreviewCommandInput}
 * @returns {@link GetAutoMergingPreviewCommandOutput}
 * @see {@link GetAutoMergingPreviewCommandInput} for command's `input` shape.
 * @see {@link GetAutoMergingPreviewCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class GetAutoMergingPreviewCommand extends $Command
  .classBuilder<
    GetAutoMergingPreviewCommandInput,
    GetAutoMergingPreviewCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "GetAutoMergingPreview", {})
  .n("CustomerProfilesClient", "GetAutoMergingPreviewCommand")
  .f(void 0, void 0)
  .ser(se_GetAutoMergingPreviewCommand)
  .de(de_GetAutoMergingPreviewCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAutoMergingPreviewRequest;
      output: GetAutoMergingPreviewResponse;
    };
    sdk: {
      input: GetAutoMergingPreviewCommandInput;
      output: GetAutoMergingPreviewCommandOutput;
    };
  };
}
