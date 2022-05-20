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

import { GetCellRequest, GetCellResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetCellCommand,
  serializeAws_restJson1GetCellCommand,
} from "../protocols/Aws_restJson1";
import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";

export interface GetCellCommandInput extends GetCellRequest {}
export interface GetCellCommandOutput extends GetCellResponse, __MetadataBearer {}

/**
 * <p>Gets information about a cell including cell name, cell Amazon Resource Name (ARN), ARNs of nested cells for this cell, and a list of those cell ARNs with their associated recovery group ARNs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, GetCellCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, GetCellCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const command = new GetCellCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCellCommandInput} for command's `input` shape.
 * @see {@link GetCellCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for Route53RecoveryReadinessClient's `config` shape.
 *
 */
export class GetCellCommand extends $Command<
  GetCellCommandInput,
  GetCellCommandOutput,
  Route53RecoveryReadinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCellCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53RecoveryReadinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCellCommandInput, GetCellCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryReadinessClient";
    const commandName = "GetCellCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCellRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCellResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCellCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCellCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCellCommandOutput> {
    return deserializeAws_restJson1GetCellCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
