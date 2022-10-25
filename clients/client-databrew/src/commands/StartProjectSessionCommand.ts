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

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import {
  StartProjectSessionRequest,
  StartProjectSessionRequestFilterSensitiveLog,
  StartProjectSessionResponse,
  StartProjectSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartProjectSessionCommand,
  serializeAws_restJson1StartProjectSessionCommand,
} from "../protocols/Aws_restJson1";

export interface StartProjectSessionCommandInput extends StartProjectSessionRequest {}
export interface StartProjectSessionCommandOutput extends StartProjectSessionResponse, __MetadataBearer {}

/**
 * <p>Creates an interactive session, enabling you to manipulate data in a DataBrew
 *             project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, StartProjectSessionCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, StartProjectSessionCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new StartProjectSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartProjectSessionCommandInput} for command's `input` shape.
 * @see {@link StartProjectSessionCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 */
export class StartProjectSessionCommand extends $Command<
  StartProjectSessionCommandInput,
  StartProjectSessionCommandOutput,
  DataBrewClientResolvedConfig
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

  constructor(readonly input: StartProjectSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartProjectSessionCommandInput, StartProjectSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartProjectSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "StartProjectSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartProjectSessionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartProjectSessionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartProjectSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartProjectSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartProjectSessionCommandOutput> {
    return deserializeAws_restJson1StartProjectSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
