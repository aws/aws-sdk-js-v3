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

import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import {
  ListRecordingConfigurationsRequest,
  ListRecordingConfigurationsRequestFilterSensitiveLog,
  ListRecordingConfigurationsResponse,
  ListRecordingConfigurationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListRecordingConfigurationsCommand,
  serializeAws_restJson1ListRecordingConfigurationsCommand,
} from "../protocols/Aws_restJson1";

export interface ListRecordingConfigurationsCommandInput extends ListRecordingConfigurationsRequest {}
export interface ListRecordingConfigurationsCommandOutput
  extends ListRecordingConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Gets summary information about all recording configurations in your account, in the
 *         Amazon Web Services region where the API request is processed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, ListRecordingConfigurationsCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, ListRecordingConfigurationsCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const command = new ListRecordingConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRecordingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListRecordingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 */
export class ListRecordingConfigurationsCommand extends $Command<
  ListRecordingConfigurationsCommandInput,
  ListRecordingConfigurationsCommandOutput,
  IvsClientResolvedConfig
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

  constructor(readonly input: ListRecordingConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRecordingConfigurationsCommandInput, ListRecordingConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRecordingConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "ListRecordingConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRecordingConfigurationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListRecordingConfigurationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRecordingConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRecordingConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRecordingConfigurationsCommandOutput> {
    return deserializeAws_restJson1ListRecordingConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
