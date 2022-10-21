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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import {
  RemoveSourceIdentifierFromSubscriptionMessage,
  RemoveSourceIdentifierFromSubscriptionMessageFilterSensitiveLog,
  RemoveSourceIdentifierFromSubscriptionResult,
  RemoveSourceIdentifierFromSubscriptionResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand,
  serializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand,
} from "../protocols/Aws_query";

export interface RemoveSourceIdentifierFromSubscriptionCommandInput
  extends RemoveSourceIdentifierFromSubscriptionMessage {}
export interface RemoveSourceIdentifierFromSubscriptionCommandOutput
  extends RemoveSourceIdentifierFromSubscriptionResult,
    __MetadataBearer {}

/**
 * <p>Removes a source identifier from an existing Amazon DocumentDB event notification
 *             subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, RemoveSourceIdentifierFromSubscriptionCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, RemoveSourceIdentifierFromSubscriptionCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new RemoveSourceIdentifierFromSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveSourceIdentifierFromSubscriptionCommandInput} for command's `input` shape.
 * @see {@link RemoveSourceIdentifierFromSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 */
export class RemoveSourceIdentifierFromSubscriptionCommand extends $Command<
  RemoveSourceIdentifierFromSubscriptionCommandInput,
  RemoveSourceIdentifierFromSubscriptionCommandOutput,
  DocDBClientResolvedConfig
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

  constructor(readonly input: RemoveSourceIdentifierFromSubscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveSourceIdentifierFromSubscriptionCommandInput, RemoveSourceIdentifierFromSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveSourceIdentifierFromSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "RemoveSourceIdentifierFromSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveSourceIdentifierFromSubscriptionMessageFilterSensitiveLog,
      outputFilterSensitiveLog: RemoveSourceIdentifierFromSubscriptionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RemoveSourceIdentifierFromSubscriptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveSourceIdentifierFromSubscriptionCommandOutput> {
    return deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
