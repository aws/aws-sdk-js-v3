// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruSecurityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruSecurityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateScanRequest, CreateScanResponse } from "../models/models_0";
import { de_CreateScanCommand, se_CreateScanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateScanCommand}.
 */
export interface CreateScanCommandInput extends CreateScanRequest {}
/**
 * @public
 *
 * The output of {@link CreateScanCommand}.
 */
export interface CreateScanCommandOutput extends CreateScanResponse, __MetadataBearer {}

/**
 * <p>Use to create a scan using code uploaded to an Amazon S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruSecurityClient, CreateScanCommand } from "@aws-sdk/client-codeguru-security"; // ES Modules import
 * // const { CodeGuruSecurityClient, CreateScanCommand } = require("@aws-sdk/client-codeguru-security"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodeGuruSecurityClient(config);
 * const input = { // CreateScanRequest
 *   clientToken: "STRING_VALUE",
 *   resourceId: { // ResourceId Union: only one key present
 *     codeArtifactId: "STRING_VALUE",
 *   },
 *   scanName: "STRING_VALUE", // required
 *   scanType: "Standard" || "Express",
 *   analysisType: "Security" || "All",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateScanCommand(input);
 * const response = await client.send(command);
 * // { // CreateScanResponse
 * //   scanName: "STRING_VALUE", // required
 * //   runId: "STRING_VALUE", // required
 * //   resourceId: { // ResourceId Union: only one key present
 * //     codeArtifactId: "STRING_VALUE",
 * //   },
 * //   scanState: "InProgress" || "Successful" || "Failed", // required
 * //   scanNameArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateScanCommandInput - {@link CreateScanCommandInput}
 * @returns {@link CreateScanCommandOutput}
 * @see {@link CreateScanCommandInput} for command's `input` shape.
 * @see {@link CreateScanCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruSecurityClientResolvedConfig | config} for CodeGuruSecurityClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service
 *       resource associated with the request. Resolve the conflict before retrying this
 *       request.</p>
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
 * @public
 */
export class CreateScanCommand extends $Command
  .classBuilder<
    CreateScanCommandInput,
    CreateScanCommandOutput,
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
  .s("AwsCodeGuruSecurity", "CreateScan", {})
  .n("CodeGuruSecurityClient", "CreateScanCommand")
  .f(void 0, void 0)
  .ser(se_CreateScanCommand)
  .de(de_CreateScanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateScanRequest;
      output: CreateScanResponse;
    };
    sdk: {
      input: CreateScanCommandInput;
      output: CreateScanCommandOutput;
    };
  };
}
