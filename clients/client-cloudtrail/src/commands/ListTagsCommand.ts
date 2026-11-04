// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTagsRequest, ListTagsResponse } from "../models/models_0";
import { ListTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTagsCommand}.
 */
export interface ListTagsCommandInput extends ListTagsRequest {}
/**
 * @public
 *
 * The output of {@link ListTagsCommand}.
 */
export interface ListTagsCommandOutput extends ListTagsResponse, __MetadataBearer {}

/**
 * Lists the tags for the specified trails, event data stores, dashboards, or channels in the current Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, ListTagsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, ListTagsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // ListTagsRequest
 *   ResourceIdList: [ // ResourceIdList // required
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTagsCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsResponse
 * //   ResourceTagList: [ // ResourceTagList
 * //     { // ResourceTag
 * //       ResourceId: "STRING_VALUE",
 * //       TagsList: [ // TagsList
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTagsCommandInput - {@link ListTagsCommandInput}
 * @returns {@link ListTagsCommandOutput}
 * @see {@link ListTagsCommandInput} for command's `input` shape.
 * @see {@link ListTagsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link ChannelARNInvalidException} (client fault)
 *
 * This exception is thrown when the specified value of `ChannelARN` is not valid.
 *
 * @throws {@link CloudTrailARNInvalidException} (client fault)
 *
 * This exception is thrown when an operation is called with an ARN that is not valid.
 *
 * The following is the format of a trail ARN: `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
 *
 * The following is the format of an event data store ARN: `arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE`
 *
 * The following is the format of a dashboard ARN: `arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash`
 *
 * The following is the format of a channel ARN: `arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890`
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *
 * The specified event data store ARN is not valid or does not map to an event data store in your account.
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *
 * The specified event data store was not found.
 *
 * @throws {@link InactiveEventDataStoreException} (client fault)
 *
 * The event data store is inactive.
 *
 * @throws {@link InvalidTokenException} (client fault)
 *
 * Reserved for future use.
 *
 * @throws {@link InvalidTrailNameException} (client fault)
 *
 * This exception is thrown when the provided trail name is not valid. Trail names must meet the following requirements:
 *
 * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)
 * - Start with a letter or number, and end with a letter or number
 * - Be between 3 and 128 characters
 * - Have no adjacent periods, underscores or dashes. Names like `my-_namespace` and `my--namespace` are not valid.
 * - Not be in IP address format (for example, 192.168.5.4)
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *
 * This exception is thrown when the management account does not have a service-linked role.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * This exception is thrown when the requested operation is not permitted.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when the specified resource is not found.
 *
 * @throws {@link ResourceTypeNotSupportedException} (client fault)
 *
 * This exception is thrown when the specified resource type is not supported by CloudTrail.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * This exception is thrown when the requested operation is not supported.
 *
 * @throws {@link CloudTrailServiceException}
 *
 * Base exception class for all service exceptions from CloudTrail service.
 *
 * @public
 */
export class ListTagsCommand extends command<ListTagsCommandInput, ListTagsCommandOutput>(
  _ep0,
  _mw0,
  "ListTags",
  ListTags$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsRequest;
      output: ListTagsResponse;
    };
    sdk: {
      input: ListTagsCommandInput;
      output: ListTagsCommandOutput;
    };
  };
}
