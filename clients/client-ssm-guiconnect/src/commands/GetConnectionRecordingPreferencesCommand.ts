// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetConnectionRecordingPreferencesResponse } from "../models/models_0";
import { GetConnectionRecordingPreferences$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetConnectionRecordingPreferencesCommandOutput extends GetConnectionRecordingPreferencesResponse, __MetadataBearer {}

/**
 * Returns the preferences specified for recording RDP connections in the requesting Amazon Web Services account and Amazon Web Services Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMGuiConnectClient, GetConnectionRecordingPreferencesCommand } from "@aws-sdk/client-ssm-guiconnect"; // ES Modules import
 * // const { SSMGuiConnectClient, GetConnectionRecordingPreferencesCommand } = require("@aws-sdk/client-ssm-guiconnect"); // CommonJS import
 * // import type { SSMGuiConnectClientConfig } from "@aws-sdk/client-ssm-guiconnect";
 * const config = {}; // type is SSMGuiConnectClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * An error occurred due to a conflict.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Your request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link SSMGuiConnectServiceException}
 *
 * Base exception class for all service exceptions from SSMGuiConnect service.
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
export class GetConnectionRecordingPreferencesCommand extends command<GetConnectionRecordingPreferencesCommandInput, GetConnectionRecordingPreferencesCommandOutput>(
  _ep0,
  _mw0,
  "GetConnectionRecordingPreferences",
  GetConnectionRecordingPreferences$
) {
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
