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

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import {
  DocumentationPartIds,
  DocumentationPartIdsFilterSensitiveLog,
  ImportDocumentationPartsRequest,
  ImportDocumentationPartsRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ImportDocumentationPartsCommand,
  serializeAws_restJson1ImportDocumentationPartsCommand,
} from "../protocols/Aws_restJson1";

export interface ImportDocumentationPartsCommandInput extends ImportDocumentationPartsRequest {}
export interface ImportDocumentationPartsCommandOutput extends DocumentationPartIds, __MetadataBearer {}

/**
 * <p>Imports documentation parts</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, ImportDocumentationPartsCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, ImportDocumentationPartsCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new ImportDocumentationPartsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportDocumentationPartsCommandInput} for command's `input` shape.
 * @see {@link ImportDocumentationPartsCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 */
export class ImportDocumentationPartsCommand extends $Command<
  ImportDocumentationPartsCommandInput,
  ImportDocumentationPartsCommandOutput,
  APIGatewayClientResolvedConfig
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

  constructor(readonly input: ImportDocumentationPartsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportDocumentationPartsCommandInput, ImportDocumentationPartsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportDocumentationPartsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "ImportDocumentationPartsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportDocumentationPartsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DocumentationPartIdsFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportDocumentationPartsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ImportDocumentationPartsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportDocumentationPartsCommandOutput> {
    return deserializeAws_restJson1ImportDocumentationPartsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
