// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopQAppSessionInput } from "../models/models_0";
import { de_StopQAppSessionCommand, se_StopQAppSessionCommand } from "../protocols/Aws_restJson1";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopQAppSessionCommand}.
 */
export interface StopQAppSessionCommandInput extends StopQAppSessionInput {}
/**
 * @public
 *
 * The output of {@link StopQAppSessionCommand}.
 */
export interface StopQAppSessionCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops an active session for an Amazon Q App.This deletes all data related to the session and makes it invalid for future uses. The results of the session will be persisted as part of the conversation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, StopQAppSessionCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, StopQAppSessionCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * const client = new QAppsClient(config);
 * const input = { // StopQAppSessionInput
 *   instanceId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 * };
 * const command = new StopQAppSessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopQAppSessionCommandInput - {@link StopQAppSessionCommandInput}
 * @returns {@link StopQAppSessionCommandOutput}
 * @see {@link StopQAppSessionCommandInput} for command's `input` shape.
 * @see {@link StopQAppSessionCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The requested operation could not be completed because it would exceed the service's quota or limit.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The requested operation could not be completed because too many requests were sent at once. Wait a bit and try again later.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client is not authenticated or authorized to perform the requested operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link QAppsServiceException}
 * <p>Base exception class for all service exceptions from QApps service.</p>
 *
 *
 * @public
 */
export class StopQAppSessionCommand extends $Command
  .classBuilder<
    StopQAppSessionCommandInput,
    StopQAppSessionCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QAppsService", "StopQAppSession", {})
  .n("QAppsClient", "StopQAppSessionCommand")
  .f(void 0, void 0)
  .ser(se_StopQAppSessionCommand)
  .de(de_StopQAppSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopQAppSessionInput;
      output: {};
    };
    sdk: {
      input: StopQAppSessionCommandInput;
      output: StopQAppSessionCommandOutput;
    };
  };
}
