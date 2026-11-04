// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeParametersRequest, DescribeParametersResult } from "../models/models_0";
import { DescribeParameters$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the parameters in your Amazon Web Services account or the parameters shared with you when you enable the [Shared](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeParameters.html#systemsmanager-DescribeParameters-request-Shared) option.
 *
 * Request results are returned on a best-effort basis. If you specify `MaxResults` in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of `MaxResults`. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a `NextToken`. You can specify the `NextToken` in a subsequent call to get the next set of results.
 *
 * Parameter names can't contain spaces. The service removes any spaces specified for the beginning or end of a parameter name. If the specified name for a parameter contains spaces between characters, the request fails with a `ValidationException` error.
 *
 * > **Important:** If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, `DescribeParameters` retrieves whatever the original key alias was referencing.
 *
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
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidFilterKey} (client fault)
 *
 * The specified key isn't valid.
 *
 * @throws {@link InvalidFilterOption} (client fault)
 *
 * The specified filter option isn't valid. Valid options are Equals and BeginsWith. For Path filter, valid options are Recursive and OneLevel.
 *
 * @throws {@link InvalidFilterValue} (client fault)
 *
 * The filter value isn't valid. Verify the value and try again.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *
 * The specified token isn't valid.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class DescribeParametersCommand extends command<DescribeParametersCommandInput, DescribeParametersCommandOutput>(
  _ep0,
  _mw0,
  "DescribeParameters",
  DescribeParameters$
) {
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
