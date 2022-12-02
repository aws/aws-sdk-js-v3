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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import {
  GetCalculationExecutionCodeRequest,
  GetCalculationExecutionCodeRequestFilterSensitiveLog,
  GetCalculationExecutionCodeResponse,
  GetCalculationExecutionCodeResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetCalculationExecutionCodeCommand,
  serializeAws_json1_1GetCalculationExecutionCodeCommand,
} from "../protocols/Aws_json1_1";

export interface GetCalculationExecutionCodeCommandInput extends GetCalculationExecutionCodeRequest {}
export interface GetCalculationExecutionCodeCommandOutput
  extends GetCalculationExecutionCodeResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a pre-signed URL to a copy of the code that was executed for the
 *             calculation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetCalculationExecutionCodeCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetCalculationExecutionCodeCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new GetCalculationExecutionCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCalculationExecutionCodeCommandInput} for command's `input` shape.
 * @see {@link GetCalculationExecutionCodeCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 */
export class GetCalculationExecutionCodeCommand extends $Command<
  GetCalculationExecutionCodeCommandInput,
  GetCalculationExecutionCodeCommandOutput,
  AthenaClientResolvedConfig
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

  constructor(readonly input: GetCalculationExecutionCodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCalculationExecutionCodeCommandInput, GetCalculationExecutionCodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCalculationExecutionCodeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "GetCalculationExecutionCodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCalculationExecutionCodeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCalculationExecutionCodeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCalculationExecutionCodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCalculationExecutionCodeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCalculationExecutionCodeCommandOutput> {
    return deserializeAws_json1_1GetCalculationExecutionCodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
