// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetParameterHistoryRequest,
  GetParameterHistoryResult,
  GetParameterHistoryResultFilterSensitiveLog,
} from "../models/models_1";
import { de_GetParameterHistoryCommand, se_GetParameterHistoryCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetParameterHistoryCommand}.
 */
export interface GetParameterHistoryCommandInput extends GetParameterHistoryRequest {}
/**
 * @public
 *
 * The output of {@link GetParameterHistoryCommand}.
 */
export interface GetParameterHistoryCommandOutput extends GetParameterHistoryResult, __MetadataBearer {}

/**
 * <p>Retrieves the history of all changes to a parameter.</p>
 *          <important>
 *             <p>If you change the KMS key alias for the KMS key used to encrypt a parameter,
 *     then you must also update the key alias the parameter uses to reference KMS. Otherwise,
 *      <code>GetParameterHistory</code> retrieves whatever the original key alias was
 *     referencing.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetParameterHistoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetParameterHistoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetParameterHistoryRequest
 *   Name: "STRING_VALUE", // required
 *   WithDecryption: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetParameterHistoryCommand(input);
 * const response = await client.send(command);
 * // { // GetParameterHistoryResult
 * //   Parameters: [ // ParameterHistoryList
 * //     { // ParameterHistory
 * //       Name: "STRING_VALUE",
 * //       Type: "String" || "StringList" || "SecureString",
 * //       KeyId: "STRING_VALUE",
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       LastModifiedUser: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //       AllowedPattern: "STRING_VALUE",
 * //       Version: Number("long"),
 * //       Labels: [ // ParameterLabelList
 * //         "STRING_VALUE",
 * //       ],
 * //       Tier: "Standard" || "Advanced" || "Intelligent-Tiering",
 * //       Policies: [ // ParameterPolicyList
 * //         { // ParameterInlinePolicy
 * //           PolicyText: "STRING_VALUE",
 * //           PolicyType: "STRING_VALUE",
 * //           PolicyStatus: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DataType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetParameterHistoryCommandInput - {@link GetParameterHistoryCommandInput}
 * @returns {@link GetParameterHistoryCommandOutput}
 * @see {@link GetParameterHistoryCommandInput} for command's `input` shape.
 * @see {@link GetParameterHistoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidKeyId} (client fault)
 *  <p>The query key ID isn't valid.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link ParameterNotFound} (client fault)
 *  <p>The parameter couldn't be found. Verify the name and try again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class GetParameterHistoryCommand extends $Command
  .classBuilder<
    GetParameterHistoryCommandInput,
    GetParameterHistoryCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "GetParameterHistory", {})
  .n("SSMClient", "GetParameterHistoryCommand")
  .f(void 0, GetParameterHistoryResultFilterSensitiveLog)
  .ser(se_GetParameterHistoryCommand)
  .de(de_GetParameterHistoryCommand)
  .build() {}
