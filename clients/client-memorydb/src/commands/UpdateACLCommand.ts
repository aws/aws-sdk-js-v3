// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import type { UpdateACLRequest, UpdateACLResponse } from "../models/models_0";
import { UpdateACL$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateACLCommand}.
 */
export interface UpdateACLCommandInput extends UpdateACLRequest {}
/**
 * @public
 *
 * The output of {@link UpdateACLCommand}.
 */
export interface UpdateACLCommandOutput extends UpdateACLResponse, __MetadataBearer {}

/**
 * <p>Changes the list of users that belong to the Access Control List.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, UpdateACLCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, UpdateACLCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // UpdateACLRequest
 *   ACLName: "STRING_VALUE", // required
 *   UserNamesToAdd: [ // UserNameListInput
 *     "STRING_VALUE",
 *   ],
 *   UserNamesToRemove: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateACLCommand(input);
 * const response = await client.send(command);
 * // { // UpdateACLResponse
 * //   ACL: { // ACL
 * //     Name: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     UserNames: [ // UserNameList
 * //       "STRING_VALUE",
 * //     ],
 * //     MinimumEngineVersion: "STRING_VALUE",
 * //     PendingChanges: { // ACLPendingChanges
 * //       UserNamesToRemove: [
 * //         "STRING_VALUE",
 * //       ],
 * //       UserNamesToAdd: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Clusters: [ // ACLClusterNameList
 * //       "STRING_VALUE",
 * //     ],
 * //     ARN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateACLCommandInput - {@link UpdateACLCommandInput}
 * @returns {@link UpdateACLCommandOutput}
 * @see {@link UpdateACLCommandInput} for command's `input` shape.
 * @see {@link UpdateACLCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link ACLNotFoundFault} (client fault)
 *  <p>The specified ACL does not exist.</p>
 *
 * @throws {@link DefaultUserRequired} (client fault)
 *  <p>A default user is required and must be specified.</p>
 *
 * @throws {@link DuplicateUserNameFault} (client fault)
 *  <p>A user with the specified name already exists.</p>
 *
 * @throws {@link InvalidACLStateFault} (client fault)
 *  <p>The ACL is not in a valid state for the requested operation.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>The specified parameter combination is not valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The specified parameter value is not valid.</p>
 *
 * @throws {@link UserNotFoundFault} (client fault)
 *  <p>The specified user does not exist.</p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class UpdateACLCommand extends $Command
  .classBuilder<
    UpdateACLCommandInput,
    UpdateACLCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMemoryDB", "UpdateACL", {})
  .n("MemoryDBClient", "UpdateACLCommand")
  .sc(UpdateACL$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateACLRequest;
      output: UpdateACLResponse;
    };
    sdk: {
      input: UpdateACLCommandInput;
      output: UpdateACLCommandOutput;
    };
  };
}
