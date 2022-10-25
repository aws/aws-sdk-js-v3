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
  CreateCustomLineItemInput,
  CreateCustomLineItemInputFilterSensitiveLog,
  CreateCustomLineItemOutput,
  CreateCustomLineItemOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateCustomLineItemCommand,
  serializeAws_restJson1CreateCustomLineItemCommand,
} from "../protocols/Aws_restJson1";

export interface CreateCustomLineItemCommandInput extends CreateCustomLineItemInput {}
export interface CreateCustomLineItemCommandOutput extends CreateCustomLineItemOutput, __MetadataBearer {}

/**
 * <p>
 *       Creates a custom line item that can be used to create a one-time fixed charge that can be applied to a single billing group for the current or previous billing period. The one-time fixed charge is either a fee or discount.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, CreateCustomLineItemCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, CreateCustomLineItemCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const command = new CreateCustomLineItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomLineItemCommandInput} for command's `input` shape.
 * @see {@link CreateCustomLineItemCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 */
export class CreateCustomLineItemCommand extends $Command<
  CreateCustomLineItemCommandInput,
  CreateCustomLineItemCommandOutput,
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

  constructor(readonly input: CreateCustomLineItemCommandInput) {
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
  ): Handler<CreateCustomLineItemCommandInput, CreateCustomLineItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCustomLineItemCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "CreateCustomLineItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCustomLineItemInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCustomLineItemOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCustomLineItemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateCustomLineItemCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCustomLineItemCommandOutput> {
    return deserializeAws_restJson1CreateCustomLineItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
