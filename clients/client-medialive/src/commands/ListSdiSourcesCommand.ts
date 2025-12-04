// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import type { ListSdiSourcesRequest, ListSdiSourcesResponse } from "../models/models_1";
import { ListSdiSources } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSdiSourcesCommand}.
 */
export interface ListSdiSourcesCommandInput extends ListSdiSourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListSdiSourcesCommand}.
 */
export interface ListSdiSourcesCommandOutput extends ListSdiSourcesResponse, __MetadataBearer {}

/**
 * List all the SdiSources in the AWS account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListSdiSourcesCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListSdiSourcesCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // ListSdiSourcesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSdiSourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListSdiSourcesResponse
 * //   NextToken: "STRING_VALUE",
 * //   SdiSources: [ // __listOfSdiSourceSummary
 * //     { // SdiSourceSummary
 * //       Arn: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Inputs: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //       Mode: "QUADRANT" || "INTERLEAVE",
 * //       Name: "STRING_VALUE",
 * //       State: "IDLE" || "IN_USE" || "DELETED",
 * //       Type: "SINGLE" || "QUAD",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSdiSourcesCommandInput - {@link ListSdiSourcesCommandInput}
 * @returns {@link ListSdiSourcesCommandOutput}
 * @see {@link ListSdiSourcesCommandInput} for command's `input` shape.
 * @see {@link ListSdiSourcesCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class ListSdiSourcesCommand extends $Command
  .classBuilder<
    ListSdiSourcesCommandInput,
    ListSdiSourcesCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "ListSdiSources", {})
  .n("MediaLiveClient", "ListSdiSourcesCommand")
  .sc(ListSdiSources)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSdiSourcesRequest;
      output: ListSdiSourcesResponse;
    };
    sdk: {
      input: ListSdiSourcesCommandInput;
      output: ListSdiSourcesCommandOutput;
    };
  };
}
