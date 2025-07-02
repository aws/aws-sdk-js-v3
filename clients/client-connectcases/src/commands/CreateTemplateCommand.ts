// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTemplateRequest, CreateTemplateResponse } from "../models/models_0";
import { de_CreateTemplateCommand, se_CreateTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTemplateCommand}.
 */
export interface CreateTemplateCommandInput extends CreateTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateTemplateCommand}.
 */
export interface CreateTemplateCommandOutput extends CreateTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates a template in the Cases domain. This template is used to define the case object model (that is, to define what data can be captured on cases) in a Cases domain. A template must have a unique name within a domain, and it must reference existing field IDs and layout IDs. Additionally, multiple fields with same IDs are not allowed within the same Template. A template can be either Active or Inactive, as indicated by its status. Inactive templates cannot be used to create cases.</p> <p> Other template APIs are: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_DeleteTemplate.html">DeleteTemplate</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_GetTemplate.html">GetTemplate</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_ListTemplates.html">ListTemplates</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_UpdateTemplate.html">UpdateTemplate</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, CreateTemplateCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, CreateTemplateCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const input = { // CreateTemplateRequest
 *   domainId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   layoutConfiguration: { // LayoutConfiguration
 *     defaultLayout: "STRING_VALUE",
 *   },
 *   requiredFields: [ // RequiredFieldList
 *     { // RequiredField
 *       fieldId: "STRING_VALUE", // required
 *     },
 *   ],
 *   status: "STRING_VALUE",
 *   rules: [ // TemplateCaseRuleList
 *     { // TemplateRule
 *       caseRuleId: "STRING_VALUE", // required
 *       fieldId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateTemplateResponse
 * //   templateId: "STRING_VALUE", // required
 * //   templateArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTemplateCommandInput - {@link CreateTemplateCommandInput}
 * @returns {@link CreateTemplateCommandOutput}
 * @see {@link CreateTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateTemplateCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded. For a list of service quotas, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
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
export class CreateTemplateCommand extends $Command
  .classBuilder<
    CreateTemplateCommandInput,
    CreateTemplateCommandOutput,
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
  .s("AmazonConnectCases", "CreateTemplate", {})
  .n("ConnectCasesClient", "CreateTemplateCommand")
  .f(void 0, void 0)
  .ser(se_CreateTemplateCommand)
  .de(de_CreateTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTemplateRequest;
      output: CreateTemplateResponse;
    };
    sdk: {
      input: CreateTemplateCommandInput;
      output: CreateTemplateCommandOutput;
    };
  };
}
