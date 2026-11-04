// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMitigationActionRequest, CreateMitigationActionResponse } from "../models/models_0";
import { CreateMitigationAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Only certain types of mitigation actions can be applied to specific check names. For more information, see [Mitigation actions](https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-mitigation-actions.html). Each mitigation action can apply only one type of change.
 *
 * Requires permission to access the [CreateMitigationAction](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit has been exceeded.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The resource already exists.
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
export class CreateMitigationActionCommand extends command<CreateMitigationActionCommandInput, CreateMitigationActionCommandOutput>(
  _ep0,
  _mw0,
  "CreateMitigationAction",
  CreateMitigationAction$
) {
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
