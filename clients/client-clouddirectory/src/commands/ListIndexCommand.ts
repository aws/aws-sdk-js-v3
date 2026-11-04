// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIndexRequest, ListIndexResponse } from "../models/models_0";
import { ListIndex$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIndexCommand}.
 */
export interface ListIndexCommandInput extends ListIndexRequest {}
/**
 * @public
 *
 * The output of {@link ListIndexCommand}.
 */
export interface ListIndexCommandOutput extends ListIndexResponse, __MetadataBearer {}

/**
 * Lists objects attached to the specified index.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListIndexCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListIndexCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // ListIndexRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   RangesOnIndexedValues: [ // ObjectAttributeRangeList
 *     { // ObjectAttributeRange
 *       AttributeKey: { // AttributeKey
 *         SchemaArn: "STRING_VALUE", // required
 *         FacetName: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *       },
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
 *   IndexReference: { // ObjectReference
 *     Selector: "STRING_VALUE",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ConsistencyLevel: "SERIALIZABLE" || "EVENTUAL",
 * };
 * const command = new ListIndexCommand(input);
 * const response = await client.send(command);
 * // { // ListIndexResponse
 * //   IndexAttachments: [ // IndexAttachmentList
 * //     { // IndexAttachment
 * //       IndexedAttributes: [ // AttributeKeyAndValueList
 * //         { // AttributeKeyAndValue
 * //           Key: { // AttributeKey
 * //             SchemaArn: "STRING_VALUE", // required
 * //             FacetName: "STRING_VALUE", // required
 * //             Name: "STRING_VALUE", // required
 * //           },
 * //           Value: { // TypedAttributeValue Union: only one key present
 * //             StringValue: "STRING_VALUE",
 * //             BinaryValue: new Uint8Array(),
 * //             BooleanValue: true || false,
 * //             NumberValue: "STRING_VALUE",
 * //             DatetimeValue: new Date("TIMESTAMP"),
 * //           },
 * //         },
 * //       ],
 * //       ObjectIdentifier: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIndexCommandInput - {@link ListIndexCommandInput}
 * @returns {@link ListIndexCommandOutput}
 * @see {@link ListIndexCommandInput} for command's `input` shape.
 * @see {@link ListIndexCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * Indicates that the `NextToken` value is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * Indicates that limits are exceeded. See [Limits](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html) for more information.
 *
 * @throws {@link NotIndexException} (client fault)
 *
 * Indicates that the requested operation can only operate on index objects.
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
 * @example To list an index
 * ```javascript
 * //
 * const input = {
 *   DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY",
 *   IndexReference: {
 *     Selector: "$AQGG_ADlfNZBzYHY_JgDt3TW45F26R1HTY2z-stwKBte_Q"
 *   }
 * };
 * const command = new ListIndexCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   IndexAttachments: [
 *     {
 *       IndexedAttributes: [
 *         {
 *           Key: {
 *             FacetName: "Organization",
 *             Name: "description",
 *             SchemaArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY/schema/org/1"
 *           },
 *           Value:           { /* empty *\/ }
 *         }
 *       ],
 *       ObjectIdentifier: "AQGG_ADlfNZBzYHY_JgDt3TWcU7IARvOTeaR09zme1sVsw"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListIndexCommand extends command<ListIndexCommandInput, ListIndexCommandOutput>(
  _ep0,
  _mw0,
  "ListIndex",
  ListIndex$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIndexRequest;
      output: ListIndexResponse;
    };
    sdk: {
      input: ListIndexCommandInput;
      output: ListIndexCommandOutput;
    };
  };
}
