// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRequiredTagsInput, ListRequiredTagsOutput } from "../models/models_0";
import { ListRequiredTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRequiredTagsCommand}.
 */
export interface ListRequiredTagsCommandInput extends ListRequiredTagsInput {}
/**
 * @public
 *
 * The output of {@link ListRequiredTagsCommand}.
 */
export interface ListRequiredTagsCommandOutput extends ListRequiredTagsOutput, __MetadataBearer {}

/**
 * Lists the required tags for supported resource types in an Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, ListRequiredTagsCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, ListRequiredTagsCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * // import type { ResourceGroupsTaggingAPIClientConfig } from "@aws-sdk/client-resource-groups-tagging-api";
 * const config = {}; // type is ResourceGroupsTaggingAPIClientConfig
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const input = { // ListRequiredTagsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRequiredTagsCommand(input);
 * const response = await client.send(command);
 * // { // ListRequiredTagsOutput
 * //   RequiredTags: [ // RequiredTagsForListRequiredTags
 * //     { // RequiredTag
 * //       ResourceType: "STRING_VALUE",
 * //       CloudFormationResourceTypes: [ // CloudFormationResourceTypes
 * //         "STRING_VALUE",
 * //       ],
 * //       ReportingTagKeys: [ // ReportingTagKeys
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRequiredTagsCommandInput - {@link ListRequiredTagsCommandInput}
 * @returns {@link ListRequiredTagsCommandOutput}
 * @see {@link ListRequiredTagsCommandInput} for command's `input` shape.
 * @see {@link ListRequiredTagsCommandOutput} for command's `response` shape.
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
export class ListRequiredTagsCommand extends command<ListRequiredTagsCommandInput, ListRequiredTagsCommandOutput>(
  _ep0,
  _mw0,
  "ListRequiredTags",
  ListRequiredTags$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRequiredTagsInput;
      output: ListRequiredTagsOutput;
    };
    sdk: {
      input: ListRequiredTagsCommandInput;
      output: ListRequiredTagsCommandOutput;
    };
  };
}
