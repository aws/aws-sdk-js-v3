// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { ListCrossAccountResourcesRequest, ListCrossAccountResourcesResponse } from "../models/models_0";
import { ListCrossAccountResources } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>List the cross-account resources available to work with.</p>
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
 *  <p>The accelerator that you specified doesn't exist.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>There isn't another item to return.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 *
 * @public
 */
export class ListCrossAccountResourcesCommand extends $Command
  .classBuilder<
    ListCrossAccountResourcesCommandInput,
    ListCrossAccountResourcesCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GlobalAccelerator_V20180706", "ListCrossAccountResources", {})
  .n("GlobalAcceleratorClient", "ListCrossAccountResourcesCommand")
  .sc(ListCrossAccountResources)
  .build() {
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
