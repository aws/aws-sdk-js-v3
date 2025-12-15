// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MediaPackageV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MediaPackageV2Client";
import type { ListChannelGroupsRequest, ListChannelGroupsResponse } from "../models/models_0";
import { ListChannelGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChannelGroupsCommand}.
 */
export interface ListChannelGroupsCommandInput extends ListChannelGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelGroupsCommand}.
 */
export interface ListChannelGroupsCommandOutput extends ListChannelGroupsResponse, __MetadataBearer {}

/**
 * <p>Retrieves all channel groups that are configured in Elemental MediaPackage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, ListChannelGroupsCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, ListChannelGroupsCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * // import type { MediaPackageV2ClientConfig } from "@aws-sdk/client-mediapackagev2";
 * const config = {}; // type is MediaPackageV2ClientConfig
 * const client = new MediaPackageV2Client(config);
 * const input = { // ListChannelGroupsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListChannelGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelGroupsResponse
 * //   Items: [ // ChannelGroupsList
 * //     { // ChannelGroupListConfiguration
 * //       ChannelGroupName: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       ModifiedAt: new Date("TIMESTAMP"), // required
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChannelGroupsCommandInput - {@link ListChannelGroupsCommandInput}
 * @returns {@link ListChannelGroupsCommandOutput}
 * @see {@link ListChannelGroupsCommandInput} for command's `input` shape.
 * @see {@link ListChannelGroupsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageV2ClientResolvedConfig | config} for MediaPackageV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied because either you don't have permissions to perform the requested operation or MediaPackage is getting throttling errors with CDN authorization. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide. Or, if you're using CDN authorization, you will receive this exception if MediaPackage receives a throttling error from Secrets Manager.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates that an error from the service occurred while trying to process a request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service.</p>
 *
 * @throws {@link MediaPackageV2ServiceException}
 * <p>Base exception class for all service exceptions from MediaPackageV2 service.</p>
 *
 *
 * @example Listing all Channel Groups
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListChannelGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup",
 *       ChannelGroupName: "exampleChannelGroup",
 *       CreatedAt: "2022-10-18T09:36:00.00Z",
 *       Description: "Description for exampleChannelGroup",
 *       ModifiedAt: "2022-10-18T09:36:00.00Z"
 *     },
 *     {
 *       Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/anotherExampleChannelGroup",
 *       ChannelGroupName: "anotherExampleChannelGroup",
 *       CreatedAt: "2022-10-18T10:36:00.00Z",
 *       ModifiedAt: "2022-10-18T10:36:00.00Z"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListChannelGroupsCommand extends $Command
  .classBuilder<
    ListChannelGroupsCommandInput,
    ListChannelGroupsCommandOutput,
    MediaPackageV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("mediapackagev2", "ListChannelGroups", {})
  .n("MediaPackageV2Client", "ListChannelGroupsCommand")
  .sc(ListChannelGroups$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChannelGroupsRequest;
      output: ListChannelGroupsResponse;
    };
    sdk: {
      input: ListChannelGroupsCommandInput;
      output: ListChannelGroupsCommandOutput;
    };
  };
}
