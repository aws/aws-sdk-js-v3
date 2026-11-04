// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCredentialsRequest, GetCredentialsResponse } from "../models/models_0";
import { GetCredentials$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a database user name and temporary password with temporary authorization to log in to Amazon Redshift Serverless.
 *
 * By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes).
 *
 * The Identity and Access Management (IAM) user or role that runs GetCredentials must have an IAM policy attached that allows access to all necessary actions and resources.
 *
 * If the `DbName` parameter is specified, the IAM policy must allow access to the resource dbname for the specified database name.
 *
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
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link RedshiftServerlessServiceException}
 *
 * Base exception class for all service exceptions from RedshiftServerless service.
 *
 * @public
 */
export class GetCredentialsCommand extends command<GetCredentialsCommandInput, GetCredentialsCommandOutput>(
  _ep0,
  _mw0,
  "GetCredentials",
  GetCredentials$
) {
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
