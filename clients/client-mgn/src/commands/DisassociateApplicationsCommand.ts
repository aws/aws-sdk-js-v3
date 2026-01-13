// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type { DisassociateApplicationsRequest, DisassociateApplicationsResponse } from "../models/models_0";
import { DisassociateApplications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateApplicationsCommand}.
 */
export interface DisassociateApplicationsCommandInput extends DisassociateApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateApplicationsCommand}.
 */
export interface DisassociateApplicationsCommandOutput extends DisassociateApplicationsResponse, __MetadataBearer {}

/**
 * <p>Disassociate applications from wave.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DisassociateApplicationsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DisassociateApplicationsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // DisassociateApplicationsRequest
 *   waveID: "STRING_VALUE", // required
 *   applicationIDs: [ // ApplicationIDs // required
 *     "STRING_VALUE",
 *   ],
 *   accountID: "STRING_VALUE",
 * };
 * const command = new DisassociateApplicationsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateApplicationsCommandInput - {@link DisassociateApplicationsCommandInput}
 * @returns {@link DisassociateApplicationsCommandOutput}
 * @see {@link DisassociateApplicationsCommandInput} for command's `input` shape.
 * @see {@link DisassociateApplicationsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class DisassociateApplicationsCommand extends $Command
  .classBuilder<
    DisassociateApplicationsCommandInput,
    DisassociateApplicationsCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "DisassociateApplications", {})
  .n("MgnClient", "DisassociateApplicationsCommand")
  .sc(DisassociateApplications$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateApplicationsRequest;
      output: {};
    };
    sdk: {
      input: DisassociateApplicationsCommandInput;
      output: DisassociateApplicationsCommandOutput;
    };
  };
}
