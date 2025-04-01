// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruSecurityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruSecurityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetScanRequest, GetScanResponse } from "../models/models_0";
import { de_GetScanCommand, se_GetScanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetScanCommand}.
 */
export interface GetScanCommandInput extends GetScanRequest {}
/**
 * @public
 *
 * The output of {@link GetScanCommand}.
 */
export interface GetScanCommandOutput extends GetScanResponse, __MetadataBearer {}

/**
 * <p>Returns details about a scan, including whether or not a scan has completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruSecurityClient, GetScanCommand } from "@aws-sdk/client-codeguru-security"; // ES Modules import
 * // const { CodeGuruSecurityClient, GetScanCommand } = require("@aws-sdk/client-codeguru-security"); // CommonJS import
 * const client = new CodeGuruSecurityClient(config);
 * const input = { // GetScanRequest
 *   scanName: "STRING_VALUE", // required
 *   runId: "STRING_VALUE",
 * };
 * const command = new GetScanCommand(input);
 * const response = await client.send(command);
 * // { // GetScanResponse
 * //   scanName: "STRING_VALUE", // required
 * //   runId: "STRING_VALUE", // required
 * //   scanState: "InProgress" || "Successful" || "Failed", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   analysisType: "Security" || "All", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   numberOfRevisions: Number("long"),
 * //   scanNameArn: "STRING_VALUE",
 * //   errorMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetScanCommandInput - {@link GetScanCommandInput}
 * @returns {@link GetScanCommandOutput}
 * @see {@link GetScanCommandInput} for command's `input` shape.
 * @see {@link GetScanCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruSecurityClientResolvedConfig | config} for CodeGuruSecurityClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CodeGuruSecurityServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruSecurity service.</p>
 *
 *
 * @public
 */
export class GetScanCommand extends $Command
  .classBuilder<
    GetScanCommandInput,
    GetScanCommandOutput,
    CodeGuruSecurityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeGuruSecurityClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsCodeGuruSecurity", "GetScan", {})
  .n("CodeGuruSecurityClient", "GetScanCommand")
  .f(void 0, void 0)
  .ser(se_GetScanCommand)
  .de(de_GetScanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetScanRequest;
      output: GetScanResponse;
    };
    sdk: {
      input: GetScanCommandInput;
      output: GetScanCommandOutput;
    };
  };
}
