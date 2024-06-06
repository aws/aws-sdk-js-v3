// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { DisassociateApplicationsRequest, DisassociateApplicationsResponse } from "../models/models_0";
import { de_DisassociateApplicationsCommand, se_DisassociateApplicationsCommand } from "../protocols/Aws_restJson1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationMigrationService", "DisassociateApplications", {})
  .n("MgnClient", "DisassociateApplicationsCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateApplicationsCommand)
  .de(de_DisassociateApplicationsCommand)
  .build() {}
