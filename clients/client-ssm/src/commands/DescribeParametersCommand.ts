// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeParametersRequest, DescribeParametersResult } from "../models/models_1";
import { DescribeParameters } from "../schemas/schemas_3_Describe";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeParametersCommand}.
 */
export interface DescribeParametersCommandInput extends DescribeParametersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeParametersCommand}.
 */
export interface DescribeParametersCommandOutput extends DescribeParametersResult, __MetadataBearer {}

/**
 * <p>Lists the parameters in your Amazon Web Services account or the parameters shared with you when you enable
 *    the <a href="https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeParameters.html#systemsmanager-DescribeParameters-request-Shared">Shared</a> option.</p>
 *          <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code>
 *    in the request, the response includes information up to the limit specified. The number of items
 *    returned, however, can be between zero and the value of <code>MaxResults</code>. If the service
 *    reaches an internal limit while processing the results, it stops the operation and returns the
 *    matching values up to that point and a <code>NextToken</code>. You can specify the
 *     <code>NextToken</code> in a subsequent call to get the next set of results.</p>
 *          <p>Parameter names can't contain spaces. The service removes any spaces specified for the
 *    beginning or end of a parameter name. If the specified name for a parameter contains spaces
 *    between characters, the request fails with a <code>ValidationException</code> error.</p>
 *          <important>
 *             <p>If you change the KMS key alias for the KMS key used to encrypt a parameter,
 *     then you must also update the key alias the parameter uses to reference KMS. Otherwise,
 *      <code>DescribeParameters</code> retrieves whatever the original key alias was
 *     referencing.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeParametersCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeParametersCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DescribeParametersRequest
 *   Filters: [ // ParametersFilterList
 *     { // ParametersFilter
 *       Key: "Name" || "Type" || "KeyId", // required
 *       Values: [ // ParametersFilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ParameterFilters: [ // ParameterStringFilterList
 *     { // ParameterStringFilter
 *       Key: "STRING_VALUE", // required
 *       Option: "STRING_VALUE",
 *       Values: [ // ParameterStringFilterValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Shared: true || false,
 * };
 * const command = new DescribeParametersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeParametersResult
 * //   Parameters: [ // ParameterMetadataList
 * //     { // ParameterMetadata
 * //       Name: "STRING_VALUE",
 * //       ARN: "STRING_VALUE",
 * //       Type: "String" || "StringList" || "SecureString",
 * //       KeyId: "STRING_VALUE",
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       LastModifiedUser: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       AllowedPattern: "STRING_VALUE",
 * //       Version: Number("long"),
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
 * @param DescribeParametersCommandInput - {@link DescribeParametersCommandInput}
 * @returns {@link DescribeParametersCommandOutput}
 * @see {@link DescribeParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeParametersCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidFilterKey} (client fault)
 *  <p>The specified key isn't valid.</p>
 *
 * @throws {@link InvalidFilterOption} (client fault)
 *  <p>The specified filter option isn't valid. Valid options are Equals and BeginsWith. For Path
 *    filter, valid options are Recursive and OneLevel.</p>
 *
 * @throws {@link InvalidFilterValue} (client fault)
 *  <p>The filter value isn't valid. Verify the value and try again.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DescribeParametersCommand extends $Command
  .classBuilder<
    DescribeParametersCommandInput,
    DescribeParametersCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "DescribeParameters", {})
  .n("SSMClient", "DescribeParametersCommand")
  .sc(DescribeParameters)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeParametersRequest;
      output: DescribeParametersResult;
    };
    sdk: {
      input: DescribeParametersCommandInput;
      output: DescribeParametersCommandOutput;
    };
  };
}
