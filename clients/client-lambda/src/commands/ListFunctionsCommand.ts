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

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  ListFunctionsRequest,
  ListFunctionsRequestFilterSensitiveLog,
  ListFunctionsResponse,
  ListFunctionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListFunctionsCommand,
  serializeAws_restJson1ListFunctionsCommand,
} from "../protocols/Aws_restJson1";

export interface ListFunctionsCommandInput extends ListFunctionsRequest {}
export interface ListFunctionsCommandOutput extends ListFunctionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Lambda functions, with the version-specific configuration of each. Lambda returns up to 50
 *       functions per call.</p>
 *          <p>Set <code>FunctionVersion</code> to <code>ALL</code> to include all published versions of each function in
 *       addition to the unpublished version.</p>
 *          <note>
 *             <p>The <code>ListFunctions</code> operation returns a subset of the <a>FunctionConfiguration</a> fields.
 *         To get the additional fields (State, StateReasonCode, StateReason, LastUpdateStatus, LastUpdateStatusReason,
 *         LastUpdateStatusReasonCode,  RuntimeVersionConfig) for a function or version, use <a>GetFunction</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListFunctionsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListFunctionsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListFunctionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFunctionsCommandInput} for command's `input` shape.
 * @see {@link ListFunctionsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class ListFunctionsCommand extends $Command<
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput,
  LambdaClientResolvedConfig
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

  constructor(readonly input: ListFunctionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFunctionsCommandInput, ListFunctionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListFunctionsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "ListFunctionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFunctionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListFunctionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFunctionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListFunctionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFunctionsCommandOutput> {
    return deserializeAws_restJson1ListFunctionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
