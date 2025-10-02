// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListFacetAttributesRequest, ListFacetAttributesResponse } from "../models/models_0";
import { de_ListFacetAttributesCommand, se_ListFacetAttributesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFacetAttributesCommand}.
 */
export interface ListFacetAttributesCommandInput extends ListFacetAttributesRequest {}
/**
 * @public
 *
 * The output of {@link ListFacetAttributesCommand}.
 */
export interface ListFacetAttributesCommandOutput extends ListFacetAttributesResponse, __MetadataBearer {}

/**
 * <p>Retrieves attributes attached to the facet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListFacetAttributesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListFacetAttributesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // ListFacetAttributesRequest
 *   SchemaArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFacetAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ListFacetAttributesResponse
 * //   Attributes: [ // FacetAttributeList
 * //     { // FacetAttribute
 * //       Name: "STRING_VALUE", // required
 * //       AttributeDefinition: { // FacetAttributeDefinition
 * //         Type: "STRING" || "BINARY" || "BOOLEAN" || "NUMBER" || "DATETIME" || "VARIANT", // required
 * //         DefaultValue: { // TypedAttributeValue Union: only one key present
 * //           StringValue: "STRING_VALUE",
 * //           BinaryValue: new Uint8Array(),
 * //           BooleanValue: true || false,
 * //           NumberValue: "STRING_VALUE",
 * //           DatetimeValue: new Date("TIMESTAMP"),
 * //         },
 * //         IsImmutable: true || false,
 * //         Rules: { // RuleMap
 * //           "<keys>": { // Rule
 * //             Type: "BINARY_LENGTH" || "NUMBER_COMPARISON" || "STRING_FROM_SET" || "STRING_LENGTH",
 * //             Parameters: { // RuleParameterMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       },
 * //       AttributeReference: { // FacetAttributeReference
 * //         TargetFacetName: "STRING_VALUE", // required
 * //         TargetAttributeName: "STRING_VALUE", // required
 * //       },
 * //       RequiredBehavior: "REQUIRED_ALWAYS" || "NOT_REQUIRED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFacetAttributesCommandInput - {@link ListFacetAttributesCommandInput}
 * @returns {@link ListFacetAttributesCommandOutput}
 * @see {@link ListFacetAttributesCommandInput} for command's `input` shape.
 * @see {@link ListFacetAttributesCommandOutput} for command's `response` shape.
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
 * @example To list facet attributes
 * ```javascript
 * //
 * const input = {
 *   Name: "Organization",
 *   SchemaArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY/schema/org/1"
 * };
 * const command = new ListFacetAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Attributes: [
 *     {
 *       AttributeDefinition: {
 *         IsImmutable: false,
 *         Rules: {
 *           nameLength: {
 *             Parameters: {
 *               max: "1024",
 *               min: "1"
 *             },
 *             Type: "STRING_LENGTH"
 *           }
 *         },
 *         Type: "STRING"
 *       },
 *       Name: "account_id",
 *       RequiredBehavior: "NOT_REQUIRED"
 *     },
 *     {
 *       AttributeDefinition: {
 *         IsImmutable: false,
 *         Rules: {
 *           nameLength: {
 *             Parameters: {
 *               max: "1024",
 *               min: "1"
 *             },
 *             Type: "STRING_LENGTH"
 *           }
 *         },
 *         Type: "STRING"
 *       },
 *       Name: "account_name",
 *       RequiredBehavior: "NOT_REQUIRED"
 *     },
 *     {
 *       AttributeDefinition: {
 *         IsImmutable: false,
 *         Rules: {
 *           nameLength: {
 *             Parameters: {
 *               max: "1024",
 *               min: "1"
 *             },
 *             Type: "STRING_LENGTH"
 *           }
 *         },
 *         Type: "STRING"
 *       },
 *       Name: "description",
 *       RequiredBehavior: "NOT_REQUIRED"
 *     },
 *     {
 *       AttributeDefinition: {
 *         IsImmutable: false,
 *         Rules: {
 *           nameLength: {
 *             Parameters: {
 *               max: "1024",
 *               min: "1"
 *             },
 *             Type: "STRING_LENGTH"
 *           }
 *         },
 *         Type: "STRING"
 *       },
 *       Name: "email",
 *       RequiredBehavior: "NOT_REQUIRED"
 *     },
 *     {
 *       AttributeDefinition: {
 *         IsImmutable: false,
 *         Rules: {
 *           nameLength: {
 *             Parameters: {
 *               max: "1024",
 *               min: "1"
 *             },
 *             Type: "STRING_LENGTH"
 *           }
 *         },
 *         Type: "STRING"
 *       },
 *       Name: "mailing_address_city",
 *       RequiredBehavior: "NOT_REQUIRED"
 *     },
 *     {
 *       AttributeDefinition: {
 *         IsImmutable: false,
 *         Rules: {
 *           nameLength: {
 *             Parameters: {
 *               max: "1024",
 *               min: "1"
 *             },
 *             Type: "STRING_LENGTH"
 *           }
 *         },
 *         Type: "STRING"
 *       },
 *       Name: "mailing_address_country",
 *       RequiredBehavior: "NOT_REQUIRED"
 *     },
 *     {
 *       AttributeDefinition: {
 *         IsImmutable: false,
 *         Rules: {
 *           nameLength: {
 *             Parameters: {
 *               max: "1024",
 *               min: "1"
 *             },
 *             Type: "STRING_LENGTH"
 *           }
 *         },
 *         Type: "STRING"
 *       },
 *       Name: "mailing_address_postal_code",
 *       RequiredBehavior: "NOT_REQUIRED"
 *     },
 *     {
 *       AttributeDefinition: {
 *         IsImmutable: false,
 *         Rules: {
 *           nameLength: {
 *             Parameters: {
 *               max: "1024",
 *               min: "1"
 *             },
 *             Type: "STRING_LENGTH"
 *           }
 *         },
 *         Type: "STRING"
 *       },
 *       Name: "mailing_address_state",
 *       RequiredBehavior: "NOT_REQUIRED"
 *     },
 *     {
 *       AttributeDefinition: {
 *         IsImmutable: false,
 *         Rules: {
 *           nameLength: {
 *             Parameters: {
 *               max: "1024",
 *               min: "1"
 *             },
 *             Type: "STRING_LENGTH"
 *           }
 *         },
 *         Type: "STRING"
 *       },
 *       Name: "mailing_address_street1",
 *       RequiredBehavior: "NOT_REQUIRED"
 *     },
 *     {
 *       AttributeDefinition: {
 *         IsImmutable: false,
 *         Rules: {
 *           nameLength: {
 *             Parameters: {
 *               max: "1024",
 *               min: "1"
 *             },
 *             Type: "STRING_LENGTH"
 *           }
 *         },
 *         Type: "STRING"
 *       },
 *       Name: "mailing_address_street2",
 *       RequiredBehavior: "NOT_REQUIRED"
 *     }
 *   ],
 *   NextToken: "V0b3JnYW5pemF0aW9uX3N0YXR1cw=="
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListFacetAttributesCommand extends $Command
  .classBuilder<
    ListFacetAttributesCommandInput,
    ListFacetAttributesCommandOutput,
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
  .s("AmazonCloudDirectory_20170111", "ListFacetAttributes", {})
  .n("CloudDirectoryClient", "ListFacetAttributesCommand")
  .f(void 0, void 0)
  .ser(se_ListFacetAttributesCommand)
  .de(de_ListFacetAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFacetAttributesRequest;
      output: ListFacetAttributesResponse;
    };
    sdk: {
      input: ListFacetAttributesCommandInput;
      output: ListFacetAttributesCommandOutput;
    };
  };
}
