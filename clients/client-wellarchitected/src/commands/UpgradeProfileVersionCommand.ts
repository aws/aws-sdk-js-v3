// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpgradeProfileVersionInput } from "../models/models_0";
import { UpgradeProfileVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpgradeProfileVersionCommand}.
 */
export interface UpgradeProfileVersionCommandInput extends UpgradeProfileVersionInput {}
/**
 * @public
 *
 * The output of {@link UpgradeProfileVersionCommand}.
 */
export interface UpgradeProfileVersionCommandOutput extends __MetadataBearer {}

/**
 * Upgrade a profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpgradeProfileVersionCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpgradeProfileVersionCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // UpgradeProfileVersionInput
 *   WorkloadId: "STRING_VALUE", // required
 *   ProfileArn: "STRING_VALUE", // required
 *   MilestoneName: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new UpgradeProfileVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpgradeProfileVersionCommandInput - {@link UpgradeProfileVersionCommandInput}
 * @returns {@link UpgradeProfileVersionCommandOutput}
 * @see {@link UpgradeProfileVersionCommandInput} for command's `input` shape.
 * @see {@link UpgradeProfileVersionCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The resource has already been processed, was deleted, or is too large.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The user has reached their resource quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class UpgradeProfileVersionCommand extends command<UpgradeProfileVersionCommandInput, UpgradeProfileVersionCommandOutput>(
  _ep0,
  _mw0,
  "UpgradeProfileVersion",
  UpgradeProfileVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpgradeProfileVersionInput;
      output: {};
    };
    sdk: {
      input: UpgradeProfileVersionCommandInput;
      output: UpgradeProfileVersionCommandOutput;
    };
  };
}
