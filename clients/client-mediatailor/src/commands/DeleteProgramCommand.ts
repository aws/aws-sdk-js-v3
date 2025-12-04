// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import type { DeleteProgramRequest, DeleteProgramResponse } from "../models/models_0";
import { DeleteProgram } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProgramCommand}.
 */
export interface DeleteProgramCommandInput extends DeleteProgramRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProgramCommand}.
 */
export interface DeleteProgramCommandOutput extends DeleteProgramResponse, __MetadataBearer {}

/**
 * <p>Deletes a program within a channel. For information about programs, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-programs.html">Working with programs</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeleteProgramCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeleteProgramCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // DeleteProgramRequest
 *   ChannelName: "STRING_VALUE", // required
 *   ProgramName: "STRING_VALUE", // required
 * };
 * const command = new DeleteProgramCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProgramCommandInput - {@link DeleteProgramCommandInput}
 * @returns {@link DeleteProgramCommandOutput}
 * @see {@link DeleteProgramCommandInput} for command's `input` shape.
 * @see {@link DeleteProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class DeleteProgramCommand extends $Command
  .classBuilder<
    DeleteProgramCommandInput,
    DeleteProgramCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaTailor", "DeleteProgram", {})
  .n("MediaTailorClient", "DeleteProgramCommand")
  .sc(DeleteProgram)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProgramRequest;
      output: {};
    };
    sdk: {
      input: DeleteProgramCommandInput;
      output: DeleteProgramCommandOutput;
    };
  };
}
