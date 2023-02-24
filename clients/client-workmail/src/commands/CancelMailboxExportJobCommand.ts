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
  CancelMailboxExportJobRequest,
  CancelMailboxExportJobRequestFilterSensitiveLog,
  CancelMailboxExportJobResponse,
  CancelMailboxExportJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CancelMailboxExportJobCommand,
  serializeAws_json1_1CancelMailboxExportJobCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

export interface CancelMailboxExportJobCommandInput extends CancelMailboxExportJobRequest {}
export interface CancelMailboxExportJobCommandOutput extends CancelMailboxExportJobResponse, __MetadataBearer {}

/**
 * <p>Cancels a mailbox export job.</p>
 *          <note>
 *             <p>If the mailbox export job is near completion, it might not be possible to cancel
 *             it.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CancelMailboxExportJobCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CancelMailboxExportJobCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new CancelMailboxExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelMailboxExportJobCommandInput} for command's `input` shape.
 * @see {@link CancelMailboxExportJobCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 */
export class CancelMailboxExportJobCommand extends $Command<
  CancelMailboxExportJobCommandInput,
  CancelMailboxExportJobCommandOutput,
  WorkMailClientResolvedConfig
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

  constructor(readonly input: CancelMailboxExportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelMailboxExportJobCommandInput, CancelMailboxExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelMailboxExportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "CancelMailboxExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelMailboxExportJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelMailboxExportJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelMailboxExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelMailboxExportJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelMailboxExportJobCommandOutput> {
    return deserializeAws_json1_1CancelMailboxExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
