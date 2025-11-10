// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteOutpostInput, DeleteOutpostOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { DeleteOutpost } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteOutpostCommand}.
 */
export interface DeleteOutpostCommandInput extends DeleteOutpostInput {}
/**
 * @public
 *
 * The output of {@link DeleteOutpostCommand}.
 */
export interface DeleteOutpostCommandOutput extends DeleteOutpostOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, DeleteOutpostCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, DeleteOutpostCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // DeleteOutpostInput
 *   OutpostId: "STRING_VALUE", // required
 * };
 * const command = new DeleteOutpostCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOutpostCommandInput - {@link DeleteOutpostCommandInput}
 * @returns {@link DeleteOutpostCommandOutput}
 * @see {@link DeleteOutpostCommandInput} for command's `input` shape.
 * @see {@link DeleteOutpostCommandOutput} for command's `response` shape.
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
export class DeleteOutpostCommand extends $Command
  .classBuilder<
    DeleteOutpostCommandInput,
    DeleteOutpostCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OutpostsOlafService", "DeleteOutpost", {})
  .n("OutpostsClient", "DeleteOutpostCommand")
  .sc(DeleteOutpost)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOutpostInput;
      output: {};
    };
    sdk: {
      input: DeleteOutpostCommandInput;
      output: DeleteOutpostCommandOutput;
    };
  };
}
