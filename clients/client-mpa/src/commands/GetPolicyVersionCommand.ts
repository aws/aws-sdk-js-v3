// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetPolicyVersionRequest,
  GetPolicyVersionResponse,
  GetPolicyVersionResponseFilterSensitiveLog,
} from "../models/models_0";
import { MPAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MPAClient";
import { de_GetPolicyVersionCommand, se_GetPolicyVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPolicyVersionCommand}.
 */
export interface GetPolicyVersionCommandInput extends GetPolicyVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetPolicyVersionCommand}.
 */
export interface GetPolicyVersionCommandOutput extends GetPolicyVersionResponse, __MetadataBearer {}

/**
 * <p>Returns details for the version of a policy. Policies define the permissions for team resources.</p> <p>The protected operation for a service integration might require specific permissions. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-integrations.html">How other services work with Multi-party approval</a> in the <i>Multi-party approval User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, GetPolicyVersionCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, GetPolicyVersionCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * // import type { MPAClientConfig } from "@aws-sdk/client-mpa";
 * const config = {}; // type is MPAClientConfig
 * const client = new MPAClient(config);
 * const input = { // GetPolicyVersionRequest
 *   PolicyVersionArn: "STRING_VALUE", // required
 * };
 * const command = new GetPolicyVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetPolicyVersionResponse
 * //   PolicyVersion: { // PolicyVersion
 * //     Arn: "STRING_VALUE", // required
 * //     PolicyArn: "STRING_VALUE", // required
 * //     VersionId: Number("int"), // required
 * //     PolicyType: "AWS_MANAGED" || "AWS_RAM", // required
 * //     IsDefault: true || false, // required
 * //     Name: "STRING_VALUE", // required
 * //     Status: "ATTACHABLE" || "DEPRECATED", // required
 * //     CreationTime: new Date("TIMESTAMP"), // required
 * //     LastUpdatedTime: new Date("TIMESTAMP"), // required
 * //     Document: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPolicyVersionCommandInput - {@link GetPolicyVersionCommandInput}
 * @returns {@link GetPolicyVersionCommandOutput}
 * @see {@link GetPolicyVersionCommandInput} for command's `input` shape.
 * @see {@link GetPolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link MPAClientResolvedConfig | config} for MPAClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Check your permissions, and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error. Try your request again. If the problem persists, contact Amazon Web Services Support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist. Check the resource ID, and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link MPAServiceException}
 * <p>Base exception class for all service exceptions from MPA service.</p>
 *
 *
 * @public
 */
export class GetPolicyVersionCommand extends $Command
  .classBuilder<
    GetPolicyVersionCommandInput,
    GetPolicyVersionCommandOutput,
    MPAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MPAClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSFluffyCoreService", "GetPolicyVersion", {})
  .n("MPAClient", "GetPolicyVersionCommand")
  .f(void 0, GetPolicyVersionResponseFilterSensitiveLog)
  .ser(se_GetPolicyVersionCommand)
  .de(de_GetPolicyVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPolicyVersionRequest;
      output: GetPolicyVersionResponse;
    };
    sdk: {
      input: GetPolicyVersionCommandInput;
      output: GetPolicyVersionCommandOutput;
    };
  };
}
