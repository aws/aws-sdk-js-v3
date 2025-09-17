// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListLegalHoldsInput, ListLegalHoldsOutput } from "../models/models_0";
import { de_ListLegalHoldsCommand, se_ListLegalHoldsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLegalHoldsCommand}.
 */
export interface ListLegalHoldsCommandInput extends ListLegalHoldsInput {}
/**
 * @public
 *
 * The output of {@link ListLegalHoldsCommand}.
 */
export interface ListLegalHoldsCommandOutput extends ListLegalHoldsOutput, __MetadataBearer {}

/**
 * <p>This action returns metadata about active and previous legal holds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListLegalHoldsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListLegalHoldsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListLegalHoldsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListLegalHoldsCommand(input);
 * const response = await client.send(command);
 * // { // ListLegalHoldsOutput
 * //   NextToken: "STRING_VALUE",
 * //   LegalHolds: [ // LegalHoldsList
 * //     { // LegalHold
 * //       Title: "STRING_VALUE",
 * //       Status: "CREATING" || "ACTIVE" || "CANCELING" || "CANCELED",
 * //       Description: "STRING_VALUE",
 * //       LegalHoldId: "STRING_VALUE",
 * //       LegalHoldArn: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       CancellationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListLegalHoldsCommandInput - {@link ListLegalHoldsCommandInput}
 * @returns {@link ListLegalHoldsCommandOutput}
 * @see {@link ListLegalHoldsCommandInput} for command's `input` shape.
 * @see {@link ListLegalHoldsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
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
export class ListLegalHoldsCommand extends $Command
  .classBuilder<
    ListLegalHoldsCommandInput,
    ListLegalHoldsCommandOutput,
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
  .s("CryoControllerUserManager", "ListLegalHolds", {})
  .n("BackupClient", "ListLegalHoldsCommand")
  .f(void 0, void 0)
  .ser(se_ListLegalHoldsCommand)
  .de(de_ListLegalHoldsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLegalHoldsInput;
      output: ListLegalHoldsOutput;
    };
    sdk: {
      input: ListLegalHoldsCommandInput;
      output: ListLegalHoldsCommandOutput;
    };
  };
}
