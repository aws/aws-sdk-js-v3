// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveFacetFromObjectRequest, RemoveFacetFromObjectResponse } from "../models/models_0";
import { RemoveFacetFromObject$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveFacetFromObjectCommand}.
 */
export interface RemoveFacetFromObjectCommandInput extends RemoveFacetFromObjectRequest {}
/**
 * @public
 *
 * The output of {@link RemoveFacetFromObjectCommand}.
 */
export interface RemoveFacetFromObjectCommandOutput extends RemoveFacetFromObjectResponse, __MetadataBearer {}

/**
 * Removes the specified facet from the specified object.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, RemoveFacetFromObjectCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, RemoveFacetFromObjectCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // RemoveFacetFromObjectRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   SchemaFacet: { // SchemaFacet
 *     SchemaArn: "STRING_VALUE",
 *     FacetName: "STRING_VALUE",
 *   },
 *   ObjectReference: { // ObjectReference
 *     Selector: "STRING_VALUE",
 *   },
 * };
 * const command = new RemoveFacetFromObjectCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveFacetFromObjectCommandInput - {@link RemoveFacetFromObjectCommandInput}
 * @returns {@link RemoveFacetFromObjectCommandOutput}
 * @see {@link RemoveFacetFromObjectCommandInput} for command's `input` shape.
 * @see {@link RemoveFacetFromObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling ListDirectories and check your permissions.
 *
 * @throws {@link DirectoryNotEnabledException} (client fault)
 *
 * Operations are only permitted on enabled directories.
 *
 * @throws {@link FacetValidationException} (client fault)
 *
 * The Facet that you provided was not well formed or could not be validated with the schema.
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
 * @public
 */
export class RemoveFacetFromObjectCommand extends command<RemoveFacetFromObjectCommandInput, RemoveFacetFromObjectCommandOutput>(
  _ep0,
  _mw0,
  "RemoveFacetFromObject",
  RemoveFacetFromObject$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveFacetFromObjectRequest;
      output: {};
    };
    sdk: {
      input: RemoveFacetFromObjectCommandInput;
      output: RemoveFacetFromObjectCommandOutput;
    };
  };
}
