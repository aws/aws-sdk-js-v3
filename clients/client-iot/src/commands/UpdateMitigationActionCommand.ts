// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateMitigationActionRequest, UpdateMitigationActionResponse } from "../models/models_2";
import { de_UpdateMitigationActionCommand, se_UpdateMitigationActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMitigationActionCommand}.
 */
export interface UpdateMitigationActionCommandInput extends UpdateMitigationActionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMitigationActionCommand}.
 */
export interface UpdateMitigationActionCommandOutput extends UpdateMitigationActionResponse, __MetadataBearer {}

/**
 * <p>Updates the definition for the specified mitigation action.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateMitigationAction</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateMitigationActionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateMitigationActionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateMitigationActionRequest
 *   actionName: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE",
 *   actionParams: { // MitigationActionParams
 *     updateDeviceCertificateParams: { // UpdateDeviceCertificateParams
 *       action: "DEACTIVATE", // required
 *     },
 *     updateCACertificateParams: { // UpdateCACertificateParams
 *       action: "DEACTIVATE", // required
 *     },
 *     addThingsToThingGroupParams: { // AddThingsToThingGroupParams
 *       thingGroupNames: [ // ThingGroupNames // required
 *         "STRING_VALUE",
 *       ],
 *       overrideDynamicGroups: true || false,
 *     },
 *     replaceDefaultPolicyVersionParams: { // ReplaceDefaultPolicyVersionParams
 *       templateName: "BLANK_POLICY", // required
 *     },
 *     enableIoTLoggingParams: { // EnableIoTLoggingParams
 *       roleArnForLogging: "STRING_VALUE", // required
 *       logLevel: "DEBUG" || "INFO" || "ERROR" || "WARN" || "DISABLED", // required
 *     },
 *     publishFindingToSnsParams: { // PublishFindingToSnsParams
 *       topicArn: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new UpdateMitigationActionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMitigationActionResponse
 * //   actionArn: "STRING_VALUE",
 * //   actionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateMitigationActionCommandInput - {@link UpdateMitigationActionCommandInput}
 * @returns {@link UpdateMitigationActionCommandOutput}
 * @see {@link UpdateMitigationActionCommandInput} for command's `input` shape.
 * @see {@link UpdateMitigationActionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class UpdateMitigationActionCommand extends $Command
  .classBuilder<
    UpdateMitigationActionCommandInput,
    UpdateMitigationActionCommandOutput,
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
  .s("AWSIotService", "UpdateMitigationAction", {})
  .n("IoTClient", "UpdateMitigationActionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateMitigationActionCommand)
  .de(de_UpdateMitigationActionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMitigationActionRequest;
      output: UpdateMitigationActionResponse;
    };
    sdk: {
      input: UpdateMitigationActionCommandInput;
      output: UpdateMitigationActionCommandOutput;
    };
  };
}
