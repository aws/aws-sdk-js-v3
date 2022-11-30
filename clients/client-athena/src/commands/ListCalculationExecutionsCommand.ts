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
  ListCalculationExecutionsRequest,
  ListCalculationExecutionsRequestFilterSensitiveLog,
  ListCalculationExecutionsResponse,
  ListCalculationExecutionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListCalculationExecutionsCommand,
  serializeAws_json1_1ListCalculationExecutionsCommand,
} from "../protocols/Aws_json1_1";

export interface ListCalculationExecutionsCommandInput extends ListCalculationExecutionsRequest {}
export interface ListCalculationExecutionsCommandOutput extends ListCalculationExecutionsResponse, __MetadataBearer {}

/**
 * <p>Lists the calculations that have been submitted to a session in descending order.
 *             Newer calculations are listed first; older calculations are listed later.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListCalculationExecutionsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListCalculationExecutionsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new ListCalculationExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCalculationExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListCalculationExecutionsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 */
export class ListCalculationExecutionsCommand extends $Command<
  ListCalculationExecutionsCommandInput,
  ListCalculationExecutionsCommandOutput,
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

  constructor(readonly input: ListCalculationExecutionsCommandInput) {
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
  ): Handler<ListCalculationExecutionsCommandInput, ListCalculationExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCalculationExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "ListCalculationExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCalculationExecutionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListCalculationExecutionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCalculationExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCalculationExecutionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCalculationExecutionsCommandOutput> {
    return deserializeAws_json1_1ListCalculationExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
