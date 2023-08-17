// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { BatchReadRequest, BatchReadResponse } from "../models/models_0";
import { de_BatchReadCommand, se_BatchReadCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchReadCommand}.
 */
export interface BatchReadCommandInput extends BatchReadRequest {}
/**
 * @public
 *
 * The output of {@link BatchReadCommand}.
 */
export interface BatchReadCommandOutput extends BatchReadResponse, __MetadataBearer {}

/**
 * @public
 * <p>Performs all the read operations in a batch. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, BatchReadCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, BatchReadCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const input = { // BatchReadRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   Operations: [ // BatchReadOperationList // required
 *     { // BatchReadOperation
 *       ListObjectAttributes: { // BatchListObjectAttributes
 *         ObjectReference: { // ObjectReference
 *           Selector: "STRING_VALUE",
 *         },
 *         NextToken: "STRING_VALUE",
 *         MaxResults: Number("int"),
 *         FacetFilter: { // SchemaFacet
 *           SchemaArn: "STRING_VALUE",
 *           FacetName: "STRING_VALUE",
 *         },
 *       },
 *       ListObjectChildren: { // BatchListObjectChildren
 *         ObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         NextToken: "STRING_VALUE",
 *         MaxResults: Number("int"),
 *       },
 *       ListAttachedIndices: { // BatchListAttachedIndices
 *         TargetReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         NextToken: "STRING_VALUE",
 *         MaxResults: Number("int"),
 *       },
 *       ListObjectParentPaths: { // BatchListObjectParentPaths
 *         ObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         NextToken: "STRING_VALUE",
 *         MaxResults: Number("int"),
 *       },
 *       GetObjectInformation: { // BatchGetObjectInformation
 *         ObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *       },
 *       GetObjectAttributes: { // BatchGetObjectAttributes
 *         ObjectReference: "<ObjectReference>", // required
 *         SchemaFacet: {
 *           SchemaArn: "STRING_VALUE",
 *           FacetName: "STRING_VALUE",
 *         },
 *         AttributeNames: [ // AttributeNameList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       ListObjectParents: { // BatchListObjectParents
 *         ObjectReference: "<ObjectReference>", // required
 *         NextToken: "STRING_VALUE",
 *         MaxResults: Number("int"),
 *       },
 *       ListObjectPolicies: { // BatchListObjectPolicies
 *         ObjectReference: "<ObjectReference>", // required
 *         NextToken: "STRING_VALUE",
 *         MaxResults: Number("int"),
 *       },
 *       ListPolicyAttachments: { // BatchListPolicyAttachments
 *         PolicyReference: "<ObjectReference>", // required
 *         NextToken: "STRING_VALUE",
 *         MaxResults: Number("int"),
 *       },
 *       LookupPolicy: { // BatchLookupPolicy
 *         ObjectReference: "<ObjectReference>", // required
 *         NextToken: "STRING_VALUE",
 *         MaxResults: Number("int"),
 *       },
 *       ListIndex: { // BatchListIndex
 *         RangesOnIndexedValues: [ // ObjectAttributeRangeList
 *           { // ObjectAttributeRange
 *             AttributeKey: { // AttributeKey
 *               SchemaArn: "STRING_VALUE", // required
 *               FacetName: "STRING_VALUE", // required
 *               Name: "STRING_VALUE", // required
 *             },
 *             Range: { // TypedAttributeValueRange
 *               StartMode: "FIRST" || "LAST" || "LAST_BEFORE_MISSING_VALUES" || "INCLUSIVE" || "EXCLUSIVE", // required
 *               StartValue: { // TypedAttributeValue Union: only one key present
 *                 StringValue: "STRING_VALUE",
 *                 BinaryValue: "BLOB_VALUE",
 *                 BooleanValue: true || false,
 *                 NumberValue: "STRING_VALUE",
 *                 DatetimeValue: new Date("TIMESTAMP"),
 *               },
 *               EndMode: "FIRST" || "LAST" || "LAST_BEFORE_MISSING_VALUES" || "INCLUSIVE" || "EXCLUSIVE", // required
 *               EndValue: {//  Union: only one key present
 *                 StringValue: "STRING_VALUE",
 *                 BinaryValue: "BLOB_VALUE",
 *                 BooleanValue: true || false,
 *                 NumberValue: "STRING_VALUE",
 *                 DatetimeValue: new Date("TIMESTAMP"),
 *               },
 *             },
 *           },
 *         ],
 *         IndexReference: "<ObjectReference>", // required
 *         MaxResults: Number("int"),
 *         NextToken: "STRING_VALUE",
 *       },
 *       ListOutgoingTypedLinks: { // BatchListOutgoingTypedLinks
 *         ObjectReference: "<ObjectReference>", // required
 *         FilterAttributeRanges: [ // TypedLinkAttributeRangeList
 *           { // TypedLinkAttributeRange
 *             AttributeName: "STRING_VALUE",
 *             Range: {
 *               StartMode: "FIRST" || "LAST" || "LAST_BEFORE_MISSING_VALUES" || "INCLUSIVE" || "EXCLUSIVE", // required
 *               StartValue: {//  Union: only one key present
 *                 StringValue: "STRING_VALUE",
 *                 BinaryValue: "BLOB_VALUE",
 *                 BooleanValue: true || false,
 *                 NumberValue: "STRING_VALUE",
 *                 DatetimeValue: new Date("TIMESTAMP"),
 *               },
 *               EndMode: "FIRST" || "LAST" || "LAST_BEFORE_MISSING_VALUES" || "INCLUSIVE" || "EXCLUSIVE", // required
 *               EndValue: {//  Union: only one key present
 *                 StringValue: "STRING_VALUE",
 *                 BinaryValue: "BLOB_VALUE",
 *                 BooleanValue: true || false,
 *                 NumberValue: "STRING_VALUE",
 *                 DatetimeValue: new Date("TIMESTAMP"),
 *               },
 *             },
 *           },
 *         ],
 *         FilterTypedLink: { // TypedLinkSchemaAndFacetName
 *           SchemaArn: "STRING_VALUE", // required
 *           TypedLinkName: "STRING_VALUE", // required
 *         },
 *         NextToken: "STRING_VALUE",
 *         MaxResults: Number("int"),
 *       },
 *       ListIncomingTypedLinks: { // BatchListIncomingTypedLinks
 *         ObjectReference: "<ObjectReference>", // required
 *         FilterAttributeRanges: [
 *           {
 *             AttributeName: "STRING_VALUE",
 *             Range: {
 *               StartMode: "FIRST" || "LAST" || "LAST_BEFORE_MISSING_VALUES" || "INCLUSIVE" || "EXCLUSIVE", // required
 *               StartValue: {//  Union: only one key present
 *                 StringValue: "STRING_VALUE",
 *                 BinaryValue: "BLOB_VALUE",
 *                 BooleanValue: true || false,
 *                 NumberValue: "STRING_VALUE",
 *                 DatetimeValue: new Date("TIMESTAMP"),
 *               },
 *               EndMode: "FIRST" || "LAST" || "LAST_BEFORE_MISSING_VALUES" || "INCLUSIVE" || "EXCLUSIVE", // required
 *               EndValue: "<TypedAttributeValue>",
 *             },
 *           },
 *         ],
 *         FilterTypedLink: {
 *           SchemaArn: "STRING_VALUE", // required
 *           TypedLinkName: "STRING_VALUE", // required
 *         },
 *         NextToken: "STRING_VALUE",
 *         MaxResults: Number("int"),
 *       },
 *       GetLinkAttributes: { // BatchGetLinkAttributes
 *         TypedLinkSpecifier: { // TypedLinkSpecifier
 *           TypedLinkFacet: {
 *             SchemaArn: "STRING_VALUE", // required
 *             TypedLinkName: "STRING_VALUE", // required
 *           },
 *           SourceObjectReference: "<ObjectReference>", // required
 *           TargetObjectReference: "<ObjectReference>", // required
 *           IdentityAttributeValues: [ // AttributeNameAndValueList // required
 *             { // AttributeNameAndValue
 *               AttributeName: "STRING_VALUE", // required
 *               Value: "<TypedAttributeValue>", // required
 *             },
 *           ],
 *         },
 *         AttributeNames: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 *   ConsistencyLevel: "SERIALIZABLE" || "EVENTUAL",
 * };
 * const command = new BatchReadCommand(input);
 * const response = await client.send(command);
 * // { // BatchReadResponse
 * //   Responses: [ // BatchReadOperationResponseList
 * //     { // BatchReadOperationResponse
 * //       SuccessfulResponse: { // BatchReadSuccessfulResponse
 * //         ListObjectAttributes: { // BatchListObjectAttributesResponse
 * //           Attributes: [ // AttributeKeyAndValueList
 * //             { // AttributeKeyAndValue
 * //               Key: { // AttributeKey
 * //                 SchemaArn: "STRING_VALUE", // required
 * //                 FacetName: "STRING_VALUE", // required
 * //                 Name: "STRING_VALUE", // required
 * //               },
 * //               Value: { // TypedAttributeValue Union: only one key present
 * //                 StringValue: "STRING_VALUE",
 * //                 BinaryValue: "BLOB_VALUE",
 * //                 BooleanValue: true || false,
 * //                 NumberValue: "STRING_VALUE",
 * //                 DatetimeValue: new Date("TIMESTAMP"),
 * //               },
 * //             },
 * //           ],
 * //           NextToken: "STRING_VALUE",
 * //         },
 * //         ListObjectChildren: { // BatchListObjectChildrenResponse
 * //           Children: { // LinkNameToObjectIdentifierMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           NextToken: "STRING_VALUE",
 * //         },
 * //         GetObjectInformation: { // BatchGetObjectInformationResponse
 * //           SchemaFacets: [ // SchemaFacetList
 * //             { // SchemaFacet
 * //               SchemaArn: "STRING_VALUE",
 * //               FacetName: "STRING_VALUE",
 * //             },
 * //           ],
 * //           ObjectIdentifier: "STRING_VALUE",
 * //         },
 * //         GetObjectAttributes: { // BatchGetObjectAttributesResponse
 * //           Attributes: [
 * //             {
 * //               Key: {
 * //                 SchemaArn: "STRING_VALUE", // required
 * //                 FacetName: "STRING_VALUE", // required
 * //                 Name: "STRING_VALUE", // required
 * //               },
 * //               Value: {//  Union: only one key present
 * //                 StringValue: "STRING_VALUE",
 * //                 BinaryValue: "BLOB_VALUE",
 * //                 BooleanValue: true || false,
 * //                 NumberValue: "STRING_VALUE",
 * //                 DatetimeValue: new Date("TIMESTAMP"),
 * //               },
 * //             },
 * //           ],
 * //         },
 * //         ListAttachedIndices: { // BatchListAttachedIndicesResponse
 * //           IndexAttachments: [ // IndexAttachmentList
 * //             { // IndexAttachment
 * //               IndexedAttributes: [
 * //                 {
 * //                   Key: {
 * //                     SchemaArn: "STRING_VALUE", // required
 * //                     FacetName: "STRING_VALUE", // required
 * //                     Name: "STRING_VALUE", // required
 * //                   },
 * //                   Value: {//  Union: only one key present
 * //                     StringValue: "STRING_VALUE",
 * //                     BinaryValue: "BLOB_VALUE",
 * //                     BooleanValue: true || false,
 * //                     NumberValue: "STRING_VALUE",
 * //                     DatetimeValue: new Date("TIMESTAMP"),
 * //                   },
 * //                 },
 * //               ],
 * //               ObjectIdentifier: "STRING_VALUE",
 * //             },
 * //           ],
 * //           NextToken: "STRING_VALUE",
 * //         },
 * //         ListObjectParentPaths: { // BatchListObjectParentPathsResponse
 * //           PathToObjectIdentifiersList: [ // PathToObjectIdentifiersList
 * //             { // PathToObjectIdentifiers
 * //               Path: "STRING_VALUE",
 * //               ObjectIdentifiers: [ // ObjectIdentifierList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //           NextToken: "STRING_VALUE",
 * //         },
 * //         ListObjectPolicies: { // BatchListObjectPoliciesResponse
 * //           AttachedPolicyIds: [
 * //             "STRING_VALUE",
 * //           ],
 * //           NextToken: "STRING_VALUE",
 * //         },
 * //         ListPolicyAttachments: { // BatchListPolicyAttachmentsResponse
 * //           ObjectIdentifiers: [
 * //             "STRING_VALUE",
 * //           ],
 * //           NextToken: "STRING_VALUE",
 * //         },
 * //         LookupPolicy: { // BatchLookupPolicyResponse
 * //           PolicyToPathList: [ // PolicyToPathList
 * //             { // PolicyToPath
 * //               Path: "STRING_VALUE",
 * //               Policies: [ // PolicyAttachmentList
 * //                 { // PolicyAttachment
 * //                   PolicyId: "STRING_VALUE",
 * //                   ObjectIdentifier: "STRING_VALUE",
 * //                   PolicyType: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           NextToken: "STRING_VALUE",
 * //         },
 * //         ListIndex: { // BatchListIndexResponse
 * //           IndexAttachments: [
 * //             {
 * //               IndexedAttributes: [
 * //                 {
 * //                   Key: {
 * //                     SchemaArn: "STRING_VALUE", // required
 * //                     FacetName: "STRING_VALUE", // required
 * //                     Name: "STRING_VALUE", // required
 * //                   },
 * //                   Value: {//  Union: only one key present
 * //                     StringValue: "STRING_VALUE",
 * //                     BinaryValue: "BLOB_VALUE",
 * //                     BooleanValue: true || false,
 * //                     NumberValue: "STRING_VALUE",
 * //                     DatetimeValue: new Date("TIMESTAMP"),
 * //                   },
 * //                 },
 * //               ],
 * //               ObjectIdentifier: "STRING_VALUE",
 * //             },
 * //           ],
 * //           NextToken: "STRING_VALUE",
 * //         },
 * //         ListOutgoingTypedLinks: { // BatchListOutgoingTypedLinksResponse
 * //           TypedLinkSpecifiers: [ // TypedLinkSpecifierList
 * //             { // TypedLinkSpecifier
 * //               TypedLinkFacet: { // TypedLinkSchemaAndFacetName
 * //                 SchemaArn: "STRING_VALUE", // required
 * //                 TypedLinkName: "STRING_VALUE", // required
 * //               },
 * //               SourceObjectReference: { // ObjectReference
 * //                 Selector: "STRING_VALUE",
 * //               },
 * //               TargetObjectReference: {
 * //                 Selector: "STRING_VALUE",
 * //               },
 * //               IdentityAttributeValues: [ // AttributeNameAndValueList // required
 * //                 { // AttributeNameAndValue
 * //                   AttributeName: "STRING_VALUE", // required
 * //                   Value: {//  Union: only one key present
 * //                     StringValue: "STRING_VALUE",
 * //                     BinaryValue: "BLOB_VALUE",
 * //                     BooleanValue: true || false,
 * //                     NumberValue: "STRING_VALUE",
 * //                     DatetimeValue: new Date("TIMESTAMP"),
 * //                   },
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           NextToken: "STRING_VALUE",
 * //         },
 * //         ListIncomingTypedLinks: { // BatchListIncomingTypedLinksResponse
 * //           LinkSpecifiers: [
 * //             {
 * //               TypedLinkFacet: {
 * //                 SchemaArn: "STRING_VALUE", // required
 * //                 TypedLinkName: "STRING_VALUE", // required
 * //               },
 * //               SourceObjectReference: {
 * //                 Selector: "STRING_VALUE",
 * //               },
 * //               TargetObjectReference: {
 * //                 Selector: "STRING_VALUE",
 * //               },
 * //               IdentityAttributeValues: [ // required
 * //                 {
 * //                   AttributeName: "STRING_VALUE", // required
 * //                   Value: "<TypedAttributeValue>", // required
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           NextToken: "STRING_VALUE",
 * //         },
 * //         GetLinkAttributes: { // BatchGetLinkAttributesResponse
 * //           Attributes: [
 * //             {
 * //               Key: {
 * //                 SchemaArn: "STRING_VALUE", // required
 * //                 FacetName: "STRING_VALUE", // required
 * //                 Name: "STRING_VALUE", // required
 * //               },
 * //               Value: "<TypedAttributeValue>", // required
 * //             },
 * //           ],
 * //         },
 * //         ListObjectParents: { // BatchListObjectParentsResponse
 * //           ParentLinks: [ // ObjectIdentifierAndLinkNameList
 * //             { // ObjectIdentifierAndLinkNameTuple
 * //               ObjectIdentifier: "STRING_VALUE",
 * //               LinkName: "STRING_VALUE",
 * //             },
 * //           ],
 * //           NextToken: "STRING_VALUE",
 * //         },
 * //       },
 * //       ExceptionResponse: { // BatchReadException
 * //         Type: "ValidationException" || "InvalidArnException" || "ResourceNotFoundException" || "InvalidNextTokenException" || "AccessDeniedException" || "NotNodeException" || "FacetValidationException" || "CannotListParentOfRootException" || "NotIndexException" || "NotPolicyException" || "DirectoryNotEnabledException" || "LimitExceededException" || "InternalServiceException",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchReadCommandInput - {@link BatchReadCommandInput}
 * @returns {@link BatchReadCommandOutput}
 * @see {@link BatchReadCommandInput} for command's `input` shape.
 * @see {@link BatchReadCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling <a>ListDirectories</a> and check your permissions.</p>
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
 */
export class BatchReadCommand extends $Command<
  BatchReadCommandInput,
  BatchReadCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: BatchReadCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchReadCommandInput, BatchReadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, BatchReadCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "BatchReadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: BatchReadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchReadCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchReadCommandOutput> {
    return de_BatchReadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
