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

import { MobileClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MobileClient";
import {
  ExportProjectRequest,
  ExportProjectRequestFilterSensitiveLog,
  ExportProjectResult,
  ExportProjectResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ExportProjectCommand,
  serializeAws_restJson1ExportProjectCommand,
} from "../protocols/Aws_restJson1";

export interface ExportProjectCommandInput extends ExportProjectRequest {}
export interface ExportProjectCommandOutput extends ExportProjectResult, __MetadataBearer {}

/**
 * <p>
 *             Exports project configuration to a snapshot which can be downloaded and shared.
 *             Note that mobile app push credentials are encrypted in exported projects, so they
 *             can only be shared successfully within the same AWS account.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, ExportProjectCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, ExportProjectCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const command = new ExportProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportProjectCommandInput} for command's `input` shape.
 * @see {@link ExportProjectCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for MobileClient's `config` shape.
 *
 */
export class ExportProjectCommand extends $Command<
  ExportProjectCommandInput,
  ExportProjectCommandOutput,
  MobileClientResolvedConfig
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

  constructor(readonly input: ExportProjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MobileClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportProjectCommandInput, ExportProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ExportProjectCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MobileClient";
    const commandName = "ExportProjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportProjectRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ExportProjectResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ExportProjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExportProjectCommandOutput> {
    return deserializeAws_restJson1ExportProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
