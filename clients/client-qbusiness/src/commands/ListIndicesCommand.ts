// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListIndicesRequest, ListIndicesResponse } from "../models/models_0";
import { de_ListIndicesCommand, se_ListIndicesCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIndicesCommand}.
 */
export interface ListIndicesCommandInput extends ListIndicesRequest {}
/**
 * @public
 *
 * The output of {@link ListIndicesCommand}.
 */
export interface ListIndicesCommandOutput extends ListIndicesResponse, __MetadataBearer {}

/**
 * <p>Lists the Amazon Q Business indices you have created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ListIndicesCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ListIndicesCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // ListIndicesRequest
 *   applicationId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListIndicesCommand(input);
 * const response = await client.send(command);
 * // { // ListIndicesResponse
 * //   nextToken: "STRING_VALUE",
 * //   indices: [ // Indices
 * //     { // Index
 * //       displayName: "STRING_VALUE",
 * //       indexId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED" || "UPDATING",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListIndicesCommandInput - {@link ListIndicesCommandInput}
 * @returns {@link ListIndicesCommandOutput}
 * @see {@link ListIndicesCommandInput} for command's `input` shape.
 * @see {@link ListIndicesCommandOutput} for command's `response` shape.
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
export class ListIndicesCommand extends $Command
  .classBuilder<
    ListIndicesCommandInput,
    ListIndicesCommandOutput,
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
  .s("ExpertQ", "ListIndices", {})
  .n("QBusinessClient", "ListIndicesCommand")
  .f(void 0, void 0)
  .ser(se_ListIndicesCommand)
  .de(de_ListIndicesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIndicesRequest;
      output: ListIndicesResponse;
    };
    sdk: {
      input: ListIndicesCommandInput;
      output: ListIndicesCommandOutput;
    };
  };
}
