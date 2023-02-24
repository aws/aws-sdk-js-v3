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
  DisassociateProductFromPortfolioInput,
  DisassociateProductFromPortfolioInputFilterSensitiveLog,
  DisassociateProductFromPortfolioOutput,
  DisassociateProductFromPortfolioOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateProductFromPortfolioCommand,
  serializeAws_json1_1DisassociateProductFromPortfolioCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface DisassociateProductFromPortfolioCommandInput extends DisassociateProductFromPortfolioInput {}
export interface DisassociateProductFromPortfolioCommandOutput
  extends DisassociateProductFromPortfolioOutput,
    __MetadataBearer {}

/**
 * <p>Disassociates the specified product from the specified portfolio. </p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DisassociateProductFromPortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DisassociateProductFromPortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DisassociateProductFromPortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateProductFromPortfolioCommandInput} for command's `input` shape.
 * @see {@link DisassociateProductFromPortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class DisassociateProductFromPortfolioCommand extends $Command<
  DisassociateProductFromPortfolioCommandInput,
  DisassociateProductFromPortfolioCommandOutput,
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

  constructor(readonly input: DisassociateProductFromPortfolioCommandInput) {
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
  ): Handler<DisassociateProductFromPortfolioCommandInput, DisassociateProductFromPortfolioCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateProductFromPortfolioCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DisassociateProductFromPortfolioCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateProductFromPortfolioInputFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateProductFromPortfolioOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateProductFromPortfolioCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateProductFromPortfolioCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateProductFromPortfolioCommandOutput> {
    return deserializeAws_json1_1DisassociateProductFromPortfolioCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
