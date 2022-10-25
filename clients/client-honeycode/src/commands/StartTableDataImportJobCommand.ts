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

import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import {
  StartTableDataImportJobRequest,
  StartTableDataImportJobRequestFilterSensitiveLog,
  StartTableDataImportJobResult,
  StartTableDataImportJobResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartTableDataImportJobCommand,
  serializeAws_restJson1StartTableDataImportJobCommand,
} from "../protocols/Aws_restJson1";

export interface StartTableDataImportJobCommandInput extends StartTableDataImportJobRequest {}
export interface StartTableDataImportJobCommandOutput extends StartTableDataImportJobResult, __MetadataBearer {}

/**
 * <p>
 *             The StartTableDataImportJob API allows you to start an import job on a table. This API will only return
 *             the id of the job that was started. To find out the status of the import request, you need to call the
 *             DescribeTableDataImportJob API.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, StartTableDataImportJobCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, StartTableDataImportJobCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new StartTableDataImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartTableDataImportJobCommandInput} for command's `input` shape.
 * @see {@link StartTableDataImportJobCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for HoneycodeClient's `config` shape.
 *
 */
export class StartTableDataImportJobCommand extends $Command<
  StartTableDataImportJobCommandInput,
  StartTableDataImportJobCommandOutput,
  HoneycodeClientResolvedConfig
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

  constructor(readonly input: StartTableDataImportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HoneycodeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartTableDataImportJobCommandInput, StartTableDataImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartTableDataImportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HoneycodeClient";
    const commandName = "StartTableDataImportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartTableDataImportJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartTableDataImportJobResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartTableDataImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartTableDataImportJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartTableDataImportJobCommandOutput> {
    return deserializeAws_restJson1StartTableDataImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
