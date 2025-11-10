// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListGroupResourcesRequest, ListGroupResourcesResponse } from "../models/models_0";
import { ListGroupResources } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>This operation returns a list of the ARNs of the canaries that are associated with the specified group.</p>
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
 *  <p>A conflicting operation is already in progress.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One of the specified resources was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 *
 * @public
 */
export class ListGroupResourcesCommand extends $Command
  .classBuilder<
    ListGroupResourcesCommandInput,
    ListGroupResourcesCommandOutput,
    SyntheticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SyntheticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Synthetics", "ListGroupResources", {})
  .n("SyntheticsClient", "ListGroupResourcesCommand")
  .sc(ListGroupResources)
  .build() {
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
