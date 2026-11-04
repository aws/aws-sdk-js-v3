// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartImportRequest, StartImportResponse } from "../models/models_0";
import { StartImport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Important:** CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see [CloudTrail Lake availability change](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-service-availability-change.html).
 *
 * Starts an import of logged trail events from a source S3 bucket to a destination event data store. By default, CloudTrail only imports events contained in the S3 bucket's `CloudTrail` prefix and the prefixes inside the `CloudTrail` prefix, and does not check prefixes for other Amazon Web Services services. If you want to import CloudTrail events contained in another prefix, you must include the prefix in the `S3LocationUri`. For more considerations about importing trail events, see [Considerations for copying trail events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-copy-trail-to-lake.html#cloudtrail-trail-copy-considerations) in the *CloudTrail User Guide*.
 *
 * When you start a new import, the `Destinations` and `ImportSource` parameters are required. Before starting a new import, disable any access control lists (ACLs) attached to the source S3 bucket. For more information about disabling ACLs, see [Controlling ownership of objects and disabling ACLs for your bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html).
 *
 * When you retry an import, the `ImportID` parameter is required.
 *
 * > **Note:** If the destination event data store is for an organization, you must use the management account to import trail events. You cannot use the delegated administrator account for the organization.
 *
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
 *
 * This exception is thrown when you start a new import and a previous import is still in progress.
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *
 * The specified event data store ARN is not valid or does not map to an event data store in your account.
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *
 * The specified event data store was not found.
 *
 * @throws {@link ImportNotFoundException} (client fault)
 *
 * The specified import was not found.
 *
 * @throws {@link InactiveEventDataStoreException} (client fault)
 *
 * The event data store is inactive.
 *
 * @throws {@link InsufficientEncryptionPolicyException} (client fault)
 *
 * For the `CreateTrail` `PutInsightSelectors`, `UpdateTrail`, `StartQuery`, and `StartImport` operations, this exception is thrown when the policy on the S3 bucket or KMS key does not have sufficient permissions for the operation.
 *
 * For all other operations, this exception is thrown when the policy for the KMS key does not have sufficient permissions for the operation.
 *
 * @throws {@link InvalidEventDataStoreCategoryException} (client fault)
 *
 * This exception is thrown when event categories of specified event data stores are not valid.
 *
 * @throws {@link InvalidEventDataStoreStatusException} (client fault)
 *
 * The event data store is not in a status that supports the operation.
 *
 * @throws {@link InvalidImportSourceException} (client fault)
 *
 * This exception is thrown when the provided source S3 bucket is not valid for import.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The request includes a parameter that is not valid.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * This exception is thrown when the requested operation is not permitted.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * This exception is thrown when the requested operation is not supported.
 *
 * @throws {@link CloudTrailServiceException}
 *
 * Base exception class for all service exceptions from CloudTrail service.
 *
 * @public
 */
export class StartImportCommand extends command<StartImportCommandInput, StartImportCommandOutput>(
  _ep0,
  _mw0,
  "StartImport",
  StartImport$
) {
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
