// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetResourcesInput, GetResourcesOutput } from "../models/models_0";
import {
  ResourceGroupsTaggingAPIClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsTaggingAPIClient";
import { GetResources } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourcesCommand}.
 */
export interface GetResourcesCommandInput extends GetResourcesInput {}
/**
 * @public
 *
 * The output of {@link GetResourcesCommand}.
 */
export interface GetResourcesCommandOutput extends GetResourcesOutput, __MetadataBearer {}

/**
 * <p>Returns all the tagged or previously tagged resources that are located in the
 *             specified Amazon Web Services Region for the account. </p>
 *          <p>Depending on what information you want returned, you can also specify the
 *             following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>Filters</i> that specify what tags and resource types you
 *                     want returned. The response includes all tags that are associated with the
 *                     requested resources.</p>
 *             </li>
 *             <li>
 *                <p>Information about compliance with the account's effective tag policy. For more
 *                     information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag
 *                         Policies</a> in the <i>Organizations User Guide.</i>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>This operation supports pagination, where the response can be sent in
 *     multiple pages. You should check the <code>PaginationToken</code> response parameter to determine
 *     if there are additional results available to return. Repeat the query, passing the
 *     <code>PaginationToken</code> response parameter value as an input to the next request until you
 *     recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that
 *     there are no more results waiting to be returned.</p>
 *          <note>
 *             <p>
 *                <code>GetResources</code> does not return untagged resources. </p>
 *             <p>To find untagged resources in your account, use Amazon Web Services Resource Explorer with a
 *                 query that uses <code>tag:none</code>. For more information, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html"> Search query syntax reference for Resource Explorer</a>. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, GetResourcesCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, GetResourcesCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * // import type { ResourceGroupsTaggingAPIClientConfig } from "@aws-sdk/client-resource-groups-tagging-api";
 * const config = {}; // type is ResourceGroupsTaggingAPIClientConfig
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const input = { // GetResourcesInput
 *   PaginationToken: "STRING_VALUE",
 *   TagFilters: [ // TagFilterList
 *     { // TagFilter
 *       Key: "STRING_VALUE",
 *       Values: [ // TagValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ResourcesPerPage: Number("int"),
 *   TagsPerPage: Number("int"),
 *   ResourceTypeFilters: [ // ResourceTypeFilterList
 *     "STRING_VALUE",
 *   ],
 *   IncludeComplianceDetails: true || false,
 *   ExcludeCompliantResources: true || false,
 *   ResourceARNList: [ // ResourceARNListForGet
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetResourcesCommand(input);
 * const response = await client.send(command);
 * // { // GetResourcesOutput
 * //   PaginationToken: "STRING_VALUE",
 * //   ResourceTagMappingList: [ // ResourceTagMappingList
 * //     { // ResourceTagMapping
 * //       ResourceARN: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       ComplianceDetails: { // ComplianceDetails
 * //         NoncompliantKeys: [ // TagKeyList
 * //           "STRING_VALUE",
 * //         ],
 * //         KeysWithNoncompliantValues: [
 * //           "STRING_VALUE",
 * //         ],
 * //         ComplianceStatus: true || false,
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetResourcesCommandInput - {@link GetResourcesCommandInput}
 * @returns {@link GetResourcesCommandOutput}
 * @see {@link GetResourcesCommandInput} for command's `input` shape.
 * @see {@link GetResourcesCommandOutput} for command's `response` shape.
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
export class GetResourcesCommand extends $Command
  .classBuilder<
    GetResourcesCommandInput,
    GetResourcesCommandOutput,
    ResourceGroupsTaggingAPIClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceGroupsTaggingAPIClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ResourceGroupsTaggingAPI_20170126", "GetResources", {})
  .n("ResourceGroupsTaggingAPIClient", "GetResourcesCommand")
  .sc(GetResources)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourcesInput;
      output: GetResourcesOutput;
    };
    sdk: {
      input: GetResourcesCommandInput;
      output: GetResourcesCommandOutput;
    };
  };
}
