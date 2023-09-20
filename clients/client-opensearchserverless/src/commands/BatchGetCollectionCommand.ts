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

import { BatchGetCollectionRequest, BatchGetCollectionResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { de_BatchGetCollectionCommand, se_BatchGetCollectionCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetCollectionCommand}.
 */
export interface BatchGetCollectionCommandInput extends BatchGetCollectionRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetCollectionCommand}.
 */
export interface BatchGetCollectionCommandOutput extends BatchGetCollectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns attributes for one or more collections, including the collection endpoint and
 *             the OpenSearch Dashboards endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and
 *                 managing Amazon OpenSearch Serverless collections</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, BatchGetCollectionCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, BatchGetCollectionCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // BatchGetCollectionRequest
 *   ids: [ // CollectionIds
 *     "STRING_VALUE",
 *   ],
 *   names: [ // CollectionNames
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetCollectionCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetCollectionResponse
 * //   collectionDetails: [ // CollectionDetails
 * //     { // CollectionDetail
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       kmsKeyArn: "STRING_VALUE",
 * //       createdDate: Number("long"),
 * //       lastModifiedDate: Number("long"),
 * //       collectionEndpoint: "STRING_VALUE",
 * //       dashboardEndpoint: "STRING_VALUE",
 * //     },
 * //   ],
 * //   collectionErrorDetails: [ // CollectionErrorDetails
 * //     { // CollectionErrorDetail
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetCollectionCommandInput - {@link BatchGetCollectionCommandInput}
 * @returns {@link BatchGetCollectionCommandOutput}
 * @see {@link BatchGetCollectionCommandInput} for command's `input` shape.
 * @see {@link BatchGetCollectionCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the HTTP request contains invalid input or is missing required
 *             input.</p>
 *
 * @throws {@link OpenSearchServerlessServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchServerless service.</p>
 *
 */
export class BatchGetCollectionCommand extends $Command<
  BatchGetCollectionCommandInput,
  BatchGetCollectionCommandOutput,
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
  constructor(readonly input: BatchGetCollectionCommandInput) {
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
  ): Handler<BatchGetCollectionCommandInput, BatchGetCollectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetCollectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchServerlessClient";
    const commandName = "BatchGetCollectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OpenSearchServerless",
        operation: "BatchGetCollection",
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
  private serialize(input: BatchGetCollectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetCollectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetCollectionCommandOutput> {
    return de_BatchGetCollectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
