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

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import {
  ListBillingGroupCostReportsInput,
  ListBillingGroupCostReportsInputFilterSensitiveLog,
  ListBillingGroupCostReportsOutput,
  ListBillingGroupCostReportsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListBillingGroupCostReportsCommand,
  serializeAws_restJson1ListBillingGroupCostReportsCommand,
} from "../protocols/Aws_restJson1";

export interface ListBillingGroupCostReportsCommandInput extends ListBillingGroupCostReportsInput {}
export interface ListBillingGroupCostReportsCommandOutput extends ListBillingGroupCostReportsOutput, __MetadataBearer {}

/**
 * <p>A paginated call to retrieve a summary report of actual Amazon Web Services charges and the calculated
 *       Amazon Web Services charges based on the associated pricing plan of a billing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListBillingGroupCostReportsCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListBillingGroupCostReportsCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const command = new ListBillingGroupCostReportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBillingGroupCostReportsCommandInput} for command's `input` shape.
 * @see {@link ListBillingGroupCostReportsCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 */
export class ListBillingGroupCostReportsCommand extends $Command<
  ListBillingGroupCostReportsCommandInput,
  ListBillingGroupCostReportsCommandOutput,
  BillingconductorClientResolvedConfig
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

  constructor(readonly input: ListBillingGroupCostReportsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BillingconductorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBillingGroupCostReportsCommandInput, ListBillingGroupCostReportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBillingGroupCostReportsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "ListBillingGroupCostReportsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBillingGroupCostReportsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListBillingGroupCostReportsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBillingGroupCostReportsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBillingGroupCostReportsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListBillingGroupCostReportsCommandOutput> {
    return deserializeAws_restJson1ListBillingGroupCostReportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
