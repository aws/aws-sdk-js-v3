// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { DeletePrefetchScheduleRequest, DeletePrefetchScheduleResponse } from "../models/models_0";
import { DeletePrefetchSchedule } from "../schemas/schemas_21_DeletePrefetchSchedule";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePrefetchScheduleCommand}.
 */
export interface DeletePrefetchScheduleCommandInput extends DeletePrefetchScheduleRequest {}
/**
 * @public
 *
 * The output of {@link DeletePrefetchScheduleCommand}.
 */
export interface DeletePrefetchScheduleCommandOutput extends DeletePrefetchScheduleResponse, __MetadataBearer {}

/**
 * <p>Deletes a prefetch schedule for a specific playback configuration. If you call <code>DeletePrefetchSchedule</code> on an expired prefetch schedule, MediaTailor returns an HTTP 404 status code. For more information about ad prefetching, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html">Using ad prefetching</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeletePrefetchScheduleCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeletePrefetchScheduleCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // DeletePrefetchScheduleRequest
 *   Name: "STRING_VALUE", // required
 *   PlaybackConfigurationName: "STRING_VALUE", // required
 * };
 * const command = new DeletePrefetchScheduleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePrefetchScheduleCommandInput - {@link DeletePrefetchScheduleCommandInput}
 * @returns {@link DeletePrefetchScheduleCommandOutput}
 * @see {@link DeletePrefetchScheduleCommandInput} for command's `input` shape.
 * @see {@link DeletePrefetchScheduleCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class DeletePrefetchScheduleCommand extends $Command
  .classBuilder<
    DeletePrefetchScheduleCommandInput,
    DeletePrefetchScheduleCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaTailor", "DeletePrefetchSchedule", {})
  .n("MediaTailorClient", "DeletePrefetchScheduleCommand")
  .sc(DeletePrefetchSchedule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePrefetchScheduleRequest;
      output: {};
    };
    sdk: {
      input: DeletePrefetchScheduleCommandInput;
      output: DeletePrefetchScheduleCommandOutput;
    };
  };
}
