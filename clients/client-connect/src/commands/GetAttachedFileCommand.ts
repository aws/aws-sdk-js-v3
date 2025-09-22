// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAttachedFileRequest, GetAttachedFileResponse } from "../models/models_1";
import { GetAttachedFile } from "../schemas/schemas_25_Attached";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAttachedFileCommand}.
 */
export interface GetAttachedFileCommandInput extends GetAttachedFileRequest {}
/**
 * @public
 *
 * The output of {@link GetAttachedFileCommand}.
 */
export interface GetAttachedFileCommandOutput extends GetAttachedFileResponse, __MetadataBearer {}

/**
 * <p>Provides a pre-signed URL for download of an approved attached file. This API also returns
 *    metadata about the attached file. It will only return a downloadURL if the status of the attached
 *    file is <code>APPROVED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetAttachedFileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetAttachedFileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // GetAttachedFileRequest
 *   InstanceId: "STRING_VALUE", // required
 *   FileId: "STRING_VALUE", // required
 *   UrlExpiryInSeconds: Number("int"),
 *   AssociatedResourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetAttachedFileCommand(input);
 * const response = await client.send(command);
 * // { // GetAttachedFileResponse
 * //   FileArn: "STRING_VALUE",
 * //   FileId: "STRING_VALUE",
 * //   CreationTime: "STRING_VALUE",
 * //   FileStatus: "APPROVED" || "REJECTED" || "PROCESSING" || "FAILED",
 * //   FileName: "STRING_VALUE",
 * //   FileSizeInBytes: Number("long"), // required
 * //   AssociatedResourceArn: "STRING_VALUE",
 * //   FileUseCaseType: "EMAIL_MESSAGE" || "ATTACHMENT",
 * //   CreatedBy: { // CreatedByInfo Union: only one key present
 * //     ConnectUserArn: "STRING_VALUE",
 * //     AWSIdentityArn: "STRING_VALUE",
 * //   },
 * //   DownloadUrlMetadata: { // DownloadUrlMetadata
 * //     Url: "STRING_VALUE",
 * //     UrlExpiry: "STRING_VALUE",
 * //   },
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAttachedFileCommandInput - {@link GetAttachedFileCommandInput}
 * @returns {@link GetAttachedFileCommandOutput}
 * @see {@link GetAttachedFileCommandInput} for command's `input` shape.
 * @see {@link GetAttachedFileCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class GetAttachedFileCommand extends $Command
  .classBuilder<
    GetAttachedFileCommandInput,
    GetAttachedFileCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "GetAttachedFile", {})
  .n("ConnectClient", "GetAttachedFileCommand")
  .sc(GetAttachedFile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAttachedFileRequest;
      output: GetAttachedFileResponse;
    };
    sdk: {
      input: GetAttachedFileCommandInput;
      output: GetAttachedFileCommandOutput;
    };
  };
}
