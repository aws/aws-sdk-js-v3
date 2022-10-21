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
  ExportServerEngineAttributeRequest,
  ExportServerEngineAttributeRequestFilterSensitiveLog,
  ExportServerEngineAttributeResponse,
  ExportServerEngineAttributeResponseFilterSensitiveLog,
} from "../models/models_0";
import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import {
  deserializeAws_json1_1ExportServerEngineAttributeCommand,
  serializeAws_json1_1ExportServerEngineAttributeCommand,
} from "../protocols/Aws_json1_1";

export interface ExportServerEngineAttributeCommandInput extends ExportServerEngineAttributeRequest {}
export interface ExportServerEngineAttributeCommandOutput
  extends ExportServerEngineAttributeResponse,
    __MetadataBearer {}

/**
 * <p>
 *       Exports a specified server engine attribute as a base64-encoded string. For example, you can export user data that you can use in EC2 to associate nodes with a server.
 *     </p>
 *          <p>
 *       This operation is synchronous.
 *     </p>
 *          <p>
 *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist.
 *       An <code>InvalidStateException</code> is thrown when the server is in any of the following states: CREATING, TERMINATED,
 *       FAILED or DELETING.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, ExportServerEngineAttributeCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, ExportServerEngineAttributeCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new ExportServerEngineAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportServerEngineAttributeCommandInput} for command's `input` shape.
 * @see {@link ExportServerEngineAttributeCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for OpsWorksCMClient's `config` shape.
 *
 */
export class ExportServerEngineAttributeCommand extends $Command<
  ExportServerEngineAttributeCommandInput,
  ExportServerEngineAttributeCommandOutput,
  OpsWorksCMClientResolvedConfig
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

  constructor(readonly input: ExportServerEngineAttributeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksCMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportServerEngineAttributeCommandInput, ExportServerEngineAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExportServerEngineAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksCMClient";
    const commandName = "ExportServerEngineAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportServerEngineAttributeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ExportServerEngineAttributeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportServerEngineAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ExportServerEngineAttributeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExportServerEngineAttributeCommandOutput> {
    return deserializeAws_json1_1ExportServerEngineAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
