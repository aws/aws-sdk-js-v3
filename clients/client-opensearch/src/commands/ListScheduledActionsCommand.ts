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

import { ListScheduledActionsRequest, ListScheduledActionsResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_ListScheduledActionsCommand, se_ListScheduledActionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListScheduledActionsCommand}.
 */
export interface ListScheduledActionsCommandInput extends ListScheduledActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListScheduledActionsCommand}.
 */
export interface ListScheduledActionsCommandOutput extends ListScheduledActionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of configuration changes that are scheduled for a domain. These changes can
 *    be <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">service software
 *     updates</a> or <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html#auto-tune-types">blue/green
 *      Auto-Tune enhancements</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, ListScheduledActionsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, ListScheduledActionsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // ListScheduledActionsRequest
 *   DomainName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListScheduledActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListScheduledActionsResponse
 * //   ScheduledActions: [ // ScheduledActionsList
 * //     { // ScheduledAction
 * //       Id: "STRING_VALUE", // required
 * //       Type: "SERVICE_SOFTWARE_UPDATE" || "JVM_HEAP_SIZE_TUNING" || "JVM_YOUNG_GEN_TUNING", // required
 * //       Severity: "HIGH" || "MEDIUM" || "LOW", // required
 * //       ScheduledTime: Number("long"), // required
 * //       Description: "STRING_VALUE",
 * //       ScheduledBy: "CUSTOMER" || "SYSTEM",
 * //       Status: "PENDING_UPDATE" || "IN_PROGRESS" || "FAILED" || "COMPLETED" || "NOT_ELIGIBLE" || "ELIGIBLE",
 * //       Mandatory: true || false,
 * //       Cancellable: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListScheduledActionsCommandInput - {@link ListScheduledActionsCommandInput}
 * @returns {@link ListScheduledActionsCommandOutput}
 * @see {@link ListScheduledActionsCommandInput} for command's `input` shape.
 * @see {@link ListScheduledActionsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Request processing failed because you provided an invalid pagination token.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 */
export class ListScheduledActionsCommand extends $Command<
  ListScheduledActionsCommandInput,
  ListScheduledActionsCommandOutput,
  OpenSearchClientResolvedConfig
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
  constructor(readonly input: ListScheduledActionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListScheduledActionsCommandInput, ListScheduledActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListScheduledActionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "ListScheduledActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonOpenSearchService",
        operation: "ListScheduledActions",
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
  private serialize(input: ListScheduledActionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListScheduledActionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListScheduledActionsCommandOutput> {
    return de_ListScheduledActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
