// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateObjectRequest, CreateObjectResponse } from "../models/models_0";
import { CreateObject$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateObjectCommand}.
 */
export interface CreateObjectCommandInput extends CreateObjectRequest {}
/**
 * @public
 *
 * The output of {@link CreateObjectCommand}.
 */
export interface CreateObjectCommandOutput extends CreateObjectResponse, __MetadataBearer {}

/**
 * Creates an object in a Directory. Additionally attaches the object to a parent, if a parent reference and `LinkName` is specified. An object is simply a collection of Facet attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, CreateObjectCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, CreateObjectCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // CreateObjectRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   SchemaFacets: [ // SchemaFacetList // required
 *     { // SchemaFacet
 *       SchemaArn: "STRING_VALUE",
 *       FacetName: "STRING_VALUE",
 *     },
 *   ],
 *   ObjectAttributeList: [ // AttributeKeyAndValueList
 *     { // AttributeKeyAndValue
 *       Key: { // AttributeKey
 *         SchemaArn: "STRING_VALUE", // required
 *         FacetName: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *       },
 *       Value: { // TypedAttributeValue Union: only one key present
 *         StringValue: "STRING_VALUE",
 *         BinaryValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *         BooleanValue: true || false,
 *         NumberValue: "STRING_VALUE",
 *         DatetimeValue: new Date("TIMESTAMP"),
 *       },
 *     },
 *   ],
 *   ParentReference: { // ObjectReference
 *     Selector: "STRING_VALUE",
 *   },
 *   LinkName: "STRING_VALUE",
 * };
 * const command = new CreateObjectCommand(input);
 * const response = await client.send(command);
 * // { // CreateObjectResponse
 * //   ObjectIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateObjectCommandInput - {@link CreateObjectCommandInput}
 * @returns {@link CreateObjectCommandOutput}
 * @see {@link CreateObjectCommandInput} for command's `input` shape.
 * @see {@link CreateObjectCommandOutput} for command's `response` shape.
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
 * @throws {@link LinkNameAlreadyInUseException} (client fault)
 *
 * Indicates that a link could not be created due to a naming conflict. Choose a different name and then try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link RetryableConflictException} (client fault)
 *
 * Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.
 *
 * @throws {@link UnsupportedIndexTypeException} (client fault)
 *
 * Indicates that the requested index type is not supported.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Indicates that your request is malformed in some manner. See the exception message.
 *
 * @throws {@link CloudDirectoryServiceException}
 *
 * Base exception class for all service exceptions from CloudDirectory service.
 *
 * @example To create an object
 * ```javascript
 * //
 * const input = {
 *   DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AXQXDXvdgkOWktRXV4HnRa8",
 *   SchemaFacets: [
 *     {
 *       FacetName: "Organization_Person",
 *       SchemaArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AXQXDXvdgkOWktRXV4HnRa8/schema/ExampleOrgPersonSchema/1"
 *     }
 *   ]
 * };
 * const command = new CreateObjectCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ObjectIdentifier: "AQF0Fw173YJDlpLUV1eB50WvScvjsYXcS3K2nP1HwDuuYQ"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateObjectCommand extends command<CreateObjectCommandInput, CreateObjectCommandOutput>(
  _ep0,
  _mw0,
  "CreateObject",
  CreateObject$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateObjectRequest;
      output: CreateObjectResponse;
    };
    sdk: {
      input: CreateObjectCommandInput;
      output: CreateObjectCommandOutput;
    };
  };
}
