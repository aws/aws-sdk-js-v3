// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetAttachedFileMetadataRequest, BatchGetAttachedFileMetadataResponse } from "../models/models_0";
import { BatchGetAttachedFileMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetAttachedFileMetadataCommand}.
 */
export interface BatchGetAttachedFileMetadataCommandInput extends BatchGetAttachedFileMetadataRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetAttachedFileMetadataCommand}.
 */
export interface BatchGetAttachedFileMetadataCommandOutput
  extends BatchGetAttachedFileMetadataResponse,
    __MetadataBearer {}

/**
 * <p>Allows you to retrieve metadata about multiple attached files on an associated resource. Each attached file
 *    provided in the input list must be associated with the input AssociatedResourceArn.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, BatchGetAttachedFileMetadataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, BatchGetAttachedFileMetadataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // BatchGetAttachedFileMetadataRequest
 *   FileIds: [ // FileIdList // required
 *     "STRING_VALUE",
 *   ],
 *   InstanceId: "STRING_VALUE", // required
 *   AssociatedResourceArn: "STRING_VALUE", // required
 * };
 * const command = new BatchGetAttachedFileMetadataCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetAttachedFileMetadataResponse
 * //   Files: [ // AttachedFilesList
 * //     { // AttachedFile
 * //       CreationTime: "STRING_VALUE", // required
 * //       FileArn: "STRING_VALUE", // required
 * //       FileId: "STRING_VALUE", // required
 * //       FileName: "STRING_VALUE", // required
 * //       FileSizeInBytes: Number("long"), // required
 * //       FileStatus: "APPROVED" || "REJECTED" || "PROCESSING" || "FAILED", // required
 * //       CreatedBy: { // CreatedByInfo Union: only one key present
 * //         ConnectUserArn: "STRING_VALUE",
 * //         AWSIdentityArn: "STRING_VALUE",
 * //       },
 * //       FileUseCaseType: "EMAIL_MESSAGE" || "ATTACHMENT",
 * //       AssociatedResourceArn: "STRING_VALUE",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Errors: [ // AttachedFileErrorsList
 * //     { // AttachedFileError
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       FileId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetAttachedFileMetadataCommandInput - {@link BatchGetAttachedFileMetadataCommandInput}
 * @returns {@link BatchGetAttachedFileMetadataCommandOutput}
 * @see {@link BatchGetAttachedFileMetadataCommandInput} for command's `input` shape.
 * @see {@link BatchGetAttachedFileMetadataCommandOutput} for command's `response` shape.
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
export class BatchGetAttachedFileMetadataCommand extends $Command
  .classBuilder<
    BatchGetAttachedFileMetadataCommandInput,
    BatchGetAttachedFileMetadataCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "BatchGetAttachedFileMetadata", {})
  .n("ConnectClient", "BatchGetAttachedFileMetadataCommand")
  .sc(BatchGetAttachedFileMetadata$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetAttachedFileMetadataRequest;
      output: BatchGetAttachedFileMetadataResponse;
    };
    sdk: {
      input: BatchGetAttachedFileMetadataCommandInput;
      output: BatchGetAttachedFileMetadataCommandOutput;
    };
  };
}
