// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelCapacityTaskInput, CancelCapacityTaskOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { de_CancelCapacityTaskCommand, se_CancelCapacityTaskCommand } from "../protocols/Aws_restJson1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OutpostsOlafService", "CancelCapacityTask", {})
  .n("OutpostsClient", "CancelCapacityTaskCommand")
  .f(void 0, void 0)
  .ser(se_CancelCapacityTaskCommand)
  .de(de_CancelCapacityTaskCommand)
  .build() {}
