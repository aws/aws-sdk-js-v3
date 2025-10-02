// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTrustRequest, CreateTrustRequestFilterSensitiveLog, CreateTrustResult } from "../models/models_0";
import { de_CreateTrustCommand, se_CreateTrustCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTrustCommand}.
 */
export interface CreateTrustCommandInput extends CreateTrustRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrustCommand}.
 */
export interface CreateTrustCommandOutput extends CreateTrustResult, __MetadataBearer {}

/**
 * <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For
 *       example, you can establish a trust between your Managed Microsoft AD directory, and your existing
 *       self-managed Microsoft Active Directory. This would allow you to provide users and groups
 *       access to resources in either domain, with a single set of credentials.</p>
 *          <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an
 *       Managed Microsoft AD directory and an external domain. You can create either a forest trust or an
 *       external trust.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateTrustCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateTrustCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // CreateTrustRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   RemoteDomainName: "STRING_VALUE", // required
 *   TrustPassword: "STRING_VALUE", // required
 *   TrustDirection: "One-Way: Outgoing" || "One-Way: Incoming" || "Two-Way", // required
 *   TrustType: "Forest" || "External",
 *   ConditionalForwarderIpAddrs: [ // DnsIpAddrs
 *     "STRING_VALUE",
 *   ],
 *   ConditionalForwarderIpv6Addrs: [ // DnsIpv6Addrs
 *     "STRING_VALUE",
 *   ],
 *   SelectiveAuth: "Enabled" || "Disabled",
 * };
 * const command = new CreateTrustCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrustResult
 * //   TrustId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTrustCommandInput - {@link CreateTrustCommandInput}
 * @returns {@link CreateTrustCommandOutput}
 * @see {@link CreateTrustCommandInput} for command's `input` shape.
 * @see {@link CreateTrustCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The specified entity already exists.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @example To create a trust
 * ```javascript
 * // The following example creates a trust between Microsoft AD in the AWS cloud and an external domain.
 * const input = {
 *   ConditionalForwarderIpAddrs: [
 *     "172.30.21.228"
 *   ],
 *   DirectoryId: "d-92654abfed",
 *   RemoteDomainName: "europe.example.com",
 *   TrustDirection: "One-Way: Outgoing",
 *   TrustPassword: "Str0ngP@ssw0rd",
 *   TrustType: "Forest"
 * };
 * const command = new CreateTrustCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TrustId: "t-9267353743"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateTrustCommand extends $Command
  .classBuilder<
    CreateTrustCommandInput,
    CreateTrustCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "CreateTrust", {})
  .n("DirectoryServiceClient", "CreateTrustCommand")
  .f(CreateTrustRequestFilterSensitiveLog, void 0)
  .ser(se_CreateTrustCommand)
  .de(de_CreateTrustCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrustRequest;
      output: CreateTrustResult;
    };
    sdk: {
      input: CreateTrustCommandInput;
      output: CreateTrustCommandOutput;
    };
  };
}
