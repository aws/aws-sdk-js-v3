// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KeyspacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesClient";
import { ListKeyspacesRequest, ListKeyspacesResponse } from "../models/models_0";
import { ListKeyspaces } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKeyspacesCommand}.
 */
export interface ListKeyspacesCommandInput extends ListKeyspacesRequest {}
/**
 * @public
 *
 * The output of {@link ListKeyspacesCommand}.
 */
export interface ListKeyspacesCommandOutput extends ListKeyspacesResponse, __MetadataBearer {}

/**
 * <p>The <code>ListKeyspaces</code> operation returns a list of keyspaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, ListKeyspacesCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, ListKeyspacesCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * // import type { KeyspacesClientConfig } from "@aws-sdk/client-keyspaces";
 * const config = {}; // type is KeyspacesClientConfig
 * const client = new KeyspacesClient(config);
 * const input = { // ListKeyspacesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListKeyspacesCommand(input);
 * const response = await client.send(command);
 * // { // ListKeyspacesResponse
 * //   nextToken: "STRING_VALUE",
 * //   keyspaces: [ // KeyspaceSummaryList // required
 * //     { // KeyspaceSummary
 * //       keyspaceName: "STRING_VALUE", // required
 * //       resourceArn: "STRING_VALUE", // required
 * //       replicationStrategy: "STRING_VALUE", // required
 * //       replicationRegions: [ // RegionList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListKeyspacesCommandInput - {@link ListKeyspacesCommandInput}
 * @returns {@link ListKeyspacesCommandOutput}
 * @see {@link ListKeyspacesCommandInput} for command's `input` shape.
 * @see {@link ListKeyspacesCommandOutput} for command's `response` shape.
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
export class ListKeyspacesCommand extends $Command
  .classBuilder<
    ListKeyspacesCommandInput,
    ListKeyspacesCommandOutput,
    KeyspacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KeyspacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KeyspacesService", "ListKeyspaces", {})
  .n("KeyspacesClient", "ListKeyspacesCommand")
  .sc(ListKeyspaces)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKeyspacesRequest;
      output: ListKeyspacesResponse;
    };
    sdk: {
      input: ListKeyspacesCommandInput;
      output: ListKeyspacesCommandOutput;
    };
  };
}
