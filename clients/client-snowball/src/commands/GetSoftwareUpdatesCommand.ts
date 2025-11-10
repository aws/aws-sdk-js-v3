// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSoftwareUpdatesRequest, GetSoftwareUpdatesResult } from "../models/models_0";
import { GetSoftwareUpdates } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class GetSoftwareUpdatesCommand extends $Command
  .classBuilder<
    GetSoftwareUpdatesCommandInput,
    GetSoftwareUpdatesCommandOutput,
    SnowballClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SnowballClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIESnowballJobManagementService", "GetSoftwareUpdates", {})
  .n("SnowballClient", "GetSoftwareUpdatesCommand")
  .sc(GetSoftwareUpdates)
  .build() {
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
