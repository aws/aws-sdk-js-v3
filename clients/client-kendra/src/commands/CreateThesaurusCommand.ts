// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { CreateThesaurusRequest, CreateThesaurusResponse } from "../models/models_0";
import { de_CreateThesaurusCommand, se_CreateThesaurusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateThesaurusCommand}.
 */
export interface CreateThesaurusCommandInput extends CreateThesaurusRequest {}
/**
 * @public
 *
 * The output of {@link CreateThesaurusCommand}.
 */
export interface CreateThesaurusCommandOutput extends CreateThesaurusResponse, __MetadataBearer {}

/**
 * <p>Creates a thesaurus for an index. The thesaurus
 *       contains a list of synonyms in Solr format.</p>
 *          <p>For an example of adding a thesaurus file to an index, see
 *          <a href="https://docs.aws.amazon.com/kendra/latest/dg/index-synonyms-adding-thesaurus-file.html">Adding
 *             custom synonyms to an index</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, CreateThesaurusCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, CreateThesaurusCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // CreateThesaurusRequest
 *   IndexId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   RoleArn: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   SourceS3Path: { // S3Path
 *     Bucket: "STRING_VALUE", // required
 *     Key: "STRING_VALUE", // required
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateThesaurusCommand(input);
 * const response = await client.send(command);
 * // { // CreateThesaurusResponse
 * //   Id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateThesaurusCommandInput - {@link CreateThesaurusCommandInput}
 * @returns {@link CreateThesaurusCommandOutput}
 * @see {@link CreateThesaurusCommandInput} for command's `input` shape.
 * @see {@link CreateThesaurusCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the set limits for your Amazon Kendra service. Please see
 *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas</a> for
 *             more information, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> to inquire about
 *             an increase of limits.</p>
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
export class CreateThesaurusCommand extends $Command
  .classBuilder<
    CreateThesaurusCommandInput,
    CreateThesaurusCommandOutput,
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
  .s("AWSKendraFrontendService", "CreateThesaurus", {})
  .n("KendraClient", "CreateThesaurusCommand")
  .f(void 0, void 0)
  .ser(se_CreateThesaurusCommand)
  .de(de_CreateThesaurusCommand)
  .build() {}
