// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CancelOrderInput, CancelOrderOutput } from "../models/models_0";
import type { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { CancelOrder } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelOrderCommand}.
 */
export interface CancelOrderCommandInput extends CancelOrderInput {}
/**
 * @public
 *
 * The output of {@link CancelOrderCommand}.
 */
export interface CancelOrderCommandOutput extends CancelOrderOutput, __MetadataBearer {}

/**
 * <p>Cancels the specified order for an Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, CancelOrderCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, CancelOrderCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // CancelOrderInput
 *   OrderId: "STRING_VALUE", // required
 * };
 * const command = new CancelOrderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelOrderCommandInput - {@link CancelOrderCommandInput}
 * @returns {@link CancelOrderCommandOutput}
 * @see {@link CancelOrderCommandInput} for command's `input` shape.
 * @see {@link CancelOrderCommandOutput} for command's `response` shape.
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
export class CancelOrderCommand extends $Command
  .classBuilder<
    CancelOrderCommandInput,
    CancelOrderCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OutpostsOlafService", "CancelOrder", {})
  .n("OutpostsClient", "CancelOrderCommand")
  .sc(CancelOrder)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelOrderInput;
      output: {};
    };
    sdk: {
      input: CancelOrderCommandInput;
      output: CancelOrderCommandOutput;
    };
  };
}
