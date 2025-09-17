// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTagValuesInput, GetTagValuesOutput } from "../models/models_0";
import { de_GetTagValuesCommand, se_GetTagValuesCommand } from "../protocols/Aws_json1_1";
import {
  ResourceGroupsTaggingAPIClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsTaggingAPIClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTagValuesCommand}.
 */
export interface GetTagValuesCommandInput extends GetTagValuesInput {}
/**
 * @public
 *
 * The output of {@link GetTagValuesCommand}.
 */
export interface GetTagValuesCommandOutput extends GetTagValuesOutput, __MetadataBearer {}

/**
 * <p>Returns all tag values for the specified key that are used in the specified Amazon Web Services
 *             Region for the calling account.</p>
 *          <p>This operation supports pagination, where the response can be sent in
 *     multiple pages. You should check the <code>PaginationToken</code> response parameter to determine
 *     if there are additional results available to return. Repeat the query, passing the
 *     <code>PaginationToken</code> response parameter value as an input to the next request until you
 *     recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that
 *     there are no more results waiting to be returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, GetTagValuesCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, GetTagValuesCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * // import type { ResourceGroupsTaggingAPIClientConfig } from "@aws-sdk/client-resource-groups-tagging-api";
 * const config = {}; // type is ResourceGroupsTaggingAPIClientConfig
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const input = { // GetTagValuesInput
 *   PaginationToken: "STRING_VALUE",
 *   Key: "STRING_VALUE", // required
 * };
 * const command = new GetTagValuesCommand(input);
 * const response = await client.send(command);
 * // { // GetTagValuesOutput
 * //   PaginationToken: "STRING_VALUE",
 * //   TagValues: [ // TagValuesOutputList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetTagValuesCommandInput - {@link GetTagValuesCommandInput}
 * @returns {@link GetTagValuesCommandOutput}
 * @see {@link GetTagValuesCommandInput} for command's `input` shape.
 * @see {@link GetTagValuesCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for ResourceGroupsTaggingAPIClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure. You
 *             can retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This error indicates one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>A parameter is missing.</p>
 *             </li>
 *             <li>
 *                <p>A malformed string was supplied for the request parameter.</p>
 *             </li>
 *             <li>
 *                <p>An out-of-range value was supplied for the request parameter.</p>
 *             </li>
 *             <li>
 *                <p>The target ID is invalid, unsupported, or doesn't exist.</p>
 *             </li>
 *             <li>
 *                <p>You can't access the Amazon S3 bucket for report storage. For more information, see
 *                         <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies-prereqs.html#bucket-policies-org-report">Additional Requirements for Organization-wide Tag Compliance
 *                         Reports</a> in the <i>Organizations User Guide.</i>
 *                </p>
 *             </li>
 *          </ul>
 *
 * @throws {@link PaginationTokenExpiredException} (client fault)
 *  <p>A <code>PaginationToken</code> is valid for a maximum of 15 minutes. Your request was
 *             denied because the specified <code>PaginationToken</code> has expired.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request was denied to limit the frequency of submitted requests.</p>
 *
 * @throws {@link ResourceGroupsTaggingAPIServiceException}
 * <p>Base exception class for all service exceptions from ResourceGroupsTaggingAPI service.</p>
 *
 *
 * @public
 */
export class GetTagValuesCommand extends $Command
  .classBuilder<
    GetTagValuesCommandInput,
    GetTagValuesCommandOutput,
    ResourceGroupsTaggingAPIClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceGroupsTaggingAPIClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ResourceGroupsTaggingAPI_20170126", "GetTagValues", {})
  .n("ResourceGroupsTaggingAPIClient", "GetTagValuesCommand")
  .f(void 0, void 0)
  .ser(se_GetTagValuesCommand)
  .de(de_GetTagValuesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTagValuesInput;
      output: GetTagValuesOutput;
    };
    sdk: {
      input: GetTagValuesCommandInput;
      output: GetTagValuesCommandOutput;
    };
  };
}
