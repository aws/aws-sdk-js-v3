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
  UnlabelParameterVersionRequest,
  UnlabelParameterVersionRequestFilterSensitiveLog,
  UnlabelParameterVersionResult,
  UnlabelParameterVersionResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1UnlabelParameterVersionCommand,
  serializeAws_json1_1UnlabelParameterVersionCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface UnlabelParameterVersionCommandInput extends UnlabelParameterVersionRequest {}
export interface UnlabelParameterVersionCommandOutput extends UnlabelParameterVersionResult, __MetadataBearer {}

/**
 * <p>Remove a label or labels from a parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UnlabelParameterVersionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UnlabelParameterVersionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UnlabelParameterVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnlabelParameterVersionCommandInput} for command's `input` shape.
 * @see {@link UnlabelParameterVersionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class UnlabelParameterVersionCommand extends $Command<
  UnlabelParameterVersionCommandInput,
  UnlabelParameterVersionCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: UnlabelParameterVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UnlabelParameterVersionCommandInput, UnlabelParameterVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UnlabelParameterVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UnlabelParameterVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnlabelParameterVersionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UnlabelParameterVersionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnlabelParameterVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UnlabelParameterVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnlabelParameterVersionCommandOutput> {
    return deserializeAws_json1_1UnlabelParameterVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
