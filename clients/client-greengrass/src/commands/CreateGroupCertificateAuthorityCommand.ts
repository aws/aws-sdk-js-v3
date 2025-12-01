// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type {
  CreateGroupCertificateAuthorityRequest,
  CreateGroupCertificateAuthorityResponse,
} from "../models/models_0";
import { CreateGroupCertificateAuthority } from "../schemas/schemas_0";

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
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "CreateGroupCertificateAuthority", {})
  .n("GreengrassClient", "CreateGroupCertificateAuthorityCommand")
  .sc(CreateGroupCertificateAuthority)
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
