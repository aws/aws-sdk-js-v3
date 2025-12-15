// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListResourcePoliciesRequest, ListResourcePoliciesResponse } from "../models/models_0";
import type { MPAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MPAClient";
import { ListResourcePolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourcePoliciesCommand}.
 */
export interface ListResourcePoliciesCommandInput extends ListResourcePoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListResourcePoliciesCommand}.
 */
export interface ListResourcePoliciesCommandOutput extends ListResourcePoliciesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of policies for a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MPAClient, ListResourcePoliciesCommand } from "@aws-sdk/client-mpa"; // ES Modules import
 * // const { MPAClient, ListResourcePoliciesCommand } = require("@aws-sdk/client-mpa"); // CommonJS import
 * // import type { MPAClientConfig } from "@aws-sdk/client-mpa";
 * const config = {}; // type is MPAClientConfig
 * const client = new MPAClient(config);
 * const input = { // ListResourcePoliciesRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResourcePoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcePoliciesResponse
 * //   NextToken: "STRING_VALUE",
 * //   ResourcePolicies: [ // ListResourcePoliciesResponseResourcePolicies
 * //     { // ListResourcePoliciesResponseResourcePolicy
 * //       PolicyArn: "STRING_VALUE",
 * //       PolicyType: "AWS_MANAGED" || "AWS_RAM",
 * //       PolicyName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListResourcePoliciesCommandInput - {@link ListResourcePoliciesCommandInput}
 * @returns {@link ListResourcePoliciesCommandOutput}
 * @see {@link ListResourcePoliciesCommandInput} for command's `input` shape.
 * @see {@link ListResourcePoliciesCommandOutput} for command's `response` shape.
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
export class ListResourcePoliciesCommand extends $Command
  .classBuilder<
    ListResourcePoliciesCommandInput,
    ListResourcePoliciesCommandOutput,
    MPAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MPAClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFluffyCoreService", "ListResourcePolicies", {})
  .n("MPAClient", "ListResourcePoliciesCommand")
  .sc(ListResourcePolicies$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourcePoliciesRequest;
      output: ListResourcePoliciesResponse;
    };
    sdk: {
      input: ListResourcePoliciesCommandInput;
      output: ListResourcePoliciesCommandOutput;
    };
  };
}
