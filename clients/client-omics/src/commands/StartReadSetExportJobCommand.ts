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
  StartReadSetExportJobRequest,
  StartReadSetExportJobRequestFilterSensitiveLog,
  StartReadSetExportJobResponse,
  StartReadSetExportJobResponseFilterSensitiveLog,
} from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import {
  deserializeAws_restJson1StartReadSetExportJobCommand,
  serializeAws_restJson1StartReadSetExportJobCommand,
} from "../protocols/Aws_restJson1";

export interface StartReadSetExportJobCommandInput extends StartReadSetExportJobRequest {}
export interface StartReadSetExportJobCommandOutput extends StartReadSetExportJobResponse, __MetadataBearer {}

/**
 * <p>Starts a read set export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, StartReadSetExportJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, StartReadSetExportJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const command = new StartReadSetExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartReadSetExportJobCommandInput} for command's `input` shape.
 * @see {@link StartReadSetExportJobCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 */
export class StartReadSetExportJobCommand extends $Command<
  StartReadSetExportJobCommandInput,
  StartReadSetExportJobCommandOutput,
  OmicsClientResolvedConfig
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

  constructor(readonly input: StartReadSetExportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OmicsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartReadSetExportJobCommandInput, StartReadSetExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartReadSetExportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "StartReadSetExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartReadSetExportJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartReadSetExportJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartReadSetExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartReadSetExportJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartReadSetExportJobCommandOutput> {
    return deserializeAws_restJson1StartReadSetExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
