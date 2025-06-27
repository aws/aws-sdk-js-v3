// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeUserHierarchyGroupRequest, DescribeUserHierarchyGroupResponse } from "../models/models_1";
import { de_DescribeUserHierarchyGroupCommand, se_DescribeUserHierarchyGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeUserHierarchyGroupCommand}.
 */
export interface DescribeUserHierarchyGroupCommandInput extends DescribeUserHierarchyGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeUserHierarchyGroupCommand}.
 */
export interface DescribeUserHierarchyGroupCommandOutput extends DescribeUserHierarchyGroupResponse, __MetadataBearer {}

/**
 * <p>Describes the specified hierarchy group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeUserHierarchyGroupCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeUserHierarchyGroupCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DescribeUserHierarchyGroupRequest
 *   HierarchyGroupId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeUserHierarchyGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUserHierarchyGroupResponse
 * //   HierarchyGroup: { // HierarchyGroup
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     LevelId: "STRING_VALUE",
 * //     HierarchyPath: { // HierarchyPath
 * //       LevelOne: { // HierarchyGroupSummary
 * //         Id: "STRING_VALUE",
 * //         Arn: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         LastModifiedTime: new Date("TIMESTAMP"),
 * //         LastModifiedRegion: "STRING_VALUE",
 * //       },
 * //       LevelTwo: {
 * //         Id: "STRING_VALUE",
 * //         Arn: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         LastModifiedTime: new Date("TIMESTAMP"),
 * //         LastModifiedRegion: "STRING_VALUE",
 * //       },
 * //       LevelThree: {
 * //         Id: "STRING_VALUE",
 * //         Arn: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         LastModifiedTime: new Date("TIMESTAMP"),
 * //         LastModifiedRegion: "STRING_VALUE",
 * //       },
 * //       LevelFour: {
 * //         Id: "STRING_VALUE",
 * //         Arn: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         LastModifiedTime: new Date("TIMESTAMP"),
 * //         LastModifiedRegion: "STRING_VALUE",
 * //       },
 * //       LevelFive: {
 * //         Id: "STRING_VALUE",
 * //         Arn: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         LastModifiedTime: new Date("TIMESTAMP"),
 * //         LastModifiedRegion: "STRING_VALUE",
 * //       },
 * //     },
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     LastModifiedRegion: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeUserHierarchyGroupCommandInput - {@link DescribeUserHierarchyGroupCommandInput}
 * @returns {@link DescribeUserHierarchyGroupCommandOutput}
 * @see {@link DescribeUserHierarchyGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeUserHierarchyGroupCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DescribeUserHierarchyGroupCommand extends $Command
  .classBuilder<
    DescribeUserHierarchyGroupCommandInput,
    DescribeUserHierarchyGroupCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "DescribeUserHierarchyGroup", {})
  .n("ConnectClient", "DescribeUserHierarchyGroupCommand")
  .f(void 0, void 0)
  .ser(se_DescribeUserHierarchyGroupCommand)
  .de(de_DescribeUserHierarchyGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeUserHierarchyGroupRequest;
      output: DescribeUserHierarchyGroupResponse;
    };
    sdk: {
      input: DescribeUserHierarchyGroupCommandInput;
      output: DescribeUserHierarchyGroupCommandOutput;
    };
  };
}
