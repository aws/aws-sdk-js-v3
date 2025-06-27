// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetLayoutRequest, GetLayoutResponse } from "../models/models_0";
import { de_GetLayoutCommand, se_GetLayoutCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLayoutCommand}.
 */
export interface GetLayoutCommandInput extends GetLayoutRequest {}
/**
 * @public
 *
 * The output of {@link GetLayoutCommand}.
 */
export interface GetLayoutCommandOutput extends GetLayoutResponse, __MetadataBearer {}

/**
 * <p>Returns the details for the requested layout.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, GetLayoutCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, GetLayoutCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const input = { // GetLayoutRequest
 *   domainId: "STRING_VALUE", // required
 *   layoutId: "STRING_VALUE", // required
 * };
 * const command = new GetLayoutCommand(input);
 * const response = await client.send(command);
 * // { // GetLayoutResponse
 * //   layoutId: "STRING_VALUE", // required
 * //   layoutArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   content: { // LayoutContent Union: only one key present
 * //     basic: { // BasicLayout
 * //       topPanel: { // LayoutSections
 * //         sections: [ // SectionsList
 * //           { // Section Union: only one key present
 * //             fieldGroup: { // FieldGroup
 * //               name: "STRING_VALUE",
 * //               fields: [ // FieldList // required
 * //                 { // FieldItem
 * //                   id: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       moreInfo: {
 * //         sections: [
 * //           {//  Union: only one key present
 * //             fieldGroup: {
 * //               name: "STRING_VALUE",
 * //               fields: [ // required
 * //                 {
 * //                   id: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   deleted: true || false,
 * //   createdTime: new Date("TIMESTAMP"),
 * //   lastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetLayoutCommandInput - {@link GetLayoutCommandInput}
 * @returns {@link GetLayoutCommandOutput}
 * @see {@link GetLayoutCommandInput} for command's `input` shape.
 * @see {@link GetLayoutCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 *
 * @public
 */
export class GetLayoutCommand extends $Command
  .classBuilder<
    GetLayoutCommandInput,
    GetLayoutCommandOutput,
    ConnectCasesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCasesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectCases", "GetLayout", {})
  .n("ConnectCasesClient", "GetLayoutCommand")
  .f(void 0, void 0)
  .ser(se_GetLayoutCommand)
  .de(de_GetLayoutCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLayoutRequest;
      output: GetLayoutResponse;
    };
    sdk: {
      input: GetLayoutCommandInput;
      output: GetLayoutCommandOutput;
    };
  };
}
