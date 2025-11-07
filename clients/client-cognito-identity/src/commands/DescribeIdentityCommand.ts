// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIdentityInput, IdentityDescription } from "../models/models_0";
import { DescribeIdentity } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIdentityCommand}.
 */
export interface DescribeIdentityCommandInput extends DescribeIdentityInput {}
/**
 * @public
 *
 * The output of {@link DescribeIdentityCommand}.
 */
export interface DescribeIdentityCommandOutput extends IdentityDescription, __MetadataBearer {}

/**
 * <p>Returns metadata related to the given identity, including when the identity was
 *          created and any associated linked logins.</p>
 *          <p>You must use Amazon Web Services developer credentials to call this
 *          operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, DescribeIdentityCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, DescribeIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * // import type { CognitoIdentityClientConfig } from "@aws-sdk/client-cognito-identity";
 * const config = {}; // type is CognitoIdentityClientConfig
 * const client = new CognitoIdentityClient(config);
 * const input = { // DescribeIdentityInput
 *   IdentityId: "STRING_VALUE", // required
 * };
 * const command = new DescribeIdentityCommand(input);
 * const response = await client.send(command);
 * // { // IdentityDescription
 * //   IdentityId: "STRING_VALUE",
 * //   Logins: [ // LoginsList
 * //     "STRING_VALUE",
 * //   ],
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   LastModifiedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeIdentityCommandInput - {@link DescribeIdentityCommandInput}
 * @returns {@link DescribeIdentityCommandOutput}
 * @see {@link DescribeIdentityCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Thrown when the service encounters an error during processing the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Thrown for missing or bad input parameter(s).</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>Thrown when a user is not authorized to access the requested resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when the requested resource (for example, a dataset or record) does not
 *          exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Thrown when a request is throttled.</p>
 *
 * @throws {@link CognitoIdentityServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentity service.</p>
 *
 *
 * @public
 */
export class DescribeIdentityCommand extends $Command
  .classBuilder<
    DescribeIdentityCommandInput,
    DescribeIdentityCommandOutput,
    CognitoIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityService", "DescribeIdentity", {})
  .n("CognitoIdentityClient", "DescribeIdentityCommand")
  .sc(DescribeIdentity)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIdentityInput;
      output: IdentityDescription;
    };
    sdk: {
      input: DescribeIdentityCommandInput;
      output: DescribeIdentityCommandOutput;
    };
  };
}
