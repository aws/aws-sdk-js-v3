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

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  ListKeywordsForDataSourceRequest,
  ListKeywordsForDataSourceRequestFilterSensitiveLog,
  ListKeywordsForDataSourceResponse,
  ListKeywordsForDataSourceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListKeywordsForDataSourceCommand,
  serializeAws_restJson1ListKeywordsForDataSourceCommand,
} from "../protocols/Aws_restJson1";

export interface ListKeywordsForDataSourceCommandInput extends ListKeywordsForDataSourceRequest {}
export interface ListKeywordsForDataSourceCommandOutput extends ListKeywordsForDataSourceResponse, __MetadataBearer {}

/**
 * <p> Returns a list of keywords that are pre-mapped to the specified control data source.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListKeywordsForDataSourceCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListKeywordsForDataSourceCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new ListKeywordsForDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListKeywordsForDataSourceCommandInput} for command's `input` shape.
 * @see {@link ListKeywordsForDataSourceCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 */
export class ListKeywordsForDataSourceCommand extends $Command<
  ListKeywordsForDataSourceCommandInput,
  ListKeywordsForDataSourceCommandOutput,
  AuditManagerClientResolvedConfig
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

  constructor(readonly input: ListKeywordsForDataSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListKeywordsForDataSourceCommandInput, ListKeywordsForDataSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListKeywordsForDataSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "ListKeywordsForDataSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListKeywordsForDataSourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListKeywordsForDataSourceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListKeywordsForDataSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListKeywordsForDataSourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListKeywordsForDataSourceCommandOutput> {
    return deserializeAws_restJson1ListKeywordsForDataSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
