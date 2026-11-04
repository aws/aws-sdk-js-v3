// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeProvisioningTemplateVersionRequest,
  DescribeProvisioningTemplateVersionResponse,
} from "../models/models_1";
import { DescribeProvisioningTemplateVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeProvisioningTemplateVersionCommand}.
 */
export interface DescribeProvisioningTemplateVersionCommandInput extends DescribeProvisioningTemplateVersionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProvisioningTemplateVersionCommand}.
 */
export interface DescribeProvisioningTemplateVersionCommandOutput extends DescribeProvisioningTemplateVersionResponse, __MetadataBearer {}

/**
 * Returns information about a provisioning template version.
 *
 * Requires permission to access the [DescribeProvisioningTemplateVersion](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeProvisioningTemplateVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeProvisioningTemplateVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeProvisioningTemplateVersionRequest
 *   templateName: "STRING_VALUE", // required
 *   versionId: Number("int"), // required
 * };
 * const command = new DescribeProvisioningTemplateVersionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProvisioningTemplateVersionResponse
 * //   versionId: Number("int"),
 * //   creationDate: new Date("TIMESTAMP"),
 * //   templateBody: "STRING_VALUE",
 * //   isDefaultVersion: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeProvisioningTemplateVersionCommandInput - {@link DescribeProvisioningTemplateVersionCommandInput}
 * @returns {@link DescribeProvisioningTemplateVersionCommandOutput}
 * @see {@link DescribeProvisioningTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisioningTemplateVersionCommandOutput} for command's `response` shape.
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
export class DescribeProvisioningTemplateVersionCommand extends command<DescribeProvisioningTemplateVersionCommandInput, DescribeProvisioningTemplateVersionCommandOutput>(
  _ep0,
  _mw0,
  "DescribeProvisioningTemplateVersion",
  DescribeProvisioningTemplateVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProvisioningTemplateVersionRequest;
      output: DescribeProvisioningTemplateVersionResponse;
    };
    sdk: {
      input: DescribeProvisioningTemplateVersionCommandInput;
      output: DescribeProvisioningTemplateVersionCommandOutput;
    };
  };
}
