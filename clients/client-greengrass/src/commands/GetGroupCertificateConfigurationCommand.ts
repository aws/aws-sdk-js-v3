// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type {
  GetGroupCertificateConfigurationRequest,
  GetGroupCertificateConfigurationResponse,
} from "../models/models_0";
import { GetGroupCertificateConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGroupCertificateConfigurationCommand}.
 */
export interface GetGroupCertificateConfigurationCommandInput extends GetGroupCertificateConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetGroupCertificateConfigurationCommand}.
 */
export interface GetGroupCertificateConfigurationCommandOutput extends GetGroupCertificateConfigurationResponse, __MetadataBearer {}

/**
 * Retrieves the current configuration for the CA used by the group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetGroupCertificateConfigurationCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetGroupCertificateConfigurationCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // GetGroupCertificateConfigurationRequest
 *   GroupId: "STRING_VALUE", // required
 * };
 * const command = new GetGroupCertificateConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetGroupCertificateConfigurationResponse
 * //   CertificateAuthorityExpiryInMilliseconds: "STRING_VALUE",
 * //   CertificateExpiryInMilliseconds: "STRING_VALUE",
 * //   GroupId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetGroupCertificateConfigurationCommandInput - {@link GetGroupCertificateConfigurationCommandInput}
 * @returns {@link GetGroupCertificateConfigurationCommandOutput}
 * @see {@link GetGroupCertificateConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetGroupCertificateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 *
 * @public
 */
export class GetGroupCertificateConfigurationCommand extends $Command
  .classBuilder<
    GetGroupCertificateConfigurationCommandInput,
    GetGroupCertificateConfigurationCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "GetGroupCertificateConfiguration", {})
  .n("GreengrassClient", "GetGroupCertificateConfigurationCommand")
  .sc(GetGroupCertificateConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGroupCertificateConfigurationRequest;
      output: GetGroupCertificateConfigurationResponse;
    };
    sdk: {
      input: GetGroupCertificateConfigurationCommandInput;
      output: GetGroupCertificateConfigurationCommandOutput;
    };
  };
}
