// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { ListLFTagsRequest, ListLFTagsResponse } from "../models/models_0";
import { de_ListLFTagsCommand, se_ListLFTagsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLFTagsCommand}.
 */
export interface ListLFTagsCommandInput extends ListLFTagsRequest {}
/**
 * @public
 *
 * The output of {@link ListLFTagsCommand}.
 */
export interface ListLFTagsCommandOutput extends ListLFTagsResponse, __MetadataBearer {}

/**
 * <p>Lists LF-tags that the requester has permission to view. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, ListLFTagsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, ListLFTagsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LakeFormationClient(config);
 * const input = { // ListLFTagsRequest
 *   CatalogId: "STRING_VALUE",
 *   ResourceShareType: "FOREIGN" || "ALL",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListLFTagsCommand(input);
 * const response = await client.send(command);
 * // { // ListLFTagsResponse
 * //   LFTags: [ // LFTagsList
 * //     { // LFTagPair
 * //       CatalogId: "STRING_VALUE",
 * //       TagKey: "STRING_VALUE", // required
 * //       TagValues: [ // TagValueList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLFTagsCommandInput - {@link ListLFTagsCommandInput}
 * @returns {@link ListLFTagsCommandOutput}
 * @see {@link ListLFTagsCommandInput} for command's `input` shape.
 * @see {@link ListLFTagsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 * @public
 */
export class ListLFTagsCommand extends $Command
  .classBuilder<
    ListLFTagsCommandInput,
    ListLFTagsCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLakeFormation", "ListLFTags", {})
  .n("LakeFormationClient", "ListLFTagsCommand")
  .f(void 0, void 0)
  .ser(se_ListLFTagsCommand)
  .de(de_ListLFTagsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLFTagsRequest;
      output: ListLFTagsResponse;
    };
    sdk: {
      input: ListLFTagsCommandInput;
      output: ListLFTagsCommandOutput;
    };
  };
}
