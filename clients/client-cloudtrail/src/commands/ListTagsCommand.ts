// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTagsRequest, ListTagsResponse } from "../models/models_0";
import { ListTags } from "../schemas/schemas_6_Dashboard";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists the tags for the specified trails, event data stores, dashboards, or channels in the current Region.</p>
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
 *  <p>This exception is thrown when the specified value of <code>ChannelARN</code> is not
 *          valid.</p>
 *
 * @throws {@link CloudTrailARNInvalidException} (client fault)
 *  <p>This exception is thrown when an operation is called with an ARN that is not valid.</p>
 *          <p>The following is the format of a trail ARN: <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
 *          </p>
 *          <p>The following is the format of an event data store ARN:
 *          <code>arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code>
 *          </p>
 *          <p>The following is the format of a dashboard ARN: <code>arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash</code>
 *          </p>
 *          <p>The following is the format of a channel ARN:
 *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code>
 *          </p>
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *  <p>The specified event data store ARN is not valid or does not map to an event data store
 *          in your account.</p>
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *  <p>The specified event data store was not found.</p>
 *
 * @throws {@link InactiveEventDataStoreException} (client fault)
 *  <p>The event data store is inactive.</p>
 *
 * @throws {@link InvalidTokenException} (client fault)
 *  <p>Reserved for future use.</p>
 *
 * @throws {@link InvalidTrailNameException} (client fault)
 *  <p>This exception is thrown when the provided trail name is not valid. Trail names must
 *          meet the following requirements:</p>
 *          <ul>
 *             <li>
 *                <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores
 *                (_), or dashes (-)</p>
 *             </li>
 *             <li>
 *                <p>Start with a letter or number, and end with a letter or number</p>
 *             </li>
 *             <li>
 *                <p>Be between 3 and 128 characters</p>
 *             </li>
 *             <li>
 *                <p>Have no adjacent periods, underscores or dashes. Names like
 *                   <code>my-_namespace</code> and <code>my--namespace</code> are not valid.</p>
 *             </li>
 *             <li>
 *                <p>Not be in IP address format (for example, 192.168.5.4)</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *  <p> This exception is thrown when the management account does not have a service-linked
 *          role. </p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the specified resource is not found.</p>
 *
 * @throws {@link ResourceTypeNotSupportedException} (client fault)
 *  <p>This exception is thrown when the specified resource type is not supported by CloudTrail.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 *
 * @public
 */
export class ListTagsCommand extends $Command
  .classBuilder<
    ListTagsCommandInput,
    ListTagsCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudTrail_20131101", "ListTags", {})
  .n("CloudTrailClient", "ListTagsCommand")
  .sc(ListTags)
  .build() {
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
