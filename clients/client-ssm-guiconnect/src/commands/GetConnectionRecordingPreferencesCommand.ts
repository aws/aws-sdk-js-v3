// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetConnectionRecordingPreferencesResponse } from "../models/models_0";
import {
  de_GetConnectionRecordingPreferencesCommand,
  se_GetConnectionRecordingPreferencesCommand,
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
 * The input for {@link GetConnectionRecordingPreferencesCommand}.
 */
export interface GetConnectionRecordingPreferencesCommandInput {}
/**
 * @public
 *
 * The output of {@link GetConnectionRecordingPreferencesCommand}.
 */
export interface GetConnectionRecordingPreferencesCommandOutput
  extends GetConnectionRecordingPreferencesResponse,
    __MetadataBearer {}

/**
 * <p>Returns the preferences specified for recording RDP connections in the requesting Amazon Web Services account and Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMGuiConnectClient, GetConnectionRecordingPreferencesCommand } from "@aws-sdk/client-ssm-guiconnect"; // ES Modules import
 * // const { SSMGuiConnectClient, GetConnectionRecordingPreferencesCommand } = require("@aws-sdk/client-ssm-guiconnect"); // CommonJS import
 * const client = new SSMGuiConnectClient(config);
 * const input = {};
 * const command = new GetConnectionRecordingPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectionRecordingPreferencesResponse
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
 * @param GetConnectionRecordingPreferencesCommandInput - {@link GetConnectionRecordingPreferencesCommandInput}
 * @returns {@link GetConnectionRecordingPreferencesCommandOutput}
 * @see {@link GetConnectionRecordingPreferencesCommandInput} for command's `input` shape.
 * @see {@link GetConnectionRecordingPreferencesCommandOutput} for command's `response` shape.
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
 * @example Retrieves the connection recording preferences for the account
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new GetConnectionRecordingPreferencesCommand(input);
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
export class GetConnectionRecordingPreferencesCommand extends $Command
  .classBuilder<
    GetConnectionRecordingPreferencesCommandInput,
    GetConnectionRecordingPreferencesCommandOutput,
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
  .s("SSMGuiConnect", "GetConnectionRecordingPreferences", {})
  .n("SSMGuiConnectClient", "GetConnectionRecordingPreferencesCommand")
  .f(void 0, void 0)
  .ser(se_GetConnectionRecordingPreferencesCommand)
  .de(de_GetConnectionRecordingPreferencesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetConnectionRecordingPreferencesResponse;
    };
    sdk: {
      input: GetConnectionRecordingPreferencesCommandInput;
      output: GetConnectionRecordingPreferencesCommandOutput;
    };
  };
}
