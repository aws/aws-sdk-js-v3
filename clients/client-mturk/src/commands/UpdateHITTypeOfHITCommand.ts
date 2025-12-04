// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateHITTypeOfHITRequest, UpdateHITTypeOfHITResponse } from "../models/models_0";
import type { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { UpdateHITTypeOfHIT } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateHITTypeOfHITCommand}.
 */
export interface UpdateHITTypeOfHITCommandInput extends UpdateHITTypeOfHITRequest {}
/**
 * @public
 *
 * The output of {@link UpdateHITTypeOfHITCommand}.
 */
export interface UpdateHITTypeOfHITCommandOutput extends UpdateHITTypeOfHITResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>UpdateHITTypeOfHIT</code>
 *             operation allows you to change the HITType properties of a HIT. This
 *             operation disassociates the HIT from its old HITType properties and
 *             associates it with the new HITType properties. The HIT takes on the
 *             properties of the new HITType in place of the old ones.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, UpdateHITTypeOfHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, UpdateHITTypeOfHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // UpdateHITTypeOfHITRequest
 *   HITId: "STRING_VALUE", // required
 *   HITTypeId: "STRING_VALUE", // required
 * };
 * const command = new UpdateHITTypeOfHITCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateHITTypeOfHITCommandInput - {@link UpdateHITTypeOfHITCommandInput}
 * @returns {@link UpdateHITTypeOfHITCommandOutput}
 * @see {@link UpdateHITTypeOfHITCommandInput} for command's `input` shape.
 * @see {@link UpdateHITTypeOfHITCommandOutput} for command's `response` shape.
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
export class UpdateHITTypeOfHITCommand extends $Command
  .classBuilder<
    UpdateHITTypeOfHITCommandInput,
    UpdateHITTypeOfHITCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MTurkRequesterServiceV20170117", "UpdateHITTypeOfHIT", {})
  .n("MTurkClient", "UpdateHITTypeOfHITCommand")
  .sc(UpdateHITTypeOfHIT)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateHITTypeOfHITRequest;
      output: {};
    };
    sdk: {
      input: UpdateHITTypeOfHITCommandInput;
      output: UpdateHITTypeOfHITCommandOutput;
    };
  };
}
