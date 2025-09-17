// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCaseRequest, GetCaseResponse } from "../models/models_0";
import { de_GetCaseCommand, se_GetCaseCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCaseCommand}.
 */
export interface GetCaseCommandInput extends GetCaseRequest {}
/**
 * @public
 *
 * The output of {@link GetCaseCommand}.
 */
export interface GetCaseCommandOutput extends GetCaseResponse, __MetadataBearer {}

/**
 * <p>Returns information about a specific case if it exists. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, GetCaseCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, GetCaseCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // GetCaseRequest
 *   caseId: "STRING_VALUE", // required
 *   domainId: "STRING_VALUE", // required
 *   fields: [ // FieldIdentifierList // required
 *     { // FieldIdentifier
 *       id: "STRING_VALUE", // required
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetCaseCommand(input);
 * const response = await client.send(command);
 * // { // GetCaseResponse
 * //   fields: [ // FieldValueList // required
 * //     { // FieldValue
 * //       id: "STRING_VALUE", // required
 * //       value: { // FieldValueUnion Union: only one key present
 * //         stringValue: "STRING_VALUE",
 * //         doubleValue: Number("double"),
 * //         booleanValue: true || false,
 * //         emptyValue: {},
 * //         userArnValue: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   templateId: "STRING_VALUE", // required
 * //   nextToken: "STRING_VALUE",
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCaseCommandInput - {@link GetCaseCommandInput}
 * @returns {@link GetCaseCommandOutput}
 * @see {@link GetCaseCommandInput} for command's `input` shape.
 * @see {@link GetCaseCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class GetCaseCommand extends $Command
  .classBuilder<
    GetCaseCommandInput,
    GetCaseCommandOutput,
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
  .s("AmazonConnectCases", "GetCase", {})
  .n("ConnectCasesClient", "GetCaseCommand")
  .f(void 0, void 0)
  .ser(se_GetCaseCommand)
  .de(de_GetCaseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCaseRequest;
      output: GetCaseResponse;
    };
    sdk: {
      input: GetCaseCommandInput;
      output: GetCaseCommandOutput;
    };
  };
}
