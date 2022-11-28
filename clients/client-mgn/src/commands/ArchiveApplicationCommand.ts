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
  Application,
  ApplicationFilterSensitiveLog,
  ArchiveApplicationRequest,
  ArchiveApplicationRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ArchiveApplicationCommand,
  serializeAws_restJson1ArchiveApplicationCommand,
} from "../protocols/Aws_restJson1";

export interface ArchiveApplicationCommandInput extends ArchiveApplicationRequest {}
export interface ArchiveApplicationCommandOutput extends Application, __MetadataBearer {}

/**
 * <p>Archive application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ArchiveApplicationCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ArchiveApplicationCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new ArchiveApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ArchiveApplicationCommandInput} for command's `input` shape.
 * @see {@link ArchiveApplicationCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 */
export class ArchiveApplicationCommand extends $Command<
  ArchiveApplicationCommandInput,
  ArchiveApplicationCommandOutput,
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

  constructor(readonly input: ArchiveApplicationCommandInput) {
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
  ): Handler<ArchiveApplicationCommandInput, ArchiveApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ArchiveApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "ArchiveApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ArchiveApplicationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ApplicationFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ArchiveApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ArchiveApplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ArchiveApplicationCommandOutput> {
    return deserializeAws_restJson1ArchiveApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
