// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccountLevelServiceConfigurationOutput } from "../models/models_0";
import {
  de_GetAccountLevelServiceConfigurationCommand,
  se_GetAccountLevelServiceConfigurationCommand,
} from "../protocols/Aws_restJson1";
import {
  ResourceExplorer2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceExplorer2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountLevelServiceConfigurationCommand}.
 */
export interface GetAccountLevelServiceConfigurationCommandInput {}
/**
 * @public
 *
 * The output of {@link GetAccountLevelServiceConfigurationCommand}.
 */
export interface GetAccountLevelServiceConfigurationCommandOutput
  extends GetAccountLevelServiceConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves the status of your account's Amazon Web Services service access, and validates the service
 *             linked role required to access the multi-account search feature. Only the management
 *             account can invoke this API call. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, GetAccountLevelServiceConfigurationCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, GetAccountLevelServiceConfigurationCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = {};
 * const command = new GetAccountLevelServiceConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountLevelServiceConfigurationOutput
 * //   OrgConfiguration: { // OrgConfiguration
 * //     AWSServiceAccessStatus: "STRING_VALUE", // required
 * //     ServiceLinkedRole: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountLevelServiceConfigurationCommandInput - {@link GetAccountLevelServiceConfigurationCommandInput}
 * @returns {@link GetAccountLevelServiceConfigurationCommandOutput}
 * @see {@link GetAccountLevelServiceConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAccountLevelServiceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The credentials that you used to call this operation don't have the minimum required
 *             permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of internal service error. Try your request again
 *             later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You specified a resource that doesn't exist. Check the ID or ARN that you used to
 *             identity the resource, and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request failed because you exceeded a rate limit for this operation. For more
 *             information, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/quotas.html">Quotas for
 *             Resource Explorer</a>.</p>
 *
 * @throws {@link ResourceExplorer2ServiceException}
 * <p>Base exception class for all service exceptions from ResourceExplorer2 service.</p>
 *
 *
 * @public
 */
export class GetAccountLevelServiceConfigurationCommand extends $Command
  .classBuilder<
    GetAccountLevelServiceConfigurationCommandInput,
    GetAccountLevelServiceConfigurationCommandOutput,
    ResourceExplorer2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceExplorer2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ResourceExplorer", "GetAccountLevelServiceConfiguration", {})
  .n("ResourceExplorer2Client", "GetAccountLevelServiceConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetAccountLevelServiceConfigurationCommand)
  .de(de_GetAccountLevelServiceConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAccountLevelServiceConfigurationOutput;
    };
    sdk: {
      input: GetAccountLevelServiceConfigurationCommandInput;
      output: GetAccountLevelServiceConfigurationCommandOutput;
    };
  };
}
