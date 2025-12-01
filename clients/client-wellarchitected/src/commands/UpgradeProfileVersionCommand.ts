// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpgradeProfileVersionInput } from "../models/models_0";
import { UpgradeProfileVersion } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  WellArchitectedClientResolvedConfig,
} from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Upgrade a profile.</p>
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
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The user has reached their resource quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class UpgradeProfileVersionCommand extends $Command
  .classBuilder<
    UpgradeProfileVersionCommandInput,
    UpgradeProfileVersionCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "UpgradeProfileVersion", {})
  .n("WellArchitectedClient", "UpgradeProfileVersionCommand")
  .sc(UpgradeProfileVersion)
  .build() {
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
