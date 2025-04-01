// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListResourcePoliciesRequest, ListResourcePoliciesResult } from "../models/models_0";
import { de_ListResourcePoliciesCommand, se_ListResourcePoliciesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

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
export interface ListResourcePoliciesCommandOutput extends ListResourcePoliciesResult, __MetadataBearer {}

/**
 * <p>Returns the list of resource policies in the target Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, ListResourcePoliciesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, ListResourcePoliciesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const input = { // ListResourcePoliciesRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResourcePoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcePoliciesResult
 * //   ResourcePolicies: [ // ResourcePolicyList
 * //     { // ResourcePolicy
 * //       PolicyName: "STRING_VALUE",
 * //       PolicyDocument: "STRING_VALUE",
 * //       PolicyRevisionId: "STRING_VALUE",
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourcePoliciesCommandInput - {@link ListResourcePoliciesCommandInput}
 * @returns {@link ListResourcePoliciesCommandOutput}
 * @see {@link ListResourcePoliciesCommandInput} for command's `input` shape.
 * @see {@link ListResourcePoliciesCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 *
 * @public
 */
export class ListResourcePoliciesCommand extends $Command
  .classBuilder<
    ListResourcePoliciesCommandInput,
    ListResourcePoliciesCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSXRay", "ListResourcePolicies", {})
  .n("XRayClient", "ListResourcePoliciesCommand")
  .f(void 0, void 0)
  .ser(se_ListResourcePoliciesCommand)
  .de(de_ListResourcePoliciesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourcePoliciesRequest;
      output: ListResourcePoliciesResult;
    };
    sdk: {
      input: ListResourcePoliciesCommandInput;
      output: ListResourcePoliciesCommandOutput;
    };
  };
}
