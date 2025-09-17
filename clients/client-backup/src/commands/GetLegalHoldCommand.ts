// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetLegalHoldInput, GetLegalHoldOutput } from "../models/models_0";
import { de_GetLegalHoldCommand, se_GetLegalHoldCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLegalHoldCommand}.
 */
export interface GetLegalHoldCommandInput extends GetLegalHoldInput {}
/**
 * @public
 *
 * The output of {@link GetLegalHoldCommand}.
 */
export interface GetLegalHoldCommandOutput extends GetLegalHoldOutput, __MetadataBearer {}

/**
 * <p>This action returns details for a specified legal hold. The details are the
 *          body of a legal hold in JSON format, in addition to metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetLegalHoldCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetLegalHoldCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // GetLegalHoldInput
 *   LegalHoldId: "STRING_VALUE", // required
 * };
 * const command = new GetLegalHoldCommand(input);
 * const response = await client.send(command);
 * // { // GetLegalHoldOutput
 * //   Title: "STRING_VALUE",
 * //   Status: "CREATING" || "ACTIVE" || "CANCELING" || "CANCELED",
 * //   Description: "STRING_VALUE",
 * //   CancelDescription: "STRING_VALUE",
 * //   LegalHoldId: "STRING_VALUE",
 * //   LegalHoldArn: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   CancellationDate: new Date("TIMESTAMP"),
 * //   RetainRecordUntil: new Date("TIMESTAMP"),
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
 * @param GetLegalHoldCommandInput - {@link GetLegalHoldCommandInput}
 * @returns {@link GetLegalHoldCommandOutput}
 * @see {@link GetLegalHoldCommandInput} for command's `input` shape.
 * @see {@link GetLegalHoldCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
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
export class GetLegalHoldCommand extends $Command
  .classBuilder<
    GetLegalHoldCommandInput,
    GetLegalHoldCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "GetLegalHold", {})
  .n("BackupClient", "GetLegalHoldCommand")
  .f(void 0, void 0)
  .ser(se_GetLegalHoldCommand)
  .de(de_GetLegalHoldCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLegalHoldInput;
      output: GetLegalHoldOutput;
    };
    sdk: {
      input: GetLegalHoldCommandInput;
      output: GetLegalHoldCommandOutput;
    };
  };
}
