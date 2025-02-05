// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchWriteRequest, BatchWriteResponse } from "../models/models_0";
import { de_BatchWriteCommand, se_BatchWriteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchWriteCommand}.
 */
export interface BatchWriteCommandInput extends BatchWriteRequest {}
/**
 * @public
 *
 * The output of {@link BatchWriteCommand}.
 */
export interface BatchWriteCommandOutput extends BatchWriteResponse, __MetadataBearer {}

/**
 * <p>Performs all the write operations in a batch. Either all the operations succeed or
 *       none.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, BatchWriteCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, BatchWriteCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudDirectoryClient(config);
 * const input = { // BatchWriteRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   Operations: [ // BatchWriteOperationList // required
 *     { // BatchWriteOperation
 *       CreateObject: { // BatchCreateObject
 *         SchemaFacet: [ // SchemaFacetList // required
 *           { // SchemaFacet
 *             SchemaArn: "STRING_VALUE",
 *             FacetName: "STRING_VALUE",
 *           },
 *         ],
 *         ObjectAttributeList: [ // AttributeKeyAndValueList // required
 *           { // AttributeKeyAndValue
 *             Key: { // AttributeKey
 *               SchemaArn: "STRING_VALUE", // required
 *               FacetName: "STRING_VALUE", // required
 *               Name: "STRING_VALUE", // required
 *             },
 *             Value: { // TypedAttributeValue Union: only one key present
 *               StringValue: "STRING_VALUE",
 *               BinaryValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *               BooleanValue: true || false,
 *               NumberValue: "STRING_VALUE",
 *               DatetimeValue: new Date("TIMESTAMP"),
 *             },
 *           },
 *         ],
 *         ParentReference: { // ObjectReference
 *           Selector: "STRING_VALUE",
 *         },
 *         LinkName: "STRING_VALUE",
 *         BatchReferenceName: "STRING_VALUE",
 *       },
 *       AttachObject: { // BatchAttachObject
 *         ParentReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         ChildReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         LinkName: "STRING_VALUE", // required
 *       },
 *       DetachObject: { // BatchDetachObject
 *         ParentReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         LinkName: "STRING_VALUE", // required
 *         BatchReferenceName: "STRING_VALUE",
 *       },
 *       UpdateObjectAttributes: { // BatchUpdateObjectAttributes
 *         ObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         AttributeUpdates: [ // ObjectAttributeUpdateList // required
 *           { // ObjectAttributeUpdate
 *             ObjectAttributeKey: {
 *               SchemaArn: "STRING_VALUE", // required
 *               FacetName: "STRING_VALUE", // required
 *               Name: "STRING_VALUE", // required
 *             },
 *             ObjectAttributeAction: { // ObjectAttributeAction
 *               ObjectAttributeActionType: "CREATE_OR_UPDATE" || "DELETE",
 *               ObjectAttributeUpdateValue: {//  Union: only one key present
 *                 StringValue: "STRING_VALUE",
 *                 BinaryValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *                 BooleanValue: true || false,
 *                 NumberValue: "STRING_VALUE",
 *                 DatetimeValue: new Date("TIMESTAMP"),
 *               },
 *             },
 *           },
 *         ],
 *       },
 *       DeleteObject: { // BatchDeleteObject
 *         ObjectReference: "<ObjectReference>", // required
 *       },
 *       AddFacetToObject: { // BatchAddFacetToObject
 *         SchemaFacet: {
 *           SchemaArn: "STRING_VALUE",
 *           FacetName: "STRING_VALUE",
 *         },
 *         ObjectAttributeList: [ // required
 *           {
 *             Key: {
 *               SchemaArn: "STRING_VALUE", // required
 *               FacetName: "STRING_VALUE", // required
 *               Name: "STRING_VALUE", // required
 *             },
 *             Value: {//  Union: only one key present
 *               StringValue: "STRING_VALUE",
 *               BinaryValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *               BooleanValue: true || false,
 *               NumberValue: "STRING_VALUE",
 *               DatetimeValue: new Date("TIMESTAMP"),
 *             },
 *           },
 *         ],
 *         ObjectReference: "<ObjectReference>", // required
 *       },
 *       RemoveFacetFromObject: { // BatchRemoveFacetFromObject
 *         SchemaFacet: {
 *           SchemaArn: "STRING_VALUE",
 *           FacetName: "STRING_VALUE",
 *         },
 *         ObjectReference: "<ObjectReference>", // required
 *       },
 *       AttachPolicy: { // BatchAttachPolicy
 *         PolicyReference: "<ObjectReference>", // required
 *         ObjectReference: "<ObjectReference>", // required
 *       },
 *       DetachPolicy: { // BatchDetachPolicy
 *         PolicyReference: "<ObjectReference>", // required
 *         ObjectReference: "<ObjectReference>", // required
 *       },
 *       CreateIndex: { // BatchCreateIndex
 *         OrderedIndexedAttributeList: [ // AttributeKeyList // required
 *           {
 *             SchemaArn: "STRING_VALUE", // required
 *             FacetName: "STRING_VALUE", // required
 *             Name: "STRING_VALUE", // required
 *           },
 *         ],
 *         IsUnique: true || false, // required
 *         ParentReference: "<ObjectReference>",
 *         LinkName: "STRING_VALUE",
 *         BatchReferenceName: "STRING_VALUE",
 *       },
 *       AttachToIndex: { // BatchAttachToIndex
 *         IndexReference: "<ObjectReference>", // required
 *         TargetReference: "<ObjectReference>", // required
 *       },
 *       DetachFromIndex: { // BatchDetachFromIndex
 *         IndexReference: "<ObjectReference>", // required
 *         TargetReference: "<ObjectReference>", // required
 *       },
 *       AttachTypedLink: { // BatchAttachTypedLink
 *         SourceObjectReference: "<ObjectReference>", // required
 *         TargetObjectReference: "<ObjectReference>", // required
 *         TypedLinkFacet: { // TypedLinkSchemaAndFacetName
 *           SchemaArn: "STRING_VALUE", // required
 *           TypedLinkName: "STRING_VALUE", // required
 *         },
 *         Attributes: [ // AttributeNameAndValueList // required
 *           { // AttributeNameAndValue
 *             AttributeName: "STRING_VALUE", // required
 *             Value: {//  Union: only one key present
 *               StringValue: "STRING_VALUE",
 *               BinaryValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *               BooleanValue: true || false,
 *               NumberValue: "STRING_VALUE",
 *               DatetimeValue: new Date("TIMESTAMP"),
 *             },
 *           },
 *         ],
 *       },
 *       DetachTypedLink: { // BatchDetachTypedLink
 *         TypedLinkSpecifier: { // TypedLinkSpecifier
 *           TypedLinkFacet: {
 *             SchemaArn: "STRING_VALUE", // required
 *             TypedLinkName: "STRING_VALUE", // required
 *           },
 *           SourceObjectReference: "<ObjectReference>", // required
 *           TargetObjectReference: "<ObjectReference>", // required
 *           IdentityAttributeValues: [ // required
 *             {
 *               AttributeName: "STRING_VALUE", // required
 *               Value: {//  Union: only one key present
 *                 StringValue: "STRING_VALUE",
 *                 BinaryValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *                 BooleanValue: true || false,
 *                 NumberValue: "STRING_VALUE",
 *                 DatetimeValue: new Date("TIMESTAMP"),
 *               },
 *             },
 *           ],
 *         },
 *       },
 *       UpdateLinkAttributes: { // BatchUpdateLinkAttributes
 *         TypedLinkSpecifier: {
 *           TypedLinkFacet: {
 *             SchemaArn: "STRING_VALUE", // required
 *             TypedLinkName: "STRING_VALUE", // required
 *           },
 *           SourceObjectReference: "<ObjectReference>", // required
 *           TargetObjectReference: "<ObjectReference>", // required
 *           IdentityAttributeValues: [ // required
 *             {
 *               AttributeName: "STRING_VALUE", // required
 *               Value: "<TypedAttributeValue>", // required
 *             },
 *           ],
 *         },
 *         AttributeUpdates: [ // LinkAttributeUpdateList // required
 *           { // LinkAttributeUpdate
 *             AttributeKey: {
 *               SchemaArn: "STRING_VALUE", // required
 *               FacetName: "STRING_VALUE", // required
 *               Name: "STRING_VALUE", // required
 *             },
 *             AttributeAction: { // LinkAttributeAction
 *               AttributeActionType: "CREATE_OR_UPDATE" || "DELETE",
 *               AttributeUpdateValue: "<TypedAttributeValue>",
 *             },
 *           },
 *         ],
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchWriteCommand(input);
 * const response = await client.send(command);
 * // { // BatchWriteResponse
 * //   Responses: [ // BatchWriteOperationResponseList
 * //     { // BatchWriteOperationResponse
 * //       CreateObject: { // BatchCreateObjectResponse
 * //         ObjectIdentifier: "STRING_VALUE",
 * //       },
 * //       AttachObject: { // BatchAttachObjectResponse
 * //         attachedObjectIdentifier: "STRING_VALUE",
 * //       },
 * //       DetachObject: { // BatchDetachObjectResponse
 * //         detachedObjectIdentifier: "STRING_VALUE",
 * //       },
 * //       UpdateObjectAttributes: { // BatchUpdateObjectAttributesResponse
 * //         ObjectIdentifier: "STRING_VALUE",
 * //       },
 * //       DeleteObject: {},
 * //       AddFacetToObject: {},
 * //       RemoveFacetFromObject: {},
 * //       AttachPolicy: {},
 * //       DetachPolicy: {},
 * //       CreateIndex: { // BatchCreateIndexResponse
 * //         ObjectIdentifier: "STRING_VALUE",
 * //       },
 * //       AttachToIndex: { // BatchAttachToIndexResponse
 * //         AttachedObjectIdentifier: "STRING_VALUE",
 * //       },
 * //       DetachFromIndex: { // BatchDetachFromIndexResponse
 * //         DetachedObjectIdentifier: "STRING_VALUE",
 * //       },
 * //       AttachTypedLink: { // BatchAttachTypedLinkResponse
 * //         TypedLinkSpecifier: { // TypedLinkSpecifier
 * //           TypedLinkFacet: { // TypedLinkSchemaAndFacetName
 * //             SchemaArn: "STRING_VALUE", // required
 * //             TypedLinkName: "STRING_VALUE", // required
 * //           },
 * //           SourceObjectReference: { // ObjectReference
 * //             Selector: "STRING_VALUE",
 * //           },
 * //           TargetObjectReference: {
 * //             Selector: "STRING_VALUE",
 * //           },
 * //           IdentityAttributeValues: [ // AttributeNameAndValueList // required
 * //             { // AttributeNameAndValue
 * //               AttributeName: "STRING_VALUE", // required
 * //               Value: { // TypedAttributeValue Union: only one key present
 * //                 StringValue: "STRING_VALUE",
 * //                 BinaryValue: new Uint8Array(),
 * //                 BooleanValue: true || false,
 * //                 NumberValue: "STRING_VALUE",
 * //                 DatetimeValue: new Date("TIMESTAMP"),
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       DetachTypedLink: {},
 * //       UpdateLinkAttributes: {},
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchWriteCommandInput - {@link BatchWriteCommandInput}
 * @returns {@link BatchWriteCommandOutput}
 * @see {@link BatchWriteCommandInput} for command's `input` shape.
 * @see {@link BatchWriteCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling <a>ListDirectories</a> and check your permissions.</p>
 *
 * @throws {@link BatchWriteException} (client fault)
 *  <p>A <code>BatchWrite</code> exception has occurred.</p>
 *
 * @throws {@link DirectoryNotEnabledException} (client fault)
 *  <p>Operations are only permitted on enabled directories.</p>
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
 * @example To run a batch write command
 * ```javascript
 * //
 * const input = {
 *   "DirectoryArn": "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY",
 *   "Operations": []
 * };
 * const command = new BatchWriteCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Responses": []
 * }
 * *\/
 * // example id: to-run-a-batch-write-command-1506122878964
 * ```
 *
 */
export class BatchWriteCommand extends $Command
  .classBuilder<
    BatchWriteCommandInput,
    BatchWriteCommandOutput,
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
  .s("AmazonCloudDirectory_20170111", "BatchWrite", {})
  .n("CloudDirectoryClient", "BatchWriteCommand")
  .f(void 0, void 0)
  .ser(se_BatchWriteCommand)
  .de(de_BatchWriteCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchWriteRequest;
      output: BatchWriteResponse;
    };
    sdk: {
      input: BatchWriteCommandInput;
      output: BatchWriteCommandOutput;
    };
  };
}
