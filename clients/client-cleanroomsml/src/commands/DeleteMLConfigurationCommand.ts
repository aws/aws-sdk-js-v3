// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteMLConfigurationRequest } from "../models/models_0";
import { de_DeleteMLConfigurationCommand, se_DeleteMLConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMLConfigurationCommand}.
 */
export interface DeleteMLConfigurationCommandInput extends DeleteMLConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMLConfigurationCommand}.
 */
export interface DeleteMLConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a ML modeling configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, DeleteMLConfigurationCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, DeleteMLConfigurationCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // DeleteMLConfigurationRequest
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteMLConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMLConfigurationCommandInput - {@link DeleteMLConfigurationCommandInput}
 * @returns {@link DeleteMLConfigurationCommandOutput}
 * @see {@link DeleteMLConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteMLConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 *
 * @public
 */
export class DeleteMLConfigurationCommand extends $Command
  .classBuilder<
    DeleteMLConfigurationCommandInput,
    DeleteMLConfigurationCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStarkControlService", "DeleteMLConfiguration", {})
  .n("CleanRoomsMLClient", "DeleteMLConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteMLConfigurationCommand)
  .de(de_DeleteMLConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMLConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteMLConfigurationCommandInput;
      output: DeleteMLConfigurationCommandOutput;
    };
  };
}
