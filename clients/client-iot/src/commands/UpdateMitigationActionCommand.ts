// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateMitigationActionRequest, UpdateMitigationActionResponse } from "../models/models_2";
import { UpdateMitigationAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the definition for the specified mitigation action.
 *
 * Requires permission to access the [UpdateMitigationAction](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class UpdateMitigationActionCommand extends command<UpdateMitigationActionCommandInput, UpdateMitigationActionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMitigationAction",
  UpdateMitigationAction$
) {
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
