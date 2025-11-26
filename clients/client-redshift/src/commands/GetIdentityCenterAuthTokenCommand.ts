// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetIdentityCenterAuthTokenRequest, GetIdentityCenterAuthTokenResponse } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { GetIdentityCenterAuthToken } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIdentityCenterAuthTokenCommand}.
 */
export interface GetIdentityCenterAuthTokenCommandInput extends GetIdentityCenterAuthTokenRequest {}
/**
 * @public
 *
 * The output of {@link GetIdentityCenterAuthTokenCommand}.
 */
export interface GetIdentityCenterAuthTokenCommandOutput extends GetIdentityCenterAuthTokenResponse, __MetadataBearer {}

/**
 * <p>Generates an encrypted authentication token that propagates the caller's
 *             Amazon Web Services IAM Identity Center identity to Amazon Redshift clusters. This API extracts the
 *             Amazon Web Services IAM Identity Center identity from enhanced credentials and creates a secure token
 *             that Amazon Redshift drivers can use for authentication.</p>
 *          <p>The token is encrypted using Key Management Service (KMS) and can only be
 *             decrypted by the specified Amazon Redshift clusters. The token contains the caller's
 *             Amazon Web Services IAM Identity Center identity information and is valid for a limited time period.</p>
 *          <p>This API is exclusively for use with Amazon Web Services IAM Identity Center enhanced credentials. If the
 *             caller is not using enhanced credentials with embedded Amazon Web Services IAM Identity Center identity, the API will
 *             return an error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, GetIdentityCenterAuthTokenCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, GetIdentityCenterAuthTokenCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // GetIdentityCenterAuthTokenRequest
 *   ClusterIds: [ // ClusterIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetIdentityCenterAuthTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetIdentityCenterAuthTokenResponse
 * //   Token: "STRING_VALUE",
 * //   ExpirationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetIdentityCenterAuthTokenCommandInput - {@link GetIdentityCenterAuthTokenCommandInput}
 * @returns {@link GetIdentityCenterAuthTokenCommandOutput}
 * @see {@link GetIdentityCenterAuthTokenCommandInput} for command's `input` shape.
 * @see {@link GetIdentityCenterAuthTokenCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link RedshiftInvalidParameterFault} (client fault)
 *  <p>The request contains one or more invalid parameters.
 *             This error occurs when required parameters are missing,
 *             parameter values are outside acceptable ranges,
 *             or parameter formats are incorrect.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class GetIdentityCenterAuthTokenCommand extends $Command
  .classBuilder<
    GetIdentityCenterAuthTokenCommandInput,
    GetIdentityCenterAuthTokenCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "GetIdentityCenterAuthToken", {})
  .n("RedshiftClient", "GetIdentityCenterAuthTokenCommand")
  .sc(GetIdentityCenterAuthToken)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIdentityCenterAuthTokenRequest;
      output: GetIdentityCenterAuthTokenResponse;
    };
    sdk: {
      input: GetIdentityCenterAuthTokenCommandInput;
      output: GetIdentityCenterAuthTokenCommandOutput;
    };
  };
}
