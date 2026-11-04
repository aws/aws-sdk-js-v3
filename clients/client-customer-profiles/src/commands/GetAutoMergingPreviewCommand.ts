// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAutoMergingPreviewRequest, GetAutoMergingPreviewResponse } from "../models/models_0";
import { GetAutoMergingPreview$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Tests the auto-merging settings of your Identity Resolution Job without merging your data. It randomly selects a sample of matching groups from the existing matching results, and applies the automerging settings that you provided. You can then view the number of profiles in the sample, the number of matches, and the number of profiles identified to be merged. This enables you to evaluate the accuracy of the attributes in your matching list.
 *
 * You can't view which profiles are matched and would be merged.
 *
 * > **Important:** We strongly recommend you use this API to do a dry run of the automerging process before running the Identity Resolution Job. Include **at least** two matching attributes. If your matching list includes too few attributes (such as only `FirstName` or only `LastName`), there may be a large number of matches. This increases the chances of erroneous merges.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetAutoMergingPreviewCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetAutoMergingPreviewCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource does not exist, or access was denied.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You exceeded the maximum number of requests.
 *
 * @throws {@link CustomerProfilesServiceException}
 *
 * Base exception class for all service exceptions from CustomerProfiles service.
 *
 * @public
 */
export class GetAutoMergingPreviewCommand extends command<GetAutoMergingPreviewCommandInput, GetAutoMergingPreviewCommandOutput>(
  _ep0,
  _mw0,
  "GetAutoMergingPreview",
  GetAutoMergingPreview$
) {
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
