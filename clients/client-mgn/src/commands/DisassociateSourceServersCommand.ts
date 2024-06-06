// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { DisassociateSourceServersRequest, DisassociateSourceServersResponse } from "../models/models_0";
import { de_DisassociateSourceServersCommand, se_DisassociateSourceServersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateSourceServersCommand}.
 */
export interface DisassociateSourceServersCommandInput extends DisassociateSourceServersRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateSourceServersCommand}.
 */
export interface DisassociateSourceServersCommandOutput extends DisassociateSourceServersResponse, __MetadataBearer {}

/**
 * <p>Disassociate source servers from application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DisassociateSourceServersCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DisassociateSourceServersCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // DisassociateSourceServersRequest
 *   applicationID: "STRING_VALUE", // required
 *   sourceServerIDs: [ // DisassociateSourceServersRequestSourceServerIDs // required
 *     "STRING_VALUE",
 *   ],
 *   accountID: "STRING_VALUE",
 * };
 * const command = new DisassociateSourceServersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateSourceServersCommandInput - {@link DisassociateSourceServersCommandInput}
 * @returns {@link DisassociateSourceServersCommandOutput}
 * @see {@link DisassociateSourceServersCommandInput} for command's `input` shape.
 * @see {@link DisassociateSourceServersCommandOutput} for command's `response` shape.
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
export class DisassociateSourceServersCommand extends $Command
  .classBuilder<
    DisassociateSourceServersCommandInput,
    DisassociateSourceServersCommandOutput,
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
  .s("ApplicationMigrationService", "DisassociateSourceServers", {})
  .n("MgnClient", "DisassociateSourceServersCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateSourceServersCommand)
  .de(de_DisassociateSourceServersCommand)
  .build() {}
