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

import { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRServerlessClient";
import {
  CancelJobRunRequest,
  CancelJobRunRequestFilterSensitiveLog,
  CancelJobRunResponse,
  CancelJobRunResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CancelJobRunCommand,
  serializeAws_restJson1CancelJobRunCommand,
} from "../protocols/Aws_restJson1";

export interface CancelJobRunCommandInput extends CancelJobRunRequest {}
export interface CancelJobRunCommandOutput extends CancelJobRunResponse, __MetadataBearer {}

/**
 * <p>Cancels a job run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, CancelJobRunCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, CancelJobRunCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * const client = new EMRServerlessClient(config);
 * const command = new CancelJobRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelJobRunCommandInput} for command's `input` shape.
 * @see {@link CancelJobRunCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
 *
 */
export class CancelJobRunCommand extends $Command<
  CancelJobRunCommandInput,
  CancelJobRunCommandOutput,
  EMRServerlessClientResolvedConfig
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

  constructor(readonly input: CancelJobRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelJobRunCommandInput, CancelJobRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CancelJobRunCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRServerlessClient";
    const commandName = "CancelJobRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelJobRunRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelJobRunResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelJobRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelJobRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelJobRunCommandOutput> {
    return deserializeAws_restJson1CancelJobRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
