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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  MarkAsArchivedRequest,
  MarkAsArchivedRequestFilterSensitiveLog,
  SourceServer,
  SourceServerFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1MarkAsArchivedCommand,
  serializeAws_restJson1MarkAsArchivedCommand,
} from "../protocols/Aws_restJson1";

export interface MarkAsArchivedCommandInput extends MarkAsArchivedRequest {}
export interface MarkAsArchivedCommandOutput extends SourceServer, __MetadataBearer {}

/**
 * <p>Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle. state which equals DISCONNECTED or CUTOVER.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, MarkAsArchivedCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, MarkAsArchivedCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new MarkAsArchivedCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MarkAsArchivedCommandInput} for command's `input` shape.
 * @see {@link MarkAsArchivedCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 */
export class MarkAsArchivedCommand extends $Command<
  MarkAsArchivedCommandInput,
  MarkAsArchivedCommandOutput,
  MgnClientResolvedConfig
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

  constructor(readonly input: MarkAsArchivedCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<MarkAsArchivedCommandInput, MarkAsArchivedCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, MarkAsArchivedCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "MarkAsArchivedCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MarkAsArchivedRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SourceServerFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MarkAsArchivedCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1MarkAsArchivedCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<MarkAsArchivedCommandOutput> {
    return deserializeAws_restJson1MarkAsArchivedCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
