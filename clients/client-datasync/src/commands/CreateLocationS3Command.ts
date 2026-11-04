// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateLocationS3Request, CreateLocationS3Response } from "../models/models_0";
import { CreateLocationS3$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateLocationS3Command}.
 */
export interface CreateLocationS3CommandInput extends CreateLocationS3Request {}
/**
 * @public
 *
 * The output of {@link CreateLocationS3Command}.
 */
export interface CreateLocationS3CommandOutput extends CreateLocationS3Response, __MetadataBearer {}

/**
 * Creates a transfer *location* for an Amazon S3 bucket. DataSync can use this location as a source or destination for transferring data.
 *
 * > **Important:**
 * >
 * > Before you begin, make sure that you read the following topics:
 * >
 * > - [Storage class considerations with Amazon S3 locations](https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes)
 * > - [Evaluating S3 request costs when using DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests)
 *
 * For more information, see [Configuring transfers with Amazon S3](https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationS3Command } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationS3Command } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // CreateLocationS3Request
 *   Subdirectory: "STRING_VALUE",
 *   S3BucketArn: "STRING_VALUE", // required
 *   S3StorageClass: "STANDARD" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_INSTANT_RETRIEVAL",
 *   S3Config: { // S3Config
 *     BucketAccessRoleArn: "STRING_VALUE", // required
 *   },
 *   AgentArns: [ // AgentArnList
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateLocationS3Command(input);
 * const response = await client.send(command);
 * // { // CreateLocationS3Response
 * //   LocationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLocationS3CommandInput - {@link CreateLocationS3CommandInput}
 * @returns {@link CreateLocationS3CommandOutput}
 * @see {@link CreateLocationS3CommandInput} for command's `input` shape.
 * @see {@link CreateLocationS3CommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *
 * This exception is thrown when an error occurs in the DataSync service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception is thrown when the client submits a malformed request.
 *
 * @throws {@link DataSyncServiceException}
 *
 * Base exception class for all service exceptions from DataSync service.
 *
 * @public
 */
export class CreateLocationS3Command extends command<CreateLocationS3CommandInput, CreateLocationS3CommandOutput>(
  _ep0,
  _mw0,
  "CreateLocationS3",
  CreateLocationS3$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLocationS3Request;
      output: CreateLocationS3Response;
    };
    sdk: {
      input: CreateLocationS3CommandInput;
      output: CreateLocationS3CommandOutput;
    };
  };
}
