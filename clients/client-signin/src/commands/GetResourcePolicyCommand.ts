// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
import type { GetResourcePolicyInput, GetResourcePolicyOutput } from "../models/models_0";
import { GetResourcePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetResourcePolicyCommand}.
 */
export interface GetResourcePolicyCommandInput extends GetResourcePolicyInput {}
/**
 * @public
 *
 * The output of {@link GetResourcePolicyCommand}.
 */
export interface GetResourcePolicyCommandOutput extends GetResourcePolicyOutput, __MetadataBearer {}

/**
 * Retrieve the account's consolidated SignIn resource-based policy
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SigninClient, GetResourcePolicyCommand } from "@aws-sdk/client-signin"; // ES Modules import
 * // const { SigninClient, GetResourcePolicyCommand } = require("@aws-sdk/client-signin"); // CommonJS import
 * // import type { SigninClientConfig } from "@aws-sdk/client-signin";
 * const config = {}; // type is SigninClientConfig
 * const client = new SigninClient(config);
 * const input = {};
 * const command = new GetResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetResourcePolicyOutput
 * //   signinResourceBasedPolicy: { // SigninResourceBasedPolicy
 * //     version: "STRING_VALUE",
 * //     statement: [ // PolicyStatements
 * //       { // PolicyStatement
 * //         effect: "STRING_VALUE",
 * //         principal: { // Principal
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         action: [ // PolicyActions
 * //           "STRING_VALUE",
 * //         ],
 * //         resource: "STRING_VALUE",
 * //         condition: { // ConditionBlock
 * //           "<keys>": { // Condition
 * //             "<keys>": [ // ConditionValues
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResourcePolicyCommandInput - {@link GetResourcePolicyCommandInput}
 * @returns {@link GetResourcePolicyCommandOutput}
 * @see {@link GetResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link GetResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link SigninClientResolvedConfig | config} for SigninClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request failed because of an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Error thrown when requested resource is not found
 *
 * HTTP Status Code: 404 Not Found
 *
 * Used when the specified resource does not exist
 *
 * @throws {@link TooManyRequestsError} (client fault)
 *  The request failed because you exceeded the request rate limit for this operation.
 *
 * @throws {@link SigninServiceException}
 * <p>Base exception class for all service exceptions from Signin service.</p>
 *
 *
 * @public
 */
export class GetResourcePolicyCommand extends command<GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput>(
  _ep2,
  _mw0,
  "GetResourcePolicy",
  GetResourcePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetResourcePolicyOutput;
    };
    sdk: {
      input: GetResourcePolicyCommandInput;
      output: GetResourcePolicyCommandOutput;
    };
  };
}
