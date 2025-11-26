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
import type { GetFacetRequest, GetFacetResponse } from "../models/models_0";
import { GetFacet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFacetCommand}.
 */
export interface GetFacetCommandInput extends GetFacetRequest {}
/**
 * @public
 *
 * The output of {@link GetFacetCommand}.
 */
export interface GetFacetCommandOutput extends GetFacetResponse, __MetadataBearer {}

/**
 * <p>Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema
 *       facets -- published, development, or applied.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetFacetCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetFacetCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // GetFacetRequest
 *   SchemaArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetFacetCommand(input);
 * const response = await client.send(command);
 * // { // GetFacetResponse
 * //   Facet: { // Facet
 * //     Name: "STRING_VALUE",
 * //     ObjectType: "NODE" || "LEAF_NODE" || "POLICY" || "INDEX",
 * //     FacetStyle: "STATIC" || "DYNAMIC",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFacetCommandInput - {@link GetFacetCommandInput}
 * @returns {@link GetFacetCommandOutput}
 * @see {@link GetFacetCommandInput} for command's `input` shape.
 * @see {@link GetFacetCommandOutput} for command's `response` shape.
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
 * @example To get information about a facet
 * ```javascript
 * //
 * const input = {
 *   Name: "node2",
 *   SchemaArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY/schema/org/1"
 * };
 * const command = new GetFacetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Facet: {
 *     Name: "node2",
 *     ObjectType: "NODE"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetFacetCommand extends $Command
  .classBuilder<
    GetFacetCommandInput,
    GetFacetCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonCloudDirectory_20170111", "GetFacet", {})
  .n("CloudDirectoryClient", "GetFacetCommand")
  .sc(GetFacet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFacetRequest;
      output: GetFacetResponse;
    };
    sdk: {
      input: GetFacetCommandInput;
      output: GetFacetCommandOutput;
    };
  };
}
