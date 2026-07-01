// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLiveSourceRequest, DeleteLiveSourceResponse } from "../models/models_0";
import { DeleteLiveSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export class DeleteLiveSourceCommand extends command<DeleteLiveSourceCommandInput, DeleteLiveSourceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLiveSource",
  DeleteLiveSource$
) {
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
