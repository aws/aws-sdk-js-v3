// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateProvisioningTemplateRequest, CreateProvisioningTemplateResponse } from "../models/models_0";
import { CreateProvisioningTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateProvisioningTemplateCommand}.
 */
export interface CreateProvisioningTemplateCommandInput extends CreateProvisioningTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateProvisioningTemplateCommand}.
 */
export interface CreateProvisioningTemplateCommandOutput extends CreateProvisioningTemplateResponse, __MetadataBearer {}

/**
 * Creates a provisioning template.
 *
 * Requires permission to access the [CreateProvisioningTemplate](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateProvisioningTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateProvisioningTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreateProvisioningTemplateRequest
 *   templateName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   templateBody: "STRING_VALUE", // required
 *   enabled: true || false,
 *   provisioningRoleArn: "STRING_VALUE", // required
 *   preProvisioningHook: { // ProvisioningHook
 *     payloadVersion: "STRING_VALUE",
 *     targetArn: "STRING_VALUE", // required
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   type: "FLEET_PROVISIONING" || "JITP",
 * };
 * const command = new CreateProvisioningTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateProvisioningTemplateResponse
 * //   templateArn: "STRING_VALUE",
 * //   templateName: "STRING_VALUE",
 * //   defaultVersionId: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateProvisioningTemplateCommandInput - {@link CreateProvisioningTemplateCommandInput}
 * @returns {@link CreateProvisioningTemplateCommandOutput}
 * @see {@link CreateProvisioningTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateProvisioningTemplateCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class CreateProvisioningTemplateCommand extends command<CreateProvisioningTemplateCommandInput, CreateProvisioningTemplateCommandOutput>(
  _ep0,
  _mw0,
  "CreateProvisioningTemplate",
  CreateProvisioningTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProvisioningTemplateRequest;
      output: CreateProvisioningTemplateResponse;
    };
    sdk: {
      input: CreateProvisioningTemplateCommandInput;
      output: CreateProvisioningTemplateCommandOutput;
    };
  };
}
