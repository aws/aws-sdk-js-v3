// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateExpirationForHITRequest, UpdateExpirationForHITResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { UpdateExpirationForHIT } from "../schemas/schemas_19_UpdateExpirationForHIT";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateExpirationForHITCommand}.
 */
export interface UpdateExpirationForHITCommandInput extends UpdateExpirationForHITRequest {}
/**
 * @public
 *
 * The output of {@link UpdateExpirationForHITCommand}.
 */
export interface UpdateExpirationForHITCommandOutput extends UpdateExpirationForHITResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>UpdateExpirationForHIT</code> operation allows you update the expiration time of a HIT.
 *             If you update it to a time in the past, the HIT will be immediately expired.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, UpdateExpirationForHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, UpdateExpirationForHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // UpdateExpirationForHITRequest
 *   HITId: "STRING_VALUE", // required
 *   ExpireAt: new Date("TIMESTAMP"), // required
 * };
 * const command = new UpdateExpirationForHITCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateExpirationForHITCommandInput - {@link UpdateExpirationForHITCommandInput}
 * @returns {@link UpdateExpirationForHITCommandOutput}
 * @see {@link UpdateExpirationForHITCommandInput} for command's `input` shape.
 * @see {@link UpdateExpirationForHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 *
 * @public
 */
export class UpdateExpirationForHITCommand extends $Command
  .classBuilder<
    UpdateExpirationForHITCommandInput,
    UpdateExpirationForHITCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MTurkRequesterServiceV20170117", "UpdateExpirationForHIT", {})
  .n("MTurkClient", "UpdateExpirationForHITCommand")
  .sc(UpdateExpirationForHIT)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateExpirationForHITRequest;
      output: {};
    };
    sdk: {
      input: UpdateExpirationForHITCommandInput;
      output: UpdateExpirationForHITCommandOutput;
    };
  };
}
