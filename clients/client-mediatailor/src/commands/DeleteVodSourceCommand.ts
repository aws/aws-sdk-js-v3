// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import type { DeleteVodSourceRequest, DeleteVodSourceResponse } from "../models/models_0";
import { DeleteVodSource } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVodSourceCommand}.
 */
export interface DeleteVodSourceCommandInput extends DeleteVodSourceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVodSourceCommand}.
 */
export interface DeleteVodSourceCommandOutput extends DeleteVodSourceResponse, __MetadataBearer {}

/**
 * <p>The video on demand (VOD) source to delete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeleteVodSourceCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeleteVodSourceCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // DeleteVodSourceRequest
 *   SourceLocationName: "STRING_VALUE", // required
 *   VodSourceName: "STRING_VALUE", // required
 * };
 * const command = new DeleteVodSourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVodSourceCommandInput - {@link DeleteVodSourceCommandInput}
 * @returns {@link DeleteVodSourceCommandOutput}
 * @see {@link DeleteVodSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteVodSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class DeleteVodSourceCommand extends $Command
  .classBuilder<
    DeleteVodSourceCommandInput,
    DeleteVodSourceCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaTailor", "DeleteVodSource", {})
  .n("MediaTailorClient", "DeleteVodSourceCommand")
  .sc(DeleteVodSource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVodSourceRequest;
      output: {};
    };
    sdk: {
      input: DeleteVodSourceCommandInput;
      output: DeleteVodSourceCommandOutput;
    };
  };
}
