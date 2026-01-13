// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { MonitorContactRequest, MonitorContactResponse } from "../models/models_2";
import { MonitorContact$ } from "../schemas/schemas_0";

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
 * <p>Initiates silent monitoring of a contact. The Contact Control Panel (CCP) of the user specified by
 *     <i>userId</i> will be set to silent monitoring mode on the contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, MonitorContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, MonitorContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "MonitorContact", {})
  .n("ConnectClient", "MonitorContactCommand")
  .sc(MonitorContact$)
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
