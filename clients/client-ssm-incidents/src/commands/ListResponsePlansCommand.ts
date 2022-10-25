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
  ListResponsePlansInput,
  ListResponsePlansInputFilterSensitiveLog,
  ListResponsePlansOutput,
  ListResponsePlansOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListResponsePlansCommand,
  serializeAws_restJson1ListResponsePlansCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

export interface ListResponsePlansCommandInput extends ListResponsePlansInput {}
export interface ListResponsePlansCommandOutput extends ListResponsePlansOutput, __MetadataBearer {}

/**
 * <p>Lists all response plans in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, ListResponsePlansCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, ListResponsePlansCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new ListResponsePlansCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResponsePlansCommandInput} for command's `input` shape.
 * @see {@link ListResponsePlansCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 */
export class ListResponsePlansCommand extends $Command<
  ListResponsePlansCommandInput,
  ListResponsePlansCommandOutput,
  SSMIncidentsClientResolvedConfig
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

  constructor(readonly input: ListResponsePlansCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMIncidentsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListResponsePlansCommandInput, ListResponsePlansCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListResponsePlansCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMIncidentsClient";
    const commandName = "ListResponsePlansCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResponsePlansInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListResponsePlansOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListResponsePlansCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListResponsePlansCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListResponsePlansCommandOutput> {
    return deserializeAws_restJson1ListResponsePlansCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
