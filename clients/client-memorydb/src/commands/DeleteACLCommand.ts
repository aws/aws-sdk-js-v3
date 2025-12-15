// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import type { DeleteACLRequest, DeleteACLResponse } from "../models/models_0";
import { DeleteACL$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteACLCommand}.
 */
export interface DeleteACLCommandInput extends DeleteACLRequest {}
/**
 * @public
 *
 * The output of {@link DeleteACLCommand}.
 */
export interface DeleteACLCommandOutput extends DeleteACLResponse, __MetadataBearer {}

/**
 * <p>Deletes an Access Control List. The ACL must first be disassociated from the cluster before it can be deleted. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DeleteACLCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DeleteACLCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // DeleteACLRequest
 *   ACLName: "STRING_VALUE", // required
 * };
 * const command = new DeleteACLCommand(input);
 * const response = await client.send(command);
 * // { // DeleteACLResponse
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
 * @param DeleteACLCommandInput - {@link DeleteACLCommandInput}
 * @returns {@link DeleteACLCommandOutput}
 * @see {@link DeleteACLCommandInput} for command's `input` shape.
 * @see {@link DeleteACLCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link ACLNotFoundFault} (client fault)
 *  <p>The specified ACL does not exist.</p>
 *
 * @throws {@link InvalidACLStateFault} (client fault)
 *  <p>The ACL is not in a valid state for the requested operation.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The specified parameter value is not valid.</p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class DeleteACLCommand extends $Command
  .classBuilder<
    DeleteACLCommandInput,
    DeleteACLCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMemoryDB", "DeleteACL", {})
  .n("MemoryDBClient", "DeleteACLCommand")
  .sc(DeleteACL$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteACLRequest;
      output: DeleteACLResponse;
    };
    sdk: {
      input: DeleteACLCommandInput;
      output: DeleteACLCommandOutput;
    };
  };
}
