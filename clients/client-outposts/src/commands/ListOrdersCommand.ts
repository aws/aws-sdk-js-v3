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

import { ListOrdersInput, ListOrdersOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { de_ListOrdersCommand, se_ListOrdersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListOrdersCommand}.
 */
export interface ListOrdersCommandInput extends ListOrdersInput {}
/**
 * @public
 *
 * The output of {@link ListOrdersCommand}.
 */
export interface ListOrdersCommandOutput extends ListOrdersOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists the Outpost orders for your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, ListOrdersCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, ListOrdersCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const input = { // ListOrdersInput
 *   OutpostIdentifierFilter: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListOrdersCommand(input);
 * const response = await client.send(command);
 * // { // ListOrdersOutput
 * //   Orders: [ // OrderSummaryListDefinition
 * //     { // OrderSummary
 * //       OutpostId: "STRING_VALUE",
 * //       OrderId: "STRING_VALUE",
 * //       OrderType: "OUTPOST" || "REPLACEMENT",
 * //       Status: "RECEIVED" || "PENDING" || "PROCESSING" || "INSTALLING" || "FULFILLED" || "CANCELLED" || "PREPARING" || "IN_PROGRESS" || "COMPLETED" || "ERROR",
 * //       LineItemCountsByStatus: { // LineItemStatusCounts
 * //         "<keys>": Number("int"),
 * //       },
 * //       OrderSubmissionDate: new Date("TIMESTAMP"),
 * //       OrderFulfilledDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOrdersCommandInput - {@link ListOrdersCommandInput}
 * @returns {@link ListOrdersCommandOutput}
 * @see {@link ListOrdersCommandInput} for command's `input` shape.
 * @see {@link ListOrdersCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 */
export class ListOrdersCommand extends $Command<
  ListOrdersCommandInput,
  ListOrdersCommandOutput,
  OutpostsClientResolvedConfig
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
  constructor(readonly input: ListOrdersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOrdersCommandInput, ListOrdersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListOrdersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "ListOrdersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OutpostsOlafService",
        operation: "ListOrders",
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
  private serialize(input: ListOrdersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListOrdersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOrdersCommandOutput> {
    return de_ListOrdersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
