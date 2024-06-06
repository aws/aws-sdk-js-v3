// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { BatchDeleteFeaturedResultsSetRequest, BatchDeleteFeaturedResultsSetResponse } from "../models/models_0";
import {
  de_BatchDeleteFeaturedResultsSetCommand,
  se_BatchDeleteFeaturedResultsSetCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteFeaturedResultsSetCommand}.
 */
export interface BatchDeleteFeaturedResultsSetCommandInput extends BatchDeleteFeaturedResultsSetRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteFeaturedResultsSetCommand}.
 */
export interface BatchDeleteFeaturedResultsSetCommandOutput
  extends BatchDeleteFeaturedResultsSetResponse,
    __MetadataBearer {}

/**
 * <p>Removes one or more sets of featured results. Features results are placed
 *             above all other results for certain queries. If there's an exact match of a
 *             query, then one or more specific documents are featured in the search results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, BatchDeleteFeaturedResultsSetCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, BatchDeleteFeaturedResultsSetCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // BatchDeleteFeaturedResultsSetRequest
 *   IndexId: "STRING_VALUE", // required
 *   FeaturedResultsSetIds: [ // FeaturedResultsSetIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteFeaturedResultsSetCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteFeaturedResultsSetResponse
 * //   Errors: [ // BatchDeleteFeaturedResultsSetErrors // required
 * //     { // BatchDeleteFeaturedResultsSetError
 * //       Id: "STRING_VALUE", // required
 * //       ErrorCode: "InternalError" || "InvalidRequest", // required
 * //       ErrorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteFeaturedResultsSetCommandInput - {@link BatchDeleteFeaturedResultsSetCommandInput}
 * @returns {@link BatchDeleteFeaturedResultsSetCommandOutput}
 * @see {@link BatchDeleteFeaturedResultsSetCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteFeaturedResultsSetCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
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
export class BatchDeleteFeaturedResultsSetCommand extends $Command
  .classBuilder<
    BatchDeleteFeaturedResultsSetCommandInput,
    BatchDeleteFeaturedResultsSetCommandOutput,
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
  .s("AWSKendraFrontendService", "BatchDeleteFeaturedResultsSet", {})
  .n("KendraClient", "BatchDeleteFeaturedResultsSetCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteFeaturedResultsSetCommand)
  .de(de_BatchDeleteFeaturedResultsSetCommand)
  .build() {}
