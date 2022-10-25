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

import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import {
  GetUsageTotalsRequest,
  GetUsageTotalsRequestFilterSensitiveLog,
  GetUsageTotalsResponse,
  GetUsageTotalsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetUsageTotalsCommand,
  serializeAws_restJson1GetUsageTotalsCommand,
} from "../protocols/Aws_restJson1";

export interface GetUsageTotalsCommandInput extends GetUsageTotalsRequest {}
export interface GetUsageTotalsCommandOutput extends GetUsageTotalsResponse, __MetadataBearer {}

/**
 * <p>Retrieves (queries) aggregated usage data for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetUsageTotalsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetUsageTotalsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetUsageTotalsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUsageTotalsCommandInput} for command's `input` shape.
 * @see {@link GetUsageTotalsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 */
export class GetUsageTotalsCommand extends $Command<
  GetUsageTotalsCommandInput,
  GetUsageTotalsCommandOutput,
  Macie2ClientResolvedConfig
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

  constructor(readonly input: GetUsageTotalsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUsageTotalsCommandInput, GetUsageTotalsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUsageTotalsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "GetUsageTotalsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUsageTotalsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetUsageTotalsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetUsageTotalsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetUsageTotalsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUsageTotalsCommandOutput> {
    return deserializeAws_restJson1GetUsageTotalsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
