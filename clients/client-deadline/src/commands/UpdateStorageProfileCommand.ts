// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateStorageProfileRequest, UpdateStorageProfileResponse } from "../models/models_1";
import { UpdateStorageProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates a storage profile.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, UpdateStorageProfileCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, UpdateStorageProfileCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // UpdateStorageProfileRequest
 *   farmId: "STRING_VALUE", // required
 *   storageProfileId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
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
 *  You don't have permission to perform the action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Deadline Cloud can't process your request right now. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Your request exceeded a request rate quota.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class UpdateStorageProfileCommand extends command<UpdateStorageProfileCommandInput, UpdateStorageProfileCommandOutput>(
  _ep0,
  _mw0,
  "UpdateStorageProfile",
  UpdateStorageProfile$
) {
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
