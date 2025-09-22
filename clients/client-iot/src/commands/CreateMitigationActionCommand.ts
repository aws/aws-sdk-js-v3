// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateMitigationActionRequest, CreateMitigationActionResponse } from "../models/models_0";
import { CreateMitigationAction } from "../schemas/schemas_47_Mitigation";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMitigationActionCommand}.
 */
export interface CreateMitigationActionCommandInput extends CreateMitigationActionRequest {}
/**
 * @public
 *
 * The output of {@link CreateMitigationActionCommand}.
 */
export interface CreateMitigationActionCommandOutput extends CreateMitigationActionResponse, __MetadataBearer {}

/**
 * <p>Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Only certain types of mitigation actions can be applied to specific check names.
 *       For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-mitigation-actions.html">Mitigation actions</a>. Each mitigation action can apply only one type of change.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateMitigationAction</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateMitigationActionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateMitigationActionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreateMitigationActionRequest
 *   actionName: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
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
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateMitigationActionCommand(input);
 * const response = await client.send(command);
 * // { // CreateMitigationActionResponse
 * //   actionArn: "STRING_VALUE",
 * //   actionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMitigationActionCommandInput - {@link CreateMitigationActionCommandInput}
 * @returns {@link CreateMitigationActionCommandOutput}
 * @see {@link CreateMitigationActionCommandInput} for command's `input` shape.
 * @see {@link CreateMitigationActionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
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
export class CreateMitigationActionCommand extends $Command
  .classBuilder<
    CreateMitigationActionCommandInput,
    CreateMitigationActionCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "CreateMitigationAction", {})
  .n("IoTClient", "CreateMitigationActionCommand")
  .sc(CreateMitigationAction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMitigationActionRequest;
      output: CreateMitigationActionResponse;
    };
    sdk: {
      input: CreateMitigationActionCommandInput;
      output: CreateMitigationActionCommandOutput;
    };
  };
}
