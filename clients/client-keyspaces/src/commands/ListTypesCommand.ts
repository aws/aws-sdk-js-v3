// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KeyspacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesClient";
import type { ListTypesRequest, ListTypesResponse } from "../models/models_0";
import { ListTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> The <code>ListTypes</code> operation returns a list of types for a specified keyspace. </p> <p>To read keyspace metadata using <code>ListTypes</code>, the IAM principal needs <code>Select</code> action permissions for the system keyspace. To configure the required permissions, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/configure-udt-permissions.html#udt-permissions-view">Permissions to view a UDT</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
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
export class ListTypesCommand extends $Command
  .classBuilder<
    ListTypesCommandInput,
    ListTypesCommandOutput,
    KeyspacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KeyspacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KeyspacesService", "ListTypes", {})
  .n("KeyspacesClient", "ListTypesCommand")
  .sc(ListTypes$)
  .build() {
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
