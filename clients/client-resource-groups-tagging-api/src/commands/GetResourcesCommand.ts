// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetResourcesInput, GetResourcesOutput } from "../models/models_0";
import { GetResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns all the tagged or previously tagged resources that are located in the specified Amazon Web Services Region for the account.
 *
 * Depending on what information you want returned, you can also specify the following:
 *
 * - *Filters* that specify what tags and resource types you want returned. The response includes all tags that are associated with the requested resources.
 * - Information about compliance with the account's effective tag policy. For more information on tag policies, see [Tag Policies](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html) in the *Organizations User Guide.*
 *
 * This operation supports pagination, where the response can be sent in multiple pages. You should check the `PaginationToken` response parameter to determine if there are additional results available to return. Repeat the query, passing the `PaginationToken` response parameter value as an input to the next request until you recieve a `null` value. A null value for `PaginationToken` indicates that there are no more results waiting to be returned.
 *
 * > **Note:**
 * >
 * > `GetResources` does not return untagged resources.
 * >
 * > To find untagged resources in your account, use Amazon Web Services Resource Explorer with a query that uses `tag:none`. For more information, see [Search query syntax reference for Resource Explorer](https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html).
 *
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
 * //         MissingTagKeys: [
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
 *
 * The request processing failed because of an unknown error, exception, or failure. You can retry the request.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The request failed because of one of the following reasons:
 *
 * - A required parameter is missing.
 * - A provided string parameter is malformed.
 * - An provided parameter value is out of range.
 * - The target ID is invalid, unsupported, or doesn't exist.
 * - You can't access the Amazon S3 bucket for report storage. For more information, see [Amazon S3 bucket policy for report storage](https://docs.aws.amazon.com/tag-editor/latest/userguide/tag-policies-orgs.html#bucket-policy) in the *Tagging Amazon Web Services resources and Tag Editor* user guide.
 * - The partition specified in an ARN parameter in the request doesn't match the partition where you invoked the operation. The partition is specified by the second field of the ARN.
 *
 * @throws {@link PaginationTokenExpiredException} (client fault)
 *
 * The request failed because the specified `PaginationToken` has expired. A `PaginationToken` is valid for a maximum of 15 minutes.
 *
 * @throws {@link ThrottledException} (client fault)
 *
 * The request failed because it exceeded the allowed frequency of submitted requests.
 *
 * @throws {@link ResourceGroupsTaggingAPIServiceException}
 *
 * Base exception class for all service exceptions from ResourceGroupsTaggingAPI service.
 *
 * @public
 */
export class GetResourcesCommand extends command<GetResourcesCommandInput, GetResourcesCommandOutput>(
  _ep0,
  _mw0,
  "GetResources",
  GetResources$
) {
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
