// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { GetLicenseConversionTaskRequest, GetLicenseConversionTaskResponse } from "../models/models_0";
import { de_GetLicenseConversionTaskCommand, se_GetLicenseConversionTaskCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLicenseConversionTaskCommand}.
 */
export interface GetLicenseConversionTaskCommandInput extends GetLicenseConversionTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetLicenseConversionTaskCommand}.
 */
export interface GetLicenseConversionTaskCommandOutput extends GetLicenseConversionTaskResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specified license type conversion task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetLicenseConversionTaskCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetLicenseConversionTaskCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LicenseManagerClient(config);
 * const input = { // GetLicenseConversionTaskRequest
 *   LicenseConversionTaskId: "STRING_VALUE", // required
 * };
 * const command = new GetLicenseConversionTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetLicenseConversionTaskResponse
 * //   LicenseConversionTaskId: "STRING_VALUE",
 * //   ResourceArn: "STRING_VALUE",
 * //   SourceLicenseContext: { // LicenseConversionContext
 * //     UsageOperation: "STRING_VALUE",
 * //   },
 * //   DestinationLicenseContext: {
 * //     UsageOperation: "STRING_VALUE",
 * //   },
 * //   StatusMessage: "STRING_VALUE",
 * //   Status: "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   LicenseConversionTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetLicenseConversionTaskCommandInput - {@link GetLicenseConversionTaskCommandInput}
 * @returns {@link GetLicenseConversionTaskCommandOutput}
 * @see {@link GetLicenseConversionTaskCommandInput} for command's `input` shape.
 * @see {@link GetLicenseConversionTaskCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 * @public
 */
export class GetLicenseConversionTaskCommand extends $Command
  .classBuilder<
    GetLicenseConversionTaskCommandInput,
    GetLicenseConversionTaskCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLicenseManager", "GetLicenseConversionTask", {})
  .n("LicenseManagerClient", "GetLicenseConversionTaskCommand")
  .f(void 0, void 0)
  .ser(se_GetLicenseConversionTaskCommand)
  .de(de_GetLicenseConversionTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLicenseConversionTaskRequest;
      output: GetLicenseConversionTaskResponse;
    };
    sdk: {
      input: GetLicenseConversionTaskCommandInput;
      output: GetLicenseConversionTaskCommandOutput;
    };
  };
}
