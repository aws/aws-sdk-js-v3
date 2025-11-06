// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  RequestUploadCredentialsInput,
  RequestUploadCredentialsOutput,
  RequestUploadCredentialsOutputFilterSensitiveLog,
} from "../models/models_1";
import { de_RequestUploadCredentialsCommand, se_RequestUploadCredentialsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2</p>
 *          <p>Retrieves a fresh set of credentials for use when uploading a new set of game build
 *             files to Amazon GameLift Servers's Amazon S3. This is done as part of the build creation process; see
 *                 <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateBuild.html">CreateBuild</a>.</p>
 *          <p>To request new credentials, specify the build ID as returned with an initial
 *                 <code>CreateBuild</code> request. If successful, a new set of credentials are
 *             returned, along with the S3 storage location associated with the build ID.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in S3</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
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
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class RequestUploadCredentialsCommand extends $Command
  .classBuilder<
    RequestUploadCredentialsCommandInput,
    RequestUploadCredentialsCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLift", "RequestUploadCredentials", {})
  .n("GameLiftClient", "RequestUploadCredentialsCommand")
  .f(void 0, RequestUploadCredentialsOutputFilterSensitiveLog)
  .ser(se_RequestUploadCredentialsCommand)
  .de(de_RequestUploadCredentialsCommand)
  .build() {
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
