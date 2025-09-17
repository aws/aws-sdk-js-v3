// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { PutMetadataRequest, PutMetadataRequestFilterSensitiveLog } from "../models/models_0";
import { de_PutMetadataCommand, se_PutMetadataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutMetadataCommand}.
 */
export interface PutMetadataCommandInput extends PutMetadataRequest {}
/**
 * @public
 *
 * The output of {@link PutMetadataCommand}.
 */
export interface PutMetadataCommandOutput extends __MetadataBearer {}

/**
 * <p>Inserts metadata into the active stream of the specified channel. At most 5 requests per
 *       second per channel are allowed, each with a maximum 1 KB payload. (If 5 TPS is not sufficient
 *       for your needs, we recommend batching your data into a single PutMetadata call.) At most 155
 *       requests per second per account are allowed. Also see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/metadata.html">Embedding Metadata within a Video Stream</a> in
 *       the <i>Amazon IVS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, PutMetadataCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, PutMetadataCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // PutMetadataRequest
 *   channelArn: "STRING_VALUE", // required
 *   metadata: "STRING_VALUE", // required
 * };
 * const command = new PutMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutMetadataCommandInput - {@link PutMetadataCommandInput}
 * @returns {@link PutMetadataCommandOutput}
 * @see {@link PutMetadataCommandInput} for command's `input` shape.
 * @see {@link PutMetadataCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ChannelNotBroadcasting} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class PutMetadataCommand extends $Command
  .classBuilder<
    PutMetadataCommandInput,
    PutMetadataCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoService", "PutMetadata", {})
  .n("IvsClient", "PutMetadataCommand")
  .f(PutMetadataRequestFilterSensitiveLog, void 0)
  .ser(se_PutMetadataCommand)
  .de(de_PutMetadataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutMetadataRequest;
      output: {};
    };
    sdk: {
      input: PutMetadataCommandInput;
      output: PutMetadataCommandOutput;
    };
  };
}
