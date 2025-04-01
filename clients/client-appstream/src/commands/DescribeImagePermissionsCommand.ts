// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeImagePermissionsRequest, DescribeImagePermissionsResult } from "../models/models_0";
import { de_DescribeImagePermissionsCommand, se_DescribeImagePermissionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeImagePermissionsCommand}.
 */
export interface DescribeImagePermissionsCommandInput extends DescribeImagePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImagePermissionsCommand}.
 */
export interface DescribeImagePermissionsCommandOutput extends DescribeImagePermissionsResult, __MetadataBearer {}

/**
 * <p>Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeImagePermissionsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeImagePermissionsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // DescribeImagePermissionsRequest
 *   Name: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   SharedAwsAccountIds: [ // AwsAccountIdList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeImagePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImagePermissionsResult
 * //   Name: "STRING_VALUE",
 * //   SharedImagePermissionsList: [ // SharedImagePermissionsList
 * //     { // SharedImagePermissions
 * //       sharedAccountId: "STRING_VALUE", // required
 * //       imagePermissions: { // ImagePermissions
 * //         allowFleet: true || false,
 * //         allowImageBuilder: true || false,
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeImagePermissionsCommandInput - {@link DescribeImagePermissionsCommandInput}
 * @returns {@link DescribeImagePermissionsCommandOutput}
 * @see {@link DescribeImagePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeImagePermissionsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class DescribeImagePermissionsCommand extends $Command
  .classBuilder<
    DescribeImagePermissionsCommandInput,
    DescribeImagePermissionsCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PhotonAdminProxyService", "DescribeImagePermissions", {})
  .n("AppStreamClient", "DescribeImagePermissionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeImagePermissionsCommand)
  .de(de_DescribeImagePermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeImagePermissionsRequest;
      output: DescribeImagePermissionsResult;
    };
    sdk: {
      input: DescribeImagePermissionsCommandInput;
      output: DescribeImagePermissionsCommandOutput;
    };
  };
}
