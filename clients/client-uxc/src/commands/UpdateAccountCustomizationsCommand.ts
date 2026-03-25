// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateAccountCustomizationsInput, UpdateAccountCustomizationsOutput } from "../models/models_0";
import { UpdateAccountCustomizations$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, UxcClientResolvedConfig } from "../UxcClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccountCustomizationsCommand}.
 */
export interface UpdateAccountCustomizationsCommandInput extends UpdateAccountCustomizationsInput {}
/**
 * @public
 *
 * The output of {@link UpdateAccountCustomizationsCommand}.
 */
export interface UpdateAccountCustomizationsCommandOutput extends UpdateAccountCustomizationsOutput, __MetadataBearer {}

/**
 * <p>Updates one or more account customization settings. You can update account color, visible services, and visible Regions in a single request. Only the settings that you include in the request body are modified. Omitted settings remain unchanged. To reset a setting to its default behavior, set the value to <code>null</code> for visible Regions and visible services, or <code>none</code> for account color. This operation is idempotent.</p> <note> <p>The <code>visibleServices</code> and <code>visibleRegions</code> settings control only the appearance of services and Regions in the Amazon Web Services Management Console. They do not restrict access through the CLI, SDKs, or other APIs.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { UxcClient, UpdateAccountCustomizationsCommand } from "@aws-sdk/client-uxc"; // ES Modules import
 * // const { UxcClient, UpdateAccountCustomizationsCommand } = require("@aws-sdk/client-uxc"); // CommonJS import
 * // import type { UxcClientConfig } from "@aws-sdk/client-uxc";
 * const config = {}; // type is UxcClientConfig
 * const client = new UxcClient(config);
 * const input = { // UpdateAccountCustomizationsInput
 *   accountColor: "none" || "pink" || "purple" || "darkBlue" || "lightBlue" || "teal" || "green" || "yellow" || "orange" || "red",
 *   visibleServices: [ // ServiceList
 *     "STRING_VALUE",
 *   ],
 *   visibleRegions: [ // RegionsList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateAccountCustomizationsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccountCustomizationsOutput
 * //   accountColor: "none" || "pink" || "purple" || "darkBlue" || "lightBlue" || "teal" || "green" || "yellow" || "orange" || "red",
 * //   visibleServices: [ // ServiceList
 * //     "STRING_VALUE",
 * //   ],
 * //   visibleRegions: [ // RegionsList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateAccountCustomizationsCommandInput - {@link UpdateAccountCustomizationsCommandInput}
 * @returns {@link UpdateAccountCustomizationsCommandOutput}
 * @see {@link UpdateAccountCustomizationsCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountCustomizationsCommandOutput} for command's `response` shape.
 * @see {@link UxcClientResolvedConfig | config} for UxcClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation. Verify that your IAM policy includes the required <code>uxc:</code> permissions for the operation that you are calling. For more information on IAM permissions, see <a href="https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/security-iam-awsmanpol.html">Amazon Web Services managed policies for Amazon Web Services Management Console</a>.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error. Try your request again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Reduce the frequency of your requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link UxcServiceException}
 * <p>Base exception class for all service exceptions from Uxc service.</p>
 *
 *
 * @example Update account customizations
 * ```javascript
 * // Updates account customization settings with new values
 * const input = {
 *   accountColor: "green",
 *   visibleServices: [
 *     "s3",
 *     "ec2",
 *     "lambda"
 *   ]
 * };
 * const command = new UpdateAccountCustomizationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   accountColor: "green",
 *   visibleRegions: [
 *     "us-east-1",
 *     "us-west-2"
 *   ],
 *   visibleServices: [
 *     "s3",
 *     "ec2",
 *     "lambda"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateAccountCustomizationsCommand extends $Command
  .classBuilder<
    UpdateAccountCustomizationsCommandInput,
    UpdateAccountCustomizationsCommandOutput,
    UxcClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: UxcClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSAccountUXSetting", "UpdateAccountCustomizations", {})
  .n("UxcClient", "UpdateAccountCustomizationsCommand")
  .sc(UpdateAccountCustomizations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccountCustomizationsInput;
      output: UpdateAccountCustomizationsOutput;
    };
    sdk: {
      input: UpdateAccountCustomizationsCommandInput;
      output: UpdateAccountCustomizationsCommandOutput;
    };
  };
}
