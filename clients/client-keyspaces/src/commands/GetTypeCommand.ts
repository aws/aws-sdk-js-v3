// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTypeRequest, GetTypeResponse } from "../models/models_0";
import { GetType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTypeCommand}.
 */
export interface GetTypeCommandInput extends GetTypeRequest {}
/**
 * @public
 *
 * The output of {@link GetTypeCommand}.
 */
export interface GetTypeCommandOutput extends GetTypeResponse, __MetadataBearer {}

/**
 * The `GetType` operation returns information about the type, for example the field definitions, the timestamp when the type was last modified, the level of nesting, the status, and details about if the type is used in other types and tables.
 *
 * To read keyspace metadata using `GetType`, the IAM principal needs `Select` action permissions for the system keyspace. To configure the required permissions, see [Permissions to view a UDT](https://docs.aws.amazon.com/keyspaces/latest/devguide/configure-udt-permissions.html#udt-permissions-view) in the *Amazon Keyspaces Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, GetTypeCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, GetTypeCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * // import type { KeyspacesClientConfig } from "@aws-sdk/client-keyspaces";
 * const config = {}; // type is KeyspacesClientConfig
 * const client = new KeyspacesClient(config);
 * const input = { // GetTypeRequest
 *   keyspaceName: "STRING_VALUE", // required
 *   typeName: "STRING_VALUE", // required
 * };
 * const command = new GetTypeCommand(input);
 * const response = await client.send(command);
 * // { // GetTypeResponse
 * //   keyspaceName: "STRING_VALUE", // required
 * //   typeName: "STRING_VALUE", // required
 * //   fieldDefinitions: [ // FieldList
 * //     { // FieldDefinition
 * //       name: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   lastModifiedTimestamp: new Date("TIMESTAMP"),
 * //   status: "STRING_VALUE",
 * //   directReferringTables: [ // TableNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   directParentTypes: [ // TypeNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   maxNestingDepth: Number("int"),
 * //   keyspaceArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetTypeCommandInput - {@link GetTypeCommandInput}
 * @returns {@link GetTypeCommandOutput}
 * @see {@link GetTypeCommandInput} for command's `input` shape.
 * @see {@link GetTypeCommandOutput} for command's `response` shape.
 * @see {@link KeyspacesClientResolvedConfig | config} for KeyspacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access permissions to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Amazon Keyspaces was unable to fully process this request because of an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a keyspace, table, or type that doesn't exist. The resource might not be specified correctly, or its status might not be `ACTIVE`.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The operation exceeded the service quota for this resource. For more information on service quotas, see [Quotas](https://docs.aws.amazon.com/keyspaces/latest/devguide/quotas.html) in the *Amazon Keyspaces Developer Guide*.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The operation failed due to an invalid or malformed request.
 *
 * @throws {@link KeyspacesServiceException}
 *
 * Base exception class for all service exceptions from Keyspaces service.
 *
 * @public
 */
export class GetTypeCommand extends command<GetTypeCommandInput, GetTypeCommandOutput>(
  _ep0,
  _mw0,
  "GetType",
  GetType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTypeRequest;
      output: GetTypeResponse;
    };
    sdk: {
      input: GetTypeCommandInput;
      output: GetTypeCommandOutput;
    };
  };
}
