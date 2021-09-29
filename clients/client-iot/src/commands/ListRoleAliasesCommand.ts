import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListRoleAliasesRequest, ListRoleAliasesResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListRoleAliasesCommand,
  serializeAws_restJson1ListRoleAliasesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ListRoleAliasesCommandInput extends ListRoleAliasesRequest {}
export interface ListRoleAliasesCommandOutput extends ListRoleAliasesResponse, __MetadataBearer {}

/**
 * <p>Lists the role aliases registered in your account.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListRoleAliases</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListRoleAliasesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListRoleAliasesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListRoleAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRoleAliasesCommandInput} for command's `input` shape.
 * @see {@link ListRoleAliasesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListRoleAliasesCommand extends $Command<
  ListRoleAliasesCommandInput,
  ListRoleAliasesCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRoleAliasesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRoleAliasesCommandInput, ListRoleAliasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListRoleAliasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRoleAliasesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRoleAliasesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRoleAliasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRoleAliasesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRoleAliasesCommandOutput> {
    return deserializeAws_restJson1ListRoleAliasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
