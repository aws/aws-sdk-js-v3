// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListFacetNamesRequest, ListFacetNamesResponse } from "../models/models_0";
import { de_ListFacetNamesCommand, se_ListFacetNamesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFacetNamesCommand}.
 */
export interface ListFacetNamesCommandInput extends ListFacetNamesRequest {}
/**
 * @public
 *
 * The output of {@link ListFacetNamesCommand}.
 */
export interface ListFacetNamesCommandOutput extends ListFacetNamesResponse, __MetadataBearer {}

/**
 * <p>Retrieves the names of facets that exist in a schema.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListFacetNamesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListFacetNamesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const input = { // ListFacetNamesRequest
 *   SchemaArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFacetNamesCommand(input);
 * const response = await client.send(command);
 * // { // ListFacetNamesResponse
 * //   FacetNames: [ // FacetNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFacetNamesCommandInput - {@link ListFacetNamesCommandInput}
 * @returns {@link ListFacetNamesCommandOutput}
 * @see {@link ListFacetNamesCommandInput} for command's `input` shape.
 * @see {@link ListFacetNamesCommandOutput} for command's `response` shape.
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
 * @example To list facet names
 * ```javascript
 * //
 * const input = {
 *   SchemaArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY/schema/org/1"
 * };
 * const command = new ListFacetNamesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   FacetNames: [
 *     "Legal_Entity",
 *     "Organization",
 *     "node1",
 *     "node2",
 *     "nodex",
 *     "policyfacet"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListFacetNamesCommand extends $Command
  .classBuilder<
    ListFacetNamesCommandInput,
    ListFacetNamesCommandOutput,
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
  .s("AmazonCloudDirectory_20170111", "ListFacetNames", {})
  .n("CloudDirectoryClient", "ListFacetNamesCommand")
  .f(void 0, void 0)
  .ser(se_ListFacetNamesCommand)
  .de(de_ListFacetNamesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFacetNamesRequest;
      output: ListFacetNamesResponse;
    };
    sdk: {
      input: ListFacetNamesCommandInput;
      output: ListFacetNamesCommandOutput;
    };
  };
}
