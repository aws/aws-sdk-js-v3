// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTypedLinkFacetNamesRequest, ListTypedLinkFacetNamesResponse } from "../models/models_0";
import { de_ListTypedLinkFacetNamesCommand, se_ListTypedLinkFacetNamesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTypedLinkFacetNamesCommand}.
 */
export interface ListTypedLinkFacetNamesCommandInput extends ListTypedLinkFacetNamesRequest {}
/**
 * @public
 *
 * The output of {@link ListTypedLinkFacetNamesCommand}.
 */
export interface ListTypedLinkFacetNamesCommandOutput extends ListTypedLinkFacetNamesResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of <code>TypedLink</code> facet names for a particular schema.
 *       For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListTypedLinkFacetNamesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListTypedLinkFacetNamesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const input = { // ListTypedLinkFacetNamesRequest
 *   SchemaArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListTypedLinkFacetNamesCommand(input);
 * const response = await client.send(command);
 * // { // ListTypedLinkFacetNamesResponse
 * //   FacetNames: [ // TypedLinkNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTypedLinkFacetNamesCommandInput - {@link ListTypedLinkFacetNamesCommandInput}
 * @returns {@link ListTypedLinkFacetNamesCommandOutput}
 * @see {@link ListTypedLinkFacetNamesCommandInput} for command's `input` shape.
 * @see {@link ListTypedLinkFacetNamesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling <a>ListDirectories</a> and check your permissions.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>Indicates that the provided ARN value is not valid.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>Indicates that the <code>NextToken</code> value is not valid.</p>
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
export class ListTypedLinkFacetNamesCommand extends $Command
  .classBuilder<
    ListTypedLinkFacetNamesCommandInput,
    ListTypedLinkFacetNamesCommandOutput,
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
  .s("AmazonCloudDirectory_20170111", "ListTypedLinkFacetNames", {})
  .n("CloudDirectoryClient", "ListTypedLinkFacetNamesCommand")
  .f(void 0, void 0)
  .ser(se_ListTypedLinkFacetNamesCommand)
  .de(de_ListTypedLinkFacetNamesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTypedLinkFacetNamesRequest;
      output: ListTypedLinkFacetNamesResponse;
    };
    sdk: {
      input: ListTypedLinkFacetNamesCommandInput;
      output: ListTypedLinkFacetNamesCommandOutput;
    };
  };
}
