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

import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { BatchDeleteFeaturedResultsSetRequest, BatchDeleteFeaturedResultsSetResponse } from "../models/models_0";
import {
  de_BatchDeleteFeaturedResultsSetCommand,
  se_BatchDeleteFeaturedResultsSetCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteFeaturedResultsSetCommand}.
 */
export interface BatchDeleteFeaturedResultsSetCommandInput extends BatchDeleteFeaturedResultsSetRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteFeaturedResultsSetCommand}.
 */
export interface BatchDeleteFeaturedResultsSetCommandOutput
  extends BatchDeleteFeaturedResultsSetResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Removes one or more sets of featured results. Features results are placed
 *             above all other results for certain queries. If there's an exact match of a
 *             query, then one or more specific documents are featured in the search results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, BatchDeleteFeaturedResultsSetCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, BatchDeleteFeaturedResultsSetCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // BatchDeleteFeaturedResultsSetRequest
 *   IndexId: "STRING_VALUE", // required
 *   FeaturedResultsSetIds: [ // FeaturedResultsSetIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteFeaturedResultsSetCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteFeaturedResultsSetResponse
 * //   Errors: [ // BatchDeleteFeaturedResultsSetErrors // required
 * //     { // BatchDeleteFeaturedResultsSetError
 * //       Id: "STRING_VALUE", // required
 * //       ErrorCode: "InternalError" || "InvalidRequest", // required
 * //       ErrorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteFeaturedResultsSetCommandInput - {@link BatchDeleteFeaturedResultsSetCommandInput}
 * @returns {@link BatchDeleteFeaturedResultsSetCommandOutput}
 * @see {@link BatchDeleteFeaturedResultsSetCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteFeaturedResultsSetCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please reduce the number of requests
 *             and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the Amazon Kendra service.
 *             Please provide the correct input and try again.</p>
 *
 * @throws {@link KendraServiceException}
 * <p>Base exception class for all service exceptions from Kendra service.</p>
 *
 */
export class BatchDeleteFeaturedResultsSetCommand extends $Command<
  BatchDeleteFeaturedResultsSetCommandInput,
  BatchDeleteFeaturedResultsSetCommandOutput,
  KendraClientResolvedConfig
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
  constructor(readonly input: BatchDeleteFeaturedResultsSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDeleteFeaturedResultsSetCommandInput, BatchDeleteFeaturedResultsSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDeleteFeaturedResultsSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "BatchDeleteFeaturedResultsSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSKendraFrontendService",
        operation: "BatchDeleteFeaturedResultsSet",
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
  private serialize(input: BatchDeleteFeaturedResultsSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchDeleteFeaturedResultsSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDeleteFeaturedResultsSetCommandOutput> {
    return de_BatchDeleteFeaturedResultsSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
