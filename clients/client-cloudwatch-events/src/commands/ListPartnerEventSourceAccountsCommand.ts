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

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { ListPartnerEventSourceAccountsRequest, ListPartnerEventSourceAccountsResponse } from "../models/models_0";
import {
  de_ListPartnerEventSourceAccountsCommand,
  se_ListPartnerEventSourceAccountsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPartnerEventSourceAccountsCommand}.
 */
export interface ListPartnerEventSourceAccountsCommandInput extends ListPartnerEventSourceAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListPartnerEventSourceAccountsCommand}.
 */
export interface ListPartnerEventSourceAccountsCommandOutput
  extends ListPartnerEventSourceAccountsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>An SaaS partner can use this operation to display the Amazon Web Services account ID that a particular
 *       partner event source name is associated with. This operation is not used by Amazon Web Services
 *       customers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ListPartnerEventSourceAccountsCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ListPartnerEventSourceAccountsCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const input = { // ListPartnerEventSourceAccountsRequest
 *   EventSourceName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListPartnerEventSourceAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListPartnerEventSourceAccountsResponse
 * //   PartnerEventSourceAccounts: [ // PartnerEventSourceAccountList
 * //     { // PartnerEventSourceAccount
 * //       Account: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       ExpirationTime: new Date("TIMESTAMP"),
 * //       State: "PENDING" || "ACTIVE" || "DELETED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPartnerEventSourceAccountsCommandInput - {@link ListPartnerEventSourceAccountsCommandInput}
 * @returns {@link ListPartnerEventSourceAccountsCommandOutput}
 * @see {@link ListPartnerEventSourceAccountsCommandInput} for command's `input` shape.
 * @see {@link ListPartnerEventSourceAccountsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link OperationDisabledException} (client fault)
 *  <p>The operation you are attempting is not available in this region.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 */
export class ListPartnerEventSourceAccountsCommand extends $Command<
  ListPartnerEventSourceAccountsCommandInput,
  ListPartnerEventSourceAccountsCommandOutput,
  CloudWatchEventsClientResolvedConfig
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
  constructor(readonly input: ListPartnerEventSourceAccountsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPartnerEventSourceAccountsCommandInput, ListPartnerEventSourceAccountsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPartnerEventSourceAccountsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "ListPartnerEventSourceAccountsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSEvents",
        operation: "ListPartnerEventSourceAccounts",
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
  private serialize(
    input: ListPartnerEventSourceAccountsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListPartnerEventSourceAccountsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPartnerEventSourceAccountsCommandOutput> {
    return de_ListPartnerEventSourceAccountsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
