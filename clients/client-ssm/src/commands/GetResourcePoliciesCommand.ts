// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetResourcePoliciesRequest, GetResourcePoliciesResponse } from "../models/models_1";
import { de_GetResourcePoliciesCommand, se_GetResourcePoliciesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourcePoliciesCommand}.
 */
export interface GetResourcePoliciesCommandInput extends GetResourcePoliciesRequest {}
/**
 * @public
 *
 * The output of {@link GetResourcePoliciesCommand}.
 */
export interface GetResourcePoliciesCommandOutput extends GetResourcePoliciesResponse, __MetadataBearer {}

/**
 * <p>Returns an array of the <code>Policy</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetResourcePoliciesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetResourcePoliciesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetResourcePoliciesRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetResourcePoliciesCommand(input);
 * const response = await client.send(command);
 * // { // GetResourcePoliciesResponse
 * //   NextToken: "STRING_VALUE",
 * //   Policies: [ // GetResourcePoliciesResponseEntries
 * //     { // GetResourcePoliciesResponseEntry
 * //       PolicyId: "STRING_VALUE",
 * //       PolicyHash: "STRING_VALUE",
 * //       Policy: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetResourcePoliciesCommandInput - {@link GetResourcePoliciesCommandInput}
 * @returns {@link GetResourcePoliciesCommandOutput}
 * @see {@link GetResourcePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetResourcePoliciesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified parameter to be shared could not be found.</p>
 *
 * @throws {@link ResourcePolicyInvalidParameterException} (client fault)
 *  <p>One or more parameters specified for the call aren't valid. Verify the parameters and their
 *    values and try again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class GetResourcePoliciesCommand extends $Command
  .classBuilder<
    GetResourcePoliciesCommandInput,
    GetResourcePoliciesCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "GetResourcePolicies", {})
  .n("SSMClient", "GetResourcePoliciesCommand")
  .f(void 0, void 0)
  .ser(se_GetResourcePoliciesCommand)
  .de(de_GetResourcePoliciesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourcePoliciesRequest;
      output: GetResourcePoliciesResponse;
    };
    sdk: {
      input: GetResourcePoliciesCommandInput;
      output: GetResourcePoliciesCommandOutput;
    };
  };
}
