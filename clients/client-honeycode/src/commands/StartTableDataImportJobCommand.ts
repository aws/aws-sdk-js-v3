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

/**
 * The input for {@link StartTableDataImportJobCommand}.
 */
export interface StartTableDataImportJobCommandInput extends StartTableDataImportJobRequest {}
/**
 * The output of {@link StartTableDataImportJobCommand}.
 */
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
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *             You do not have sufficient access to perform this action. Check that the workbook is owned by you and your
 *             IAM policy allows access to the resource in the request.
 *         </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There were unexpected errors from the server.</p>
 *
 * @throws {@link RequestTimeoutException} (server fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A Workbook, Table, App, Screen or Screen Automation was not found with the given ID.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>
 *             The request caused service quota to be breached.
 *         </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Remote service is unreachable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Tps(transactions per second) rate reached.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *             Request is invalid. The message in the response contains details on why the request is invalid.
 *         </p>
 *
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
