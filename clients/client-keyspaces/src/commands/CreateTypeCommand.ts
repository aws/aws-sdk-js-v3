// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KeyspacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesClient";
import { CreateTypeRequest, CreateTypeResponse } from "../models/models_0";
import { CreateType } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> The <code>CreateType</code> operation creates a new user-defined type in the specified keyspace. </p> <p>To configure the required permissions, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/configure-udt-permissions.html#udt-permissions-create">Permissions to create a UDT</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/udts.html">User-defined types (UDTs)</a> in the <i>Amazon Keyspaces Developer Guide</i>. </p>
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
 *  <p>You don't have sufficient access permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Amazon Keyspaces couldn't complete the requested action. This error may occur if you try to perform an action and the same or a different action is already in progress, or if you try to create a resource that already exists. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Keyspaces was unable to fully process this request because of an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a keyspace, table, or type that doesn't exist. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The operation exceeded the service quota for this resource. For more information on service quotas, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/quotas.html">Quotas</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation failed due to an invalid or malformed request.</p>
 *
 * @throws {@link KeyspacesServiceException}
 * <p>Base exception class for all service exceptions from Keyspaces service.</p>
 *
 *
 * @public
 */
export class CreateTypeCommand extends $Command
  .classBuilder<
    CreateTypeCommandInput,
    CreateTypeCommandOutput,
    KeyspacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KeyspacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KeyspacesService", "CreateType", {})
  .n("KeyspacesClient", "CreateTypeCommand")
  .sc(CreateType)
  .build() {
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
