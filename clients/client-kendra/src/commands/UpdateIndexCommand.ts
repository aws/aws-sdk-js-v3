// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { UpdateIndexRequest } from "../models/models_1";
import { de_UpdateIndexCommand, se_UpdateIndexCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIndexCommand}.
 */
export interface UpdateIndexCommandInput extends UpdateIndexRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIndexCommand}.
 */
export interface UpdateIndexCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates an Amazon Kendra index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, UpdateIndexCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, UpdateIndexCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new KendraClient(config);
 * const input = { // UpdateIndexRequest
 *   Id: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   RoleArn: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   DocumentMetadataConfigurationUpdates: [ // DocumentMetadataConfigurationList
 *     { // DocumentMetadataConfiguration
 *       Name: "STRING_VALUE", // required
 *       Type: "STRING_VALUE" || "STRING_LIST_VALUE" || "LONG_VALUE" || "DATE_VALUE", // required
 *       Relevance: { // Relevance
 *         Freshness: true || false,
 *         Importance: Number("int"),
 *         Duration: "STRING_VALUE",
 *         RankOrder: "ASCENDING" || "DESCENDING",
 *         ValueImportanceMap: { // ValueImportanceMap
 *           "<keys>": Number("int"),
 *         },
 *       },
 *       Search: { // Search
 *         Facetable: true || false,
 *         Searchable: true || false,
 *         Displayable: true || false,
 *         Sortable: true || false,
 *       },
 *     },
 *   ],
 *   CapacityUnits: { // CapacityUnitsConfiguration
 *     StorageCapacityUnits: Number("int"), // required
 *     QueryCapacityUnits: Number("int"), // required
 *   },
 *   UserTokenConfigurations: [ // UserTokenConfigurationList
 *     { // UserTokenConfiguration
 *       JwtTokenTypeConfiguration: { // JwtTokenTypeConfiguration
 *         KeyLocation: "URL" || "SECRET_MANAGER", // required
 *         URL: "STRING_VALUE",
 *         SecretManagerArn: "STRING_VALUE",
 *         UserNameAttributeField: "STRING_VALUE",
 *         GroupAttributeField: "STRING_VALUE",
 *         Issuer: "STRING_VALUE",
 *         ClaimRegex: "STRING_VALUE",
 *       },
 *       JsonTokenTypeConfiguration: { // JsonTokenTypeConfiguration
 *         UserNameAttributeField: "STRING_VALUE", // required
 *         GroupAttributeField: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   UserContextPolicy: "ATTRIBUTE_FILTER" || "USER_TOKEN",
 *   UserGroupResolutionConfiguration: { // UserGroupResolutionConfiguration
 *     UserGroupResolutionMode: "AWS_SSO" || "NONE", // required
 *   },
 * };
 * const command = new UpdateIndexCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateIndexCommandInput - {@link UpdateIndexCommandInput}
 * @returns {@link UpdateIndexCommandOutput}
 * @see {@link UpdateIndexCommandInput} for command's `input` shape.
 * @see {@link UpdateIndexCommandOutput} for command's `response` shape.
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
export class UpdateIndexCommand extends $Command
  .classBuilder<
    UpdateIndexCommandInput,
    UpdateIndexCommandOutput,
    KendraClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KendraClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSKendraFrontendService", "UpdateIndex", {})
  .n("KendraClient", "UpdateIndexCommand")
  .f(void 0, void 0)
  .ser(se_UpdateIndexCommand)
  .de(de_UpdateIndexCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIndexRequest;
      output: {};
    };
    sdk: {
      input: UpdateIndexCommandInput;
      output: UpdateIndexCommandOutput;
    };
  };
}
