// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTypedLinkFacetInformationRequest, GetTypedLinkFacetInformationResponse } from "../models/models_0";
import { GetTypedLinkFacetInformation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetTypedLinkFacetInformationCommandOutput extends GetTypedLinkFacetInformationResponse, __MetadataBearer {}

/**
 * Returns the identity attribute order for a specific TypedLinkFacet. For more information, see [Typed Links](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink).
 *
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
 *
 * Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling ListDirectories and check your permissions.
 *
 * @throws {@link FacetNotFoundException} (client fault)
 *
 * The specified Facet could not be found.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the [AWS Service Health Dashboard](http://status.aws.amazon.com/) site to see if there are any operational issues with the service.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * Indicates that the provided ARN value is not valid.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * Indicates that the `NextToken` value is not valid.
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
export class GetTypedLinkFacetInformationCommand extends command<GetTypedLinkFacetInformationCommandInput, GetTypedLinkFacetInformationCommandOutput>(
  _ep0,
  _mw0,
  "GetTypedLinkFacetInformation",
  GetTypedLinkFacetInformation$
) {
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
