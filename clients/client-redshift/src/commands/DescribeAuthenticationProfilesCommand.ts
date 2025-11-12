// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAuthenticationProfilesMessage, DescribeAuthenticationProfilesResult } from "../models/models_1";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeAuthenticationProfiles } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAuthenticationProfilesCommand}.
 */
export interface DescribeAuthenticationProfilesCommandInput extends DescribeAuthenticationProfilesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeAuthenticationProfilesCommand}.
 */
export interface DescribeAuthenticationProfilesCommandOutput
  extends DescribeAuthenticationProfilesResult,
    __MetadataBearer {}

/**
 * <p>Describes an authentication profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeAuthenticationProfilesCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeAuthenticationProfilesCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DescribeAuthenticationProfilesMessage
 *   AuthenticationProfileName: "STRING_VALUE",
 * };
 * const command = new DescribeAuthenticationProfilesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAuthenticationProfilesResult
 * //   AuthenticationProfiles: [ // AuthenticationProfileList
 * //     { // AuthenticationProfile
 * //       AuthenticationProfileName: "STRING_VALUE",
 * //       AuthenticationProfileContent: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAuthenticationProfilesCommandInput - {@link DescribeAuthenticationProfilesCommandInput}
 * @returns {@link DescribeAuthenticationProfilesCommandOutput}
 * @see {@link DescribeAuthenticationProfilesCommandInput} for command's `input` shape.
 * @see {@link DescribeAuthenticationProfilesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link AuthenticationProfileNotFoundFault} (client fault)
 *  <p>The authentication profile can't be found.</p>
 *
 * @throws {@link InvalidAuthenticationProfileRequestFault} (client fault)
 *  <p>The authentication profile request is not valid. The profile name can't be null or empty.
 *             The authentication profile API operation must be available in the Amazon Web Services Region.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DescribeAuthenticationProfilesCommand extends $Command
  .classBuilder<
    DescribeAuthenticationProfilesCommandInput,
    DescribeAuthenticationProfilesCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DescribeAuthenticationProfiles", {})
  .n("RedshiftClient", "DescribeAuthenticationProfilesCommand")
  .sc(DescribeAuthenticationProfiles)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAuthenticationProfilesMessage;
      output: DescribeAuthenticationProfilesResult;
    };
    sdk: {
      input: DescribeAuthenticationProfilesCommandInput;
      output: DescribeAuthenticationProfilesCommandOutput;
    };
  };
}
