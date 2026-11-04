// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDirectoryRequest, GetDirectoryResponse } from "../models/models_0";
import { GetDirectory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDirectoryCommand}.
 */
export interface GetDirectoryCommandInput extends GetDirectoryRequest {}
/**
 * @public
 *
 * The output of {@link GetDirectoryCommand}.
 */
export interface GetDirectoryCommandOutput extends GetDirectoryResponse, __MetadataBearer {}

/**
 * Retrieves metadata about a directory.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetDirectoryCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetDirectoryCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // GetDirectoryRequest
 *   DirectoryArn: "STRING_VALUE", // required
 * };
 * const command = new GetDirectoryCommand(input);
 * const response = await client.send(command);
 * // { // GetDirectoryResponse
 * //   Directory: { // Directory
 * //     Name: "STRING_VALUE",
 * //     DirectoryArn: "STRING_VALUE",
 * //     State: "ENABLED" || "DISABLED" || "DELETED",
 * //     CreationDateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDirectoryCommandInput - {@link GetDirectoryCommandInput}
 * @returns {@link GetDirectoryCommandOutput}
 * @see {@link GetDirectoryCommandInput} for command's `input` shape.
 * @see {@link GetDirectoryCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling ListDirectories and check your permissions.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the [AWS Service Health Dashboard](http://status.aws.amazon.com/) site to see if there are any operational issues with the service.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * Indicates that the provided ARN value is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * Indicates that limits are exceeded. See [Limits](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html) for more information.
 *
 * @throws {@link RetryableConflictException} (client fault)
 *
 * Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Indicates that your request is malformed in some manner. See the exception message.
 *
 * @throws {@link CloudDirectoryServiceException}
 *
 * Base exception class for all service exceptions from CloudDirectory service.
 *
 * @example To get information about a directory
 * ```javascript
 * //
 * const input = {
 *   DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY"
 * };
 * const command = new GetDirectoryCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Directory: {
 *     CreationDateTime: 1.506115781186E9,
 *     DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY",
 *     Name: "ExampleCD",
 *     State: "ENABLED"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetDirectoryCommand extends command<GetDirectoryCommandInput, GetDirectoryCommandOutput>(
  _ep0,
  _mw0,
  "GetDirectory",
  GetDirectory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDirectoryRequest;
      output: GetDirectoryResponse;
    };
    sdk: {
      input: GetDirectoryCommandInput;
      output: GetDirectoryCommandOutput;
    };
  };
}
