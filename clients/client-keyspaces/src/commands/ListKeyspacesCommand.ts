// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListKeyspacesRequest, ListKeyspacesResponse } from "../models/models_0";
import { ListKeyspaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * The `ListKeyspaces` operation returns a list of keyspaces.
 *
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
export class ListKeyspacesCommand extends command<ListKeyspacesCommandInput, ListKeyspacesCommandOutput>(
  _ep0,
  _mw0,
  "ListKeyspaces",
  ListKeyspaces$
) {
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
