// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { DeleteLiveSourceRequest, DeleteLiveSourceResponse } from "../models/models_0";
import { de_DeleteLiveSourceCommand, se_DeleteLiveSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLiveSourceCommand}.
 */
export interface DeleteLiveSourceCommandInput extends DeleteLiveSourceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLiveSourceCommand}.
 */
export interface DeleteLiveSourceCommandOutput extends DeleteLiveSourceResponse, __MetadataBearer {}

/**
 * <p>The live source to delete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeleteLiveSourceCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeleteLiveSourceCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // DeleteLiveSourceRequest
 *   LiveSourceName: "STRING_VALUE", // required
 *   SourceLocationName: "STRING_VALUE", // required
 * };
 * const command = new DeleteLiveSourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLiveSourceCommandInput - {@link DeleteLiveSourceCommandInput}
 * @returns {@link DeleteLiveSourceCommandOutput}
 * @see {@link DeleteLiveSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteLiveSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class DeleteLiveSourceCommand extends $Command
  .classBuilder<
    DeleteLiveSourceCommandInput,
    DeleteLiveSourceCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaTailor", "DeleteLiveSource", {})
  .n("MediaTailorClient", "DeleteLiveSourceCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLiveSourceCommand)
  .de(de_DeleteLiveSourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLiveSourceRequest;
      output: {};
    };
    sdk: {
      input: DeleteLiveSourceCommandInput;
      output: DeleteLiveSourceCommandOutput;
    };
  };
}
