// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteStorageProfileRequest, DeleteStorageProfileResponse } from "../models/models_0";
import { de_DeleteStorageProfileCommand, se_DeleteStorageProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteStorageProfileCommand}.
 */
export interface DeleteStorageProfileCommandInput extends DeleteStorageProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteStorageProfileCommand}.
 */
export interface DeleteStorageProfileCommandOutput extends DeleteStorageProfileResponse, __MetadataBearer {}

/**
 * <p>Deletes a storage profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DeleteStorageProfileCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DeleteStorageProfileCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // DeleteStorageProfileRequest
 *   farmId: "STRING_VALUE", // required
 *   storageProfileId: "STRING_VALUE", // required
 * };
 * const command = new DeleteStorageProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStorageProfileCommandInput - {@link DeleteStorageProfileCommandInput}
 * @returns {@link DeleteStorageProfileCommandOutput}
 * @see {@link DeleteStorageProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteStorageProfileCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class DeleteStorageProfileCommand extends $Command
  .classBuilder<
    DeleteStorageProfileCommandInput,
    DeleteStorageProfileCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "DeleteStorageProfile", {})
  .n("DeadlineClient", "DeleteStorageProfileCommand")
  .f(void 0, void 0)
  .ser(se_DeleteStorageProfileCommand)
  .de(de_DeleteStorageProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStorageProfileRequest;
      output: {};
    };
    sdk: {
      input: DeleteStorageProfileCommandInput;
      output: DeleteStorageProfileCommandOutput;
    };
  };
}
