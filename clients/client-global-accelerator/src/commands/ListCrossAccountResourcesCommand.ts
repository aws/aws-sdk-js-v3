// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCrossAccountResourcesRequest, ListCrossAccountResourcesResponse } from "../models/models_0";
import { ListCrossAccountResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCrossAccountResourcesCommand}.
 */
export interface ListCrossAccountResourcesCommandInput extends ListCrossAccountResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListCrossAccountResourcesCommand}.
 */
export interface ListCrossAccountResourcesCommandOutput extends ListCrossAccountResourcesResponse, __MetadataBearer {}

/**
 * List the cross-account resources available to work with.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCrossAccountResourcesCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCrossAccountResourcesCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // ListCrossAccountResourcesRequest
 *   AcceleratorArn: "STRING_VALUE",
 *   ResourceOwnerAwsAccountId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCrossAccountResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListCrossAccountResourcesResponse
 * //   CrossAccountResources: [ // CrossAccountResources
 * //     { // CrossAccountResource
 * //       EndpointId: "STRING_VALUE",
 * //       Cidr: "STRING_VALUE",
 * //       AttachmentArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCrossAccountResourcesCommandInput - {@link ListCrossAccountResourcesCommandInput}
 * @returns {@link ListCrossAccountResourcesCommandOutput}
 * @see {@link ListCrossAccountResourcesCommandInput} for command's `input` shape.
 * @see {@link ListCrossAccountResourcesCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AcceleratorNotFoundException} (client fault)
 *
 * The accelerator that you specified doesn't exist.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access permission.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * There was an internal error for Global Accelerator.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * An argument that you specified is invalid.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * There isn't another item to return.
 *
 * @throws {@link GlobalAcceleratorServiceException}
 *
 * Base exception class for all service exceptions from GlobalAccelerator service.
 *
 * @public
 */
export class ListCrossAccountResourcesCommand extends command<ListCrossAccountResourcesCommandInput, ListCrossAccountResourcesCommandOutput>(
  _ep0,
  _mw0,
  "ListCrossAccountResources",
  ListCrossAccountResources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCrossAccountResourcesRequest;
      output: ListCrossAccountResourcesResponse;
    };
    sdk: {
      input: ListCrossAccountResourcesCommandInput;
      output: ListCrossAccountResourcesCommandOutput;
    };
  };
}
