// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListGroupResourcesRequest, ListGroupResourcesResponse } from "../models/models_0";
import { ListGroupResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListGroupResourcesCommand}.
 */
export interface ListGroupResourcesCommandInput extends ListGroupResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListGroupResourcesCommand}.
 */
export interface ListGroupResourcesCommandOutput extends ListGroupResourcesResponse, __MetadataBearer {}

/**
 * This operation returns a list of the ARNs of the canaries that are associated with the specified group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, ListGroupResourcesCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, ListGroupResourcesCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * // import type { SyntheticsClientConfig } from "@aws-sdk/client-synthetics";
 * const config = {}; // type is SyntheticsClientConfig
 * const client = new SyntheticsClient(config);
 * const input = { // ListGroupResourcesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   GroupIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ListGroupResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListGroupResourcesResponse
 * //   Resources: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGroupResourcesCommandInput - {@link ListGroupResourcesCommandInput}
 * @returns {@link ListGroupResourcesCommandOutput}
 * @see {@link ListGroupResourcesCommandInput} for command's `input` shape.
 * @see {@link ListGroupResourcesCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A conflicting operation is already in progress.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unknown internal error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One of the specified resources was not found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A parameter could not be validated.
 *
 * @throws {@link SyntheticsServiceException}
 *
 * Base exception class for all service exceptions from Synthetics service.
 *
 * @public
 */
export class ListGroupResourcesCommand extends command<ListGroupResourcesCommandInput, ListGroupResourcesCommandOutput>(
  _ep0,
  _mw0,
  "ListGroupResources",
  ListGroupResources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGroupResourcesRequest;
      output: ListGroupResourcesResponse;
    };
    sdk: {
      input: ListGroupResourcesCommandInput;
      output: ListGroupResourcesCommandOutput;
    };
  };
}
