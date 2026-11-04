// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribePatchGroupStateRequest, DescribePatchGroupStateResult } from "../models/models_0";
import { DescribePatchGroupState$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribePatchGroupStateCommand}.
 */
export interface DescribePatchGroupStateCommandInput extends DescribePatchGroupStateRequest {}
/**
 * @public
 *
 * The output of {@link DescribePatchGroupStateCommand}.
 */
export interface DescribePatchGroupStateCommandOutput extends DescribePatchGroupStateResult, __MetadataBearer {}

/**
 * Returns high-level aggregated patch compliance state information for a patch group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribePatchGroupStateCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribePatchGroupStateCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DescribePatchGroupStateRequest
 *   PatchGroup: "STRING_VALUE", // required
 * };
 * const command = new DescribePatchGroupStateCommand(input);
 * const response = await client.send(command);
 * // { // DescribePatchGroupStateResult
 * //   Instances: Number("int"),
 * //   InstancesWithInstalledPatches: Number("int"),
 * //   InstancesWithInstalledOtherPatches: Number("int"),
 * //   InstancesWithInstalledPendingRebootPatches: Number("int"),
 * //   InstancesWithInstalledRejectedPatches: Number("int"),
 * //   InstancesWithMissingPatches: Number("int"),
 * //   InstancesWithFailedPatches: Number("int"),
 * //   InstancesWithNotApplicablePatches: Number("int"),
 * //   InstancesWithUnreportedNotApplicablePatches: Number("int"),
 * //   InstancesWithCriticalNonCompliantPatches: Number("int"),
 * //   InstancesWithSecurityNonCompliantPatches: Number("int"),
 * //   InstancesWithOtherNonCompliantPatches: Number("int"),
 * //   InstancesWithAvailableSecurityUpdates: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribePatchGroupStateCommandInput - {@link DescribePatchGroupStateCommandInput}
 * @returns {@link DescribePatchGroupStateCommandOutput}
 * @see {@link DescribePatchGroupStateCommandInput} for command's `input` shape.
 * @see {@link DescribePatchGroupStateCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *
 * The specified token isn't valid.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class DescribePatchGroupStateCommand extends command<DescribePatchGroupStateCommandInput, DescribePatchGroupStateCommandOutput>(
  _ep0,
  _mw0,
  "DescribePatchGroupState",
  DescribePatchGroupState$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePatchGroupStateRequest;
      output: DescribePatchGroupStateResult;
    };
    sdk: {
      input: DescribePatchGroupStateCommandInput;
      output: DescribePatchGroupStateCommandOutput;
    };
  };
}
