// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetWebExperienceRequest, GetWebExperienceResponse } from "../models/models_0";
import { de_GetWebExperienceCommand, se_GetWebExperienceCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWebExperienceCommand}.
 */
export interface GetWebExperienceCommandInput extends GetWebExperienceRequest {}
/**
 * @public
 *
 * The output of {@link GetWebExperienceCommand}.
 */
export interface GetWebExperienceCommandOutput extends GetWebExperienceResponse, __MetadataBearer {}

/**
 * <p>Gets information about an existing Amazon Q Business web experience.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, GetWebExperienceCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, GetWebExperienceCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // GetWebExperienceRequest
 *   applicationId: "STRING_VALUE", // required
 *   webExperienceId: "STRING_VALUE", // required
 * };
 * const command = new GetWebExperienceCommand(input);
 * const response = await client.send(command);
 * // { // GetWebExperienceResponse
 * //   applicationId: "STRING_VALUE",
 * //   webExperienceId: "STRING_VALUE",
 * //   webExperienceArn: "STRING_VALUE",
 * //   defaultEndpoint: "STRING_VALUE",
 * //   status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED" || "PENDING_AUTH_CONFIG",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   title: "STRING_VALUE",
 * //   subtitle: "STRING_VALUE",
 * //   welcomeMessage: "STRING_VALUE",
 * //   samplePromptsControlMode: "ENABLED" || "DISABLED",
 * //   roleArn: "STRING_VALUE",
 * //   authenticationConfiguration: { // WebExperienceAuthConfiguration Union: only one key present
 * //     samlConfiguration: { // SamlConfiguration
 * //       metadataXML: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //       userIdAttribute: "STRING_VALUE", // required
 * //       userGroupAttribute: "STRING_VALUE",
 * //     },
 * //   },
 * //   error: { // ErrorDetail
 * //     errorMessage: "STRING_VALUE",
 * //     errorCode: "InternalError" || "InvalidRequest" || "ResourceInactive" || "ResourceNotFound",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWebExperienceCommandInput - {@link GetWebExperienceCommandInput}
 * @returns {@link GetWebExperienceCommandOutput}
 * @see {@link GetWebExperienceCommandInput} for command's `input` shape.
 * @see {@link GetWebExperienceCommandOutput} for command's `response` shape.
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
 *  <p>The resource you want to use doesn’t exist. Make sure you have provided the correct
 *             resource and try again.</p>
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
export class GetWebExperienceCommand extends $Command
  .classBuilder<
    GetWebExperienceCommandInput,
    GetWebExperienceCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "GetWebExperience", {})
  .n("QBusinessClient", "GetWebExperienceCommand")
  .f(void 0, void 0)
  .ser(se_GetWebExperienceCommand)
  .de(de_GetWebExperienceCommand)
  .build() {}
