// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateFarmRequest, UpdateFarmResponse } from "../models/models_1";
import { UpdateFarm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFarmCommand}.
 */
export interface UpdateFarmCommandInput extends UpdateFarmRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFarmCommand}.
 */
export interface UpdateFarmCommandOutput extends UpdateFarmResponse, __MetadataBearer {}

/**
 * Updates a farm.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, UpdateFarmCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, UpdateFarmCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // UpdateFarmRequest
 *   farmId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   costScaleFactor: Number("float"),
 * };
 * const command = new UpdateFarmCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateFarmCommandInput - {@link UpdateFarmCommandInput}
 * @returns {@link UpdateFarmCommandOutput}
 * @see {@link UpdateFarmCommandInput} for command's `input` shape.
 * @see {@link UpdateFarmCommandOutput} for command's `response` shape.
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
export class UpdateFarmCommand extends command<UpdateFarmCommandInput, UpdateFarmCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFarm",
  UpdateFarm$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFarmRequest;
      output: {};
    };
    sdk: {
      input: UpdateFarmCommandInput;
      output: UpdateFarmCommandOutput;
    };
  };
}
