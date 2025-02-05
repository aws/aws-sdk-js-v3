// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteV2LoggingLevelRequest } from "../models/models_1";
import { de_DeleteV2LoggingLevelCommand, se_DeleteV2LoggingLevelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteV2LoggingLevelCommand}.
 */
export interface DeleteV2LoggingLevelCommandInput extends DeleteV2LoggingLevelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteV2LoggingLevelCommand}.
 */
export interface DeleteV2LoggingLevelCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a logging level.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteV2LoggingLevel</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteV2LoggingLevelCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteV2LoggingLevelCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // DeleteV2LoggingLevelRequest
 *   targetType: "DEFAULT" || "THING_GROUP" || "CLIENT_ID" || "SOURCE_IP" || "PRINCIPAL_ID", // required
 *   targetName: "STRING_VALUE", // required
 * };
 * const command = new DeleteV2LoggingLevelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteV2LoggingLevelCommandInput - {@link DeleteV2LoggingLevelCommandInput}
 * @returns {@link DeleteV2LoggingLevelCommandOutput}
 * @see {@link DeleteV2LoggingLevelCommandInput} for command's `input` shape.
 * @see {@link DeleteV2LoggingLevelCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class DeleteV2LoggingLevelCommand extends $Command
  .classBuilder<
    DeleteV2LoggingLevelCommandInput,
    DeleteV2LoggingLevelCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "DeleteV2LoggingLevel", {})
  .n("IoTClient", "DeleteV2LoggingLevelCommand")
  .f(void 0, void 0)
  .ser(se_DeleteV2LoggingLevelCommand)
  .de(de_DeleteV2LoggingLevelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteV2LoggingLevelRequest;
      output: {};
    };
    sdk: {
      input: DeleteV2LoggingLevelCommandInput;
      output: DeleteV2LoggingLevelCommandOutput;
    };
  };
}
