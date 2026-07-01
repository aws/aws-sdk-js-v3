// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVodSourceRequest, DeleteVodSourceResponse } from "../models/models_0";
import { DeleteVodSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export class DeleteVodSourceCommand extends command<DeleteVodSourceCommandInput, DeleteVodSourceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVodSource",
  DeleteVodSource$
) {
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
