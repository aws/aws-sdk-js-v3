// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeMitigationActionRequest, DescribeMitigationActionResponse } from "../models/models_1";
import { DescribeMitigationAction } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMitigationActionCommand}.
 */
export interface DescribeMitigationActionCommandInput extends DescribeMitigationActionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMitigationActionCommand}.
 */
export interface DescribeMitigationActionCommandOutput extends DescribeMitigationActionResponse, __MetadataBearer {}

/**
 * <p>Gets information about a mitigation action.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeMitigationAction</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeMitigationActionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeMitigationActionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeMitigationActionRequest
 *   actionName: "STRING_VALUE", // required
 * };
 * const command = new DescribeMitigationActionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMitigationActionResponse
 * //   actionName: "STRING_VALUE",
 * //   actionType: "UPDATE_DEVICE_CERTIFICATE" || "UPDATE_CA_CERTIFICATE" || "ADD_THINGS_TO_THING_GROUP" || "REPLACE_DEFAULT_POLICY_VERSION" || "ENABLE_IOT_LOGGING" || "PUBLISH_FINDING_TO_SNS",
 * //   actionArn: "STRING_VALUE",
 * //   actionId: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE",
 * //   actionParams: { // MitigationActionParams
 * //     updateDeviceCertificateParams: { // UpdateDeviceCertificateParams
 * //       action: "DEACTIVATE", // required
 * //     },
 * //     updateCACertificateParams: { // UpdateCACertificateParams
 * //       action: "DEACTIVATE", // required
 * //     },
 * //     addThingsToThingGroupParams: { // AddThingsToThingGroupParams
 * //       thingGroupNames: [ // ThingGroupNames // required
 * //         "STRING_VALUE",
 * //       ],
 * //       overrideDynamicGroups: true || false,
 * //     },
 * //     replaceDefaultPolicyVersionParams: { // ReplaceDefaultPolicyVersionParams
 * //       templateName: "BLANK_POLICY", // required
 * //     },
 * //     enableIoTLoggingParams: { // EnableIoTLoggingParams
 * //       roleArnForLogging: "STRING_VALUE", // required
 * //       logLevel: "DEBUG" || "INFO" || "ERROR" || "WARN" || "DISABLED", // required
 * //     },
 * //     publishFindingToSnsParams: { // PublishFindingToSnsParams
 * //       topicArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   creationDate: new Date("TIMESTAMP"),
 * //   lastModifiedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeMitigationActionCommandInput - {@link DescribeMitigationActionCommandInput}
 * @returns {@link DescribeMitigationActionCommandOutput}
 * @see {@link DescribeMitigationActionCommandInput} for command's `input` shape.
 * @see {@link DescribeMitigationActionCommandOutput} for command's `response` shape.
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
export class DescribeMitigationActionCommand extends $Command
  .classBuilder<
    DescribeMitigationActionCommandInput,
    DescribeMitigationActionCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DescribeMitigationAction", {})
  .n("IoTClient", "DescribeMitigationActionCommand")
  .sc(DescribeMitigationAction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMitigationActionRequest;
      output: DescribeMitigationActionResponse;
    };
    sdk: {
      input: DescribeMitigationActionCommandInput;
      output: DescribeMitigationActionCommandOutput;
    };
  };
}
