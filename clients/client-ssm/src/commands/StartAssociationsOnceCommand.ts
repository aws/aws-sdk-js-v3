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
  StartAssociationsOnceRequest,
  StartAssociationsOnceRequestFilterSensitiveLog,
  StartAssociationsOnceResult,
  StartAssociationsOnceResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1StartAssociationsOnceCommand,
  serializeAws_json1_1StartAssociationsOnceCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface StartAssociationsOnceCommandInput extends StartAssociationsOnceRequest {}
export interface StartAssociationsOnceCommandOutput extends StartAssociationsOnceResult, __MetadataBearer {}

/**
 * <p>Runs an association immediately and only one time. This operation can be helpful when
 *    troubleshooting associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StartAssociationsOnceCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StartAssociationsOnceCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new StartAssociationsOnceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartAssociationsOnceCommandInput} for command's `input` shape.
 * @see {@link StartAssociationsOnceCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class StartAssociationsOnceCommand extends $Command<
  StartAssociationsOnceCommandInput,
  StartAssociationsOnceCommandOutput,
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

  constructor(readonly input: StartAssociationsOnceCommandInput) {
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
  ): Handler<StartAssociationsOnceCommandInput, StartAssociationsOnceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartAssociationsOnceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "StartAssociationsOnceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartAssociationsOnceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartAssociationsOnceResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartAssociationsOnceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartAssociationsOnceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartAssociationsOnceCommandOutput> {
    return deserializeAws_json1_1StartAssociationsOnceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
