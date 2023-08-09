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
import { AttachTypedLinkRequest, AttachTypedLinkResponse } from "../models/models_0";
import { de_AttachTypedLinkCommand, se_AttachTypedLinkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AttachTypedLinkCommand}.
 */
export interface AttachTypedLinkCommandInput extends AttachTypedLinkRequest {}
/**
 * @public
 *
 * The output of {@link AttachTypedLinkCommand}.
 */
export interface AttachTypedLinkCommandOutput extends AttachTypedLinkResponse, __MetadataBearer {}

/**
 * @public
 * <p>Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, AttachTypedLinkCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, AttachTypedLinkCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const input = { // AttachTypedLinkRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   SourceObjectReference: { // ObjectReference
 *     Selector: "STRING_VALUE",
 *   },
 *   TargetObjectReference: {
 *     Selector: "STRING_VALUE",
 *   },
 *   TypedLinkFacet: { // TypedLinkSchemaAndFacetName
 *     SchemaArn: "STRING_VALUE", // required
 *     TypedLinkName: "STRING_VALUE", // required
 *   },
 *   Attributes: [ // AttributeNameAndValueList // required
 *     { // AttributeNameAndValue
 *       AttributeName: "STRING_VALUE", // required
 *       Value: { // TypedAttributeValue Union: only one key present
 *         StringValue: "STRING_VALUE",
 *         BinaryValue: "BLOB_VALUE",
 *         BooleanValue: true || false,
 *         NumberValue: "STRING_VALUE",
 *         DatetimeValue: new Date("TIMESTAMP"),
 *       },
 *     },
 *   ],
 * };
 * const command = new AttachTypedLinkCommand(input);
 * const response = await client.send(command);
 * // { // AttachTypedLinkResponse
 * //   TypedLinkSpecifier: { // TypedLinkSpecifier
 * //     TypedLinkFacet: { // TypedLinkSchemaAndFacetName
 * //       SchemaArn: "STRING_VALUE", // required
 * //       TypedLinkName: "STRING_VALUE", // required
 * //     },
 * //     SourceObjectReference: { // ObjectReference
 * //       Selector: "STRING_VALUE",
 * //     },
 * //     TargetObjectReference: {
 * //       Selector: "STRING_VALUE",
 * //     },
 * //     IdentityAttributeValues: [ // AttributeNameAndValueList // required
 * //       { // AttributeNameAndValue
 * //         AttributeName: "STRING_VALUE", // required
 * //         Value: { // TypedAttributeValue Union: only one key present
 * //           StringValue: "STRING_VALUE",
 * //           BinaryValue: "BLOB_VALUE",
 * //           BooleanValue: true || false,
 * //           NumberValue: "STRING_VALUE",
 * //           DatetimeValue: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param AttachTypedLinkCommandInput - {@link AttachTypedLinkCommandInput}
 * @returns {@link AttachTypedLinkCommandOutput}
 * @see {@link AttachTypedLinkCommandInput} for command's `input` shape.
 * @see {@link AttachTypedLinkCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidAttachmentException} (client fault)
 *  <p>Indicates that an attempt to make an attachment was invalid. For example, attaching two nodes
 *       with a link type that is not applicable to the nodes or attempting to apply a schema to a directory a second time.</p>
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
 */
export class AttachTypedLinkCommand extends $Command<
  AttachTypedLinkCommandInput,
  AttachTypedLinkCommandOutput,
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
  constructor(readonly input: AttachTypedLinkCommandInput) {
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
  ): Handler<AttachTypedLinkCommandInput, AttachTypedLinkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AttachTypedLinkCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "AttachTypedLinkCommand";
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
  private serialize(input: AttachTypedLinkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AttachTypedLinkCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachTypedLinkCommandOutput> {
    return de_AttachTypedLinkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
