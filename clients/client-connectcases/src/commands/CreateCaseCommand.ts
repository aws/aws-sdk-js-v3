// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCaseRequest, CreateCaseResponse } from "../models/models_0";
import { CreateCase } from "../schemas/schemas_2_Case";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCaseCommand}.
 */
export interface CreateCaseCommandInput extends CreateCaseRequest {}
/**
 * @public
 *
 * The output of {@link CreateCaseCommand}.
 */
export interface CreateCaseCommandOutput extends CreateCaseResponse, __MetadataBearer {}

/**
 * <note> <p>If you provide a value for <code>PerformedBy.UserArn</code> you must also have <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUser.html">connect:DescribeUser</a> permission on the User ARN resource that you provide</p> </note> <p>Creates a case in the specified Cases domain. Case system and custom fields are taken as an array id/value pairs with a declared data types.</p> <p>The following fields are required when creating a case:</p> <ul> <li> <p> <code>customer_id</code> - You must provide the full customer profile ARN in this format: <code>arn:aws:profile:your_AWS_Region:your_AWS_account ID:domains/your_profiles_domain_name/profiles/profile_ID</code> </p> </li> <li> <p> <code>title</code> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, CreateCaseCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, CreateCaseCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // CreateCaseRequest
 *   domainId: "STRING_VALUE", // required
 *   templateId: "STRING_VALUE", // required
 *   fields: [ // FieldValueList // required
 *     { // FieldValue
 *       id: "STRING_VALUE", // required
 *       value: { // FieldValueUnion Union: only one key present
 *         stringValue: "STRING_VALUE",
 *         doubleValue: Number("double"),
 *         booleanValue: true || false,
 *         emptyValue: {},
 *         userArnValue: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 *   performedBy: { // UserUnion Union: only one key present
 *     userArn: "STRING_VALUE",
 *     customEntity: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCaseCommand(input);
 * const response = await client.send(command);
 * // { // CreateCaseResponse
 * //   caseId: "STRING_VALUE", // required
 * //   caseArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateCaseCommandInput - {@link CreateCaseCommandInput}
 * @returns {@link CreateCaseCommandOutput}
 * @see {@link CreateCaseCommandInput} for command's `input` shape.
 * @see {@link CreateCaseCommandOutput} for command's `response` shape.
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
export class CreateCaseCommand extends $Command
  .classBuilder<
    CreateCaseCommandInput,
    CreateCaseCommandOutput,
    ConnectCasesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCasesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCases", "CreateCase", {})
  .n("ConnectCasesClient", "CreateCaseCommand")
  .sc(CreateCase)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCaseRequest;
      output: CreateCaseResponse;
    };
    sdk: {
      input: CreateCaseCommandInput;
      output: CreateCaseCommandOutput;
    };
  };
}
