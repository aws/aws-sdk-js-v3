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
  SendTaskFailureInput,
  SendTaskFailureInputFilterSensitiveLog,
  SendTaskFailureOutput,
} from "../models/models_0";
import {
  deserializeAws_json1_0SendTaskFailureCommand,
  serializeAws_json1_0SendTaskFailureCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 *
 * The input for {@link SendTaskFailureCommand}.
 */
export interface SendTaskFailureCommandInput extends SendTaskFailureInput {}
/**
 * @public
 *
 * The output of {@link SendTaskFailureCommand}.
 */
export interface SendTaskFailureCommandOutput extends SendTaskFailureOutput, __MetadataBearer {}

/**
 * @public
 * <p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a>
 *       pattern to report that the task identified by the <code>taskToken</code> failed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, SendTaskFailureCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, SendTaskFailureCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // SendTaskFailureInput
 *   taskToken: "STRING_VALUE", // required
 *   error: "STRING_VALUE",
 *   cause: "STRING_VALUE",
 * };
 * const command = new SendTaskFailureCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param SendTaskFailureCommandInput - {@link SendTaskFailureCommandInput}
 * @returns {@link SendTaskFailureCommandOutput}
 * @see {@link SendTaskFailureCommandInput} for command's `input` shape.
 * @see {@link SendTaskFailureCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidToken} (client fault)
 *  <p>The provided token is not valid.</p>
 *
 * @throws {@link TaskDoesNotExist} (client fault)
 *
 * @throws {@link TaskTimedOut} (client fault)
 *
 *
 */
export class SendTaskFailureCommand extends $Command<
  SendTaskFailureCommandInput,
  SendTaskFailureCommandOutput,
  SFNClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: SendTaskFailureCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendTaskFailureCommandInput, SendTaskFailureCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendTaskFailureCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "SendTaskFailureCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendTaskFailureInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: SendTaskFailureCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0SendTaskFailureCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendTaskFailureCommandOutput> {
    return deserializeAws_json1_0SendTaskFailureCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
