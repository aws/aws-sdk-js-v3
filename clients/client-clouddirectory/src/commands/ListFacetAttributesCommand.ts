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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { ListFacetAttributesRequest, ListFacetAttributesResponse } from "../models/models_0";
import { de_ListFacetAttributesCommand, se_ListFacetAttributesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Retrieves attributes attached to the facet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListFacetAttributesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListFacetAttributesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
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
 * //           BinaryValue: "BLOB_VALUE",
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
 */
export class ListFacetAttributesCommand extends $Command<
  ListFacetAttributesCommandInput,
  ListFacetAttributesCommandOutput,
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
  constructor(readonly input: ListFacetAttributesCommandInput) {
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
  ): Handler<ListFacetAttributesCommandInput, ListFacetAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFacetAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "ListFacetAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonCloudDirectory_20170111",
        operation: "ListFacetAttributes",
      },
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
  private serialize(input: ListFacetAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListFacetAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFacetAttributesCommandOutput> {
    return de_ListFacetAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
