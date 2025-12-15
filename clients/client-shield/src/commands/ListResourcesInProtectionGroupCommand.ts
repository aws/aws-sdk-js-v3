// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListResourcesInProtectionGroupRequest, ListResourcesInProtectionGroupResponse } from "../models/models_0";
import { ListResourcesInProtectionGroup$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourcesInProtectionGroupCommand}.
 */
export interface ListResourcesInProtectionGroupCommandInput extends ListResourcesInProtectionGroupRequest {}
/**
 * @public
 *
 * The output of {@link ListResourcesInProtectionGroupCommand}.
 */
export interface ListResourcesInProtectionGroupCommandOutput
  extends ListResourcesInProtectionGroupResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the resources that are included in the protection group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, ListResourcesInProtectionGroupCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, ListResourcesInProtectionGroupCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // import type { ShieldClientConfig } from "@aws-sdk/client-shield";
 * const config = {}; // type is ShieldClientConfig
 * const client = new ShieldClient(config);
 * const input = { // ListResourcesInProtectionGroupRequest
 *   ProtectionGroupId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListResourcesInProtectionGroupCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcesInProtectionGroupResponse
 * //   ResourceArns: [ // ResourceArnList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourcesInProtectionGroupCommandInput - {@link ListResourcesInProtectionGroupCommandInput}
 * @returns {@link ListResourcesInProtectionGroupCommandOutput}
 * @see {@link ListResourcesInProtectionGroupCommandInput} for command's `input` shape.
 * @see {@link ListResourcesInProtectionGroupCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Exception that indicates that the <code>NextToken</code> specified in the request is invalid. Submit the request using the <code>NextToken</code> value that was returned in the prior response.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 *
 * @public
 */
export class ListResourcesInProtectionGroupCommand extends $Command
  .classBuilder<
    ListResourcesInProtectionGroupCommandInput,
    ListResourcesInProtectionGroupCommandOutput,
    ShieldClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ShieldClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSShield_20160616", "ListResourcesInProtectionGroup", {})
  .n("ShieldClient", "ListResourcesInProtectionGroupCommand")
  .sc(ListResourcesInProtectionGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourcesInProtectionGroupRequest;
      output: ListResourcesInProtectionGroupResponse;
    };
    sdk: {
      input: ListResourcesInProtectionGroupCommandInput;
      output: ListResourcesInProtectionGroupCommandOutput;
    };
  };
}
