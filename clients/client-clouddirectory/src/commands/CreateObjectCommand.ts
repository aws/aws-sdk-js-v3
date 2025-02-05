// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateObjectRequest, CreateObjectResponse } from "../models/models_0";
import { de_CreateObjectCommand, se_CreateObjectCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates an object in a <a>Directory</a>. Additionally attaches the object to
 *       a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a
 *       collection of <a>Facet</a> attributes. You can also use this API call to create a
 *       policy object, if the facet from which you create the object is a policy facet. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, CreateObjectCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, CreateObjectCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling <a>ListDirectories</a> and check your permissions.</p>
 *
 * @throws {@link DirectoryNotEnabledException} (client fault)
 *  <p>Operations are only permitted on enabled directories.</p>
 *
 * @throws {@link FacetValidationException} (client fault)
 *  <p>The <a>Facet</a> that you provided was not well formed or could not be
 *       validated with the schema.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>Indicates that the provided ARN value is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
 *
 * @throws {@link LinkNameAlreadyInUseException} (client fault)
 *  <p>Indicates that a link could not be created due to a naming conflict. Choose a different
 *       name and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link RetryableConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 *
 * @throws {@link UnsupportedIndexTypeException} (client fault)
 *  <p>Indicates that the requested index type is not supported.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that your request is malformed in some manner. See the exception
 *       message.</p>
 *
 * @throws {@link CloudDirectoryServiceException}
 * <p>Base exception class for all service exceptions from CloudDirectory service.</p>
 *
 * @public
 * @example To create an object
 * ```javascript
 * //
 * const input = {
 *   "DirectoryArn": "arn:aws:clouddirectory:us-west-2:45132example:directory/AXQXDXvdgkOWktRXV4HnRa8",
 *   "SchemaFacets": [
 *     {
 *       "FacetName": "Organization_Person",
 *       "SchemaArn": "arn:aws:clouddirectory:us-west-2:45132example:directory/AXQXDXvdgkOWktRXV4HnRa8/schema/ExampleOrgPersonSchema/1"
 *     }
 *   ]
 * };
 * const command = new CreateObjectCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ObjectIdentifier": "AQF0Fw173YJDlpLUV1eB50WvScvjsYXcS3K2nP1HwDuuYQ"
 * }
 * *\/
 * // example id: to-create-an-object-1494010287120
 * ```
 *
 */
export class CreateObjectCommand extends $Command
  .classBuilder<
    CreateObjectCommandInput,
    CreateObjectCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonCloudDirectory_20170111", "CreateObject", {})
  .n("CloudDirectoryClient", "CreateObjectCommand")
  .f(void 0, void 0)
  .ser(se_CreateObjectCommand)
  .de(de_CreateObjectCommand)
  .build() {
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
