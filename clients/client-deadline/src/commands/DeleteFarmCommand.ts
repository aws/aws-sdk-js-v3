// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFarmRequest, DeleteFarmResponse } from "../models/models_0";
import { DeleteFarm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFarmCommand}.
 */
export interface DeleteFarmCommandInput extends DeleteFarmRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFarmCommand}.
 */
export interface DeleteFarmCommandOutput extends DeleteFarmResponse, __MetadataBearer {}

/**
 * Deletes a farm.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DeleteFarmCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DeleteFarmCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // DeleteFarmRequest
 *   farmId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFarmCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFarmCommandInput - {@link DeleteFarmCommandInput}
 * @returns {@link DeleteFarmCommandOutput}
 * @see {@link DeleteFarmCommandInput} for command's `input` shape.
 * @see {@link DeleteFarmCommandOutput} for command's `response` shape.
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
export class DeleteFarmCommand extends command<DeleteFarmCommandInput, DeleteFarmCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFarm",
  DeleteFarm$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFarmRequest;
      output: {};
    };
    sdk: {
      input: DeleteFarmCommandInput;
      output: DeleteFarmCommandOutput;
    };
  };
}
