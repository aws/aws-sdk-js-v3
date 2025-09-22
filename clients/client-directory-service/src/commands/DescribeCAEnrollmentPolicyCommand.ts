// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCAEnrollmentPolicyRequest, DescribeCAEnrollmentPolicyResult } from "../models/models_0";
import { DescribeCAEnrollmentPolicy } from "../schemas/schemas_1_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCAEnrollmentPolicyCommand}.
 */
export interface DescribeCAEnrollmentPolicyCommandInput extends DescribeCAEnrollmentPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCAEnrollmentPolicyCommand}.
 */
export interface DescribeCAEnrollmentPolicyCommandOutput extends DescribeCAEnrollmentPolicyResult, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about the certificate authority (CA) enrollment policy for
 *       the specified directory. This policy determines how client certificates are automatically enrolled and
 *       managed through Amazon Web Services Private Certificate Authority. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeCAEnrollmentPolicyCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeCAEnrollmentPolicyCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeCAEnrollmentPolicyRequest
 *   DirectoryId: "STRING_VALUE", // required
 * };
 * const command = new DescribeCAEnrollmentPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCAEnrollmentPolicyResult
 * //   DirectoryId: "STRING_VALUE",
 * //   PcaConnectorArn: "STRING_VALUE",
 * //   CaEnrollmentPolicyStatus: "InProgress" || "Success" || "Failed" || "Disabling" || "Disabled" || "Impaired",
 * //   LastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   CaEnrollmentPolicyStatusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCAEnrollmentPolicyCommandInput - {@link DescribeCAEnrollmentPolicyCommandInput}
 * @returns {@link DescribeCAEnrollmentPolicyCommandOutput}
 * @see {@link DescribeCAEnrollmentPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeCAEnrollmentPolicyCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *  <p>The specified directory does not exist in the system.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @public
 */
export class DescribeCAEnrollmentPolicyCommand extends $Command
  .classBuilder<
    DescribeCAEnrollmentPolicyCommandInput,
    DescribeCAEnrollmentPolicyCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "DescribeCAEnrollmentPolicy", {})
  .n("DirectoryServiceClient", "DescribeCAEnrollmentPolicyCommand")
  .sc(DescribeCAEnrollmentPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCAEnrollmentPolicyRequest;
      output: DescribeCAEnrollmentPolicyResult;
    };
    sdk: {
      input: DescribeCAEnrollmentPolicyCommandInput;
      output: DescribeCAEnrollmentPolicyCommandOutput;
    };
  };
}
