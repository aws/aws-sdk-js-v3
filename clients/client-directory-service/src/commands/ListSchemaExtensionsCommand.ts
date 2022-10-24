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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import {
  ListSchemaExtensionsRequest,
  ListSchemaExtensionsRequestFilterSensitiveLog,
  ListSchemaExtensionsResult,
  ListSchemaExtensionsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListSchemaExtensionsCommand,
  serializeAws_json1_1ListSchemaExtensionsCommand,
} from "../protocols/Aws_json1_1";

export interface ListSchemaExtensionsCommandInput extends ListSchemaExtensionsRequest {}
export interface ListSchemaExtensionsCommandOutput extends ListSchemaExtensionsResult, __MetadataBearer {}

/**
 * <p>Lists all schema extensions applied to a Microsoft AD Directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ListSchemaExtensionsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ListSchemaExtensionsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new ListSchemaExtensionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSchemaExtensionsCommandInput} for command's `input` shape.
 * @see {@link ListSchemaExtensionsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 */
export class ListSchemaExtensionsCommand extends $Command<
  ListSchemaExtensionsCommandInput,
  ListSchemaExtensionsCommandOutput,
  DirectoryServiceClientResolvedConfig
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

  constructor(readonly input: ListSchemaExtensionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSchemaExtensionsCommandInput, ListSchemaExtensionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSchemaExtensionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "ListSchemaExtensionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSchemaExtensionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSchemaExtensionsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSchemaExtensionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSchemaExtensionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSchemaExtensionsCommandOutput> {
    return deserializeAws_json1_1ListSchemaExtensionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
