// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteKeyspaceRequest, DeleteKeyspaceResponse } from "../models/models_0";
import { DeleteKeyspace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteKeyspaceCommand}.
 */
export interface DeleteKeyspaceCommandInput extends DeleteKeyspaceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteKeyspaceCommand}.
 */
export interface DeleteKeyspaceCommandOutput extends DeleteKeyspaceResponse, __MetadataBearer {}

/**
 * The `DeleteKeyspace` operation deletes a keyspace and all of its tables.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, DeleteKeyspaceCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, DeleteKeyspaceCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * // import type { KeyspacesClientConfig } from "@aws-sdk/client-keyspaces";
 * const config = {}; // type is KeyspacesClientConfig
 * const client = new KeyspacesClient(config);
 * const input = { // DeleteKeyspaceRequest
 *   keyspaceName: "STRING_VALUE", // required
 * };
 * const command = new DeleteKeyspaceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteKeyspaceCommandInput - {@link DeleteKeyspaceCommandInput}
 * @returns {@link DeleteKeyspaceCommandOutput}
 * @see {@link DeleteKeyspaceCommandInput} for command's `input` shape.
 * @see {@link DeleteKeyspaceCommandOutput} for command's `response` shape.
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
export class DeleteKeyspaceCommand extends command<DeleteKeyspaceCommandInput, DeleteKeyspaceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteKeyspace",
  DeleteKeyspace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteKeyspaceRequest;
      output: {};
    };
    sdk: {
      input: DeleteKeyspaceCommandInput;
      output: DeleteKeyspaceCommandOutput;
    };
  };
}
