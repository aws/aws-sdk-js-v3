// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RequestUploadCredentialsInput, RequestUploadCredentialsOutput } from "../models/models_0";
import { RequestUploadCredentials$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RequestUploadCredentialsCommand}.
 */
export interface RequestUploadCredentialsCommandInput extends RequestUploadCredentialsInput {}
/**
 * @public
 *
 * The output of {@link RequestUploadCredentialsCommand}.
 */
export interface RequestUploadCredentialsCommandOutput extends RequestUploadCredentialsOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2
 *
 * Retrieves a fresh set of credentials for use when uploading a new set of game build files to Amazon GameLift Servers's Amazon S3. This is done as part of the build creation process; see [CreateBuild](https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateBuild.html).
 *
 * To request new credentials, specify the build ID as returned with an initial `CreateBuild` request. If successful, a new set of credentials are returned, along with the S3 storage location associated with the build ID.
 *
 * **Learn more**
 *
 * [Create a Build with Files in S3](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build)
 *
 * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, RequestUploadCredentialsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, RequestUploadCredentialsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // RequestUploadCredentialsInput
 *   BuildId: "STRING_VALUE", // required
 * };
 * const command = new RequestUploadCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // RequestUploadCredentialsOutput
 * //   UploadCredentials: { // AwsCredentials
 * //     AccessKeyId: "STRING_VALUE",
 * //     SecretAccessKey: "STRING_VALUE",
 * //     SessionToken: "STRING_VALUE",
 * //   },
 * //   StorageLocation: { // S3Location
 * //     Bucket: "STRING_VALUE",
 * //     Key: "STRING_VALUE",
 * //     RoleArn: "STRING_VALUE",
 * //     ObjectVersion: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RequestUploadCredentialsCommandInput - {@link RequestUploadCredentialsCommandInput}
 * @returns {@link RequestUploadCredentialsCommandOutput}
 * @see {@link RequestUploadCredentialsCommandInput} for command's `input` shape.
 * @see {@link RequestUploadCredentialsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource was not found. The resource was either not created yet or deleted.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The client failed authentication. Clients should not retry such requests.
 *
 * @throws {@link GameLiftServiceException}
 *
 * Base exception class for all service exceptions from GameLift service.
 *
 * @public
 */
export class RequestUploadCredentialsCommand extends command<RequestUploadCredentialsCommandInput, RequestUploadCredentialsCommandOutput>(
  _ep0,
  _mw0,
  "RequestUploadCredentials",
  RequestUploadCredentials$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RequestUploadCredentialsInput;
      output: RequestUploadCredentialsOutput;
    };
    sdk: {
      input: RequestUploadCredentialsCommandInput;
      output: RequestUploadCredentialsCommandOutput;
    };
  };
}
