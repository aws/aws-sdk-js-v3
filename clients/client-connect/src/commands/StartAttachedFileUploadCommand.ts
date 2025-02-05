// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartAttachedFileUploadRequest, StartAttachedFileUploadResponse } from "../models/models_2";
import { de_StartAttachedFileUploadCommand, se_StartAttachedFileUploadCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartAttachedFileUploadCommand}.
 */
export interface StartAttachedFileUploadCommandInput extends StartAttachedFileUploadRequest {}
/**
 * @public
 *
 * The output of {@link StartAttachedFileUploadCommand}.
 */
export interface StartAttachedFileUploadCommandOutput extends StartAttachedFileUploadResponse, __MetadataBearer {}

/**
 * <p>Provides a pre-signed Amazon S3 URL in response for uploading your content.</p>
 *          <important>
 *             <p>You may only use this API to upload attachments to an <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_CreateCase.html">Amazon Connect Case</a> or
 *      <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-email-channel.html">Amazon Connect
 *      Email</a>. </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartAttachedFileUploadCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartAttachedFileUploadCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectClient(config);
 * const input = { // StartAttachedFileUploadRequest
 *   ClientToken: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE", // required
 *   FileName: "STRING_VALUE", // required
 *   FileSizeInBytes: Number("long"), // required
 *   UrlExpiryInSeconds: Number("int"),
 *   FileUseCaseType: "EMAIL_MESSAGE" || "ATTACHMENT", // required
 *   AssociatedResourceArn: "STRING_VALUE", // required
 *   CreatedBy: { // CreatedByInfo Union: only one key present
 *     ConnectUserArn: "STRING_VALUE",
 *     AWSIdentityArn: "STRING_VALUE",
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartAttachedFileUploadCommand(input);
 * const response = await client.send(command);
 * // { // StartAttachedFileUploadResponse
 * //   FileArn: "STRING_VALUE",
 * //   FileId: "STRING_VALUE",
 * //   CreationTime: "STRING_VALUE",
 * //   FileStatus: "APPROVED" || "REJECTED" || "PROCESSING" || "FAILED",
 * //   CreatedBy: { // CreatedByInfo Union: only one key present
 * //     ConnectUserArn: "STRING_VALUE",
 * //     AWSIdentityArn: "STRING_VALUE",
 * //   },
 * //   UploadUrlMetadata: { // UploadUrlMetadata
 * //     Url: "STRING_VALUE",
 * //     UrlExpiry: "STRING_VALUE",
 * //     HeadersToInclude: { // UrlMetadataSignedHeaders
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartAttachedFileUploadCommandInput - {@link StartAttachedFileUploadCommandInput}
 * @returns {@link StartAttachedFileUploadCommandOutput}
 * @see {@link StartAttachedFileUploadCommandInput} for command's `input` shape.
 * @see {@link StartAttachedFileUploadCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class StartAttachedFileUploadCommand extends $Command
  .classBuilder<
    StartAttachedFileUploadCommandInput,
    StartAttachedFileUploadCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "StartAttachedFileUpload", {})
  .n("ConnectClient", "StartAttachedFileUploadCommand")
  .f(void 0, void 0)
  .ser(se_StartAttachedFileUploadCommand)
  .de(de_StartAttachedFileUploadCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAttachedFileUploadRequest;
      output: StartAttachedFileUploadResponse;
    };
    sdk: {
      input: StartAttachedFileUploadCommandInput;
      output: StartAttachedFileUploadCommandOutput;
    };
  };
}
