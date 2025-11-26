// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPolicyVersionsRequest, ListPolicyVersionsResponse } from "../models/models_0";
import type { MPAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MPAClient";
import { ListPolicyVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPolicyVersionsCommand}.
 */
export interface ListPolicyVersionsCommandInput extends ListPolicyVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPolicyVersionsCommand}.
 */
export interface ListPolicyVersionsCommandOutput extends ListPolicyVersionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the versions for policies. Policies define the permissions for team resources.</p> <p>The protected operation for a service integration might require specific permissions. For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/mpa-integrations.html">How other services work with Multi-party approval</a> in the <i>Multi-party approval User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, ListPolicyVersionsCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, ListPolicyVersionsCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * // import type { MPAClientConfig } from "@aws-sdk/client-mpa";
 * const config = {}; // type is MPAClientConfig
 * const client = new MPAClient(config);
 * const input = { // ListPolicyVersionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   PolicyArn: "STRING_VALUE", // required
 * };
 * const command = new ListPolicyVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPolicyVersionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   PolicyVersions: [ // PolicyVersions
 * //     { // PolicyVersionSummary
 * //       Arn: "STRING_VALUE", // required
 * //       PolicyArn: "STRING_VALUE", // required
 * //       VersionId: Number("int"), // required
 * //       PolicyType: "AWS_MANAGED" || "AWS_RAM", // required
 * //       IsDefault: true || false, // required
 * //       Name: "STRING_VALUE", // required
 * //       Status: "ATTACHABLE" || "DEPRECATED", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       LastUpdatedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPolicyVersionsCommandInput - {@link ListPolicyVersionsCommandInput}
 * @returns {@link ListPolicyVersionsCommandOutput}
 * @see {@link ListPolicyVersionsCommandInput} for command's `input` shape.
 * @see {@link ListPolicyVersionsCommandOutput} for command's `response` shape.
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
export class ListPolicyVersionsCommand extends $Command
  .classBuilder<
    ListPolicyVersionsCommandInput,
    ListPolicyVersionsCommandOutput,
    MPAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MPAClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFluffyCoreService", "ListPolicyVersions", {})
  .n("MPAClient", "ListPolicyVersionsCommand")
  .sc(ListPolicyVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPolicyVersionsRequest;
      output: ListPolicyVersionsResponse;
    };
    sdk: {
      input: ListPolicyVersionsCommandInput;
      output: ListPolicyVersionsCommandOutput;
    };
  };
}
