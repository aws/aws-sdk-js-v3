// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListOutgoingTypedLinksRequest, ListOutgoingTypedLinksResponse } from "../models/models_0";
import { de_ListOutgoingTypedLinksCommand, se_ListOutgoingTypedLinksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOutgoingTypedLinksCommand}.
 */
export interface ListOutgoingTypedLinksCommandInput extends ListOutgoingTypedLinksRequest {}
/**
 * @public
 *
 * The output of {@link ListOutgoingTypedLinksCommand}.
 */
export interface ListOutgoingTypedLinksCommandOutput extends ListOutgoingTypedLinksResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a>
 *       information for an object. It also supports filtering by typed link facet and identity
 *       attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListOutgoingTypedLinksCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListOutgoingTypedLinksCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const input = { // ListOutgoingTypedLinksRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   ObjectReference: { // ObjectReference
 *     Selector: "STRING_VALUE",
 *   },
 *   FilterAttributeRanges: [ // TypedLinkAttributeRangeList
 *     { // TypedLinkAttributeRange
 *       AttributeName: "STRING_VALUE",
 *       Range: { // TypedAttributeValueRange
 *         StartMode: "FIRST" || "LAST" || "LAST_BEFORE_MISSING_VALUES" || "INCLUSIVE" || "EXCLUSIVE", // required
 *         StartValue: { // TypedAttributeValue Union: only one key present
 *           StringValue: "STRING_VALUE",
 *           BinaryValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *           BooleanValue: true || false,
 *           NumberValue: "STRING_VALUE",
 *           DatetimeValue: new Date("TIMESTAMP"),
 *         },
 *         EndMode: "FIRST" || "LAST" || "LAST_BEFORE_MISSING_VALUES" || "INCLUSIVE" || "EXCLUSIVE", // required
 *         EndValue: {//  Union: only one key present
 *           StringValue: "STRING_VALUE",
 *           BinaryValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *           BooleanValue: true || false,
 *           NumberValue: "STRING_VALUE",
 *           DatetimeValue: new Date("TIMESTAMP"),
 *         },
 *       },
 *     },
 *   ],
 *   FilterTypedLink: { // TypedLinkSchemaAndFacetName
 *     SchemaArn: "STRING_VALUE", // required
 *     TypedLinkName: "STRING_VALUE", // required
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ConsistencyLevel: "SERIALIZABLE" || "EVENTUAL",
 * };
 * const command = new ListOutgoingTypedLinksCommand(input);
 * const response = await client.send(command);
 * // { // ListOutgoingTypedLinksResponse
 * //   TypedLinkSpecifiers: [ // TypedLinkSpecifierList
 * //     { // TypedLinkSpecifier
 * //       TypedLinkFacet: { // TypedLinkSchemaAndFacetName
 * //         SchemaArn: "STRING_VALUE", // required
 * //         TypedLinkName: "STRING_VALUE", // required
 * //       },
 * //       SourceObjectReference: { // ObjectReference
 * //         Selector: "STRING_VALUE",
 * //       },
 * //       TargetObjectReference: {
 * //         Selector: "STRING_VALUE",
 * //       },
 * //       IdentityAttributeValues: [ // AttributeNameAndValueList // required
 * //         { // AttributeNameAndValue
 * //           AttributeName: "STRING_VALUE", // required
 * //           Value: { // TypedAttributeValue Union: only one key present
 * //             StringValue: "STRING_VALUE",
 * //             BinaryValue: new Uint8Array(),
 * //             BooleanValue: true || false,
 * //             NumberValue: "STRING_VALUE",
 * //             DatetimeValue: new Date("TIMESTAMP"),
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOutgoingTypedLinksCommandInput - {@link ListOutgoingTypedLinksCommandInput}
 * @returns {@link ListOutgoingTypedLinksCommandOutput}
 * @see {@link ListOutgoingTypedLinksCommandInput} for command's `input` shape.
 * @see {@link ListOutgoingTypedLinksCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListOutgoingTypedLinksCommand extends $Command
  .classBuilder<
    ListOutgoingTypedLinksCommandInput,
    ListOutgoingTypedLinksCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonCloudDirectory_20170111", "ListOutgoingTypedLinks", {})
  .n("CloudDirectoryClient", "ListOutgoingTypedLinksCommand")
  .f(void 0, void 0)
  .ser(se_ListOutgoingTypedLinksCommand)
  .de(de_ListOutgoingTypedLinksCommand)
  .build() {}
