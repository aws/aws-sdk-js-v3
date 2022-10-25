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

import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import {
  CancelFindingsReportRequest,
  CancelFindingsReportRequestFilterSensitiveLog,
  CancelFindingsReportResponse,
  CancelFindingsReportResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CancelFindingsReportCommand,
  serializeAws_restJson1CancelFindingsReportCommand,
} from "../protocols/Aws_restJson1";

export interface CancelFindingsReportCommandInput extends CancelFindingsReportRequest {}
export interface CancelFindingsReportCommandOutput extends CancelFindingsReportResponse, __MetadataBearer {}

/**
 * <p>Cancels the given findings report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, CancelFindingsReportCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, CancelFindingsReportCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const command = new CancelFindingsReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelFindingsReportCommandInput} for command's `input` shape.
 * @see {@link CancelFindingsReportCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 */
export class CancelFindingsReportCommand extends $Command<
  CancelFindingsReportCommandInput,
  CancelFindingsReportCommandOutput,
  Inspector2ClientResolvedConfig
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

  constructor(readonly input: CancelFindingsReportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Inspector2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelFindingsReportCommandInput, CancelFindingsReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelFindingsReportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Inspector2Client";
    const commandName = "CancelFindingsReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelFindingsReportRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelFindingsReportResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelFindingsReportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelFindingsReportCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelFindingsReportCommandOutput> {
    return deserializeAws_restJson1CancelFindingsReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
