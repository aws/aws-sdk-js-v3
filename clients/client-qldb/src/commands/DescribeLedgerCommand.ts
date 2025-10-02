// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLedgerRequest, DescribeLedgerResponse } from "../models/models_0";
import { de_DescribeLedgerCommand, se_DescribeLedgerCommand } from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLedgerCommand}.
 */
export interface DescribeLedgerCommandInput extends DescribeLedgerRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLedgerCommand}.
 */
export interface DescribeLedgerCommandOutput extends DescribeLedgerResponse, __MetadataBearer {}

/**
 * <p>Returns information about a ledger, including its state, permissions mode, encryption at
 *          rest settings, and when it was created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, DescribeLedgerCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, DescribeLedgerCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * // import type { QLDBClientConfig } from "@aws-sdk/client-qldb";
 * const config = {}; // type is QLDBClientConfig
 * const client = new QLDBClient(config);
 * const input = { // DescribeLedgerRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribeLedgerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLedgerResponse
 * //   Name: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   State: "CREATING" || "ACTIVE" || "DELETING" || "DELETED",
 * //   CreationDateTime: new Date("TIMESTAMP"),
 * //   PermissionsMode: "ALLOW_ALL" || "STANDARD",
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
 * @param DescribeLedgerCommandInput - {@link DescribeLedgerCommandInput}
 * @returns {@link DescribeLedgerCommandOutput}
 * @see {@link DescribeLedgerCommandInput} for command's `input` shape.
 * @see {@link DescribeLedgerCommandOutput} for command's `response` shape.
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
export class DescribeLedgerCommand extends $Command
  .classBuilder<
    DescribeLedgerCommandInput,
    DescribeLedgerCommandOutput,
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
  .s("AmazonQLDB", "DescribeLedger", {})
  .n("QLDBClient", "DescribeLedgerCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLedgerCommand)
  .de(de_DescribeLedgerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLedgerRequest;
      output: DescribeLedgerResponse;
    };
    sdk: {
      input: DescribeLedgerCommandInput;
      output: DescribeLedgerCommandOutput;
    };
  };
}
