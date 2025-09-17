// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateLedgerRequest, UpdateLedgerResponse } from "../models/models_0";
import { de_UpdateLedgerCommand, se_UpdateLedgerCommand } from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLedgerCommand}.
 */
export interface UpdateLedgerCommandInput extends UpdateLedgerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLedgerCommand}.
 */
export interface UpdateLedgerCommandOutput extends UpdateLedgerResponse, __MetadataBearer {}

/**
 * <p>Updates properties on a ledger.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, UpdateLedgerCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, UpdateLedgerCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * // import type { QLDBClientConfig } from "@aws-sdk/client-qldb";
 * const config = {}; // type is QLDBClientConfig
 * const client = new QLDBClient(config);
 * const input = { // UpdateLedgerRequest
 *   Name: "STRING_VALUE", // required
 *   DeletionProtection: true || false,
 *   KmsKey: "STRING_VALUE",
 * };
 * const command = new UpdateLedgerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLedgerResponse
 * //   Name: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   State: "CREATING" || "ACTIVE" || "DELETING" || "DELETED",
 * //   CreationDateTime: new Date("TIMESTAMP"),
 * //   DeletionProtection: true || false,
 * //   EncryptionDescription: { // LedgerEncryptionDescription
 * //     KmsKeyArn: "STRING_VALUE", // required
 * //     EncryptionStatus: "ENABLED" || "UPDATING" || "KMS_KEY_INACCESSIBLE", // required
 * //     InaccessibleKmsKeyDateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateLedgerCommandInput - {@link UpdateLedgerCommandInput}
 * @returns {@link UpdateLedgerCommandOutput}
 * @see {@link UpdateLedgerCommandInput} for command's `input` shape.
 * @see {@link UpdateLedgerCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in the request aren't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link QLDBServiceException}
 * <p>Base exception class for all service exceptions from QLDB service.</p>
 *
 *
 * @public
 */
export class UpdateLedgerCommand extends $Command
  .classBuilder<
    UpdateLedgerCommandInput,
    UpdateLedgerCommandOutput,
    QLDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QLDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonQLDB", "UpdateLedger", {})
  .n("QLDBClient", "UpdateLedgerCommand")
  .f(void 0, void 0)
  .ser(se_UpdateLedgerCommand)
  .de(de_UpdateLedgerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLedgerRequest;
      output: UpdateLedgerResponse;
    };
    sdk: {
      input: UpdateLedgerCommandInput;
      output: UpdateLedgerCommandOutput;
    };
  };
}
