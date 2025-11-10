// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateProfilesInput } from "../models/models_0";
import { DisassociateProfiles } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateProfilesCommand}.
 */
export interface DisassociateProfilesCommandInput extends DisassociateProfilesInput {}
/**
 * @public
 *
 * The output of {@link DisassociateProfilesCommand}.
 */
export interface DisassociateProfilesCommandOutput extends __MetadataBearer {}

/**
 * <p>Disassociate a profile from a workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, DisassociateProfilesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, DisassociateProfilesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // DisassociateProfilesInput
 *   WorkloadId: "STRING_VALUE", // required
 *   ProfileArns: [ // ProfileArns // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateProfilesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateProfilesCommandInput - {@link DisassociateProfilesCommandInput}
 * @returns {@link DisassociateProfilesCommandOutput}
 * @see {@link DisassociateProfilesCommandInput} for command's `input` shape.
 * @see {@link DisassociateProfilesCommandOutput} for command's `response` shape.
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
export class DisassociateProfilesCommand extends $Command
  .classBuilder<
    DisassociateProfilesCommandInput,
    DisassociateProfilesCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "DisassociateProfiles", {})
  .n("WellArchitectedClient", "DisassociateProfilesCommand")
  .sc(DisassociateProfiles)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateProfilesInput;
      output: {};
    };
    sdk: {
      input: DisassociateProfilesCommandInput;
      output: DisassociateProfilesCommandOutput;
    };
  };
}
