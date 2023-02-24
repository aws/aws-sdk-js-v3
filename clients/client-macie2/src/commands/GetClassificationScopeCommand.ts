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
  GetClassificationScopeRequest,
  GetClassificationScopeRequestFilterSensitiveLog,
  GetClassificationScopeResponse,
  GetClassificationScopeResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetClassificationScopeCommand,
  serializeAws_restJson1GetClassificationScopeCommand,
} from "../protocols/Aws_restJson1";

export interface GetClassificationScopeCommandInput extends GetClassificationScopeRequest {}
export interface GetClassificationScopeCommandOutput extends GetClassificationScopeResponse, __MetadataBearer {}

/**
 * <p>Retrieves the classification scope settings for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetClassificationScopeCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetClassificationScopeCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetClassificationScopeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetClassificationScopeCommandInput} for command's `input` shape.
 * @see {@link GetClassificationScopeCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 */
export class GetClassificationScopeCommand extends $Command<
  GetClassificationScopeCommandInput,
  GetClassificationScopeCommandOutput,
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

  constructor(readonly input: GetClassificationScopeCommandInput) {
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
  ): Handler<GetClassificationScopeCommandInput, GetClassificationScopeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetClassificationScopeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "GetClassificationScopeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetClassificationScopeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetClassificationScopeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetClassificationScopeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetClassificationScopeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetClassificationScopeCommandOutput> {
    return deserializeAws_restJson1GetClassificationScopeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
