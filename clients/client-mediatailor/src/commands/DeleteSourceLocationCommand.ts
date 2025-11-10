// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { DeleteSourceLocationRequest, DeleteSourceLocationResponse } from "../models/models_0";
import { DeleteSourceLocation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSourceLocationCommand}.
 */
export interface DeleteSourceLocationCommandInput extends DeleteSourceLocationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSourceLocationCommand}.
 */
export interface DeleteSourceLocationCommandOutput extends DeleteSourceLocationResponse, __MetadataBearer {}

/**
 * <p>Deletes a source location. A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeleteSourceLocationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeleteSourceLocationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // DeleteSourceLocationRequest
 *   SourceLocationName: "STRING_VALUE", // required
 * };
 * const command = new DeleteSourceLocationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSourceLocationCommandInput - {@link DeleteSourceLocationCommandInput}
 * @returns {@link DeleteSourceLocationCommandOutput}
 * @see {@link DeleteSourceLocationCommandInput} for command's `input` shape.
 * @see {@link DeleteSourceLocationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class DeleteSourceLocationCommand extends $Command
  .classBuilder<
    DeleteSourceLocationCommandInput,
    DeleteSourceLocationCommandOutput,
    MediaTailorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaTailorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaTailor", "DeleteSourceLocation", {})
  .n("MediaTailorClient", "DeleteSourceLocationCommand")
  .sc(DeleteSourceLocation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSourceLocationRequest;
      output: {};
    };
    sdk: {
      input: DeleteSourceLocationCommandInput;
      output: DeleteSourceLocationCommandOutput;
    };
  };
}
