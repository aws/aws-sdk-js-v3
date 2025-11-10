// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import { ListPackagingGroupsRequest, ListPackagingGroupsResponse } from "../models/models_0";
import { ListPackagingGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPackagingGroupsCommand}.
 */
export interface ListPackagingGroupsCommandInput extends ListPackagingGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListPackagingGroupsCommand}.
 */
export interface ListPackagingGroupsCommandOutput extends ListPackagingGroupsResponse, __MetadataBearer {}

/**
 * Returns a collection of MediaPackage VOD PackagingGroup resources.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, ListPackagingGroupsCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, ListPackagingGroupsCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * // import type { MediaPackageVodClientConfig } from "@aws-sdk/client-mediapackage-vod";
 * const config = {}; // type is MediaPackageVodClientConfig
 * const client = new MediaPackageVodClient(config);
 * const input = { // ListPackagingGroupsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPackagingGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListPackagingGroupsResponse
 * //   NextToken: "STRING_VALUE",
 * //   PackagingGroups: [ // __listOfPackagingGroup
 * //     { // PackagingGroup
 * //       ApproximateAssetCount: Number("int"),
 * //       Arn: "STRING_VALUE",
 * //       Authorization: { // Authorization
 * //         CdnIdentifierSecret: "STRING_VALUE", // required
 * //         SecretsRoleArn: "STRING_VALUE", // required
 * //       },
 * //       CreatedAt: "STRING_VALUE",
 * //       DomainName: "STRING_VALUE",
 * //       EgressAccessLogs: { // EgressAccessLogs
 * //         LogGroupName: "STRING_VALUE",
 * //       },
 * //       Id: "STRING_VALUE",
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPackagingGroupsCommandInput - {@link ListPackagingGroupsCommandInput}
 * @returns {@link ListPackagingGroupsCommandOutput}
 * @see {@link ListPackagingGroupsCommandInput} for command's `input` shape.
 * @see {@link ListPackagingGroupsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for MediaPackageVodClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  The client is not authorized to access the requested resource.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  The client has exceeded their resource or throttling limits.
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  The parameters sent in the request are not valid.
 *
 * @throws {@link MediaPackageVodServiceException}
 * <p>Base exception class for all service exceptions from MediaPackageVod service.</p>
 *
 *
 * @public
 */
export class ListPackagingGroupsCommand extends $Command
  .classBuilder<
    ListPackagingGroupsCommandInput,
    ListPackagingGroupsCommandOutput,
    MediaPackageVodClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageVodClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaPackageVod", "ListPackagingGroups", {})
  .n("MediaPackageVodClient", "ListPackagingGroupsCommand")
  .sc(ListPackagingGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPackagingGroupsRequest;
      output: ListPackagingGroupsResponse;
    };
    sdk: {
      input: ListPackagingGroupsCommandInput;
      output: ListPackagingGroupsCommandOutput;
    };
  };
}
