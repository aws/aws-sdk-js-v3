// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAttachedLinksInput, ListAttachedLinksOutput } from "../models/models_0";
import { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import { de_ListAttachedLinksCommand, se_ListAttachedLinksCommand } from "../protocols/Aws_restJson1";

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
 * <p>Returns a list of source account links that are linked to this monitoring account sink.</p>
 *          <p>To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a>.</p>
 *          <p>To find a list of links for one source account, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListLinks.html">ListLinks</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, ListAttachedLinksCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, ListAttachedLinksCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("oamservice", "ListAttachedLinks", {})
  .n("OAMClient", "ListAttachedLinksCommand")
  .f(void 0, void 0)
  .ser(se_ListAttachedLinksCommand)
  .de(de_ListAttachedLinksCommand)
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
