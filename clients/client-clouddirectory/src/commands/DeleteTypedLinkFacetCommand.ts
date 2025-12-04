// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudDirectoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteTypedLinkFacetRequest, DeleteTypedLinkFacetResponse } from "../models/models_0";
import { DeleteTypedLinkFacet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTypedLinkFacetCommand}.
 */
export interface DeleteTypedLinkFacetCommandInput extends DeleteTypedLinkFacetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTypedLinkFacetCommand}.
 */
export interface DeleteTypedLinkFacetCommandOutput extends DeleteTypedLinkFacetResponse, __MetadataBearer {}

/**
 * <p>Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, DeleteTypedLinkFacetCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, DeleteTypedLinkFacetCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // DeleteTypedLinkFacetRequest
 *   SchemaArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteTypedLinkFacetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTypedLinkFacetCommandInput - {@link DeleteTypedLinkFacetCommandInput}
 * @returns {@link DeleteTypedLinkFacetCommandOutput}
 * @see {@link DeleteTypedLinkFacetCommandInput} for command's `input` shape.
 * @see {@link DeleteTypedLinkFacetCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling <a>ListDirectories</a> and check your permissions.</p>
 *
 * @throws {@link FacetNotFoundException} (client fault)
 *  <p>The specified <a>Facet</a> could not be found.</p>
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
 * @example To delete a typed link facet
 * ```javascript
 * //
 * const input = {
 *   Name: "ExampleFacet",
 *   SchemaArn: "arn:aws:clouddirectory:us-west-2:45132example:schema/development/typedlinkschematest"
 * };
 * const command = new DeleteTypedLinkFacetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteTypedLinkFacetCommand extends $Command
  .classBuilder<
    DeleteTypedLinkFacetCommandInput,
    DeleteTypedLinkFacetCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonCloudDirectory_20170111", "DeleteTypedLinkFacet", {})
  .n("CloudDirectoryClient", "DeleteTypedLinkFacetCommand")
  .sc(DeleteTypedLinkFacet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTypedLinkFacetRequest;
      output: {};
    };
    sdk: {
      input: DeleteTypedLinkFacetCommandInput;
      output: DeleteTypedLinkFacetCommandOutput;
    };
  };
}
