// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetGroupCertificateConfigurationRequest, GetGroupCertificateConfigurationResponse } from "../models/models_0";
import {
  de_GetGroupCertificateConfigurationCommand,
  se_GetGroupCertificateConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
export interface GetGroupCertificateConfigurationCommandOutput
  extends GetGroupCertificateConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * Retrieves the current configuration for the CA used by the group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetGroupCertificateConfigurationCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetGroupCertificateConfigurationCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
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
 */
export class GetGroupCertificateConfigurationCommand extends $Command
  .classBuilder<
    GetGroupCertificateConfigurationCommandInput,
    GetGroupCertificateConfigurationCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: GreengrassClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "GetGroupCertificateConfiguration", {})
  .n("GreengrassClient", "GetGroupCertificateConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetGroupCertificateConfigurationCommand)
  .de(de_GetGroupCertificateConfigurationCommand)
  .build() {}
