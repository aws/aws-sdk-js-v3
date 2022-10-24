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
  GenerateChangeSetRequest,
  GenerateChangeSetRequestFilterSensitiveLog,
  GenerateChangeSetResponse,
  GenerateChangeSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GenerateChangeSetCommand,
  serializeAws_json1_1GenerateChangeSetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

export interface GenerateChangeSetCommandInput extends GenerateChangeSetRequest {}
export interface GenerateChangeSetCommandOutput extends GenerateChangeSetResponse, __MetadataBearer {}

/**
 * <p>Generates a target change set for a currently launched stack and writes it to an Amazon S3
 *             object in the customer’s Amazon S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GenerateChangeSetCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GenerateChangeSetCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GenerateChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateChangeSetCommandInput} for command's `input` shape.
 * @see {@link GenerateChangeSetCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 */
export class GenerateChangeSetCommand extends $Command<
  GenerateChangeSetCommandInput,
  GenerateChangeSetCommandOutput,
  SMSClientResolvedConfig
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

  constructor(readonly input: GenerateChangeSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GenerateChangeSetCommandInput, GenerateChangeSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GenerateChangeSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "GenerateChangeSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GenerateChangeSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GenerateChangeSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GenerateChangeSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GenerateChangeSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GenerateChangeSetCommandOutput> {
    return deserializeAws_json1_1GenerateChangeSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
