// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateUserHierarchyGroupRequest, CreateUserHierarchyGroupResponse } from "../models/models_0";
import { CreateUserHierarchyGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUserHierarchyGroupCommand}.
 */
export interface CreateUserHierarchyGroupCommandInput extends CreateUserHierarchyGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateUserHierarchyGroupCommand}.
 */
export interface CreateUserHierarchyGroupCommandOutput extends CreateUserHierarchyGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a new user hierarchy group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateUserHierarchyGroupCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateUserHierarchyGroupCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateUserHierarchyGroupRequest
 *   Name: "STRING_VALUE", // required
 *   ParentGroupId: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateUserHierarchyGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateUserHierarchyGroupResponse
 * //   HierarchyGroupId: "STRING_VALUE",
 * //   HierarchyGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateUserHierarchyGroupCommandInput - {@link CreateUserHierarchyGroupCommandInput}
 * @returns {@link CreateUserHierarchyGroupCommandOutput}
 * @see {@link CreateUserHierarchyGroupCommandInput} for command's `input` shape.
 * @see {@link CreateUserHierarchyGroupCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
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
export class CreateUserHierarchyGroupCommand extends $Command
  .classBuilder<
    CreateUserHierarchyGroupCommandInput,
    CreateUserHierarchyGroupCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "CreateUserHierarchyGroup", {})
  .n("ConnectClient", "CreateUserHierarchyGroupCommand")
  .sc(CreateUserHierarchyGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUserHierarchyGroupRequest;
      output: CreateUserHierarchyGroupResponse;
    };
    sdk: {
      input: CreateUserHierarchyGroupCommandInput;
      output: CreateUserHierarchyGroupCommandOutput;
    };
  };
}
