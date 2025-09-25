// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { StopAccessLoggingInput, StopAccessLoggingOutput } from "../models/models_0";
import { StopAccessLogging } from "../schemas/schemas_9_StopAccessLogging";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopAccessLoggingCommand}.
 */
export interface StopAccessLoggingCommandInput extends StopAccessLoggingInput {}
/**
 * @public
 *
 * The output of {@link StopAccessLoggingCommand}.
 */
export interface StopAccessLoggingCommandOutput extends StopAccessLoggingOutput, __MetadataBearer {}

/**
 * <p>Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, StopAccessLoggingCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, StopAccessLoggingCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * // import type { MediaStoreClientConfig } from "@aws-sdk/client-mediastore";
 * const config = {}; // type is MediaStoreClientConfig
 * const client = new MediaStoreClient(config);
 * const input = { // StopAccessLoggingInput
 *   ContainerName: "STRING_VALUE", // required
 * };
 * const command = new StopAccessLoggingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopAccessLoggingCommandInput - {@link StopAccessLoggingCommandInput}
 * @returns {@link StopAccessLoggingCommandOutput}
 * @see {@link StopAccessLoggingCommandInput} for command's `input` shape.
 * @see {@link StopAccessLoggingCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for MediaStoreClient's `config` shape.
 *
 * @throws {@link ContainerInUseException} (client fault)
 *  <p>The container that you specified in the request already exists or is being
 *          updated.</p>
 *
 * @throws {@link ContainerNotFoundException} (client fault)
 *  <p>The container that you specified in the request does not exist.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link MediaStoreServiceException}
 * <p>Base exception class for all service exceptions from MediaStore service.</p>
 *
 *
 * @public
 */
export class StopAccessLoggingCommand extends $Command
  .classBuilder<
    StopAccessLoggingCommandInput,
    StopAccessLoggingCommandOutput,
    MediaStoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaStoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaStore_20170901", "StopAccessLogging", {})
  .n("MediaStoreClient", "StopAccessLoggingCommand")
  .sc(StopAccessLogging)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopAccessLoggingInput;
      output: {};
    };
    sdk: {
      input: StopAccessLoggingCommandInput;
      output: StopAccessLoggingCommandOutput;
    };
  };
}
