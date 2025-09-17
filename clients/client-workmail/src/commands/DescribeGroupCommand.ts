// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeGroupRequest, DescribeGroupResponse } from "../models/models_0";
import { de_DescribeGroupCommand, se_DescribeGroupCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeGroupCommand}.
 */
export interface DescribeGroupCommandInput extends DescribeGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeGroupCommand}.
 */
export interface DescribeGroupCommandOutput extends DescribeGroupResponse, __MetadataBearer {}

/**
 * <p>Returns the data available for the group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DescribeGroupCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DescribeGroupCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // DescribeGroupRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   GroupId: "STRING_VALUE", // required
 * };
 * const command = new DescribeGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGroupResponse
 * //   GroupId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Email: "STRING_VALUE",
 * //   State: "ENABLED" || "DISABLED" || "DELETED",
 * //   EnabledDate: new Date("TIMESTAMP"),
 * //   DisabledDate: new Date("TIMESTAMP"),
 * //   HiddenFromGlobalAddressList: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeGroupCommandInput - {@link DescribeGroupCommandInput}
 * @returns {@link DescribeGroupCommandOutput}
 * @see {@link DescribeGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeGroupCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class DescribeGroupCommand extends $Command
  .classBuilder<
    DescribeGroupCommandInput,
    DescribeGroupCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkMailService", "DescribeGroup", {})
  .n("WorkMailClient", "DescribeGroupCommand")
  .f(void 0, void 0)
  .ser(se_DescribeGroupCommand)
  .de(de_DescribeGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGroupRequest;
      output: DescribeGroupResponse;
    };
    sdk: {
      input: DescribeGroupCommandInput;
      output: DescribeGroupCommandOutput;
    };
  };
}
