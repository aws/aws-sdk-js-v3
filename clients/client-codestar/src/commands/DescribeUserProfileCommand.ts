// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeUserProfileRequest,
  DescribeUserProfileResult,
  DescribeUserProfileResultFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeUserProfileCommand, se_DescribeUserProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeUserProfileCommand}.
 */
export interface DescribeUserProfileCommandInput extends DescribeUserProfileRequest {}
/**
 * @public
 *
 * The output of {@link DescribeUserProfileCommand}.
 */
export interface DescribeUserProfileCommandOutput extends DescribeUserProfileResult, __MetadataBearer {}

/**
 * <p>Describes a user in AWS CodeStar and the user attributes across all projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, DescribeUserProfileCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, DescribeUserProfileCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const input = { // DescribeUserProfileRequest
 *   userArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeUserProfileCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUserProfileResult
 * //   userArn: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE",
 * //   emailAddress: "STRING_VALUE",
 * //   sshPublicKey: "STRING_VALUE",
 * //   createdTimestamp: new Date("TIMESTAMP"), // required
 * //   lastModifiedTimestamp: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeUserProfileCommandInput - {@link DescribeUserProfileCommandInput}
 * @returns {@link DescribeUserProfileCommandOutput}
 * @see {@link DescribeUserProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeUserProfileCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for CodeStarClient's `config` shape.
 *
 * @throws {@link UserProfileNotFoundException} (client fault)
 *  <p>The user profile was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is either not valid, or it could not be validated.</p>
 *
 * @throws {@link CodeStarServiceException}
 * <p>Base exception class for all service exceptions from CodeStar service.</p>
 *
 * @public
 */
export class DescribeUserProfileCommand extends $Command
  .classBuilder<
    DescribeUserProfileCommandInput,
    DescribeUserProfileCommandOutput,
    CodeStarClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeStarClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeStar_20170419", "DescribeUserProfile", {})
  .n("CodeStarClient", "DescribeUserProfileCommand")
  .f(void 0, DescribeUserProfileResultFilterSensitiveLog)
  .ser(se_DescribeUserProfileCommand)
  .de(de_DescribeUserProfileCommand)
  .build() {}
