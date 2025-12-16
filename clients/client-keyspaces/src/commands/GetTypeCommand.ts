// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KeyspacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesClient";
import type { GetTypeRequest, GetTypeResponse } from "../models/models_0";
import { GetType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> The <code>GetType</code> operation returns information about the type, for example the field definitions, the timestamp when the type was last modified, the level of nesting, the status, and details about if the type is used in other types and tables. </p> <p>To read keyspace metadata using <code>GetType</code>, the IAM principal needs <code>Select</code> action permissions for the system keyspace. To configure the required permissions, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/configure-udt-permissions.html#udt-permissions-view">Permissions to view a UDT</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
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
 *  <p>You don't have sufficient access permissions to perform this action. </p>
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
export class GetTypeCommand extends $Command
  .classBuilder<
    GetTypeCommandInput,
    GetTypeCommandOutput,
    KeyspacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KeyspacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KeyspacesService", "GetType", {})
  .n("KeyspacesClient", "GetTypeCommand")
  .sc(GetType$)
  .build() {
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
