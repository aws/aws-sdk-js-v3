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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import {
  ListExtensibleSourceServersRequest,
  ListExtensibleSourceServersRequestFilterSensitiveLog,
  ListExtensibleSourceServersResponse,
  ListExtensibleSourceServersResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListExtensibleSourceServersCommand,
  serializeAws_restJson1ListExtensibleSourceServersCommand,
} from "../protocols/Aws_restJson1";

export interface ListExtensibleSourceServersCommandInput extends ListExtensibleSourceServersRequest {}
export interface ListExtensibleSourceServersCommandOutput
  extends ListExtensibleSourceServersResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of source servers on a staging account that are extensible, which means that:
 *             a. The source server is not already extended into this Account.
 *             b. The source server on the Account we’re reading from is not an extension of another source server.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, ListExtensibleSourceServersCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, ListExtensibleSourceServersCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const command = new ListExtensibleSourceServersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListExtensibleSourceServersCommandInput} for command's `input` shape.
 * @see {@link ListExtensibleSourceServersCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 */
export class ListExtensibleSourceServersCommand extends $Command<
  ListExtensibleSourceServersCommandInput,
  ListExtensibleSourceServersCommandOutput,
  DrsClientResolvedConfig
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

  constructor(readonly input: ListExtensibleSourceServersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListExtensibleSourceServersCommandInput, ListExtensibleSourceServersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListExtensibleSourceServersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "ListExtensibleSourceServersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListExtensibleSourceServersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListExtensibleSourceServersResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListExtensibleSourceServersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListExtensibleSourceServersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListExtensibleSourceServersCommandOutput> {
    return deserializeAws_restJson1ListExtensibleSourceServersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
