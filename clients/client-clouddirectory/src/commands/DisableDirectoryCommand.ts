// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisableDirectoryRequest, DisableDirectoryResponse } from "../models/models_0";
import { DisableDirectory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableDirectoryCommand}.
 */
export interface DisableDirectoryCommandInput extends DisableDirectoryRequest {}
/**
 * @public
 *
 * The output of {@link DisableDirectoryCommand}.
 */
export interface DisableDirectoryCommandOutput extends DisableDirectoryResponse, __MetadataBearer {}

/**
 * Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, DisableDirectoryCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, DisableDirectoryCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // DisableDirectoryRequest
 *   DirectoryArn: "STRING_VALUE", // required
 * };
 * const command = new DisableDirectoryCommand(input);
 * const response = await client.send(command);
 * // { // DisableDirectoryResponse
 * //   DirectoryArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DisableDirectoryCommandInput - {@link DisableDirectoryCommandInput}
 * @returns {@link DisableDirectoryCommandOutput}
 * @see {@link DisableDirectoryCommandInput} for command's `input` shape.
 * @see {@link DisableDirectoryCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling ListDirectories and check your permissions.
 *
 * @throws {@link DirectoryDeletedException} (client fault)
 *
 * A directory that has been deleted and to which access has been attempted. Note: The requested resource will eventually cease to exist.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
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
 * @example To disable a directory
 * ```javascript
 * //
 * const input = {
 *   DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AXQXDXvdgkOWktRXV4HnRa8"
 * };
 * const command = new DisableDirectoryCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AXQXDXvdgkOWktRXV4HnRa8"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DisableDirectoryCommand extends command<DisableDirectoryCommandInput, DisableDirectoryCommandOutput>(
  _ep0,
  _mw0,
  "DisableDirectory",
  DisableDirectory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableDirectoryRequest;
      output: DisableDirectoryResponse;
    };
    sdk: {
      input: DisableDirectoryCommandInput;
      output: DisableDirectoryCommandOutput;
    };
  };
}
