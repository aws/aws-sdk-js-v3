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
  ListExecutorsRequest,
  ListExecutorsRequestFilterSensitiveLog,
  ListExecutorsResponse,
  ListExecutorsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListExecutorsCommand,
  serializeAws_json1_1ListExecutorsCommand,
} from "../protocols/Aws_json1_1";

export interface ListExecutorsCommandInput extends ListExecutorsRequest {}
export interface ListExecutorsCommandOutput extends ListExecutorsResponse, __MetadataBearer {}

/**
 * <p>Lists, in descending order, the executors that have been submitted to a session. Newer
 *             executors are listed first; older executors are listed later. The result can be
 *             optionally filtered by state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListExecutorsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListExecutorsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new ListExecutorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListExecutorsCommandInput} for command's `input` shape.
 * @see {@link ListExecutorsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 */
export class ListExecutorsCommand extends $Command<
  ListExecutorsCommandInput,
  ListExecutorsCommandOutput,
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

  constructor(readonly input: ListExecutorsCommandInput) {
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
  ): Handler<ListExecutorsCommandInput, ListExecutorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListExecutorsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "ListExecutorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListExecutorsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListExecutorsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListExecutorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListExecutorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListExecutorsCommandOutput> {
    return deserializeAws_json1_1ListExecutorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
