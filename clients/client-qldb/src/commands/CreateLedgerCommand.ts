// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLedgerRequest, CreateLedgerResponse } from "../models/models_0";
import { de_CreateLedgerCommand, se_CreateLedgerCommand } from "../protocols/Aws_restJson1";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLedgerCommand}.
 */
export interface CreateLedgerCommandInput extends CreateLedgerRequest {}
/**
 * @public
 *
 * The output of {@link CreateLedgerCommand}.
 */
export interface CreateLedgerCommandOutput extends CreateLedgerResponse, __MetadataBearer {}

/**
 * <p>Creates a new ledger in your Amazon Web Services account in the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, CreateLedgerCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, CreateLedgerCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new QLDBClient(config);
 * const input = { // CreateLedgerRequest
 *   Name: "STRING_VALUE", // required
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   PermissionsMode: "ALLOW_ALL" || "STANDARD", // required
 *   DeletionProtection: true || false,
 *   KmsKey: "STRING_VALUE",
 * };
 * const command = new CreateLedgerCommand(input);
 * const response = await client.send(command);
 * // { // CreateLedgerResponse
 * //   Name: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   State: "CREATING" || "ACTIVE" || "DELETING" || "DELETED",
 * //   CreationDateTime: new Date("TIMESTAMP"),
 * //   PermissionsMode: "ALLOW_ALL" || "STANDARD",
 * //   DeletionProtection: true || false,
 * //   KmsKeyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLedgerCommandInput - {@link CreateLedgerCommandInput}
 * @returns {@link CreateLedgerCommandOutput}
 * @see {@link CreateLedgerCommandInput} for command's `input` shape.
 * @see {@link CreateLedgerCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in the request aren't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have reached the limit on the maximum number of resources allowed.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource can't be modified at this time.</p>
 *
 * @throws {@link QLDBServiceException}
 * <p>Base exception class for all service exceptions from QLDB service.</p>
 *
 * @public
 */
export class CreateLedgerCommand extends $Command
  .classBuilder<
    CreateLedgerCommandInput,
    CreateLedgerCommandOutput,
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
  .s("AmazonQLDB", "CreateLedger", {})
  .n("QLDBClient", "CreateLedgerCommand")
  .f(void 0, void 0)
  .ser(se_CreateLedgerCommand)
  .de(de_CreateLedgerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLedgerRequest;
      output: CreateLedgerResponse;
    };
    sdk: {
      input: CreateLedgerCommandInput;
      output: CreateLedgerCommandOutput;
    };
  };
}
