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
  DisassociateBudgetFromResourceInput,
  DisassociateBudgetFromResourceInputFilterSensitiveLog,
  DisassociateBudgetFromResourceOutput,
  DisassociateBudgetFromResourceOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateBudgetFromResourceCommand,
  serializeAws_json1_1DisassociateBudgetFromResourceCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface DisassociateBudgetFromResourceCommandInput extends DisassociateBudgetFromResourceInput {}
export interface DisassociateBudgetFromResourceCommandOutput
  extends DisassociateBudgetFromResourceOutput,
    __MetadataBearer {}

/**
 * <p>Disassociates the specified budget from the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DisassociateBudgetFromResourceCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DisassociateBudgetFromResourceCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DisassociateBudgetFromResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateBudgetFromResourceCommandInput} for command's `input` shape.
 * @see {@link DisassociateBudgetFromResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class DisassociateBudgetFromResourceCommand extends $Command<
  DisassociateBudgetFromResourceCommandInput,
  DisassociateBudgetFromResourceCommandOutput,
  ServiceCatalogClientResolvedConfig
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

  constructor(readonly input: DisassociateBudgetFromResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateBudgetFromResourceCommandInput, DisassociateBudgetFromResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateBudgetFromResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DisassociateBudgetFromResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateBudgetFromResourceInputFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateBudgetFromResourceOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateBudgetFromResourceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateBudgetFromResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateBudgetFromResourceCommandOutput> {
    return deserializeAws_json1_1DisassociateBudgetFromResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
