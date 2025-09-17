// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartImportRequest, StartImportResponse } from "../models/models_0";
import { de_StartImportCommand, se_StartImportCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartImportCommand}.
 */
export interface StartImportCommandInput extends StartImportRequest {}
/**
 * @public
 *
 * The output of {@link StartImportCommand}.
 */
export interface StartImportCommandOutput extends StartImportResponse, __MetadataBearer {}

/**
 * <p> Starts an import of logged trail events from a source S3 bucket to a destination event
 *          data store. By default, CloudTrail only imports events contained in the S3 bucket's
 *                <code>CloudTrail</code> prefix and the prefixes inside the <code>CloudTrail</code> prefix, and does not check prefixes for other Amazon Web Services
 *          services. If you want to import CloudTrail events contained in another prefix, you
 *          must include the prefix in the <code>S3LocationUri</code>. For more considerations about
 *          importing trail events, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-copy-trail-to-lake.html#cloudtrail-trail-copy-considerations">Considerations for copying trail events</a> in the <i>CloudTrail User Guide</i>. </p>
 *          <p> When you start a new import, the <code>Destinations</code> and
 *             <code>ImportSource</code> parameters are required. Before starting a new import, disable
 *          any access control lists (ACLs) attached to the source S3 bucket. For more information
 *          about disabling ACLs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of
 *             objects and disabling ACLs for your bucket</a>. </p>
 *          <p> When you retry an import, the <code>ImportID</code> parameter is required. </p>
 *          <note>
 *             <p> If the destination event data store is for an organization, you must use the
 *             management account to import trail events. You cannot use the delegated administrator
 *             account for the organization. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, StartImportCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, StartImportCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // StartImportRequest
 *   Destinations: [ // ImportDestinations
 *     "STRING_VALUE",
 *   ],
 *   ImportSource: { // ImportSource
 *     S3: { // S3ImportSource
 *       S3LocationUri: "STRING_VALUE", // required
 *       S3BucketRegion: "STRING_VALUE", // required
 *       S3BucketAccessRoleArn: "STRING_VALUE", // required
 *     },
 *   },
 *   StartEventTime: new Date("TIMESTAMP"),
 *   EndEventTime: new Date("TIMESTAMP"),
 *   ImportId: "STRING_VALUE",
 * };
 * const command = new StartImportCommand(input);
 * const response = await client.send(command);
 * // { // StartImportResponse
 * //   ImportId: "STRING_VALUE",
 * //   Destinations: [ // ImportDestinations
 * //     "STRING_VALUE",
 * //   ],
 * //   ImportSource: { // ImportSource
 * //     S3: { // S3ImportSource
 * //       S3LocationUri: "STRING_VALUE", // required
 * //       S3BucketRegion: "STRING_VALUE", // required
 * //       S3BucketAccessRoleArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   StartEventTime: new Date("TIMESTAMP"),
 * //   EndEventTime: new Date("TIMESTAMP"),
 * //   ImportStatus: "INITIALIZING" || "IN_PROGRESS" || "FAILED" || "STOPPED" || "COMPLETED",
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * //   UpdatedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartImportCommandInput - {@link StartImportCommandInput}
 * @returns {@link StartImportCommandOutput}
 * @see {@link StartImportCommandInput} for command's `input` shape.
 * @see {@link StartImportCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link AccountHasOngoingImportException} (client fault)
 *  <p> This exception is thrown when you start a new import and a previous import is still in
 *          progress. </p>
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *  <p>The specified event data store ARN is not valid or does not map to an event data store
 *          in your account.</p>
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *  <p>The specified event data store was not found.</p>
 *
 * @throws {@link ImportNotFoundException} (client fault)
 *  <p> The specified import was not found. </p>
 *
 * @throws {@link InactiveEventDataStoreException} (client fault)
 *  <p>The event data store is inactive.</p>
 *
 * @throws {@link InsufficientEncryptionPolicyException} (client fault)
 *  <p>For the <code>CreateTrail</code>
 *             <code>PutInsightSelectors</code>, <code>UpdateTrail</code>, <code>StartQuery</code>, and <code>StartImport</code> operations, this exception is thrown
 *          when the policy on the S3 bucket or KMS key does
 *          not have sufficient permissions for the operation.</p>
 *          <p>For all other operations, this exception is thrown when the policy for the KMS key does
 *          not have sufficient permissions for the operation.</p>
 *
 * @throws {@link InvalidEventDataStoreCategoryException} (client fault)
 *  <p>This exception is thrown when event categories of specified event data stores are not
 *          valid.</p>
 *
 * @throws {@link InvalidEventDataStoreStatusException} (client fault)
 *  <p>The event data store is not in a status that supports the operation.</p>
 *
 * @throws {@link InvalidImportSourceException} (client fault)
 *  <p> This exception is thrown when the provided source S3 bucket is not valid for import.
 *       </p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 *
 * @public
 */
export class StartImportCommand extends $Command
  .classBuilder<
    StartImportCommandInput,
    StartImportCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudTrail_20131101", "StartImport", {})
  .n("CloudTrailClient", "StartImportCommand")
  .f(void 0, void 0)
  .ser(se_StartImportCommand)
  .de(de_StartImportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartImportRequest;
      output: StartImportResponse;
    };
    sdk: {
      input: StartImportCommandInput;
      output: StartImportCommandOutput;
    };
  };
}
