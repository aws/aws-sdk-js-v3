// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveFacetFromObjectRequest, RemoveFacetFromObjectResponse } from "../models/models_0";
import { de_RemoveFacetFromObjectCommand, se_RemoveFacetFromObjectCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Removes the specified facet from the specified object.</p>
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link RetryableConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that your request is malformed in some manner. See the exception
 *       message.</p>
 *
 * @throws {@link CloudDirectoryServiceException}
 * <p>Base exception class for all service exceptions from CloudDirectory service.</p>
 *
 *
 * @public
 */
export class RemoveFacetFromObjectCommand extends $Command
  .classBuilder<
    RemoveFacetFromObjectCommandInput,
    RemoveFacetFromObjectCommandOutput,
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
  .s("AmazonCloudDirectory_20170111", "RemoveFacetFromObject", {})
  .n("CloudDirectoryClient", "RemoveFacetFromObjectCommand")
  .f(void 0, void 0)
  .ser(se_RemoveFacetFromObjectCommand)
  .de(de_RemoveFacetFromObjectCommand)
  .build() {
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
