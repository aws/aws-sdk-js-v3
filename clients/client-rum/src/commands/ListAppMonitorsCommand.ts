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

import { ListAppMonitorsRequest, ListAppMonitorsResponse } from "../models/models_0";
import { de_ListAppMonitorsCommand, se_ListAppMonitorsCommand } from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAppMonitorsCommand}.
 */
export interface ListAppMonitorsCommandInput extends ListAppMonitorsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppMonitorsCommand}.
 */
export interface ListAppMonitorsCommandOutput extends ListAppMonitorsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the Amazon CloudWatch RUM app monitors in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, ListAppMonitorsCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, ListAppMonitorsCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const input = { // ListAppMonitorsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAppMonitorsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppMonitorsResponse
 * //   NextToken: "STRING_VALUE",
 * //   AppMonitorSummaries: [ // AppMonitorSummaryList
 * //     { // AppMonitorSummary
 * //       Name: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Created: "STRING_VALUE",
 * //       LastModified: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAppMonitorsCommandInput - {@link ListAppMonitorsCommandInput}
 * @returns {@link ListAppMonitorsCommandOutput}
 * @see {@link ListAppMonitorsCommandInput} for command's `input` shape.
 * @see {@link ListAppMonitorsCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exception.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the arguments for the request is not valid.</p>
 *
 * @throws {@link RUMServiceException}
 * <p>Base exception class for all service exceptions from RUM service.</p>
 *
 */
export class ListAppMonitorsCommand extends $Command<
  ListAppMonitorsCommandInput,
  ListAppMonitorsCommandOutput,
  RUMClientResolvedConfig
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
  constructor(readonly input: ListAppMonitorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RUMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAppMonitorsCommandInput, ListAppMonitorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAppMonitorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RUMClient";
    const commandName = "ListAppMonitorsCommand";
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
  private serialize(input: ListAppMonitorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAppMonitorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAppMonitorsCommandOutput> {
    return de_ListAppMonitorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
