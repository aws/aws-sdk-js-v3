// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteStreamingImageRequest,
  DeleteStreamingImageResponse,
  DeleteStreamingImageResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { de_DeleteStreamingImageCommand, se_DeleteStreamingImageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteStreamingImageCommand}.
 */
export interface DeleteStreamingImageCommandInput extends DeleteStreamingImageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteStreamingImageCommand}.
 */
export interface DeleteStreamingImageCommandOutput extends DeleteStreamingImageResponse, __MetadataBearer {}

/**
 * <p>Delete streaming image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, DeleteStreamingImageCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, DeleteStreamingImageCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // DeleteStreamingImageRequest
 *   clientToken: "STRING_VALUE",
 *   streamingImageId: "STRING_VALUE", // required
 *   studioId: "STRING_VALUE", // required
 * };
 * const command = new DeleteStreamingImageCommand(input);
 * const response = await client.send(command);
 * // { // DeleteStreamingImageResponse
 * //   streamingImage: { // StreamingImage
 * //     arn: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     ec2ImageId: "STRING_VALUE",
 * //     encryptionConfiguration: { // StreamingImageEncryptionConfiguration
 * //       keyArn: "STRING_VALUE",
 * //       keyType: "CUSTOMER_MANAGED_KEY", // required
 * //     },
 * //     eulaIds: [ // EulaIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     name: "STRING_VALUE",
 * //     owner: "STRING_VALUE",
 * //     platform: "STRING_VALUE",
 * //     state: "CREATE_IN_PROGRESS" || "READY" || "DELETE_IN_PROGRESS" || "DELETED" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "CREATE_FAILED" || "DELETE_FAILED",
 * //     statusCode: "STREAMING_IMAGE_CREATE_IN_PROGRESS" || "STREAMING_IMAGE_READY" || "STREAMING_IMAGE_DELETE_IN_PROGRESS" || "STREAMING_IMAGE_DELETED" || "STREAMING_IMAGE_UPDATE_IN_PROGRESS" || "INTERNAL_ERROR" || "ACCESS_DENIED",
 * //     statusMessage: "STRING_VALUE",
 * //     streamingImageId: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteStreamingImageCommandInput - {@link DeleteStreamingImageCommandInput}
 * @returns {@link DeleteStreamingImageCommandOutput}
 * @see {@link DeleteStreamingImageCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamingImageCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation. Check your IAM
 *             policies, and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Another operation is in progress. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your current quota does not allow you to perform the request action. You can request
 *             increases for some quotas, and other quotas cannot be increased.</p>
 *         <p>Please use Amazon Web Services Service Quotas to request an increase. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link NimbleServiceException}
 * <p>Base exception class for all service exceptions from Nimble service.</p>
 *
 * @public
 */
export class DeleteStreamingImageCommand extends $Command
  .classBuilder<
    DeleteStreamingImageCommandInput,
    DeleteStreamingImageCommandOutput,
    NimbleClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: NimbleClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("nimble", "DeleteStreamingImage", {})
  .n("NimbleClient", "DeleteStreamingImageCommand")
  .f(void 0, DeleteStreamingImageResponseFilterSensitiveLog)
  .ser(se_DeleteStreamingImageCommand)
  .de(de_DeleteStreamingImageCommand)
  .build() {}
