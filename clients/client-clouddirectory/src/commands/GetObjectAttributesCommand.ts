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
import { GetObjectAttributesRequest, GetObjectAttributesResponse } from "../models/models_0";
import { de_GetObjectAttributesCommand, se_GetObjectAttributesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetObjectAttributesCommand}.
 */
export interface GetObjectAttributesCommandInput extends GetObjectAttributesRequest {}
/**
 * @public
 *
 * The output of {@link GetObjectAttributesCommand}.
 */
export interface GetObjectAttributesCommandOutput extends GetObjectAttributesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves attributes within a facet that are associated with an object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetObjectAttributesCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetObjectAttributesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const input = { // GetObjectAttributesRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   ObjectReference: { // ObjectReference
 *     Selector: "STRING_VALUE",
 *   },
 *   ConsistencyLevel: "SERIALIZABLE" || "EVENTUAL",
 *   SchemaFacet: { // SchemaFacet
 *     SchemaArn: "STRING_VALUE",
 *     FacetName: "STRING_VALUE",
 *   },
 *   AttributeNames: [ // AttributeNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetObjectAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetObjectAttributesResponse
 * //   Attributes: [ // AttributeKeyAndValueList
 * //     { // AttributeKeyAndValue
 * //       Key: { // AttributeKey
 * //         SchemaArn: "STRING_VALUE", // required
 * //         FacetName: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //       Value: { // TypedAttributeValue Union: only one key present
 * //         StringValue: "STRING_VALUE",
 * //         BinaryValue: "BLOB_VALUE",
 * //         BooleanValue: true || false,
 * //         NumberValue: "STRING_VALUE",
 * //         DatetimeValue: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetObjectAttributesCommandInput - {@link GetObjectAttributesCommandInput}
 * @returns {@link GetObjectAttributesCommandOutput}
 * @see {@link GetObjectAttributesCommandInput} for command's `input` shape.
 * @see {@link GetObjectAttributesCommandOutput} for command's `response` shape.
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
export class GetObjectAttributesCommand extends $Command<
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
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
  constructor(readonly input: GetObjectAttributesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetObjectAttributesCommandInput, GetObjectAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetObjectAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "GetObjectAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonCloudDirectory_20170111",
        operation: "GetObjectAttributes",
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
  private serialize(input: GetObjectAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetObjectAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetObjectAttributesCommandOutput> {
    return de_GetObjectAttributesCommand(output, context);
  }
}
