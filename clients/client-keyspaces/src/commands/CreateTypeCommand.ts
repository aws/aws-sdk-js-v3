// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTypeRequest, CreateTypeResponse } from "../models/models_0";
import { CreateType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTypeCommand}.
 */
export interface CreateTypeCommandInput extends CreateTypeRequest {}
/**
 * @public
 *
 * The output of {@link CreateTypeCommand}.
 */
export interface CreateTypeCommandOutput extends CreateTypeResponse, __MetadataBearer {}

/**
 * The `CreateType` operation creates a new user-defined type in the specified keyspace.
 *
 * To configure the required permissions, see [Permissions to create a UDT](https://docs.aws.amazon.com/keyspaces/latest/devguide/configure-udt-permissions.html#udt-permissions-create) in the *Amazon Keyspaces Developer Guide*.
 *
 * For more information, see [User-defined types (UDTs)](https://docs.aws.amazon.com/keyspaces/latest/devguide/udts.html) in the *Amazon Keyspaces Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, CreateTypeCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, CreateTypeCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * // import type { KeyspacesClientConfig } from "@aws-sdk/client-keyspaces";
 * const config = {}; // type is KeyspacesClientConfig
 * const client = new KeyspacesClient(config);
 * const input = { // CreateTypeRequest
 *   keyspaceName: "STRING_VALUE", // required
 *   typeName: "STRING_VALUE", // required
 *   fieldDefinitions: [ // FieldList // required
 *     { // FieldDefinition
 *       name: "STRING_VALUE", // required
 *       type: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateTypeCommand(input);
 * const response = await client.send(command);
 * // { // CreateTypeResponse
 * //   keyspaceArn: "STRING_VALUE", // required
 * //   typeName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTypeCommandInput - {@link CreateTypeCommandInput}
 * @returns {@link CreateTypeCommandOutput}
 * @see {@link CreateTypeCommandInput} for command's `input` shape.
 * @see {@link CreateTypeCommandOutput} for command's `response` shape.
 * @see {@link KeyspacesClientResolvedConfig | config} for KeyspacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Amazon Keyspaces couldn't complete the requested action. This error may occur if you try to perform an action and the same or a different action is already in progress, or if you try to create a resource that already exists.
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
export class CreateTypeCommand extends command<CreateTypeCommandInput, CreateTypeCommandOutput>(
  _ep0,
  _mw0,
  "CreateType",
  CreateType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTypeRequest;
      output: CreateTypeResponse;
    };
    sdk: {
      input: CreateTypeCommandInput;
      output: CreateTypeCommandOutput;
    };
  };
}
