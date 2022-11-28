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
  PutSourceServerActionRequest,
  PutSourceServerActionRequestFilterSensitiveLog,
  SourceServerActionDocument,
  SourceServerActionDocumentFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutSourceServerActionCommand,
  serializeAws_restJson1PutSourceServerActionCommand,
} from "../protocols/Aws_restJson1";

export interface PutSourceServerActionCommandInput extends PutSourceServerActionRequest {}
export interface PutSourceServerActionCommandOutput extends SourceServerActionDocument, __MetadataBearer {}

/**
 * <p>Put source server post migration custom action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, PutSourceServerActionCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, PutSourceServerActionCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new PutSourceServerActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSourceServerActionCommandInput} for command's `input` shape.
 * @see {@link PutSourceServerActionCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 */
export class PutSourceServerActionCommand extends $Command<
  PutSourceServerActionCommandInput,
  PutSourceServerActionCommandOutput,
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

  constructor(readonly input: PutSourceServerActionCommandInput) {
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
  ): Handler<PutSourceServerActionCommandInput, PutSourceServerActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutSourceServerActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "PutSourceServerActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutSourceServerActionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SourceServerActionDocumentFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutSourceServerActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutSourceServerActionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutSourceServerActionCommandOutput> {
    return deserializeAws_restJson1PutSourceServerActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
