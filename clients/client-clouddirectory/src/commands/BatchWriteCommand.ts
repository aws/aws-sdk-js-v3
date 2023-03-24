// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { BatchWriteRequest, BatchWriteResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchWriteCommand,
  serializeAws_restJson1BatchWriteCommand,
} from "../protocols/Aws_restJson1";

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
 * @public
 * <p>Performs all the write operations in a batch. Either all the operations succeed or
 *       none.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, BatchWriteCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, BatchWriteCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const input = {
 *   DirectoryArn: "STRING_VALUE", // required
 *   Operations: [ // required
 *     {
 *       CreateObject: {
 *         SchemaFacet: [ // required
 *           {
 *             SchemaArn: "STRING_VALUE",
 *             FacetName: "STRING_VALUE",
 *           },
 *         ],
 *         ObjectAttributeList: [ // required
 *           {
 *             Key: {
 *               SchemaArn: "STRING_VALUE", // required
 *               FacetName: "STRING_VALUE", // required
 *               Name: "STRING_VALUE", // required
 *             },
 *             Value: { // Union: only one key present
 *               StringValue: "STRING_VALUE",
 *               BinaryValue: "BLOB_VALUE",
 *               BooleanValue: true || false,
 *               NumberValue: "STRING_VALUE",
 *               DatetimeValue: new Date("TIMESTAMP"),
 *             },
 *           },
 *         ],
 *         ParentReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         LinkName: "STRING_VALUE",
 *         BatchReferenceName: "STRING_VALUE",
 *       },
 *       AttachObject: {
 *         ParentReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         ChildReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         LinkName: "STRING_VALUE", // required
 *       },
 *       DetachObject: {
 *         ParentReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         LinkName: "STRING_VALUE", // required
 *         BatchReferenceName: "STRING_VALUE",
 *       },
 *       UpdateObjectAttributes: {
 *         ObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         AttributeUpdates: [ // required
 *           {
 *             ObjectAttributeKey: {
 *               SchemaArn: "STRING_VALUE", // required
 *               FacetName: "STRING_VALUE", // required
 *               Name: "STRING_VALUE", // required
 *             },
 *             ObjectAttributeAction: {
 *               ObjectAttributeActionType: "CREATE_OR_UPDATE" || "DELETE",
 *               ObjectAttributeUpdateValue: { // Union: only one key present
 *                 StringValue: "STRING_VALUE",
 *                 BinaryValue: "BLOB_VALUE",
 *                 BooleanValue: true || false,
 *                 NumberValue: "STRING_VALUE",
 *                 DatetimeValue: new Date("TIMESTAMP"),
 *               },
 *             },
 *           },
 *         ],
 *       },
 *       DeleteObject: {
 *         ObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *       },
 *       AddFacetToObject: {
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
 *             Value: { // Union: only one key present
 *               StringValue: "STRING_VALUE",
 *               BinaryValue: "BLOB_VALUE",
 *               BooleanValue: true || false,
 *               NumberValue: "STRING_VALUE",
 *               DatetimeValue: new Date("TIMESTAMP"),
 *             },
 *           },
 *         ],
 *         ObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *       },
 *       RemoveFacetFromObject: {
 *         SchemaFacet: {
 *           SchemaArn: "STRING_VALUE",
 *           FacetName: "STRING_VALUE",
 *         },
 *         ObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *       },
 *       AttachPolicy: {
 *         PolicyReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         ObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *       },
 *       DetachPolicy: {
 *         PolicyReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         ObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *       },
 *       CreateIndex: {
 *         OrderedIndexedAttributeList: [ // required
 *           {
 *             SchemaArn: "STRING_VALUE", // required
 *             FacetName: "STRING_VALUE", // required
 *             Name: "STRING_VALUE", // required
 *           },
 *         ],
 *         IsUnique: true || false, // required
 *         ParentReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         LinkName: "STRING_VALUE",
 *         BatchReferenceName: "STRING_VALUE",
 *       },
 *       AttachToIndex: {
 *         IndexReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         TargetReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *       },
 *       DetachFromIndex: {
 *         IndexReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         TargetReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *       },
 *       AttachTypedLink: {
 *         SourceObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         TargetObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         TypedLinkFacet: {
 *           SchemaArn: "STRING_VALUE", // required
 *           TypedLinkName: "STRING_VALUE", // required
 *         },
 *         Attributes: [ // required
 *           {
 *             AttributeName: "STRING_VALUE", // required
 *             Value: { // Union: only one key present
 *               StringValue: "STRING_VALUE",
 *               BinaryValue: "BLOB_VALUE",
 *               BooleanValue: true || false,
 *               NumberValue: "STRING_VALUE",
 *               DatetimeValue: new Date("TIMESTAMP"),
 *             },
 *           },
 *         ],
 *       },
 *       DetachTypedLink: {
 *         TypedLinkSpecifier: {
 *           TypedLinkFacet: {
 *             SchemaArn: "STRING_VALUE", // required
 *             TypedLinkName: "STRING_VALUE", // required
 *           },
 *           SourceObjectReference: {
 *             Selector: "STRING_VALUE",
 *           },
 *           TargetObjectReference: {
 *             Selector: "STRING_VALUE",
 *           },
 *           IdentityAttributeValues: [ // required
 *             {
 *               AttributeName: "STRING_VALUE", // required
 *               Value: { // Union: only one key present
 *                 StringValue: "STRING_VALUE",
 *                 BinaryValue: "BLOB_VALUE",
 *                 BooleanValue: true || false,
 *                 NumberValue: "STRING_VALUE",
 *                 DatetimeValue: new Date("TIMESTAMP"),
 *               },
 *             },
 *           ],
 *         },
 *       },
 *       UpdateLinkAttributes: {
 *         TypedLinkSpecifier: {
 *           TypedLinkFacet: {
 *             SchemaArn: "STRING_VALUE", // required
 *             TypedLinkName: "STRING_VALUE", // required
 *           },
 *           SourceObjectReference: {
 *             Selector: "STRING_VALUE",
 *           },
 *           TargetObjectReference: {
 *             Selector: "STRING_VALUE",
 *           },
 *           IdentityAttributeValues: [ // required
 *             {
 *               AttributeName: "STRING_VALUE", // required
 *               Value: { // Union: only one key present
 *                 StringValue: "STRING_VALUE",
 *                 BinaryValue: "BLOB_VALUE",
 *                 BooleanValue: true || false,
 *                 NumberValue: "STRING_VALUE",
 *                 DatetimeValue: new Date("TIMESTAMP"),
 *               },
 *             },
 *           ],
 *         },
 *         AttributeUpdates: [ // required
 *           {
 *             AttributeKey: {
 *               SchemaArn: "STRING_VALUE", // required
 *               FacetName: "STRING_VALUE", // required
 *               Name: "STRING_VALUE", // required
 *             },
 *             AttributeAction: {
 *               AttributeActionType: "CREATE_OR_UPDATE" || "DELETE",
 *               AttributeUpdateValue: { // Union: only one key present
 *                 StringValue: "STRING_VALUE",
 *                 BinaryValue: "BLOB_VALUE",
 *                 BooleanValue: true || false,
 *                 NumberValue: "STRING_VALUE",
 *                 DatetimeValue: new Date("TIMESTAMP"),
 *               },
 *             },
 *           },
 *         ],
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchWriteCommand(input);
 * const response = await client.send(command);
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
 *
 */
export class BatchWriteCommand extends $Command<
  BatchWriteCommandInput,
  BatchWriteCommandOutput,
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
  constructor(readonly input: BatchWriteCommandInput) {
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
  ): Handler<BatchWriteCommandInput, BatchWriteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, BatchWriteCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "BatchWriteCommand";
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
  private serialize(input: BatchWriteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchWriteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchWriteCommandOutput> {
    return deserializeAws_restJson1BatchWriteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
