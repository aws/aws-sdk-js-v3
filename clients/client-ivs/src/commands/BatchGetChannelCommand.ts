// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { BatchGetChannelRequest, BatchGetChannelResponse } from "../models/models_0";
import { BatchGetChannel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetChannelCommand}.
 */
export interface BatchGetChannelCommandInput extends BatchGetChannelRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetChannelCommand}.
 */
export interface BatchGetChannelCommandOutput extends BatchGetChannelResponse, __MetadataBearer {}

/**
 * <p>Performs <a>GetChannel</a> on multiple ARNs simultaneously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, BatchGetChannelCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, BatchGetChannelCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // BatchGetChannelRequest
 *   arns: [ // ChannelArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetChannelCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetChannelResponse
 * //   channels: [ // Channels
 * //     { // Channel
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       latencyMode: "STRING_VALUE",
 * //       type: "BASIC" || "STANDARD" || "ADVANCED_SD" || "ADVANCED_HD",
 * //       recordingConfigurationArn: "STRING_VALUE",
 * //       ingestEndpoint: "STRING_VALUE",
 * //       playbackUrl: "STRING_VALUE",
 * //       authorized: true || false,
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       insecureIngest: true || false,
 * //       preset: "HIGHER_BANDWIDTH_DELIVERY" || "CONSTRAINED_BANDWIDTH_DELIVERY",
 * //       srt: { // Srt
 * //         endpoint: "STRING_VALUE",
 * //         passphrase: "STRING_VALUE",
 * //       },
 * //       playbackRestrictionPolicyArn: "STRING_VALUE",
 * //       multitrackInputConfiguration: { // MultitrackInputConfiguration
 * //         enabled: true || false,
 * //         policy: "ALLOW" || "REQUIRE",
 * //         maximumResolution: "SD" || "HD" || "FULL_HD",
 * //       },
 * //       containerFormat: "STRING_VALUE",
 * //     },
 * //   ],
 * //   errors: [ // BatchErrors
 * //     { // BatchError
 * //       arn: "STRING_VALUE",
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetChannelCommandInput - {@link BatchGetChannelCommandInput}
 * @returns {@link BatchGetChannelCommandOutput}
 * @see {@link BatchGetChannelCommandInput} for command's `input` shape.
 * @see {@link BatchGetChannelCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class BatchGetChannelCommand extends $Command
  .classBuilder<
    BatchGetChannelCommandInput,
    BatchGetChannelCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoService", "BatchGetChannel", {})
  .n("IvsClient", "BatchGetChannelCommand")
  .sc(BatchGetChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetChannelRequest;
      output: BatchGetChannelResponse;
    };
    sdk: {
      input: BatchGetChannelCommandInput;
      output: BatchGetChannelCommandOutput;
    };
  };
}
