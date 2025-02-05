// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateCaseRequest, UpdateCaseResponse } from "../models/models_0";
import { de_UpdateCaseCommand, se_UpdateCaseCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCaseCommand}.
 */
export interface UpdateCaseCommandInput extends UpdateCaseRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCaseCommand}.
 */
export interface UpdateCaseCommandOutput extends UpdateCaseResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>If you provide a value for <code>PerformedBy.UserArn</code> you must also have <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUser.html">connect:DescribeUser</a> permission on the User ARN resource that you provide</p>
 *          </note>
 *
 *          <p>Updates the values of fields on a case. Fields to be updated are received as an array of
 *       id/value pairs identical to the <code>CreateCase</code> input .</p>
 *          <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *       HTTP body.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, UpdateCaseCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, UpdateCaseCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectCasesClient(config);
 * const input = { // UpdateCaseRequest
 *   domainId: "STRING_VALUE", // required
 *   caseId: "STRING_VALUE", // required
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
 *   performedBy: { // UserUnion Union: only one key present
 *     userArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateCaseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCaseCommandInput - {@link UpdateCaseCommandInput}
 * @returns {@link UpdateCaseCommandOutput}
 * @see {@link UpdateCaseCommandInput} for command's `input` shape.
 * @see {@link UpdateCaseCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateCaseCommand extends $Command
  .classBuilder<
    UpdateCaseCommandInput,
    UpdateCaseCommandOutput,
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
  .s("AmazonConnectCases", "UpdateCase", {})
  .n("ConnectCasesClient", "UpdateCaseCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCaseCommand)
  .de(de_UpdateCaseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCaseRequest;
      output: {};
    };
    sdk: {
      input: UpdateCaseCommandInput;
      output: UpdateCaseCommandOutput;
    };
  };
}
