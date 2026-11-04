// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDirectoryRequest, CreateDirectoryResponse } from "../models/models_0";
import { CreateDirectory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDirectoryCommand}.
 */
export interface CreateDirectoryCommandInput extends CreateDirectoryRequest {}
/**
 * @public
 *
 * The output of {@link CreateDirectoryCommand}.
 */
export interface CreateDirectoryCommandOutput extends CreateDirectoryResponse, __MetadataBearer {}

/**
 * Creates a Directory by copying the published schema into the directory. A directory cannot be created without a schema.
 *
 * You can also quickly create a directory using a managed schema, called the `QuickStartSchema`. For more information, see [Managed Schema](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_managed.html) in the *Amazon Cloud Directory Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, CreateDirectoryCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, CreateDirectoryCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // CreateDirectoryRequest
 *   Name: "STRING_VALUE", // required
 *   SchemaArn: "STRING_VALUE", // required
 * };
 * const command = new CreateDirectoryCommand(input);
 * const response = await client.send(command);
 * // { // CreateDirectoryResponse
 * //   DirectoryArn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   ObjectIdentifier: "STRING_VALUE", // required
 * //   AppliedSchemaArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateDirectoryCommandInput - {@link CreateDirectoryCommandInput}
 * @returns {@link CreateDirectoryCommandOutput}
 * @see {@link CreateDirectoryCommandInput} for command's `input` shape.
 * @see {@link CreateDirectoryCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling ListDirectories and check your permissions.
 *
 * @throws {@link DirectoryAlreadyExistsException} (client fault)
 *
 * Indicates that a Directory could not be created due to a naming conflict. Choose a different name and try again.
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
 * @example To create a new Cloud Directory
 * ```javascript
 * //
 * const input = {
 *   Name: "ExampleCD",
 *   SchemaArn: "arn:aws:clouddirectory:us-west-2:45132example:schema/published/person/1"
 * };
 * const command = new CreateDirectoryCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AppliedSchemaArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AfMr4qym1kZTvwqOafAYfqI/schema/person/1",
 *   DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AfMr4qym1kZTvwqOafAYfqI",
 *   Name: "ExampleCD",
 *   ObjectIdentifier: "AQHzK-KsptZGU78KjmnwGH6i-4guCM3uQFOTA9_NjeHDrg"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateDirectoryCommand extends command<CreateDirectoryCommandInput, CreateDirectoryCommandOutput>(
  _ep0,
  _mw0,
  "CreateDirectory",
  CreateDirectory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDirectoryRequest;
      output: CreateDirectoryResponse;
    };
    sdk: {
      input: CreateDirectoryCommandInput;
      output: CreateDirectoryCommandOutput;
    };
  };
}
