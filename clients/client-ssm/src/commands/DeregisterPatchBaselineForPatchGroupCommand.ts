// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeregisterPatchBaselineForPatchGroupRequest,
  DeregisterPatchBaselineForPatchGroupResult,
} from "../models/models_0";
import { DeregisterPatchBaselineForPatchGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeregisterPatchBaselineForPatchGroupCommand}.
 */
export interface DeregisterPatchBaselineForPatchGroupCommandInput extends DeregisterPatchBaselineForPatchGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterPatchBaselineForPatchGroupCommand}.
 */
export interface DeregisterPatchBaselineForPatchGroupCommandOutput extends DeregisterPatchBaselineForPatchGroupResult, __MetadataBearer {}

/**
 * Removes a patch group from a patch baseline.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeregisterPatchBaselineForPatchGroupCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeregisterPatchBaselineForPatchGroupCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DeregisterPatchBaselineForPatchGroupRequest
 *   BaselineId: "STRING_VALUE", // required
 *   PatchGroup: "STRING_VALUE", // required
 * };
 * const command = new DeregisterPatchBaselineForPatchGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterPatchBaselineForPatchGroupResult
 * //   BaselineId: "STRING_VALUE",
 * //   PatchGroup: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeregisterPatchBaselineForPatchGroupCommandInput - {@link DeregisterPatchBaselineForPatchGroupCommandInput}
 * @returns {@link DeregisterPatchBaselineForPatchGroupCommandOutput}
 * @see {@link DeregisterPatchBaselineForPatchGroupCommandInput} for command's `input` shape.
 * @see {@link DeregisterPatchBaselineForPatchGroupCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidResourceId} (client fault)
 *
 * The resource ID isn't valid. Verify that you entered the correct ID and try again.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class DeregisterPatchBaselineForPatchGroupCommand extends command<DeregisterPatchBaselineForPatchGroupCommandInput, DeregisterPatchBaselineForPatchGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterPatchBaselineForPatchGroup",
  DeregisterPatchBaselineForPatchGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterPatchBaselineForPatchGroupRequest;
      output: DeregisterPatchBaselineForPatchGroupResult;
    };
    sdk: {
      input: DeregisterPatchBaselineForPatchGroupCommandInput;
      output: DeregisterPatchBaselineForPatchGroupCommandOutput;
    };
  };
}
