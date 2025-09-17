// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { CreateACLRequest, CreateACLResponse } from "../models/models_0";
import { de_CreateACLCommand, se_CreateACLCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateACLCommand}.
 */
export interface CreateACLCommandInput extends CreateACLRequest {}
/**
 * @public
 *
 * The output of {@link CreateACLCommand}.
 */
export interface CreateACLCommandOutput extends CreateACLResponse, __MetadataBearer {}

/**
 * <p>Creates an Access Control List. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, CreateACLCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, CreateACLCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // CreateACLRequest
 *   ACLName: "STRING_VALUE", // required
 *   UserNames: [ // UserNameListInput
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateACLCommand(input);
 * const response = await client.send(command);
 * // { // CreateACLResponse
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
 * @param CreateACLCommandInput - {@link CreateACLCommandInput}
 * @returns {@link CreateACLCommandOutput}
 * @see {@link CreateACLCommandInput} for command's `input` shape.
 * @see {@link CreateACLCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link ACLAlreadyExistsFault} (client fault)
 *  <p></p>
 *
 * @throws {@link ACLQuotaExceededFault} (client fault)
 *  <p></p>
 *
 * @throws {@link DefaultUserRequired} (client fault)
 *  <p></p>
 *
 * @throws {@link DuplicateUserNameFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p></p>
 *
 * @throws {@link UserNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class CreateACLCommand extends $Command
  .classBuilder<
    CreateACLCommandInput,
    CreateACLCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonMemoryDB", "CreateACL", {})
  .n("MemoryDBClient", "CreateACLCommand")
  .f(void 0, void 0)
  .ser(se_CreateACLCommand)
  .de(de_CreateACLCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateACLRequest;
      output: CreateACLResponse;
    };
    sdk: {
      input: CreateACLCommandInput;
      output: CreateACLCommandOutput;
    };
  };
}
