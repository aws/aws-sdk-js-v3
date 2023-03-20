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

import { AppIntegrationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppIntegrationsClient";
import { ListEventIntegrationsRequest, ListEventIntegrationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListEventIntegrationsCommand,
  serializeAws_restJson1ListEventIntegrationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListEventIntegrationsCommand}.
 */
export interface ListEventIntegrationsCommandInput extends ListEventIntegrationsRequest {}
/**
 * @public
 *
 * The output of {@link ListEventIntegrationsCommand}.
 */
export interface ListEventIntegrationsCommandOutput extends ListEventIntegrationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a paginated list of event integrations in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, ListEventIntegrationsCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, ListEventIntegrationsCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * const client = new AppIntegrationsClient(config);
 * const command = new ListEventIntegrationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListEventIntegrationsCommandInput - {@link ListEventIntegrationsCommandInput}
 * @returns {@link ListEventIntegrationsCommandOutput}
 * @see {@link ListEventIntegrationsCommandInput} for command's `input` shape.
 * @see {@link ListEventIntegrationsCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for AppIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>Request processing failed due to an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 *
 */
export class ListEventIntegrationsCommand extends $Command<
  ListEventIntegrationsCommandInput,
  ListEventIntegrationsCommandOutput,
  AppIntegrationsClientResolvedConfig
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
  constructor(readonly input: ListEventIntegrationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppIntegrationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEventIntegrationsCommandInput, ListEventIntegrationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEventIntegrationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppIntegrationsClient";
    const commandName = "ListEventIntegrationsCommand";
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
  private serialize(input: ListEventIntegrationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListEventIntegrationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEventIntegrationsCommandOutput> {
    return deserializeAws_restJson1ListEventIntegrationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
