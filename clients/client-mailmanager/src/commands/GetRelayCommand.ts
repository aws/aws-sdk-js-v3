// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { GetRelayRequest, GetRelayResponse } from "../models/models_0";
import { de_GetRelayCommand, se_GetRelayCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRelayCommand}.
 */
export interface GetRelayCommandInput extends GetRelayRequest {}
/**
 * @public
 *
 * The output of {@link GetRelayCommand}.
 */
export interface GetRelayCommandOutput extends GetRelayResponse, __MetadataBearer {}

/**
 * <p>Fetch the relay resource and it's attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, GetRelayCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, GetRelayCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MailManagerClient(config);
 * const input = { // GetRelayRequest
 *   RelayId: "STRING_VALUE", // required
 * };
 * const command = new GetRelayCommand(input);
 * const response = await client.send(command);
 * // { // GetRelayResponse
 * //   RelayId: "STRING_VALUE", // required
 * //   RelayArn: "STRING_VALUE",
 * //   RelayName: "STRING_VALUE",
 * //   ServerName: "STRING_VALUE",
 * //   ServerPort: Number("int"),
 * //   Authentication: { // RelayAuthentication Union: only one key present
 * //     SecretArn: "STRING_VALUE",
 * //     NoAuthentication: {},
 * //   },
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * //   LastModifiedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetRelayCommandInput - {@link GetRelayCommandInput}
 * @returns {@link GetRelayCommandOutput}
 * @see {@link GetRelayCommandInput} for command's `input` shape.
 * @see {@link GetRelayCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when a requested resource is not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 * @public
 */
export class GetRelayCommand extends $Command
  .classBuilder<
    GetRelayCommandInput,
    GetRelayCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "GetRelay", {})
  .n("MailManagerClient", "GetRelayCommand")
  .f(void 0, void 0)
  .ser(se_GetRelayCommand)
  .de(de_GetRelayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRelayRequest;
      output: GetRelayResponse;
    };
    sdk: {
      input: GetRelayCommandInput;
      output: GetRelayCommandOutput;
    };
  };
}
