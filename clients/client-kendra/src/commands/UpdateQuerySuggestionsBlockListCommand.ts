// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { UpdateQuerySuggestionsBlockListRequest } from "../models/models_1";
import {
  de_UpdateQuerySuggestionsBlockListCommand,
  se_UpdateQuerySuggestionsBlockListCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateQuerySuggestionsBlockListCommand}.
 */
export interface UpdateQuerySuggestionsBlockListCommandInput extends UpdateQuerySuggestionsBlockListRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQuerySuggestionsBlockListCommand}.
 */
export interface UpdateQuerySuggestionsBlockListCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates a block list used for query suggestions for an index.</p>
 *          <p>Updates to a block list might not take effect right away. Amazon Kendra
 *             needs to refresh the entire suggestions list to apply any updates to the
 *             block list. Other changes not related to the block list apply immediately.</p>
 *          <p>If a block list is updating, then you need to wait for the first update to
 *             finish before submitting another update.</p>
 *          <p>Amazon Kendra supports partial updates, so you only need to provide the fields
 *             you want to update.</p>
 *          <p>
 *             <code>UpdateQuerySuggestionsBlockList</code> is currently not supported in the
 *             Amazon Web Services GovCloud (US-West) region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, UpdateQuerySuggestionsBlockListCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, UpdateQuerySuggestionsBlockListCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // UpdateQuerySuggestionsBlockListRequest
 *   IndexId: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   SourceS3Path: { // S3Path
 *     Bucket: "STRING_VALUE", // required
 *     Key: "STRING_VALUE", // required
 *   },
 *   RoleArn: "STRING_VALUE",
 * };
 * const command = new UpdateQuerySuggestionsBlockListCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateQuerySuggestionsBlockListCommandInput - {@link UpdateQuerySuggestionsBlockListCommandInput}
 * @returns {@link UpdateQuerySuggestionsBlockListCommandOutput}
 * @see {@link UpdateQuerySuggestionsBlockListCommandInput} for command's `input` shape.
 * @see {@link UpdateQuerySuggestionsBlockListCommandOutput} for command's `response` shape.
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
export class UpdateQuerySuggestionsBlockListCommand extends $Command
  .classBuilder<
    UpdateQuerySuggestionsBlockListCommandInput,
    UpdateQuerySuggestionsBlockListCommandOutput,
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
  .s("AWSKendraFrontendService", "UpdateQuerySuggestionsBlockList", {})
  .n("KendraClient", "UpdateQuerySuggestionsBlockListCommand")
  .f(void 0, void 0)
  .ser(se_UpdateQuerySuggestionsBlockListCommand)
  .de(de_UpdateQuerySuggestionsBlockListCommand)
  .build() {}
