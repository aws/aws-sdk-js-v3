// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListIdentityProviderConfigsRequest, ListIdentityProviderConfigsResponse } from "../models/models_0";
import {
  de_ListIdentityProviderConfigsCommand,
  se_ListIdentityProviderConfigsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIdentityProviderConfigsCommand}.
 */
export interface ListIdentityProviderConfigsCommandInput extends ListIdentityProviderConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListIdentityProviderConfigsCommand}.
 */
export interface ListIdentityProviderConfigsCommandOutput
  extends ListIdentityProviderConfigsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the identity provider configurations for your cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListIdentityProviderConfigsCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListIdentityProviderConfigsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // ListIdentityProviderConfigsRequest
 *   clusterName: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListIdentityProviderConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListIdentityProviderConfigsResponse
 * //   identityProviderConfigs: [ // IdentityProviderConfigs
 * //     { // IdentityProviderConfig
 * //       type: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIdentityProviderConfigsCommandInput - {@link ListIdentityProviderConfigsCommandInput}
 * @returns {@link ListIdentityProviderConfigsCommandOutput}
 * @see {@link ListIdentityProviderConfigsCommandInput} for command's `input` shape.
 * @see {@link ListIdentityProviderConfigsCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">IAM principal</a> that doesn't have permissions to use
 *             the action or resource or specifying an identifier that is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <code>ListClusters</code>. You can view your available managed node groups with
 *                 <code>ListNodegroups</code>. Amazon EKS clusters and node groups are Amazon Web Services Region specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Back off and retry the operation.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 * @public
 */
export class ListIdentityProviderConfigsCommand extends $Command
  .classBuilder<
    ListIdentityProviderConfigsCommandInput,
    ListIdentityProviderConfigsCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWesleyFrontend", "ListIdentityProviderConfigs", {})
  .n("EKSClient", "ListIdentityProviderConfigsCommand")
  .f(void 0, void 0)
  .ser(se_ListIdentityProviderConfigsCommand)
  .de(de_ListIdentityProviderConfigsCommand)
  .build() {}
