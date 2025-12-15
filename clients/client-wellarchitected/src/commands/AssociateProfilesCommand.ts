// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { AssociateProfilesInput } from "../models/models_0";
import { AssociateProfiles$ } from "../schemas/schemas_0";
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
 * The input for {@link AssociateProfilesCommand}.
 */
export interface AssociateProfilesCommandInput extends AssociateProfilesInput {}
/**
 * @public
 *
 * The output of {@link AssociateProfilesCommand}.
 */
export interface AssociateProfilesCommandOutput extends __MetadataBearer {}

/**
 * <p>Associate a profile with a workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, AssociateProfilesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, AssociateProfilesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // AssociateProfilesInput
 *   WorkloadId: "STRING_VALUE", // required
 *   ProfileArns: [ // ProfileArns // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AssociateProfilesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateProfilesCommandInput - {@link AssociateProfilesCommandInput}
 * @returns {@link AssociateProfilesCommandOutput}
 * @see {@link AssociateProfilesCommandInput} for command's `input` shape.
 * @see {@link AssociateProfilesCommandOutput} for command's `response` shape.
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
export class AssociateProfilesCommand extends $Command
  .classBuilder<
    AssociateProfilesCommandInput,
    AssociateProfilesCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "AssociateProfiles", {})
  .n("WellArchitectedClient", "AssociateProfilesCommand")
  .sc(AssociateProfiles$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateProfilesInput;
      output: {};
    };
    sdk: {
      input: AssociateProfilesCommandInput;
      output: AssociateProfilesCommandOutput;
    };
  };
}
