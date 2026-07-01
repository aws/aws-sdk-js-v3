// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeUserHierarchyGroupRequest, DescribeUserHierarchyGroupResponse } from "../models/models_1";
import { DescribeUserHierarchyGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
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
export class DescribeUserHierarchyGroupCommand extends command<DescribeUserHierarchyGroupCommandInput, DescribeUserHierarchyGroupCommandOutput>(
  _ep0,
  _mw0,
  "DescribeUserHierarchyGroup",
  DescribeUserHierarchyGroup$
) {
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
