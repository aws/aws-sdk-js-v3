// smithy-typescript generated code
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
import { TerminateRecoveryInstancesRequest, TerminateRecoveryInstancesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1TerminateRecoveryInstancesCommand,
  serializeAws_restJson1TerminateRecoveryInstancesCommand,
} from "../protocols/Aws_restJson1";

export interface TerminateRecoveryInstancesCommandInput extends TerminateRecoveryInstancesRequest {}
export interface TerminateRecoveryInstancesCommandOutput extends TerminateRecoveryInstancesResponse, __MetadataBearer {}

/**
 * <p>Initiates a Job for terminating the EC2 resources associated with the specified Recovery Instances, and then will delete the Recovery Instances from the Elastic Disaster Recovery service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, TerminateRecoveryInstancesCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, TerminateRecoveryInstancesCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const command = new TerminateRecoveryInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateRecoveryInstancesCommandInput} for command's `input` shape.
 * @see {@link TerminateRecoveryInstancesCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 */
export class TerminateRecoveryInstancesCommand extends $Command<
  TerminateRecoveryInstancesCommandInput,
  TerminateRecoveryInstancesCommandOutput,
  DrsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TerminateRecoveryInstancesCommandInput) {
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
  ): Handler<TerminateRecoveryInstancesCommandInput, TerminateRecoveryInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "TerminateRecoveryInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TerminateRecoveryInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TerminateRecoveryInstancesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TerminateRecoveryInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TerminateRecoveryInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<TerminateRecoveryInstancesCommandOutput> {
    return deserializeAws_restJson1TerminateRecoveryInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
