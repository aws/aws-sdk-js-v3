// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetIdentityCenterAuthTokenRequest, GetIdentityCenterAuthTokenResponse } from "../models/models_0";
import type {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { GetIdentityCenterAuthToken$ } from "../schemas/schemas_0";

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
 * <p>Returns an Identity Center authentication token for accessing Amazon Redshift Serverless workgroups.</p> <p>The token provides secure access to data within the specified workgroups using Identity Center identity propagation. The token expires after a specified duration and must be refreshed for continued access.</p> <p>The Identity and Access Management (IAM) user or role that runs GetIdentityCenterAuthToken must have appropriate permissions to access the specified workgroups and Identity Center integration must be configured for the workgroups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, GetIdentityCenterAuthTokenCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, GetIdentityCenterAuthTokenCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // GetIdentityCenterAuthTokenRequest
 *   workgroupNames: [ // WorkgroupNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetIdentityCenterAuthTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetIdentityCenterAuthTokenResponse
 * //   token: "STRING_VALUE",
 * //   expirationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetIdentityCenterAuthTokenCommandInput - {@link GetIdentityCenterAuthTokenCommandInput}
 * @returns {@link GetIdentityCenterAuthTokenCommandOutput}
 * @see {@link GetIdentityCenterAuthTokenCommandInput} for command's `input` shape.
 * @see {@link GetIdentityCenterAuthTokenCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link DryRunException} (client fault)
 *  <p>This exception is thrown when the request was successful, but dry run was enabled so no action was taken.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class GetIdentityCenterAuthTokenCommand extends $Command
  .classBuilder<
    GetIdentityCenterAuthTokenCommandInput,
    GetIdentityCenterAuthTokenCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "GetIdentityCenterAuthToken", {})
  .n("RedshiftServerlessClient", "GetIdentityCenterAuthTokenCommand")
  .sc(GetIdentityCenterAuthToken$)
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
