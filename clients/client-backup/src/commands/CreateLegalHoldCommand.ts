// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLegalHoldInput, CreateLegalHoldOutput } from "../models/models_0";
import { CreateLegalHold } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLegalHoldCommand}.
 */
export interface CreateLegalHoldCommandInput extends CreateLegalHoldInput {}
/**
 * @public
 *
 * The output of {@link CreateLegalHoldCommand}.
 */
export interface CreateLegalHoldCommandOutput extends CreateLegalHoldOutput, __MetadataBearer {}

/**
 * <p>Creates a legal hold on a recovery point (backup). A legal hold is a restraint on
 *          altering or deleting a backup until an authorized user cancels the legal hold. Any actions
 *          to delete or disassociate a recovery point will fail with an error if one or more active
 *          legal holds are on the recovery point.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateLegalHoldCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateLegalHoldCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // CreateLegalHoldInput
 *   Title: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   IdempotencyToken: "STRING_VALUE",
 *   RecoveryPointSelection: { // RecoveryPointSelection
 *     VaultNames: [ // VaultNames
 *       "STRING_VALUE",
 *     ],
 *     ResourceIdentifiers: [ // ResourceIdentifiers
 *       "STRING_VALUE",
 *     ],
 *     DateRange: { // DateRange
 *       FromDate: new Date("TIMESTAMP"), // required
 *       ToDate: new Date("TIMESTAMP"), // required
 *     },
 *   },
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateLegalHoldCommand(input);
 * const response = await client.send(command);
 * // { // CreateLegalHoldOutput
 * //   Title: "STRING_VALUE",
 * //   Status: "CREATING" || "ACTIVE" || "CANCELING" || "CANCELED",
 * //   Description: "STRING_VALUE",
 * //   LegalHoldId: "STRING_VALUE",
 * //   LegalHoldArn: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   RecoveryPointSelection: { // RecoveryPointSelection
 * //     VaultNames: [ // VaultNames
 * //       "STRING_VALUE",
 * //     ],
 * //     ResourceIdentifiers: [ // ResourceIdentifiers
 * //       "STRING_VALUE",
 * //     ],
 * //     DateRange: { // DateRange
 * //       FromDate: new Date("TIMESTAMP"), // required
 * //       ToDate: new Date("TIMESTAMP"), // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateLegalHoldCommandInput - {@link CreateLegalHoldCommandInput}
 * @returns {@link CreateLegalHoldCommandOutput}
 * @see {@link CreateLegalHoldCommandInput} for command's `input` shape.
 * @see {@link CreateLegalHoldCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 *
 * @public
 */
export class CreateLegalHoldCommand extends $Command
  .classBuilder<
    CreateLegalHoldCommandInput,
    CreateLegalHoldCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "CreateLegalHold", {})
  .n("BackupClient", "CreateLegalHoldCommand")
  .sc(CreateLegalHold)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLegalHoldInput;
      output: CreateLegalHoldOutput;
    };
    sdk: {
      input: CreateLegalHoldCommandInput;
      output: CreateLegalHoldCommandOutput;
    };
  };
}
