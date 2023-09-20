// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  SendTaskSuccessInput,
  SendTaskSuccessInputFilterSensitiveLog,
  SendTaskSuccessOutput,
} from "../models/models_0";
import { de_SendTaskSuccessCommand, se_SendTaskSuccessCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendTaskSuccessCommand}.
 */
export interface SendTaskSuccessCommandInput extends SendTaskSuccessInput {}
/**
 * @public
 *
 * The output of {@link SendTaskSuccessCommand}.
 */
export interface SendTaskSuccessCommandOutput extends SendTaskSuccessOutput, __MetadataBearer {}

/**
 * @public
 * <p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a>
 *       pattern to report that the task identified by the <code>taskToken</code> completed
 *       successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, SendTaskSuccessCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, SendTaskSuccessCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // SendTaskSuccessInput
 *   taskToken: "STRING_VALUE", // required
 *   output: "STRING_VALUE", // required
 * };
 * const command = new SendTaskSuccessCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendTaskSuccessCommandInput - {@link SendTaskSuccessCommandInput}
 * @returns {@link SendTaskSuccessCommandOutput}
 * @see {@link SendTaskSuccessCommandInput} for command's `input` shape.
 * @see {@link SendTaskSuccessCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidOutput} (client fault)
 *  <p>The provided JSON output data is not valid.</p>
 *
 * @throws {@link InvalidToken} (client fault)
 *  <p>The provided token is not valid.</p>
 *
 * @throws {@link TaskDoesNotExist} (client fault)
 *
 * @throws {@link TaskTimedOut} (client fault)
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 */
export class SendTaskSuccessCommand extends $Command<
  SendTaskSuccessCommandInput,
  SendTaskSuccessCommandOutput,
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
  constructor(readonly input: SendTaskSuccessCommandInput) {
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
  ): Handler<SendTaskSuccessCommandInput, SendTaskSuccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendTaskSuccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "SendTaskSuccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendTaskSuccessInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSStepFunctions",
        operation: "SendTaskSuccess",
      },
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
  private serialize(input: SendTaskSuccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendTaskSuccessCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendTaskSuccessCommandOutput> {
    return de_SendTaskSuccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
