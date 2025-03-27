// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListWebExperiencesRequest, ListWebExperiencesResponse } from "../models/models_0";
import { de_ListWebExperiencesCommand, se_ListWebExperiencesCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWebExperiencesCommand}.
 */
export interface ListWebExperiencesCommandInput extends ListWebExperiencesRequest {}
/**
 * @public
 *
 * The output of {@link ListWebExperiencesCommand}.
 */
export interface ListWebExperiencesCommandOutput extends ListWebExperiencesResponse, __MetadataBearer {}

/**
 * <p>Lists one or more Amazon Q Business Web Experiences.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ListWebExperiencesCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ListWebExperiencesCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // ListWebExperiencesRequest
 *   applicationId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListWebExperiencesCommand(input);
 * const response = await client.send(command);
 * // { // ListWebExperiencesResponse
 * //   webExperiences: [ // WebExperiences
 * //     { // WebExperience
 * //       webExperienceId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       defaultEndpoint: "STRING_VALUE",
 * //       status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED" || "PENDING_AUTH_CONFIG",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWebExperiencesCommandInput - {@link ListWebExperiencesCommandInput}
 * @returns {@link ListWebExperiencesCommandOutput}
 * @see {@link ListWebExperiencesCommandInput} for command's `input` shape.
 * @see {@link ListWebExperiencesCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListWebExperiencesCommand extends $Command
  .classBuilder<
    ListWebExperiencesCommandInput,
    ListWebExperiencesCommandOutput,
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
  .s("ExpertQ", "ListWebExperiences", {})
  .n("QBusinessClient", "ListWebExperiencesCommand")
  .f(void 0, void 0)
  .ser(se_ListWebExperiencesCommand)
  .de(de_ListWebExperiencesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWebExperiencesRequest;
      output: ListWebExperiencesResponse;
    };
    sdk: {
      input: ListWebExperiencesCommandInput;
      output: ListWebExperiencesCommandOutput;
    };
  };
}
