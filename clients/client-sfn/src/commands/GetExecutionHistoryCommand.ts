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
  GetExecutionHistoryInput,
  GetExecutionHistoryInputFilterSensitiveLog,
  GetExecutionHistoryOutput,
  GetExecutionHistoryOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0GetExecutionHistoryCommand,
  serializeAws_json1_0GetExecutionHistoryCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

export interface GetExecutionHistoryCommandInput extends GetExecutionHistoryInput {}
export interface GetExecutionHistoryCommandOutput extends GetExecutionHistoryOutput, __MetadataBearer {}

/**
 * <p>Returns the history of the specified execution as a list of events. By default, the
 *       results are returned in ascending order of the <code>timeStamp</code> of the events. Use the
 *         <code>reverseOrder</code> parameter to get the latest events first.</p>
 *          <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
 *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
 *          <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, GetExecutionHistoryCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, GetExecutionHistoryCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new GetExecutionHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExecutionHistoryCommandInput} for command's `input` shape.
 * @see {@link GetExecutionHistoryCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 */
export class GetExecutionHistoryCommand extends $Command<
  GetExecutionHistoryCommandInput,
  GetExecutionHistoryCommandOutput,
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

  constructor(readonly input: GetExecutionHistoryCommandInput) {
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
  ): Handler<GetExecutionHistoryCommandInput, GetExecutionHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetExecutionHistoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "GetExecutionHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetExecutionHistoryInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetExecutionHistoryOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetExecutionHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetExecutionHistoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetExecutionHistoryCommandOutput> {
    return deserializeAws_json1_0GetExecutionHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
