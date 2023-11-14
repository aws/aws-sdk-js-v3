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

import { BatchGetLifecyclePolicyRequest, BatchGetLifecyclePolicyResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { de_BatchGetLifecyclePolicyCommand, se_BatchGetLifecyclePolicyCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetLifecyclePolicyCommand}.
 */
export interface BatchGetLifecyclePolicyCommandInput extends BatchGetLifecyclePolicyRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetLifecyclePolicyCommand}.
 */
export interface BatchGetLifecyclePolicyCommandOutput extends BatchGetLifecyclePolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns one or more configured OpenSearch Serverless lifecycle policies. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-lifecycle.html#serverless-lifecycle-list">Viewing data lifecycle policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, BatchGetLifecyclePolicyCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, BatchGetLifecyclePolicyCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // BatchGetLifecyclePolicyRequest
 *   identifiers: [ // LifecyclePolicyIdentifiers // required
 *     { // LifecyclePolicyIdentifier
 *       type: "STRING_VALUE", // required
 *       name: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchGetLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetLifecyclePolicyResponse
 * //   lifecyclePolicyDetails: [ // LifecyclePolicyDetails
 * //     { // LifecyclePolicyDetail
 * //       type: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       policyVersion: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       policy: "DOCUMENT_VALUE",
 * //       createdDate: Number("long"),
 * //       lastModifiedDate: Number("long"),
 * //     },
 * //   ],
 * //   lifecyclePolicyErrorDetails: [ // LifecyclePolicyErrorDetails
 * //     { // LifecyclePolicyErrorDetail
 * //       type: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetLifecyclePolicyCommandInput - {@link BatchGetLifecyclePolicyCommandInput}
 * @returns {@link BatchGetLifecyclePolicyCommandOutput}
 * @see {@link BatchGetLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link BatchGetLifecyclePolicyCommandOutput} for command's `response` shape.
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
export class BatchGetLifecyclePolicyCommand extends $Command<
  BatchGetLifecyclePolicyCommandInput,
  BatchGetLifecyclePolicyCommandOutput,
  OpenSearchServerlessClientResolvedConfig
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
  constructor(readonly input: BatchGetLifecyclePolicyCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetLifecyclePolicyCommandInput, BatchGetLifecyclePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetLifecyclePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchServerlessClient";
    const commandName = "BatchGetLifecyclePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OpenSearchServerless",
        operation: "BatchGetLifecyclePolicy",
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
  private serialize(input: BatchGetLifecyclePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetLifecyclePolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetLifecyclePolicyCommandOutput> {
    return de_BatchGetLifecyclePolicyCommand(output, context);
  }
}
