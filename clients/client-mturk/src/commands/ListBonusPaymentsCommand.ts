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

import {
  ListBonusPaymentsRequest,
  ListBonusPaymentsRequestFilterSensitiveLog,
  ListBonusPaymentsResponse,
  ListBonusPaymentsResponseFilterSensitiveLog,
} from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  deserializeAws_json1_1ListBonusPaymentsCommand,
  serializeAws_json1_1ListBonusPaymentsCommand,
} from "../protocols/Aws_json1_1";

export interface ListBonusPaymentsCommandInput extends ListBonusPaymentsRequest {}
export interface ListBonusPaymentsCommandOutput extends ListBonusPaymentsResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>ListBonusPayments</code>
 *             operation retrieves the amounts of bonuses you have paid to Workers
 *             for a given HIT or assignment.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListBonusPaymentsCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListBonusPaymentsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListBonusPaymentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBonusPaymentsCommandInput} for command's `input` shape.
 * @see {@link ListBonusPaymentsCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 */
export class ListBonusPaymentsCommand extends $Command<
  ListBonusPaymentsCommandInput,
  ListBonusPaymentsCommandOutput,
  MTurkClientResolvedConfig
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

  constructor(readonly input: ListBonusPaymentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBonusPaymentsCommandInput, ListBonusPaymentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBonusPaymentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListBonusPaymentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBonusPaymentsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListBonusPaymentsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBonusPaymentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListBonusPaymentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBonusPaymentsCommandOutput> {
    return deserializeAws_json1_1ListBonusPaymentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
