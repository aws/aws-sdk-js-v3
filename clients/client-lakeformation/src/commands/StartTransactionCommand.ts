// smithy-typescript generated code
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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { StartTransactionRequest, StartTransactionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartTransactionCommand,
  serializeAws_restJson1StartTransactionCommand,
} from "../protocols/Aws_restJson1";

export interface StartTransactionCommandInput extends StartTransactionRequest {}
export interface StartTransactionCommandOutput extends StartTransactionResponse, __MetadataBearer {}

/**
 * <p>Starts a new transaction and returns its transaction ID. Transaction IDs are opaque objects that you can use to identify a transaction.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, StartTransactionCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, StartTransactionCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new StartTransactionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartTransactionCommandInput} for command's `input` shape.
 * @see {@link StartTransactionCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 */
export class StartTransactionCommand extends $Command<
  StartTransactionCommandInput,
  StartTransactionCommandOutput,
  LakeFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartTransactionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartTransactionCommandInput, StartTransactionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "StartTransactionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartTransactionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartTransactionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartTransactionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartTransactionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartTransactionCommandOutput> {
    return deserializeAws_restJson1StartTransactionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
