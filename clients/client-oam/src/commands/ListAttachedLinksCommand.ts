// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAttachedLinksInput, ListAttachedLinksOutput } from "../models/models_0";
import { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import { ListAttachedLinks } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAttachedLinksCommand}.
 */
export interface ListAttachedLinksCommandInput extends ListAttachedLinksInput {}
/**
 * @public
 *
 * The output of {@link ListAttachedLinksCommand}.
 */
export interface ListAttachedLinksCommandOutput extends ListAttachedLinksOutput, __MetadataBearer {}

/**
 * <p>Returns a list of source account links that are linked to this monitoring account sink.</p> <p>To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a>.</p> <p>To find a list of links for one source account, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListLinks.html">ListLinks</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, ListAttachedLinksCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, ListAttachedLinksCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * // import type { OAMClientConfig } from "@aws-sdk/client-oam";
 * const config = {}; // type is OAMClientConfig
 * const client = new OAMClient(config);
 * const input = { // ListAttachedLinksInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SinkIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ListAttachedLinksCommand(input);
 * const response = await client.send(command);
 * // { // ListAttachedLinksOutput
 * //   Items: [ // ListAttachedLinksItems // required
 * //     { // ListAttachedLinksItem
 * //       Label: "STRING_VALUE",
 * //       LinkArn: "STRING_VALUE",
 * //       ResourceTypes: [ // ResourceTypesOutput
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAttachedLinksCommandInput - {@link ListAttachedLinksCommandInput}
 * @returns {@link ListAttachedLinksCommandOutput}
 * @see {@link ListAttachedLinksCommandInput} for command's `input` shape.
 * @see {@link ListAttachedLinksCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing from the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link OAMServiceException}
 * <p>Base exception class for all service exceptions from OAM service.</p>
 *
 *
 * @public
 */
export class ListAttachedLinksCommand extends $Command
  .classBuilder<
    ListAttachedLinksCommandInput,
    ListAttachedLinksCommandOutput,
    OAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("oamservice", "ListAttachedLinks", {})
  .n("OAMClient", "ListAttachedLinksCommand")
  .sc(ListAttachedLinks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAttachedLinksInput;
      output: ListAttachedLinksOutput;
    };
    sdk: {
      input: ListAttachedLinksCommandInput;
      output: ListAttachedLinksCommandOutput;
    };
  };
}
