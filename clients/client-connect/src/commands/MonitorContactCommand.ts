// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { MonitorContactRequest, MonitorContactResponse } from "../models/models_2";
import { de_MonitorContactCommand, se_MonitorContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MonitorContactCommand}.
 */
export interface MonitorContactCommandInput extends MonitorContactRequest {}
/**
 * @public
 *
 * The output of {@link MonitorContactCommand}.
 */
export interface MonitorContactCommandOutput extends MonitorContactResponse, __MetadataBearer {}

/**
 * <p>Initiates silent monitoring of a contact. The Contact Control Panel (CCP) of the user
 *    specified by <i>userId</i> will be set to silent monitoring mode on the
 *    contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, MonitorContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, MonitorContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectClient(config);
 * const input = { // MonitorContactRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   AllowedMonitorCapabilities: [ // AllowedMonitorCapabilities
 *     "SILENT_MONITOR" || "BARGE",
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new MonitorContactCommand(input);
 * const response = await client.send(command);
 * // { // MonitorContactResponse
 * //   ContactId: "STRING_VALUE",
 * //   ContactArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param MonitorContactCommandInput - {@link MonitorContactCommandInput}
 * @returns {@link MonitorContactCommandOutput}
 * @see {@link MonitorContactCommandInput} for command's `input` shape.
 * @see {@link MonitorContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link IdempotencyException} (client fault)
 *  <p>An entity with the same name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class MonitorContactCommand extends $Command
  .classBuilder<
    MonitorContactCommandInput,
    MonitorContactCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "MonitorContact", {})
  .n("ConnectClient", "MonitorContactCommand")
  .f(void 0, void 0)
  .ser(se_MonitorContactCommand)
  .de(de_MonitorContactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MonitorContactRequest;
      output: MonitorContactResponse;
    };
    sdk: {
      input: MonitorContactCommandInput;
      output: MonitorContactCommandOutput;
    };
  };
}
