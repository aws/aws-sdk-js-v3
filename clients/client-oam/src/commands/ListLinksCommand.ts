// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListLinksInput, ListLinksOutput } from "../models/models_0";
import { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import { ListLinks } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLinksCommand}.
 */
export interface ListLinksCommandInput extends ListLinksInput {}
/**
 * @public
 *
 * The output of {@link ListLinksCommand}.
 */
export interface ListLinksCommandOutput extends ListLinksOutput, __MetadataBearer {}

/**
 * <p>Use this operation in a source account to return a list of links to monitoring account sinks that this source account has.</p> <p>To find a list of links for one monitoring account sink, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListAttachedLinks.html">ListAttachedLinks</a> from within the monitoring account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, ListLinksCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, ListLinksCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * // import type { OAMClientConfig } from "@aws-sdk/client-oam";
 * const config = {}; // type is OAMClientConfig
 * const client = new OAMClient(config);
 * const input = { // ListLinksInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListLinksCommand(input);
 * const response = await client.send(command);
 * // { // ListLinksOutput
 * //   Items: [ // ListLinksItems // required
 * //     { // ListLinksItem
 * //       Arn: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Label: "STRING_VALUE",
 * //       ResourceTypes: [ // ResourceTypesOutput
 * //         "STRING_VALUE",
 * //       ],
 * //       SinkArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLinksCommandInput - {@link ListLinksCommandInput}
 * @returns {@link ListLinksCommandOutput}
 * @see {@link ListLinksCommandInput} for command's `input` shape.
 * @see {@link ListLinksCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
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
export class ListLinksCommand extends $Command
  .classBuilder<
    ListLinksCommandInput,
    ListLinksCommandOutput,
    OAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("oamservice", "ListLinks", {})
  .n("OAMClient", "ListLinksCommand")
  .sc(ListLinks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLinksInput;
      output: ListLinksOutput;
    };
    sdk: {
      input: ListLinksCommandInput;
      output: ListLinksCommandOutput;
    };
  };
}
