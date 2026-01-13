// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetTagValuesInput, GetTagValuesOutput } from "../models/models_0";
import type {
  ResourceGroupsTaggingAPIClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsTaggingAPIClient";
import { GetTagValues$ } from "../schemas/schemas_0";

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
 *  <p>The request failed because of one of the following reasons:</p>
 *          <ul>
 *             <li>
 *                <p>A required parameter is missing.</p>
 *             </li>
 *             <li>
 *                <p>A provided string parameter is malformed.</p>
 *             </li>
 *             <li>
 *                <p>An provided parameter value is out of range.</p>
 *             </li>
 *             <li>
 *                <p>The target ID is invalid, unsupported, or doesn't exist.</p>
 *             </li>
 *             <li>
 *                <p>You can't access the Amazon S3 bucket for report storage. For more information, see
 *                         <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/tag-policies-orgs.html#bucket-policy">Amazon S3 bucket policy for report storage</a> in the <i>Tagging Amazon Web Services resources and Tag Editor</i> user guide. </p>
 *             </li>
 *             <li>
 *                <p>The partition specified in an ARN parameter in the request doesn't match the
 *                     partition where you invoked the operation. The partition is specified by the
 *                     second field of the ARN.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link PaginationTokenExpiredException} (client fault)
 *  <p>The request failed because the specified <code>PaginationToken</code> has expired. A
 *                 <code>PaginationToken</code> is valid for a maximum of 15 minutes.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request failed because it exceeded the allowed frequency of submitted
 *             requests.</p>
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ResourceGroupsTaggingAPI_20170126", "GetTagValues", {})
  .n("ResourceGroupsTaggingAPIClient", "GetTagValuesCommand")
  .sc(GetTagValues$)
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
