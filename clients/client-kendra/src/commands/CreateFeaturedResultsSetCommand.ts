// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { CreateFeaturedResultsSetRequest, CreateFeaturedResultsSetResponse } from "../models/models_0";
import { de_CreateFeaturedResultsSetCommand, se_CreateFeaturedResultsSetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFeaturedResultsSetCommand}.
 */
export interface CreateFeaturedResultsSetCommandInput extends CreateFeaturedResultsSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateFeaturedResultsSetCommand}.
 */
export interface CreateFeaturedResultsSetCommandOutput extends CreateFeaturedResultsSetResponse, __MetadataBearer {}

/**
 * <p>Creates a set of featured results to display at the top of the search results page.
 *             Featured results are placed above all other results for certain queries. You map
 *             specific queries to specific documents for featuring in the results. If a query
 *             contains an exact match, then one or more specific documents are featured in the
 *             search results.</p>
 *          <p>You can create up to 50 sets of featured results per index. You can request to
 *             increase this limit by contacting <a href="http://aws.amazon.com/contact-us/">Support</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, CreateFeaturedResultsSetCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, CreateFeaturedResultsSetCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // CreateFeaturedResultsSetRequest
 *   IndexId: "STRING_VALUE", // required
 *   FeaturedResultsSetName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   Status: "ACTIVE" || "INACTIVE",
 *   QueryTexts: [ // QueryTextList
 *     "STRING_VALUE",
 *   ],
 *   FeaturedDocuments: [ // FeaturedDocumentList
 *     { // FeaturedDocument
 *       Id: "STRING_VALUE",
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateFeaturedResultsSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateFeaturedResultsSetResponse
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
 * @param CreateFeaturedResultsSetCommandInput - {@link CreateFeaturedResultsSetCommandInput}
 * @returns {@link CreateFeaturedResultsSetCommandOutput}
 * @see {@link CreateFeaturedResultsSetCommandInput} for command's `input` shape.
 * @see {@link CreateFeaturedResultsSetCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred with the request. Please fix any inconsistences with your
 *             resources and try again.</p>
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
export class CreateFeaturedResultsSetCommand extends $Command
  .classBuilder<
    CreateFeaturedResultsSetCommandInput,
    CreateFeaturedResultsSetCommandOutput,
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
  .s("AWSKendraFrontendService", "CreateFeaturedResultsSet", {})
  .n("KendraClient", "CreateFeaturedResultsSetCommand")
  .f(void 0, void 0)
  .ser(se_CreateFeaturedResultsSetCommand)
  .de(de_CreateFeaturedResultsSetCommand)
  .build() {}
