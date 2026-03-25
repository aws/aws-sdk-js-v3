// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListServicesInput, ListServicesOutput } from "../models/models_0";
import { ListServices$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, UxcClientResolvedConfig } from "../UxcClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServicesCommand}.
 */
export interface ListServicesCommandInput extends ListServicesInput {}
/**
 * @public
 *
 * The output of {@link ListServicesCommand}.
 */
export interface ListServicesCommandOutput extends ListServicesOutput, __MetadataBearer {}

/**
 * <p>Returns a paginated list of Amazon Web Services service identifiers that you can use as values for the <code>visibleServices</code> setting in <a href="https://docs.aws.amazon.com/awsconsolehelpdocs/latest/APIReference/API_UpdateAccountCustomizations.html">UpdateAccountCustomizations</a>. The available services vary by Amazon Web Services partition. Use pagination to retrieve all results.</p> <note> <p>The <code>visibleServices</code> setting controls only the appearance of services in the Amazon Web Services Management Console. It does not restrict access through the CLI, SDKs, or other APIs.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { UxcClient, ListServicesCommand } from "@aws-sdk/client-uxc"; // ES Modules import
 * // const { UxcClient, ListServicesCommand } = require("@aws-sdk/client-uxc"); // CommonJS import
 * // import type { UxcClientConfig } from "@aws-sdk/client-uxc";
 * const config = {}; // type is UxcClientConfig
 * const client = new UxcClient(config);
 * const input = { // ListServicesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListServicesCommand(input);
 * const response = await client.send(command);
 * // { // ListServicesOutput
 * //   nextToken: "STRING_VALUE",
 * //   services: [ // ServiceList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListServicesCommandInput - {@link ListServicesCommandInput}
 * @returns {@link ListServicesCommandOutput}
 * @see {@link ListServicesCommandInput} for command's `input` shape.
 * @see {@link ListServicesCommandOutput} for command's `response` shape.
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
 * @example List available services
 * ```javascript
 * // Retrieves a paginated list of available AWS services
 * const input = { /* empty *\/ };
 * const command = new ListServicesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "eyJhbGciOiJIUzI1NiJ91W342Gdcs259019",
 *   services: [
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
export class ListServicesCommand extends $Command
  .classBuilder<
    ListServicesCommandInput,
    ListServicesCommandOutput,
    UxcClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: UxcClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSAccountUXSetting", "ListServices", {})
  .n("UxcClient", "ListServicesCommand")
  .sc(ListServices$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServicesInput;
      output: ListServicesOutput;
    };
    sdk: {
      input: ListServicesCommandInput;
      output: ListServicesCommandOutput;
    };
  };
}
