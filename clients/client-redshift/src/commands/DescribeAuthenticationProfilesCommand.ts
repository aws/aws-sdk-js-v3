// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAuthenticationProfilesMessage, DescribeAuthenticationProfilesResult } from "../models/models_0";
import {
  de_DescribeAuthenticationProfilesCommand,
  se_DescribeAuthenticationProfilesCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "DescribeAuthenticationProfiles", {})
  .n("RedshiftClient", "DescribeAuthenticationProfilesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAuthenticationProfilesCommand)
  .de(de_DescribeAuthenticationProfilesCommand)
  .build() {}
