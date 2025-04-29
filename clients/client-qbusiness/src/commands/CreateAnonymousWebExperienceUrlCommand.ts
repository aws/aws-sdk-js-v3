// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAnonymousWebExperienceUrlRequest, CreateAnonymousWebExperienceUrlResponse } from "../models/models_0";
import {
  de_CreateAnonymousWebExperienceUrlCommand,
  se_CreateAnonymousWebExperienceUrlCommand,
} from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAnonymousWebExperienceUrlCommand}.
 */
export interface CreateAnonymousWebExperienceUrlCommandInput extends CreateAnonymousWebExperienceUrlRequest {}
/**
 * @public
 *
 * The output of {@link CreateAnonymousWebExperienceUrlCommand}.
 */
export interface CreateAnonymousWebExperienceUrlCommandOutput
  extends CreateAnonymousWebExperienceUrlResponse,
    __MetadataBearer {}

/**
 * <p>Creates a unique URL for anonymous Amazon Q Business web experience. This URL can only be used once and must be used within 5 minutes after it's generated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, CreateAnonymousWebExperienceUrlCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, CreateAnonymousWebExperienceUrlCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // CreateAnonymousWebExperienceUrlRequest
 *   applicationId: "STRING_VALUE", // required
 *   webExperienceId: "STRING_VALUE", // required
 *   sessionDurationInMinutes: Number("int"),
 * };
 * const command = new CreateAnonymousWebExperienceUrlCommand(input);
 * const response = await client.send(command);
 * // { // CreateAnonymousWebExperienceUrlResponse
 * //   anonymousUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAnonymousWebExperienceUrlCommandInput - {@link CreateAnonymousWebExperienceUrlCommandInput}
 * @returns {@link CreateAnonymousWebExperienceUrlCommandOutput}
 * @see {@link CreateAnonymousWebExperienceUrlCommandInput} for command's `input` shape.
 * @see {@link CreateAnonymousWebExperienceUrlCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the set limits for your Amazon Q Business service. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class CreateAnonymousWebExperienceUrlCommand extends $Command
  .classBuilder<
    CreateAnonymousWebExperienceUrlCommandInput,
    CreateAnonymousWebExperienceUrlCommandOutput,
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
  .s("ExpertQ", "CreateAnonymousWebExperienceUrl", {})
  .n("QBusinessClient", "CreateAnonymousWebExperienceUrlCommand")
  .f(void 0, void 0)
  .ser(se_CreateAnonymousWebExperienceUrlCommand)
  .de(de_CreateAnonymousWebExperienceUrlCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAnonymousWebExperienceUrlRequest;
      output: CreateAnonymousWebExperienceUrlResponse;
    };
    sdk: {
      input: CreateAnonymousWebExperienceUrlCommandInput;
      output: CreateAnonymousWebExperienceUrlCommandOutput;
    };
  };
}
