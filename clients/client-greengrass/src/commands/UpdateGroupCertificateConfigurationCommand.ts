// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import {
  UpdateGroupCertificateConfigurationRequest,
  UpdateGroupCertificateConfigurationResponse,
} from "../models/models_0";
import {
  de_UpdateGroupCertificateConfigurationCommand,
  se_UpdateGroupCertificateConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGroupCertificateConfigurationCommand}.
 */
export interface UpdateGroupCertificateConfigurationCommandInput extends UpdateGroupCertificateConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGroupCertificateConfigurationCommand}.
 */
export interface UpdateGroupCertificateConfigurationCommandOutput
  extends UpdateGroupCertificateConfigurationResponse,
    __MetadataBearer {}

/**
 * Updates the Certificate expiry time for a group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateGroupCertificateConfigurationCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateGroupCertificateConfigurationCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // UpdateGroupCertificateConfigurationRequest
 *   CertificateExpiryInMilliseconds: "STRING_VALUE",
 *   GroupId: "STRING_VALUE", // required
 * };
 * const command = new UpdateGroupCertificateConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGroupCertificateConfigurationResponse
 * //   CertificateAuthorityExpiryInMilliseconds: "STRING_VALUE",
 * //   CertificateExpiryInMilliseconds: "STRING_VALUE",
 * //   GroupId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateGroupCertificateConfigurationCommandInput - {@link UpdateGroupCertificateConfigurationCommandInput}
 * @returns {@link UpdateGroupCertificateConfigurationCommandOutput}
 * @see {@link UpdateGroupCertificateConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateGroupCertificateConfigurationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateGroupCertificateConfigurationCommand extends $Command
  .classBuilder<
    UpdateGroupCertificateConfigurationCommandInput,
    UpdateGroupCertificateConfigurationCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "UpdateGroupCertificateConfiguration", {})
  .n("GreengrassClient", "UpdateGroupCertificateConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateGroupCertificateConfigurationCommand)
  .de(de_UpdateGroupCertificateConfigurationCommand)
  .build() {}
