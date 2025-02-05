// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateGroupCertificateAuthorityRequest, CreateGroupCertificateAuthorityResponse } from "../models/models_0";
import {
  de_CreateGroupCertificateAuthorityCommand,
  se_CreateGroupCertificateAuthorityCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGroupCertificateAuthorityCommand}.
 */
export interface CreateGroupCertificateAuthorityCommandInput extends CreateGroupCertificateAuthorityRequest {}
/**
 * @public
 *
 * The output of {@link CreateGroupCertificateAuthorityCommand}.
 */
export interface CreateGroupCertificateAuthorityCommandOutput
  extends CreateGroupCertificateAuthorityResponse,
    __MetadataBearer {}

/**
 * Creates a CA for the group. If a CA already exists, it will rotate the existing CA.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateGroupCertificateAuthorityCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateGroupCertificateAuthorityCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GreengrassClient(config);
 * const input = { // CreateGroupCertificateAuthorityRequest
 *   AmznClientToken: "STRING_VALUE",
 *   GroupId: "STRING_VALUE", // required
 * };
 * const command = new CreateGroupCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * // { // CreateGroupCertificateAuthorityResponse
 * //   GroupCertificateAuthorityArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateGroupCertificateAuthorityCommandInput - {@link CreateGroupCertificateAuthorityCommandInput}
 * @returns {@link CreateGroupCertificateAuthorityCommandOutput}
 * @see {@link CreateGroupCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link CreateGroupCertificateAuthorityCommandOutput} for command's `response` shape.
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
export class CreateGroupCertificateAuthorityCommand extends $Command
  .classBuilder<
    CreateGroupCertificateAuthorityCommandInput,
    CreateGroupCertificateAuthorityCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "CreateGroupCertificateAuthority", {})
  .n("GreengrassClient", "CreateGroupCertificateAuthorityCommand")
  .f(void 0, void 0)
  .ser(se_CreateGroupCertificateAuthorityCommand)
  .de(de_CreateGroupCertificateAuthorityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGroupCertificateAuthorityRequest;
      output: CreateGroupCertificateAuthorityResponse;
    };
    sdk: {
      input: CreateGroupCertificateAuthorityCommandInput;
      output: CreateGroupCertificateAuthorityCommandOutput;
    };
  };
}
