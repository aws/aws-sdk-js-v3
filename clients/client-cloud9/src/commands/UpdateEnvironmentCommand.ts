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

import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import {
  UpdateEnvironmentRequest,
  UpdateEnvironmentRequestFilterSensitiveLog,
  UpdateEnvironmentResult,
  UpdateEnvironmentResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateEnvironmentCommand,
  serializeAws_json1_1UpdateEnvironmentCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateEnvironmentCommandInput extends UpdateEnvironmentRequest {}
export interface UpdateEnvironmentCommandOutput extends UpdateEnvironmentResult, __MetadataBearer {}

/**
 * <p>Changes the settings of an existing Cloud9 development environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, UpdateEnvironmentCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, UpdateEnvironmentCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * const client = new Cloud9Client(config);
 * const command = new UpdateEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link Cloud9ClientResolvedConfig | config} for Cloud9Client's `config` shape.
 *
 */
export class UpdateEnvironmentCommand extends $Command<
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput,
  Cloud9ClientResolvedConfig
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

  constructor(readonly input: UpdateEnvironmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Cloud9ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateEnvironmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Cloud9Client";
    const commandName = "UpdateEnvironmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateEnvironmentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateEnvironmentResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateEnvironmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEnvironmentCommandOutput> {
    return deserializeAws_json1_1UpdateEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
