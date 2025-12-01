// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateRecordsRequest, UpdateRecordsResponse } from "../models/models_0";
import { UpdateRecords } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRecordsCommand}.
 */
export interface UpdateRecordsCommandInput extends UpdateRecordsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRecordsCommand}.
 */
export interface UpdateRecordsCommandOutput extends UpdateRecordsResponse, __MetadataBearer {}

/**
 * <p>Posts updates to records and adds and deletes records for a dataset and user.</p>
 *       <p>The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count.</p><p>For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0.</p>
 *       <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, UpdateRecordsCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, UpdateRecordsCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * // import type { CognitoSyncClientConfig } from "@aws-sdk/client-cognito-sync";
 * const config = {}; // type is CognitoSyncClientConfig
 * const client = new CognitoSyncClient(config);
 * const input = { // UpdateRecordsRequest
 *   IdentityPoolId: "STRING_VALUE", // required
 *   IdentityId: "STRING_VALUE", // required
 *   DatasetName: "STRING_VALUE", // required
 *   DeviceId: "STRING_VALUE",
 *   RecordPatches: [ // RecordPatchList
 *     { // RecordPatch
 *       Op: "replace" || "remove", // required
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *       SyncCount: Number("long"), // required
 *       DeviceLastModifiedDate: new Date("TIMESTAMP"),
 *     },
 *   ],
 *   SyncSessionToken: "STRING_VALUE", // required
 *   ClientContext: "STRING_VALUE",
 * };
 * const command = new UpdateRecordsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRecordsResponse
 * //   Records: [ // RecordList
 * //     { // Record
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //       SyncCount: Number("long"),
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       LastModifiedBy: "STRING_VALUE",
 * //       DeviceLastModifiedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateRecordsCommandInput - {@link UpdateRecordsCommandInput}
 * @returns {@link UpdateRecordsCommandOutput}
 * @see {@link UpdateRecordsCommandInput} for command's `input` shape.
 * @see {@link UpdateRecordsCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for CognitoSyncClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  Indicates an internal service
 *       error.
 *
 * @throws {@link InvalidLambdaFunctionOutputException} (client fault)
 *  <p>The AWS Lambda function returned invalid output or an exception.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  Thrown when a request parameter does not comply
 *       with the associated constraints.
 *
 * @throws {@link LambdaThrottledException} (client fault)
 *  <p>AWS Lambda throttled your account, please contact AWS Support</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  Thrown when the limit on the number of objects or
 *       operations has been exceeded.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  Thrown when a user is not authorized to access the
 *       requested resource.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  Thrown if an update can't be applied because
 *       the resource was changed by another call and this would result in a conflict.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Thrown if the resource doesn't
 *       exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Thrown if the request is
 *       throttled.
 *
 * @throws {@link CognitoSyncServiceException}
 * <p>Base exception class for all service exceptions from CognitoSync service.</p>
 *
 *
 * @public
 */
export class UpdateRecordsCommand extends $Command
  .classBuilder<
    UpdateRecordsCommandInput,
    UpdateRecordsCommandOutput,
    CognitoSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoSyncService", "UpdateRecords", {})
  .n("CognitoSyncClient", "UpdateRecordsCommand")
  .sc(UpdateRecords)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRecordsRequest;
      output: UpdateRecordsResponse;
    };
    sdk: {
      input: UpdateRecordsCommandInput;
      output: UpdateRecordsCommandOutput;
    };
  };
}
