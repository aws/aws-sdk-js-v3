// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListResourcesInProtectionGroupRequest, ListResourcesInProtectionGroupResponse } from "../models/models_0";
import {
  de_ListResourcesInProtectionGroupCommand,
  se_ListResourcesInProtectionGroupCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSShield_20160616", "ListResourcesInProtectionGroup", {})
  .n("ShieldClient", "ListResourcesInProtectionGroupCommand")
  .f(void 0, void 0)
  .ser(se_ListResourcesInProtectionGroupCommand)
  .de(de_ListResourcesInProtectionGroupCommand)
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
