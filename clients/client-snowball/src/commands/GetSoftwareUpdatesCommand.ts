// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSoftwareUpdatesRequest, GetSoftwareUpdatesResult } from "../models/models_0";
import { GetSoftwareUpdates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSoftwareUpdatesCommand}.
 */
export interface GetSoftwareUpdatesCommandInput extends GetSoftwareUpdatesRequest {}
/**
 * @public
 *
 * The output of {@link GetSoftwareUpdatesCommand}.
 */
export interface GetSoftwareUpdatesCommandOutput extends GetSoftwareUpdatesResult, __MetadataBearer {}

/**
 * <p>Returns an Amazon S3 presigned URL for an update file associated with a specified
 *         <code>JobId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, GetSoftwareUpdatesCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, GetSoftwareUpdatesCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * // import type { SnowballClientConfig } from "@aws-sdk/client-snowball";
 * const config = {}; // type is SnowballClientConfig
 * const client = new SnowballClient(config);
 * const input = { // GetSoftwareUpdatesRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new GetSoftwareUpdatesCommand(input);
 * const response = await client.send(command);
 * // { // GetSoftwareUpdatesResult
 * //   UpdatesURI: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSoftwareUpdatesCommandInput - {@link GetSoftwareUpdatesCommandInput}
 * @returns {@link GetSoftwareUpdatesCommandOutput}
 * @see {@link GetSoftwareUpdatesCommandInput} for command's `input` shape.
 * @see {@link GetSoftwareUpdatesCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidJobStateException} (client fault)
 *  <p>The action can't be performed because the job's current state doesn't allow that action
 *       to be performed.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 *
 * @public
 */
export class GetSoftwareUpdatesCommand extends command<GetSoftwareUpdatesCommandInput, GetSoftwareUpdatesCommandOutput>(
  _ep0,
  _mw0,
  "GetSoftwareUpdates",
  GetSoftwareUpdates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSoftwareUpdatesRequest;
      output: GetSoftwareUpdatesResult;
    };
    sdk: {
      input: GetSoftwareUpdatesCommandInput;
      output: GetSoftwareUpdatesCommandOutput;
    };
  };
}
