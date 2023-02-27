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
  ListTrustStoresRequest,
  ListTrustStoresRequestFilterSensitiveLog,
  ListTrustStoresResponse,
  ListTrustStoresResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListTrustStoresCommand,
  serializeAws_restJson1ListTrustStoresCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * The input for {@link ListTrustStoresCommand}.
 */
export interface ListTrustStoresCommandInput extends ListTrustStoresRequest {}
/**
 * The output of {@link ListTrustStoresCommand}.
 */
export interface ListTrustStoresCommandOutput extends ListTrustStoresResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of trust stores.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListTrustStoresCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListTrustStoresCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const command = new ListTrustStoresCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrustStoresCommandInput} for command's `input` shape.
 * @see {@link ListTrustStoresCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 */
export class ListTrustStoresCommand extends $Command<
  ListTrustStoresCommandInput,
  ListTrustStoresCommandOutput,
  WorkSpacesWebClientResolvedConfig
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

  constructor(readonly input: ListTrustStoresCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesWebClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTrustStoresCommandInput, ListTrustStoresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTrustStoresCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesWebClient";
    const commandName = "ListTrustStoresCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTrustStoresRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListTrustStoresResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTrustStoresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTrustStoresCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTrustStoresCommandOutput> {
    return deserializeAws_restJson1ListTrustStoresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
