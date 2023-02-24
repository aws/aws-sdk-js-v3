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
  ImportServerCatalogRequest,
  ImportServerCatalogRequestFilterSensitiveLog,
  ImportServerCatalogResponse,
  ImportServerCatalogResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ImportServerCatalogCommand,
  serializeAws_json1_1ImportServerCatalogCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

export interface ImportServerCatalogCommandInput extends ImportServerCatalogRequest {}
export interface ImportServerCatalogCommandOutput extends ImportServerCatalogResponse, __MetadataBearer {}

/**
 * <p>Gathers a complete list of on-premises servers. Connectors must be installed and
 *             monitoring all servers to import.</p>
 *         <p>This call returns immediately, but might take additional time to retrieve all the
 *             servers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, ImportServerCatalogCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, ImportServerCatalogCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new ImportServerCatalogCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportServerCatalogCommandInput} for command's `input` shape.
 * @see {@link ImportServerCatalogCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 */
export class ImportServerCatalogCommand extends $Command<
  ImportServerCatalogCommandInput,
  ImportServerCatalogCommandOutput,
  SMSClientResolvedConfig
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

  constructor(readonly input: ImportServerCatalogCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportServerCatalogCommandInput, ImportServerCatalogCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportServerCatalogCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "ImportServerCatalogCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportServerCatalogRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ImportServerCatalogResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportServerCatalogCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportServerCatalogCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportServerCatalogCommandOutput> {
    return deserializeAws_json1_1ImportServerCatalogCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
