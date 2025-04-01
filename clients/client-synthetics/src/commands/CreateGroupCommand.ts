// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateGroupRequest, CreateGroupResponse } from "../models/models_0";
import { de_CreateGroupCommand, se_CreateGroupCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGroupCommand}.
 */
export interface CreateGroupCommandInput extends CreateGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateGroupCommand}.
 */
export interface CreateGroupCommandOutput extends CreateGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a group which you can use to associate canaries with each other, including cross-Region
 *          canaries. Using groups can help you with
 *          managing and automating your canaries, and you can also view aggregated run results and statistics
 *       for all canaries in a group. </p>
 *          <p>Groups are global resources. When you create a group, it is replicated across Amazon Web Services Regions, and
 *          you can view it and add canaries to it from any Region.
 *          Although the group ARN format reflects the Region name where it was created, a group is not constrained to any Region.
 *          This means that you can put canaries from multiple Regions into the same group, and then use
 *       that group to view and manage all of those canaries in a single view.</p>
 *          <p>Groups are supported in all Regions except the Regions that are disabled by default. For more information
 *          about these Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html#rande-manage-enable">Enabling a Region</a>.</p>
 *          <p>Each group can contain as many as 10 canaries. You can have as many as 20 groups in your account. Any single canary
 *       can be a member of up to 10 groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, CreateGroupCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, CreateGroupCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const input = { // CreateGroupRequest
 *   Name: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateGroupResponse
 * //   Group: { // Group
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateGroupCommandInput - {@link CreateGroupCommandInput}
 * @returns {@link CreateGroupCommandOutput}
 * @see {@link CreateGroupCommandInput} for command's `input` shape.
 * @see {@link CreateGroupCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflicting operation is already in progress.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeded a service quota value.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 *
 * @public
 */
export class CreateGroupCommand extends $Command
  .classBuilder<
    CreateGroupCommandInput,
    CreateGroupCommandOutput,
    SyntheticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SyntheticsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Synthetics", "CreateGroup", {})
  .n("SyntheticsClient", "CreateGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateGroupCommand)
  .de(de_CreateGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGroupRequest;
      output: CreateGroupResponse;
    };
    sdk: {
      input: CreateGroupCommandInput;
      output: CreateGroupCommandOutput;
    };
  };
}
