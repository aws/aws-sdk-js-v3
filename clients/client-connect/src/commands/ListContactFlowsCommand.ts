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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListContactFlowsRequest, ListContactFlowsResponse } from "../models/models_1";
import { de_ListContactFlowsCommand, se_ListContactFlowsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListContactFlowsCommand}.
 */
export interface ListContactFlowsCommandInput extends ListContactFlowsRequest {}
/**
 * @public
 *
 * The output of {@link ListContactFlowsCommand}.
 */
export interface ListContactFlowsCommandOutput extends ListContactFlowsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides information about the flows for the specified Amazon Connect instance.</p>
 *          <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 *          <p>For more information about flows, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-contact-flows.html">Flows</a> in the
 *      <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListContactFlowsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListContactFlowsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListContactFlowsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowTypes: [ // ContactFlowTypes
 *     "CONTACT_FLOW" || "CUSTOMER_QUEUE" || "CUSTOMER_HOLD" || "CUSTOMER_WHISPER" || "AGENT_HOLD" || "AGENT_WHISPER" || "OUTBOUND_WHISPER" || "AGENT_TRANSFER" || "QUEUE_TRANSFER",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListContactFlowsCommand(input);
 * const response = await client.send(command);
 * // { // ListContactFlowsResponse
 * //   ContactFlowSummaryList: [ // ContactFlowSummaryList
 * //     { // ContactFlowSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       ContactFlowType: "CONTACT_FLOW" || "CUSTOMER_QUEUE" || "CUSTOMER_HOLD" || "CUSTOMER_WHISPER" || "AGENT_HOLD" || "AGENT_WHISPER" || "OUTBOUND_WHISPER" || "AGENT_TRANSFER" || "QUEUE_TRANSFER",
 * //       ContactFlowState: "ACTIVE" || "ARCHIVED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContactFlowsCommandInput - {@link ListContactFlowsCommandInput}
 * @returns {@link ListContactFlowsCommandOutput}
 * @see {@link ListContactFlowsCommandInput} for command's `input` shape.
 * @see {@link ListContactFlowsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class ListContactFlowsCommand extends $Command<
  ListContactFlowsCommandInput,
  ListContactFlowsCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: ListContactFlowsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListContactFlowsCommandInput, ListContactFlowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListContactFlowsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListContactFlowsCommand";
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
  private serialize(input: ListContactFlowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListContactFlowsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListContactFlowsCommandOutput> {
    return de_ListContactFlowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
