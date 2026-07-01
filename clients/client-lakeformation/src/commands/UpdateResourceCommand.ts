// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateResourceRequest, UpdateResourceResponse } from "../models/models_0";
import { UpdateResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateResourceCommand}.
 */
export interface UpdateResourceCommandInput extends UpdateResourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResourceCommand}.
 */
export interface UpdateResourceCommandOutput extends UpdateResourceResponse, __MetadataBearer {}

/**
 * <p>Updates the data access role used for vending access to the given (registered) resource in Lake Formation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, UpdateResourceCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, UpdateResourceCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // UpdateResourceRequest
 *   RoleArn: "STRING_VALUE", // required
 *   ResourceArn: "STRING_VALUE", // required
 *   WithFederation: true || false,
 *   HybridAccessEnabled: true || false,
 *   ExpectedResourceOwnerAccount: "STRING_VALUE",
 * };
 * const command = new UpdateResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateResourceCommandInput - {@link UpdateResourceCommandInput}
 * @returns {@link UpdateResourceCommandOutput}
 * @see {@link UpdateResourceCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class UpdateResourceCommand extends command<UpdateResourceCommandInput, UpdateResourceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateResource",
  UpdateResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResourceRequest;
      output: {};
    };
    sdk: {
      input: UpdateResourceCommandInput;
      output: UpdateResourceCommandOutput;
    };
  };
}
