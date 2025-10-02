// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateConnectionRecordingPreferencesRequest,
  UpdateConnectionRecordingPreferencesResponse,
} from "../models/models_0";
import {
  de_UpdateConnectionRecordingPreferencesCommand,
  se_UpdateConnectionRecordingPreferencesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMGuiConnectClientResolvedConfig } from "../SSMGuiConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConnectionRecordingPreferencesCommand}.
 */
export interface UpdateConnectionRecordingPreferencesCommandInput extends UpdateConnectionRecordingPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectionRecordingPreferencesCommand}.
 */
export interface UpdateConnectionRecordingPreferencesCommandOutput
  extends UpdateConnectionRecordingPreferencesResponse,
    __MetadataBearer {}

/**
 * <p>Updates the preferences for recording RDP connections.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMGuiConnectClient, UpdateConnectionRecordingPreferencesCommand } from "@aws-sdk/client-ssm-guiconnect"; // ES Modules import
 * // const { SSMGuiConnectClient, UpdateConnectionRecordingPreferencesCommand } = require("@aws-sdk/client-ssm-guiconnect"); // CommonJS import
 * // import type { SSMGuiConnectClientConfig } from "@aws-sdk/client-ssm-guiconnect";
 * const config = {}; // type is SSMGuiConnectClientConfig
 * const client = new SSMGuiConnectClient(config);
 * const input = { // UpdateConnectionRecordingPreferencesRequest
 *   ConnectionRecordingPreferences: { // ConnectionRecordingPreferences
 *     RecordingDestinations: { // RecordingDestinations
 *       S3Buckets: [ // S3Buckets // required
 *         { // S3Bucket
 *           BucketOwner: "STRING_VALUE", // required
 *           BucketName: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     KMSKeyArn: "STRING_VALUE", // required
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new UpdateConnectionRecordingPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConnectionRecordingPreferencesResponse
 * //   ClientToken: "STRING_VALUE",
 * //   ConnectionRecordingPreferences: { // ConnectionRecordingPreferences
 * //     RecordingDestinations: { // RecordingDestinations
 * //       S3Buckets: [ // S3Buckets // required
 * //         { // S3Bucket
 * //           BucketOwner: "STRING_VALUE", // required
 * //           BucketName: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     KMSKeyArn: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateConnectionRecordingPreferencesCommandInput - {@link UpdateConnectionRecordingPreferencesCommandInput}
 * @returns {@link UpdateConnectionRecordingPreferencesCommandOutput}
 * @see {@link UpdateConnectionRecordingPreferencesCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectionRecordingPreferencesCommandOutput} for command's `response` shape.
 * @see {@link SSMGuiConnectClientResolvedConfig | config} for SSMGuiConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An error occurred due to a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link SSMGuiConnectServiceException}
 * <p>Base exception class for all service exceptions from SSMGuiConnect service.</p>
 *
 *
 * @example Updates the connection recording preferences for the account
 * ```javascript
 * //
 * const input = {
 *   ConnectionRecordingPreferences: {
 *     KMSKeyArn: "arn:aws:kms:region:account_id:key/sample_key_id",
 *     RecordingDestinations: {
 *       S3Buckets: [
 *         {
 *           BucketName: "sample-connection-recording-bucket",
 *           BucketOwner: "123456789012"
 *         }
 *       ]
 *     }
 *   }
 * };
 * const command = new UpdateConnectionRecordingPreferencesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ClientToken: "sample_uuid",
 *   ConnectionRecordingPreferences: {
 *     KMSKeyArn: "arn:aws:kms:region:account_id:key/sample_key_id",
 *     RecordingDestinations: {
 *       S3Buckets: [
 *         {
 *           BucketName: "sample-connection-recording-bucket",
 *           BucketOwner: "123456789012"
 *         }
 *       ]
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateConnectionRecordingPreferencesCommand extends $Command
  .classBuilder<
    UpdateConnectionRecordingPreferencesCommandInput,
    UpdateConnectionRecordingPreferencesCommandOutput,
    SSMGuiConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMGuiConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMGuiConnect", "UpdateConnectionRecordingPreferences", {})
  .n("SSMGuiConnectClient", "UpdateConnectionRecordingPreferencesCommand")
  .f(void 0, void 0)
  .ser(se_UpdateConnectionRecordingPreferencesCommand)
  .de(de_UpdateConnectionRecordingPreferencesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConnectionRecordingPreferencesRequest;
      output: UpdateConnectionRecordingPreferencesResponse;
    };
    sdk: {
      input: UpdateConnectionRecordingPreferencesCommandInput;
      output: UpdateConnectionRecordingPreferencesCommandOutput;
    };
  };
}
