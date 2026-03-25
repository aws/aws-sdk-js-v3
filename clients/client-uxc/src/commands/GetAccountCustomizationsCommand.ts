// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetAccountCustomizationsInput, GetAccountCustomizationsOutput } from "../models/models_0";
import { GetAccountCustomizations$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, UxcClientResolvedConfig } from "../UxcClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountCustomizationsCommand}.
 */
export interface GetAccountCustomizationsCommandInput extends GetAccountCustomizationsInput {}
/**
 * @public
 *
 * The output of {@link GetAccountCustomizationsCommand}.
 */
export interface GetAccountCustomizationsCommandOutput extends GetAccountCustomizationsOutput, __MetadataBearer {}

/**
 * <p>Returns the current account customization settings, including account color, visible services, and visible Regions. Settings that you have not configured return their default values: visible Regions and visible services return `null`, and account color returns `none`.</p> <note> <p>The <code>visibleServices</code> and <code>visibleRegions</code> settings control only the appearance of services and Regions in the Amazon Web Services Management Console. They do not restrict access through the CLI, SDKs, or other APIs.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { UxcClient, GetAccountCustomizationsCommand } from "@aws-sdk/client-uxc"; // ES Modules import
 * // const { UxcClient, GetAccountCustomizationsCommand } = require("@aws-sdk/client-uxc"); // CommonJS import
 * // import type { UxcClientConfig } from "@aws-sdk/client-uxc";
 * const config = {}; // type is UxcClientConfig
 * const client = new UxcClient(config);
 * const input = {};
 * const command = new GetAccountCustomizationsCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountCustomizationsOutput
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
 * @param GetAccountCustomizationsCommandInput - {@link GetAccountCustomizationsCommandInput}
 * @returns {@link GetAccountCustomizationsCommandOutput}
 * @see {@link GetAccountCustomizationsCommandInput} for command's `input` shape.
 * @see {@link GetAccountCustomizationsCommandOutput} for command's `response` shape.
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
 * @example Get account customizations
 * ```javascript
 * // Retrieves all account customization settings
 * const input = { /* empty *\/ };
 * const command = new GetAccountCustomizationsCommand(input);
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
 *     "ec2"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetAccountCustomizationsCommand extends $Command
  .classBuilder<
    GetAccountCustomizationsCommandInput,
    GetAccountCustomizationsCommandOutput,
    UxcClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: UxcClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSAccountUXSetting", "GetAccountCustomizations", {})
  .n("UxcClient", "GetAccountCustomizationsCommand")
  .sc(GetAccountCustomizations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAccountCustomizationsOutput;
    };
    sdk: {
      input: GetAccountCustomizationsCommandInput;
      output: GetAccountCustomizationsCommandOutput;
    };
  };
}
