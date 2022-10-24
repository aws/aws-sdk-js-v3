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
  ImportHostKeyRequest,
  ImportHostKeyRequestFilterSensitiveLog,
  ImportHostKeyResponse,
  ImportHostKeyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ImportHostKeyCommand,
  serializeAws_json1_1ImportHostKeyCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

export interface ImportHostKeyCommandInput extends ImportHostKeyRequest {}
export interface ImportHostKeyCommandOutput extends ImportHostKeyResponse, __MetadataBearer {}

/**
 * <p>Adds a host key to the server that's specified by the <code>ServerId</code>
 *       parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ImportHostKeyCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ImportHostKeyCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new ImportHostKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportHostKeyCommandInput} for command's `input` shape.
 * @see {@link ImportHostKeyCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 */
export class ImportHostKeyCommand extends $Command<
  ImportHostKeyCommandInput,
  ImportHostKeyCommandOutput,
  TransferClientResolvedConfig
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

  constructor(readonly input: ImportHostKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportHostKeyCommandInput, ImportHostKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ImportHostKeyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "ImportHostKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportHostKeyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ImportHostKeyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportHostKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportHostKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportHostKeyCommandOutput> {
    return deserializeAws_json1_1ImportHostKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
