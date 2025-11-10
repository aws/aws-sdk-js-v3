// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { AssociateSourceServersRequest, AssociateSourceServersResponse } from "../models/models_0";
import { AssociateSourceServers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateSourceServersCommand}.
 */
export interface AssociateSourceServersCommandInput extends AssociateSourceServersRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSourceServersCommand}.
 */
export interface AssociateSourceServersCommandOutput extends AssociateSourceServersResponse, __MetadataBearer {}

/**
 * <p>Associate source servers to application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, AssociateSourceServersCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, AssociateSourceServersCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // AssociateSourceServersRequest
 *   applicationID: "STRING_VALUE", // required
 *   sourceServerIDs: [ // AssociateSourceServersRequestSourceServerIDs // required
 *     "STRING_VALUE",
 *   ],
 *   accountID: "STRING_VALUE",
 * };
 * const command = new AssociateSourceServersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateSourceServersCommandInput - {@link AssociateSourceServersCommandInput}
 * @returns {@link AssociateSourceServersCommandOutput}
 * @see {@link AssociateSourceServersCommandInput} for command's `input` shape.
 * @see {@link AssociateSourceServersCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
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
export class AssociateSourceServersCommand extends $Command
  .classBuilder<
    AssociateSourceServersCommandInput,
    AssociateSourceServersCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "AssociateSourceServers", {})
  .n("MgnClient", "AssociateSourceServersCommand")
  .sc(AssociateSourceServers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateSourceServersRequest;
      output: {};
    };
    sdk: {
      input: AssociateSourceServersCommandInput;
      output: AssociateSourceServersCommandOutput;
    };
  };
}
