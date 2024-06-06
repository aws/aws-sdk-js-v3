// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { DeleteSourceServerRequest, DeleteSourceServerResponse } from "../models/models_0";
import { de_DeleteSourceServerCommand, se_DeleteSourceServerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSourceServerCommand}.
 */
export interface DeleteSourceServerCommandInput extends DeleteSourceServerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSourceServerCommand}.
 */
export interface DeleteSourceServerCommandOutput extends DeleteSourceServerResponse, __MetadataBearer {}

/**
 * <p>Deletes a single source server by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DeleteSourceServerCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DeleteSourceServerCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // DeleteSourceServerRequest
 *   sourceServerID: "STRING_VALUE", // required
 *   accountID: "STRING_VALUE",
 * };
 * const command = new DeleteSourceServerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSourceServerCommandInput - {@link DeleteSourceServerCommandInput}
 * @returns {@link DeleteSourceServerCommandOutput}
 * @see {@link DeleteSourceServerCommandInput} for command's `input` shape.
 * @see {@link DeleteSourceServerCommandOutput} for command's `response` shape.
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
export class DeleteSourceServerCommand extends $Command
  .classBuilder<
    DeleteSourceServerCommandInput,
    DeleteSourceServerCommandOutput,
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
  .s("ApplicationMigrationService", "DeleteSourceServer", {})
  .n("MgnClient", "DeleteSourceServerCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSourceServerCommand)
  .de(de_DeleteSourceServerCommand)
  .build() {}
