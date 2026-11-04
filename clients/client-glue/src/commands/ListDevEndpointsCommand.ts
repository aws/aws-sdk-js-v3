// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDevEndpointsRequest, ListDevEndpointsResponse } from "../models/models_2";
import { ListDevEndpoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDevEndpointsCommand}.
 */
export interface ListDevEndpointsCommandInput extends ListDevEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListDevEndpointsCommand}.
 */
export interface ListDevEndpointsCommandOutput extends ListDevEndpointsResponse, __MetadataBearer {}

/**
 * Retrieves the names of all `DevEndpoint` resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.
 *
 * This operation takes the optional `Tags` field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListDevEndpointsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListDevEndpointsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListDevEndpointsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new ListDevEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListDevEndpointsResponse
 * //   DevEndpointNames: [ // DevEndpointNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDevEndpointsCommandInput - {@link ListDevEndpointsCommandInput}
 * @returns {@link ListDevEndpointsCommandOutput}
 * @see {@link ListDevEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListDevEndpointsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class ListDevEndpointsCommand extends command<ListDevEndpointsCommandInput, ListDevEndpointsCommandOutput>(
  _ep0,
  _mw0,
  "ListDevEndpoints",
  ListDevEndpoints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDevEndpointsRequest;
      output: ListDevEndpointsResponse;
    };
    sdk: {
      input: ListDevEndpointsCommandInput;
      output: ListDevEndpointsCommandOutput;
    };
  };
}
