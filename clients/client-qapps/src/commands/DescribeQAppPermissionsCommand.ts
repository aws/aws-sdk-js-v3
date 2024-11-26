// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeQAppPermissionsInput, DescribeQAppPermissionsOutput } from "../models/models_0";
import { de_DescribeQAppPermissionsCommand, se_DescribeQAppPermissionsCommand } from "../protocols/Aws_restJson1";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeQAppPermissionsCommand}.
 */
export interface DescribeQAppPermissionsCommandInput extends DescribeQAppPermissionsInput {}
/**
 * @public
 *
 * The output of {@link DescribeQAppPermissionsCommand}.
 */
export interface DescribeQAppPermissionsCommandOutput extends DescribeQAppPermissionsOutput, __MetadataBearer {}

/**
 * <p> Describes read permissions for a Amazon Q App in Amazon Q Business application environment instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, DescribeQAppPermissionsCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, DescribeQAppPermissionsCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * const client = new QAppsClient(config);
 * const input = { // DescribeQAppPermissionsInput
 *   instanceId: "STRING_VALUE", // required
 *   appId: "STRING_VALUE", // required
 * };
 * const command = new DescribeQAppPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeQAppPermissionsOutput
 * //   resourceArn: "STRING_VALUE",
 * //   appId: "STRING_VALUE",
 * //   permissions: [ // PermissionsOutputList
 * //     { // PermissionOutput
 * //       action: "read" || "write", // required
 * //       principal: { // PrincipalOutput
 * //         userId: "STRING_VALUE",
 * //         userType: "owner" || "user",
 * //         email: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeQAppPermissionsCommandInput - {@link DescribeQAppPermissionsCommandInput}
 * @returns {@link DescribeQAppPermissionsCommandOutput}
 * @see {@link DescribeQAppPermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeQAppPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The requested operation could not be completed because too many
 *       requests were sent at once. Wait a bit and try again later.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client is not authenticated or authorized to perform the requested operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link QAppsServiceException}
 * <p>Base exception class for all service exceptions from QApps service.</p>
 *
 * @public
 */
export class DescribeQAppPermissionsCommand extends $Command
  .classBuilder<
    DescribeQAppPermissionsCommandInput,
    DescribeQAppPermissionsCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QAppsService", "DescribeQAppPermissions", {})
  .n("QAppsClient", "DescribeQAppPermissionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeQAppPermissionsCommand)
  .de(de_DescribeQAppPermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeQAppPermissionsInput;
      output: DescribeQAppPermissionsOutput;
    };
    sdk: {
      input: DescribeQAppPermissionsCommandInput;
      output: DescribeQAppPermissionsCommandOutput;
    };
  };
}
