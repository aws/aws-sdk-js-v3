// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRetrieversRequest, ListRetrieversResponse } from "../models/models_0";
import { de_ListRetrieversCommand, se_ListRetrieversCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRetrieversCommand}.
 */
export interface ListRetrieversCommandInput extends ListRetrieversRequest {}
/**
 * @public
 *
 * The output of {@link ListRetrieversCommand}.
 */
export interface ListRetrieversCommandOutput extends ListRetrieversResponse, __MetadataBearer {}

/**
 * <p>Lists the retriever used by an Amazon Q Business application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ListRetrieversCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ListRetrieversCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new QBusinessClient(config);
 * const input = { // ListRetrieversRequest
 *   applicationId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRetrieversCommand(input);
 * const response = await client.send(command);
 * // { // ListRetrieversResponse
 * //   retrievers: [ // Retrievers
 * //     { // Retriever
 * //       applicationId: "STRING_VALUE",
 * //       retrieverId: "STRING_VALUE",
 * //       type: "NATIVE_INDEX" || "KENDRA_INDEX",
 * //       status: "CREATING" || "ACTIVE" || "FAILED",
 * //       displayName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRetrieversCommandInput - {@link ListRetrieversCommandInput}
 * @returns {@link ListRetrieversCommandOutput}
 * @see {@link ListRetrieversCommandInput} for command's `input` shape.
 * @see {@link ListRetrieversCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have
 *             provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try
 *             again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the
 *             correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 * @public
 */
export class ListRetrieversCommand extends $Command
  .classBuilder<
    ListRetrieversCommandInput,
    ListRetrieversCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "ListRetrievers", {})
  .n("QBusinessClient", "ListRetrieversCommand")
  .f(void 0, void 0)
  .ser(se_ListRetrieversCommand)
  .de(de_ListRetrieversCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRetrieversRequest;
      output: ListRetrieversResponse;
    };
    sdk: {
      input: ListRetrieversCommandInput;
      output: ListRetrieversCommandOutput;
    };
  };
}
