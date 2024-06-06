// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetGroupCertificateAuthorityRequest, GetGroupCertificateAuthorityResponse } from "../models/models_0";
import {
  de_GetGroupCertificateAuthorityCommand,
  se_GetGroupCertificateAuthorityCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGroupCertificateAuthorityCommand}.
 */
export interface GetGroupCertificateAuthorityCommandInput extends GetGroupCertificateAuthorityRequest {}
/**
 * @public
 *
 * The output of {@link GetGroupCertificateAuthorityCommand}.
 */
export interface GetGroupCertificateAuthorityCommandOutput
  extends GetGroupCertificateAuthorityResponse,
    __MetadataBearer {}

/**
 * Retreives the CA associated with a group. Returns the public key of the CA.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetGroupCertificateAuthorityCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetGroupCertificateAuthorityCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // GetGroupCertificateAuthorityRequest
 *   CertificateAuthorityId: "STRING_VALUE", // required
 *   GroupId: "STRING_VALUE", // required
 * };
 * const command = new GetGroupCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * // { // GetGroupCertificateAuthorityResponse
 * //   GroupCertificateAuthorityArn: "STRING_VALUE",
 * //   GroupCertificateAuthorityId: "STRING_VALUE",
 * //   PemEncodedCertificate: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetGroupCertificateAuthorityCommandInput - {@link GetGroupCertificateAuthorityCommandInput}
 * @returns {@link GetGroupCertificateAuthorityCommandOutput}
 * @see {@link GetGroupCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link GetGroupCertificateAuthorityCommandOutput} for command's `response` shape.
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
export class GetGroupCertificateAuthorityCommand extends $Command
  .classBuilder<
    GetGroupCertificateAuthorityCommandInput,
    GetGroupCertificateAuthorityCommandOutput,
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
  .s("Greengrass", "GetGroupCertificateAuthority", {})
  .n("GreengrassClient", "GetGroupCertificateAuthorityCommand")
  .f(void 0, void 0)
  .ser(se_GetGroupCertificateAuthorityCommand)
  .de(de_GetGroupCertificateAuthorityCommand)
  .build() {}
