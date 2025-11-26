// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CancelCapacityTaskInput, CancelCapacityTaskOutput } from "../models/models_0";
import type { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { CancelCapacityTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelCapacityTaskCommand}.
 */
export interface CancelCapacityTaskCommandInput extends CancelCapacityTaskInput {}
/**
 * @public
 *
 * The output of {@link CancelCapacityTaskCommand}.
 */
export interface CancelCapacityTaskCommandOutput extends CancelCapacityTaskOutput, __MetadataBearer {}

/**
 * <p>Cancels the capacity task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, CancelCapacityTaskCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, CancelCapacityTaskCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // CancelCapacityTaskInput
 *   CapacityTaskId: "STRING_VALUE", // required
 *   OutpostIdentifier: "STRING_VALUE", // required
 * };
 * const command = new CancelCapacityTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelCapacityTaskCommandInput - {@link CancelCapacityTaskCommandInput}
 * @returns {@link CancelCapacityTaskCommandOutput}
 * @see {@link CancelCapacityTaskCommandInput} for command's `input` shape.
 * @see {@link CancelCapacityTaskCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting this resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 *
 * @public
 */
export class CancelCapacityTaskCommand extends $Command
  .classBuilder<
    CancelCapacityTaskCommandInput,
    CancelCapacityTaskCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OutpostsOlafService", "CancelCapacityTask", {})
  .n("OutpostsClient", "CancelCapacityTaskCommand")
  .sc(CancelCapacityTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelCapacityTaskInput;
      output: {};
    };
    sdk: {
      input: CancelCapacityTaskCommandInput;
      output: CancelCapacityTaskCommandOutput;
    };
  };
}
