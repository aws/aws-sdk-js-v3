// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateUserHierarchyGroupRequest, CreateUserHierarchyGroupResponse } from "../models/models_1";
import { CreateUserHierarchyGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a new user hierarchy group.
 *
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
 *
 * A resource with the specified name already exists.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The allowed limit for the resource has been exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class CreateUserHierarchyGroupCommand extends command<CreateUserHierarchyGroupCommandInput, CreateUserHierarchyGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateUserHierarchyGroup",
  CreateUserHierarchyGroup$
) {
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
