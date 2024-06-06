// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { UpdateFeaturedResultsSetRequest, UpdateFeaturedResultsSetResponse } from "../models/models_1";
import { de_UpdateFeaturedResultsSetCommand, se_UpdateFeaturedResultsSetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFeaturedResultsSetCommand}.
 */
export interface UpdateFeaturedResultsSetCommandInput extends UpdateFeaturedResultsSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFeaturedResultsSetCommand}.
 */
export interface UpdateFeaturedResultsSetCommandOutput extends UpdateFeaturedResultsSetResponse, __MetadataBearer {}

/**
 * <p>Updates a set of featured results. Features results are placed
 *             above
 *             all other results for certain queries. You map specific queries to specific documents
 *             for featuring in the results. If a query contains an exact match of a query, then one
 *             or more specific documents are featured in the search results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, UpdateFeaturedResultsSetCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, UpdateFeaturedResultsSetCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // UpdateFeaturedResultsSetRequest
 *   IndexId: "STRING_VALUE", // required
 *   FeaturedResultsSetId: "STRING_VALUE", // required
 *   FeaturedResultsSetName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Status: "ACTIVE" || "INACTIVE",
 *   QueryTexts: [ // QueryTextList
 *     "STRING_VALUE",
 *   ],
 *   FeaturedDocuments: [ // FeaturedDocumentList
 *     { // FeaturedDocument
 *       Id: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateFeaturedResultsSetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFeaturedResultsSetResponse
 * //   FeaturedResultsSet: { // FeaturedResultsSet
 * //     FeaturedResultsSetId: "STRING_VALUE",
 * //     FeaturedResultsSetName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Status: "ACTIVE" || "INACTIVE",
 * //     QueryTexts: [ // QueryTextList
 * //       "STRING_VALUE",
 * //     ],
 * //     FeaturedDocuments: [ // FeaturedDocumentList
 * //       { // FeaturedDocument
 * //         Id: "STRING_VALUE",
 * //       },
 * //     ],
 * //     LastUpdatedTimestamp: Number("long"),
 * //     CreationTimestamp: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateFeaturedResultsSetCommandInput - {@link UpdateFeaturedResultsSetCommandInput}
 * @returns {@link UpdateFeaturedResultsSetCommandOutput}
 * @see {@link UpdateFeaturedResultsSetCommandInput} for command's `input` shape.
 * @see {@link UpdateFeaturedResultsSetCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link FeaturedResultsConflictException} (client fault)
 *  <p>An error message with a list of conflicting queries used across different sets
 *             of featured results. This occurred with the request for a new featured results set.
 *             Check that the queries you specified for featured results are unique per featured
 *             results set for each index.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please reduce the number of requests
 *             and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the Amazon Kendra service.
 *             Please provide the correct input and try again.</p>
 *
 * @throws {@link KendraServiceException}
 * <p>Base exception class for all service exceptions from Kendra service.</p>
 *
 * @public
 */
export class UpdateFeaturedResultsSetCommand extends $Command
  .classBuilder<
    UpdateFeaturedResultsSetCommandInput,
    UpdateFeaturedResultsSetCommandOutput,
    KendraClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: KendraClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSKendraFrontendService", "UpdateFeaturedResultsSet", {})
  .n("KendraClient", "UpdateFeaturedResultsSetCommand")
  .f(void 0, void 0)
  .ser(se_UpdateFeaturedResultsSetCommand)
  .de(de_UpdateFeaturedResultsSetCommand)
  .build() {}
