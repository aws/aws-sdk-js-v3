// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateStorageProfileRequest,
  UpdateStorageProfileRequestFilterSensitiveLog,
  UpdateStorageProfileResponse,
} from "../models/models_1";
import { de_UpdateStorageProfileCommand, se_UpdateStorageProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateStorageProfileCommand}.
 */
export interface UpdateStorageProfileCommandInput extends UpdateStorageProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateStorageProfileCommand}.
 */
export interface UpdateStorageProfileCommandOutput extends UpdateStorageProfileResponse, __MetadataBearer {}

/**
 * <p>Updates a storage profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, UpdateStorageProfileCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, UpdateStorageProfileCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // UpdateStorageProfileRequest
 *   clientToken: "STRING_VALUE",
 *   farmId: "STRING_VALUE", // required
 *   storageProfileId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   osFamily: "WINDOWS" || "LINUX" || "MACOS",
 *   fileSystemLocationsToAdd: [ // FileSystemLocationsList
 *     { // FileSystemLocation
 *       name: "STRING_VALUE", // required
 *       path: "STRING_VALUE", // required
 *       type: "SHARED" || "LOCAL", // required
 *     },
 *   ],
 *   fileSystemLocationsToRemove: [
 *     {
 *       name: "STRING_VALUE", // required
 *       path: "STRING_VALUE", // required
 *       type: "SHARED" || "LOCAL", // required
 *     },
 *   ],
 * };
 * const command = new UpdateStorageProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateStorageProfileCommandInput - {@link UpdateStorageProfileCommandInput}
 * @returns {@link UpdateStorageProfileCommandOutput}
 * @see {@link UpdateStorageProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateStorageProfileCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
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
export class UpdateStorageProfileCommand extends $Command
  .classBuilder<
    UpdateStorageProfileCommandInput,
    UpdateStorageProfileCommandOutput,
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
  .s("Deadline", "UpdateStorageProfile", {})
  .n("DeadlineClient", "UpdateStorageProfileCommand")
  .f(UpdateStorageProfileRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateStorageProfileCommand)
  .de(de_UpdateStorageProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStorageProfileRequest;
      output: {};
    };
    sdk: {
      input: UpdateStorageProfileCommandInput;
      output: UpdateStorageProfileCommandOutput;
    };
  };
}
