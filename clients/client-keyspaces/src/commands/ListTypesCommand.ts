// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTypesRequest, ListTypesResponse } from "../models/models_0";
import { ListTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTypesCommand}.
 */
export interface ListTypesCommandInput extends ListTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListTypesCommand}.
 */
export interface ListTypesCommandOutput extends ListTypesResponse, __MetadataBearer {}

/**
 * The `ListTypes` operation returns a list of types for a specified keyspace.
 *
 * To read keyspace metadata using `ListTypes`, the IAM principal needs `Select` action permissions for the system keyspace. To configure the required permissions, see [Permissions to view a UDT](https://docs.aws.amazon.com/keyspaces/latest/devguide/configure-udt-permissions.html#udt-permissions-view) in the *Amazon Keyspaces Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, ListTypesCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, ListTypesCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * // import type { KeyspacesClientConfig } from "@aws-sdk/client-keyspaces";
 * const config = {}; // type is KeyspacesClientConfig
 * const client = new KeyspacesClient(config);
 * const input = { // ListTypesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   keyspaceName: "STRING_VALUE", // required
 * };
 * const command = new ListTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListTypesResponse
 * //   nextToken: "STRING_VALUE",
 * //   types: [ // TypeNameList // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTypesCommandInput - {@link ListTypesCommandInput}
 * @returns {@link ListTypesCommandOutput}
 * @see {@link ListTypesCommandInput} for command's `input` shape.
 * @see {@link ListTypesCommandOutput} for command's `response` shape.
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
export class ListTypesCommand extends command<ListTypesCommandInput, ListTypesCommandOutput>(
  _ep0,
  _mw0,
  "ListTypes",
  ListTypes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTypesRequest;
      output: ListTypesResponse;
    };
    sdk: {
      input: ListTypesCommandInput;
      output: ListTypesCommandOutput;
    };
  };
}
