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
  ListEnvironmentsInput,
  ListEnvironmentsInputFilterSensitiveLog,
  ListEnvironmentsOutput,
  ListEnvironmentsOutputFilterSensitiveLog,
} from "../models/models_0";
import { MWAAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MWAAClient";
import {
  deserializeAws_restJson1ListEnvironmentsCommand,
  serializeAws_restJson1ListEnvironmentsCommand,
} from "../protocols/Aws_restJson1";

export interface ListEnvironmentsCommandInput extends ListEnvironmentsInput {}
export interface ListEnvironmentsCommandOutput extends ListEnvironmentsOutput, __MetadataBearer {}

/**
 * <p>Lists the Amazon Managed Workflows for Apache Airflow (MWAA) environments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, ListEnvironmentsCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, ListEnvironmentsCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * const client = new MWAAClient(config);
 * const command = new ListEnvironmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for MWAAClient's `config` shape.
 *
 */
export class ListEnvironmentsCommand extends $Command<
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
  MWAAClientResolvedConfig
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

  constructor(readonly input: ListEnvironmentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MWAAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEnvironmentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MWAAClient";
    const commandName = "ListEnvironmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEnvironmentsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListEnvironmentsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEnvironmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListEnvironmentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEnvironmentsCommandOutput> {
    return deserializeAws_restJson1ListEnvironmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
