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

import { CreateCollectionRequest, CreateCollectionResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { de_CreateCollectionCommand, se_CreateCollectionCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCollectionCommand}.
 */
export interface CreateCollectionCommandInput extends CreateCollectionRequest {}
/**
 * @public
 *
 * The output of {@link CreateCollectionCommand}.
 */
export interface CreateCollectionCommandOutput extends CreateCollectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and
 *                 managing Amazon OpenSearch Serverless collections</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, CreateCollectionCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, CreateCollectionCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // CreateCollectionRequest
 *   name: "STRING_VALUE", // required
 *   type: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateCollectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateCollectionResponse
 * //   createCollectionDetail: { // CreateCollectionDetail
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     type: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     kmsKeyArn: "STRING_VALUE",
 * //     createdDate: Number("long"),
 * //     lastModifiedDate: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCollectionCommandInput - {@link CreateCollectionCommandInput}
 * @returns {@link CreateCollectionCommandOutput}
 * @see {@link CreateCollectionCommandInput} for command's `input` shape.
 * @see {@link CreateCollectionCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>When creating a resource, thrown when a resource with the same name already exists
 *             or is being created. When deleting a resource, thrown when the resource is not in
 *             the ACTIVE or FAILED state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link OcuLimitExceededException} (client fault)
 *  <p>Thrown when the collection you're attempting to create results in a number of search or indexing OCUs that exceeds the account limit. </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Thrown when you attempt to create more resources than the service allows based on service quotas.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the HTTP request contains invalid input or is missing required
 *             input.</p>
 *
 * @throws {@link OpenSearchServerlessServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchServerless service.</p>
 *
 */
export class CreateCollectionCommand extends $Command<
  CreateCollectionCommandInput,
  CreateCollectionCommandOutput,
  OpenSearchServerlessClientResolvedConfig
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
  constructor(readonly input: CreateCollectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCollectionCommandInput, CreateCollectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCollectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchServerlessClient";
    const commandName = "CreateCollectionCommand";
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
  private serialize(input: CreateCollectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCollectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCollectionCommandOutput> {
    return de_CreateCollectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
