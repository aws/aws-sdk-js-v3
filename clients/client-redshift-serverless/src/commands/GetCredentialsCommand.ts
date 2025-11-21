// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetCredentialsRequest, GetCredentialsResponse } from "../models/models_0";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { GetCredentials } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCredentialsCommand}.
 */
export interface GetCredentialsCommandInput extends GetCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link GetCredentialsCommand}.
 */
export interface GetCredentialsCommandOutput extends GetCredentialsResponse, __MetadataBearer {}

/**
 * <p>Returns a database user name and temporary password with temporary authorization to log in to Amazon Redshift Serverless.</p> <p>By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes).</p> <p>The Identity and Access Management (IAM) user or role that runs GetCredentials must have an IAM policy attached that allows access to all necessary actions and resources.</p> <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access to the resource dbname for the specified database name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, GetCredentialsCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, GetCredentialsCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // GetCredentialsRequest
 *   dbName: "STRING_VALUE",
 *   durationSeconds: Number("int"),
 *   workgroupName: "STRING_VALUE",
 *   customDomainName: "STRING_VALUE",
 * };
 * const command = new GetCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // GetCredentialsResponse
 * //   dbUser: "STRING_VALUE",
 * //   dbPassword: "STRING_VALUE",
 * //   expiration: new Date("TIMESTAMP"),
 * //   nextRefreshTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetCredentialsCommandInput - {@link GetCredentialsCommandInput}
 * @returns {@link GetCredentialsCommandOutput}
 * @see {@link GetCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetCredentialsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
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
export class GetCredentialsCommand extends $Command
  .classBuilder<
    GetCredentialsCommandInput,
    GetCredentialsCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "GetCredentials", {})
  .n("RedshiftServerlessClient", "GetCredentialsCommand")
  .sc(GetCredentials)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCredentialsRequest;
      output: GetCredentialsResponse;
    };
    sdk: {
      input: GetCredentialsCommandInput;
      output: GetCredentialsCommandOutput;
    };
  };
}
