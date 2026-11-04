// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateACLRequest, CreateACLResponse } from "../models/models_0";
import { CreateACL$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an Access Control List. For more information, see [Authenticating users with Access Contol Lists (ACLs)](https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html).
 *
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
 *
 * An ACL with the specified name already exists.
 *
 * @throws {@link ACLQuotaExceededFault} (client fault)
 *
 * The request cannot be processed because it would exceed the maximum number of ACLs allowed.
 *
 * @throws {@link DefaultUserRequired} (client fault)
 *
 * A default user is required and must be specified.
 *
 * @throws {@link DuplicateUserNameFault} (client fault)
 *
 * A user with the specified name already exists.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The specified parameter value is not valid.
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *
 * The request cannot be processed because it would exceed the maximum number of tags allowed per resource.
 *
 * @throws {@link UserNotFoundFault} (client fault)
 *
 * The specified user does not exist.
 *
 * @throws {@link MemoryDBServiceException}
 *
 * Base exception class for all service exceptions from MemoryDB service.
 *
 * @public
 */
export class CreateACLCommand extends command<CreateACLCommandInput, CreateACLCommandOutput>(
  _ep0,
  _mw0,
  "CreateACL",
  CreateACL$
) {
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
