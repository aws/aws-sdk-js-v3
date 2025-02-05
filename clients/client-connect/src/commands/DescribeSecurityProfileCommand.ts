// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSecurityProfileRequest, DescribeSecurityProfileResponse } from "../models/models_1";
import { de_DescribeSecurityProfileCommand, se_DescribeSecurityProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSecurityProfileCommand}.
 */
export interface DescribeSecurityProfileCommandInput extends DescribeSecurityProfileRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSecurityProfileCommand}.
 */
export interface DescribeSecurityProfileCommandOutput extends DescribeSecurityProfileResponse, __MetadataBearer {}

/**
 * <p>Gets basic information about the security profile.</p>
 *          <p>For information about security profiles, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html">Security Profiles</a> in the
 *      <i>Amazon Connect Administrator Guide</i>. For a mapping of the API name and
 *    user interface name of the security profile permissions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List of security profile
 *     permissions</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeSecurityProfileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeSecurityProfileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectClient(config);
 * const input = { // DescribeSecurityProfileRequest
 *   SecurityProfileId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeSecurityProfileCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSecurityProfileResponse
 * //   SecurityProfile: { // SecurityProfile
 * //     Id: "STRING_VALUE",
 * //     OrganizationResourceId: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     SecurityProfileName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     AllowedAccessControlTags: { // AllowedAccessControlTags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     TagRestrictedResources: [ // TagRestrictedResourceList
 * //       "STRING_VALUE",
 * //     ],
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     LastModifiedRegion: "STRING_VALUE",
 * //     HierarchyRestrictedResources: [ // HierarchyRestrictedResourceList
 * //       "STRING_VALUE",
 * //     ],
 * //     AllowedAccessControlHierarchyGroupId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSecurityProfileCommandInput - {@link DescribeSecurityProfileCommandInput}
 * @returns {@link DescribeSecurityProfileCommandOutput}
 * @see {@link DescribeSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class DescribeSecurityProfileCommand extends $Command
  .classBuilder<
    DescribeSecurityProfileCommandInput,
    DescribeSecurityProfileCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "DescribeSecurityProfile", {})
  .n("ConnectClient", "DescribeSecurityProfileCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSecurityProfileCommand)
  .de(de_DescribeSecurityProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSecurityProfileRequest;
      output: DescribeSecurityProfileResponse;
    };
    sdk: {
      input: DescribeSecurityProfileCommandInput;
      output: DescribeSecurityProfileCommandOutput;
    };
  };
}
