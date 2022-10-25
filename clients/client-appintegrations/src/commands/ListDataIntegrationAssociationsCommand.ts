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
import {
  ListDataIntegrationAssociationsRequest,
  ListDataIntegrationAssociationsRequestFilterSensitiveLog,
  ListDataIntegrationAssociationsResponse,
  ListDataIntegrationAssociationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListDataIntegrationAssociationsCommand,
  serializeAws_restJson1ListDataIntegrationAssociationsCommand,
} from "../protocols/Aws_restJson1";

export interface ListDataIntegrationAssociationsCommandInput extends ListDataIntegrationAssociationsRequest {}
export interface ListDataIntegrationAssociationsCommandOutput
  extends ListDataIntegrationAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a paginated list of DataIntegration associations in the account.</p>
 *          <note>
 *             <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated.
 * Use a different DataIntegration, or recreate the DataIntegration using the
 * <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, ListDataIntegrationAssociationsCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, ListDataIntegrationAssociationsCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * const client = new AppIntegrationsClient(config);
 * const command = new ListDataIntegrationAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataIntegrationAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListDataIntegrationAssociationsCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for AppIntegrationsClient's `config` shape.
 *
 */
export class ListDataIntegrationAssociationsCommand extends $Command<
  ListDataIntegrationAssociationsCommandInput,
  ListDataIntegrationAssociationsCommandOutput,
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

  constructor(readonly input: ListDataIntegrationAssociationsCommandInput) {
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
  ): Handler<ListDataIntegrationAssociationsCommandInput, ListDataIntegrationAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDataIntegrationAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppIntegrationsClient";
    const commandName = "ListDataIntegrationAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDataIntegrationAssociationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDataIntegrationAssociationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListDataIntegrationAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDataIntegrationAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDataIntegrationAssociationsCommandOutput> {
    return deserializeAws_restJson1ListDataIntegrationAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
