// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateKeyspaceRequest, CreateKeyspaceResponse } from "../models/models_0";
import { CreateKeyspace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateKeyspaceCommand}.
 */
export interface CreateKeyspaceCommandInput extends CreateKeyspaceRequest {}
/**
 * @public
 *
 * The output of {@link CreateKeyspaceCommand}.
 */
export interface CreateKeyspaceCommandOutput extends CreateKeyspaceResponse, __MetadataBearer {}

/**
 * The `CreateKeyspace` operation adds a new keyspace to your account. In an Amazon Web Services account, keyspace names must be unique within each Region.
 *
 * `CreateKeyspace` is an asynchronous operation. You can monitor the creation status of the new keyspace by using the `GetKeyspace` operation.
 *
 * For more information, see [Create a keyspace](https://docs.aws.amazon.com/keyspaces/latest/devguide/getting-started.keyspaces.html) in the *Amazon Keyspaces Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, CreateKeyspaceCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, CreateKeyspaceCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * // import type { KeyspacesClientConfig } from "@aws-sdk/client-keyspaces";
 * const config = {}; // type is KeyspacesClientConfig
 * const client = new KeyspacesClient(config);
 * const input = { // CreateKeyspaceRequest
 *   keyspaceName: "STRING_VALUE", // required
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   replicationSpecification: { // ReplicationSpecification
 *     replicationStrategy: "STRING_VALUE", // required
 *     regionList: [ // RegionList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new CreateKeyspaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateKeyspaceResponse
 * //   resourceArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateKeyspaceCommandInput - {@link CreateKeyspaceCommandInput}
 * @returns {@link CreateKeyspaceCommandOutput}
 * @see {@link CreateKeyspaceCommandInput} for command's `input` shape.
 * @see {@link CreateKeyspaceCommandOutput} for command's `response` shape.
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
export class CreateKeyspaceCommand extends command<CreateKeyspaceCommandInput, CreateKeyspaceCommandOutput>(
  _ep0,
  _mw0,
  "CreateKeyspace",
  CreateKeyspace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateKeyspaceRequest;
      output: CreateKeyspaceResponse;
    };
    sdk: {
      input: CreateKeyspaceCommandInput;
      output: CreateKeyspaceCommandOutput;
    };
  };
}
