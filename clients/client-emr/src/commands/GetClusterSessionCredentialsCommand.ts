// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetClusterSessionCredentialsInput, GetClusterSessionCredentialsOutput } from "../models/models_0";
import { GetClusterSessionCredentials$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetClusterSessionCredentialsCommand}.
 */
export interface GetClusterSessionCredentialsCommandInput extends GetClusterSessionCredentialsInput {}
/**
 * @public
 *
 * The output of {@link GetClusterSessionCredentialsCommand}.
 */
export interface GetClusterSessionCredentialsCommandOutput extends GetClusterSessionCredentialsOutput, __MetadataBearer {}

/**
 * <p>Provides temporary, HTTP basic credentials that are associated with a given runtime
 *             IAM role and used by a cluster with fine-grained access control
 *          activated. You can use these credentials to connect to cluster endpoints that support
 *          username and password authentication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetClusterSessionCredentialsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetClusterSessionCredentialsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // GetClusterSessionCredentialsInput
 *   ClusterId: "STRING_VALUE", // required
 *   ExecutionRoleArn: "STRING_VALUE",
 * };
 * const command = new GetClusterSessionCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // GetClusterSessionCredentialsOutput
 * //   Credentials: { // Credentials Union: only one key present
 * //     UsernamePassword: { // UsernamePassword
 * //       Username: "STRING_VALUE",
 * //       Password: "STRING_VALUE",
 * //     },
 * //   },
 * //   ExpiresAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetClusterSessionCredentialsCommandInput - {@link GetClusterSessionCredentialsCommandInput}
 * @returns {@link GetClusterSessionCredentialsCommandOutput}
 * @see {@link GetClusterSessionCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetClusterSessionCredentialsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class GetClusterSessionCredentialsCommand extends $Command
  .classBuilder<
    GetClusterSessionCredentialsCommandInput,
    GetClusterSessionCredentialsCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "GetClusterSessionCredentials", {})
  .n("EMRClient", "GetClusterSessionCredentialsCommand")
  .sc(GetClusterSessionCredentials$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetClusterSessionCredentialsInput;
      output: GetClusterSessionCredentialsOutput;
    };
    sdk: {
      input: GetClusterSessionCredentialsCommandInput;
      output: GetClusterSessionCredentialsCommandOutput;
    };
  };
}
