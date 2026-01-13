// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteSinkInput, DeleteSinkOutput } from "../models/models_0";
import type { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import { DeleteSink$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSinkCommand}.
 */
export interface DeleteSinkCommandInput extends DeleteSinkInput {}
/**
 * @public
 *
 * The output of {@link DeleteSinkCommand}.
 */
export interface DeleteSinkCommandOutput extends DeleteSinkOutput, __MetadataBearer {}

/**
 * <p>Deletes a sink. You must delete all links to a sink before you can delete that sink.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, DeleteSinkCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, DeleteSinkCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * // import type { OAMClientConfig } from "@aws-sdk/client-oam";
 * const config = {}; // type is OAMClientConfig
 * const client = new OAMClient(config);
 * const input = { // DeleteSinkInput
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteSinkCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSinkCommandInput - {@link DeleteSinkCommandInput}
 * @returns {@link DeleteSinkCommandOutput}
 * @see {@link DeleteSinkCommandInput} for command's `input` shape.
 * @see {@link DeleteSinkCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing from the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link OAMServiceException}
 * <p>Base exception class for all service exceptions from OAM service.</p>
 *
 *
 * @public
 */
export class DeleteSinkCommand extends $Command
  .classBuilder<
    DeleteSinkCommandInput,
    DeleteSinkCommandOutput,
    OAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("oamservice", "DeleteSink", {})
  .n("OAMClient", "DeleteSinkCommand")
  .sc(DeleteSink$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSinkInput;
      output: {};
    };
    sdk: {
      input: DeleteSinkCommandInput;
      output: DeleteSinkCommandOutput;
    };
  };
}
