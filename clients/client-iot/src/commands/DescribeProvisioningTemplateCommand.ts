// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeProvisioningTemplateRequest, DescribeProvisioningTemplateResponse } from "../models/models_1";
import { DescribeProvisioningTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeProvisioningTemplateCommand}.
 */
export interface DescribeProvisioningTemplateCommandInput extends DescribeProvisioningTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProvisioningTemplateCommand}.
 */
export interface DescribeProvisioningTemplateCommandOutput extends DescribeProvisioningTemplateResponse, __MetadataBearer {}

/**
 * Returns information about a provisioning template.
 *
 * Requires permission to access the [DescribeProvisioningTemplate](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeProvisioningTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeProvisioningTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeProvisioningTemplateRequest
 *   templateName: "STRING_VALUE", // required
 * };
 * const command = new DescribeProvisioningTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProvisioningTemplateResponse
 * //   templateArn: "STRING_VALUE",
 * //   templateName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   creationDate: new Date("TIMESTAMP"),
 * //   lastModifiedDate: new Date("TIMESTAMP"),
 * //   defaultVersionId: Number("int"),
 * //   templateBody: "STRING_VALUE",
 * //   enabled: true || false,
 * //   provisioningRoleArn: "STRING_VALUE",
 * //   preProvisioningHook: { // ProvisioningHook
 * //     payloadVersion: "STRING_VALUE",
 * //     targetArn: "STRING_VALUE", // required
 * //   },
 * //   type: "FLEET_PROVISIONING" || "JITP",
 * // };
 *
 * ```
 *
 * @param DescribeProvisioningTemplateCommandInput - {@link DescribeProvisioningTemplateCommandInput}
 * @returns {@link DescribeProvisioningTemplateCommandOutput}
 * @see {@link DescribeProvisioningTemplateCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisioningTemplateCommandOutput} for command's `response` shape.
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
export class DescribeProvisioningTemplateCommand extends command<DescribeProvisioningTemplateCommandInput, DescribeProvisioningTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DescribeProvisioningTemplate",
  DescribeProvisioningTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProvisioningTemplateRequest;
      output: DescribeProvisioningTemplateResponse;
    };
    sdk: {
      input: DescribeProvisioningTemplateCommandInput;
      output: DescribeProvisioningTemplateCommandOutput;
    };
  };
}
