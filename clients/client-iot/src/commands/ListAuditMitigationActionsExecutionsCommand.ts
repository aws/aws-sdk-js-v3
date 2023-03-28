// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  ListAuditMitigationActionsExecutionsRequest,
  ListAuditMitigationActionsExecutionsResponse,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListAuditMitigationActionsExecutionsCommand,
  serializeAws_restJson1ListAuditMitigationActionsExecutionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListAuditMitigationActionsExecutionsCommand}.
 */
export interface ListAuditMitigationActionsExecutionsCommandInput extends ListAuditMitigationActionsExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAuditMitigationActionsExecutionsCommand}.
 */
export interface ListAuditMitigationActionsExecutionsCommandOutput
  extends ListAuditMitigationActionsExecutionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the status of audit mitigation action tasks that were
 *       executed.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditMitigationActionsExecutions</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAuditMitigationActionsExecutionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAuditMitigationActionsExecutionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListAuditMitigationActionsExecutionsRequest
 *   taskId: "STRING_VALUE", // required
 *   actionStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED" || "CANCELED" || "SKIPPED" || "PENDING",
 *   findingId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAuditMitigationActionsExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListAuditMitigationActionsExecutionsCommandInput - {@link ListAuditMitigationActionsExecutionsCommandInput}
 * @returns {@link ListAuditMitigationActionsExecutionsCommandOutput}
 * @see {@link ListAuditMitigationActionsExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListAuditMitigationActionsExecutionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 *
 */
export class ListAuditMitigationActionsExecutionsCommand extends $Command<
  ListAuditMitigationActionsExecutionsCommandInput,
  ListAuditMitigationActionsExecutionsCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: ListAuditMitigationActionsExecutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAuditMitigationActionsExecutionsCommandInput, ListAuditMitigationActionsExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAuditMitigationActionsExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListAuditMitigationActionsExecutionsCommand";
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
  private serialize(
    input: ListAuditMitigationActionsExecutionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAuditMitigationActionsExecutionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAuditMitigationActionsExecutionsCommandOutput> {
    return deserializeAws_restJson1ListAuditMitigationActionsExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
