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
import type { GetTypedLinkFacetInformationRequest, GetTypedLinkFacetInformationResponse } from "../models/models_0";
import { GetTypedLinkFacetInformation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTypedLinkFacetInformationCommand}.
 */
export interface GetTypedLinkFacetInformationCommandInput extends GetTypedLinkFacetInformationRequest {}
/**
 * @public
 *
 * The output of {@link GetTypedLinkFacetInformationCommand}.
 */
export interface GetTypedLinkFacetInformationCommandOutput
  extends GetTypedLinkFacetInformationResponse,
    __MetadataBearer {}

/**
 * <p>Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetTypedLinkFacetInformationCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetTypedLinkFacetInformationCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // GetTypedLinkFacetInformationRequest
 *   SchemaArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetTypedLinkFacetInformationCommand(input);
 * const response = await client.send(command);
 * // { // GetTypedLinkFacetInformationResponse
 * //   IdentityAttributeOrder: [ // AttributeNameList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetTypedLinkFacetInformationCommandInput - {@link GetTypedLinkFacetInformationCommandInput}
 * @returns {@link GetTypedLinkFacetInformationCommandOutput}
 * @see {@link GetTypedLinkFacetInformationCommandInput} for command's `input` shape.
 * @see {@link GetTypedLinkFacetInformationCommandOutput} for command's `response` shape.
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
 * @example To get information about a typed link facet
 * ```javascript
 * //
 * const input = {
 *   Name: "exampletypedlink8",
 *   SchemaArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY/schema/org/1"
 * };
 * const command = new GetTypedLinkFacetInformationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   IdentityAttributeOrder: [
 *     "22"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetTypedLinkFacetInformationCommand extends $Command
  .classBuilder<
    GetTypedLinkFacetInformationCommandInput,
    GetTypedLinkFacetInformationCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonCloudDirectory_20170111", "GetTypedLinkFacetInformation", {})
  .n("CloudDirectoryClient", "GetTypedLinkFacetInformationCommand")
  .sc(GetTypedLinkFacetInformation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTypedLinkFacetInformationRequest;
      output: GetTypedLinkFacetInformationResponse;
    };
    sdk: {
      input: GetTypedLinkFacetInformationCommandInput;
      output: GetTypedLinkFacetInformationCommandOutput;
    };
  };
}
