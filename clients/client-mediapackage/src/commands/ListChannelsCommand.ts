// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import { ListChannelsRequest, ListChannelsResponse } from "../models/models_0";
import { ListChannels } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChannelsCommand}.
 */
export interface ListChannelsCommandInput extends ListChannelsRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelsCommand}.
 */
export interface ListChannelsCommandOutput extends ListChannelsResponse, __MetadataBearer {}

/**
 * Returns a collection of Channels.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, ListChannelsCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, ListChannelsCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * // import type { MediaPackageClientConfig } from "@aws-sdk/client-mediapackage";
 * const config = {}; // type is MediaPackageClientConfig
 * const client = new MediaPackageClient(config);
 * const input = { // ListChannelsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListChannelsCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelsResponse
 * //   Channels: [ // __listOfChannel
 * //     { // Channel
 * //       Arn: "STRING_VALUE",
 * //       CreatedAt: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       EgressAccessLogs: { // EgressAccessLogs
 * //         LogGroupName: "STRING_VALUE",
 * //       },
 * //       HlsIngest: { // HlsIngest
 * //         IngestEndpoints: [ // __listOfIngestEndpoint
 * //           { // IngestEndpoint
 * //             Id: "STRING_VALUE",
 * //             Password: "STRING_VALUE",
 * //             Url: "STRING_VALUE",
 * //             Username: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       Id: "STRING_VALUE",
 * //       IngressAccessLogs: { // IngressAccessLogs
 * //         LogGroupName: "STRING_VALUE",
 * //       },
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChannelsCommandInput - {@link ListChannelsCommandInput}
 * @returns {@link ListChannelsCommandOutput}
 * @see {@link ListChannelsCommandInput} for command's `input` shape.
 * @see {@link ListChannelsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for MediaPackageClient's `config` shape.
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
 * @throws {@link MediaPackageServiceException}
 * <p>Base exception class for all service exceptions from MediaPackage service.</p>
 *
 *
 * @public
 */
export class ListChannelsCommand extends $Command
  .classBuilder<
    ListChannelsCommandInput,
    ListChannelsCommandOutput,
    MediaPackageClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaPackage", "ListChannels", {})
  .n("MediaPackageClient", "ListChannelsCommand")
  .sc(ListChannels)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChannelsRequest;
      output: ListChannelsResponse;
    };
    sdk: {
      input: ListChannelsCommandInput;
      output: ListChannelsCommandOutput;
    };
  };
}
