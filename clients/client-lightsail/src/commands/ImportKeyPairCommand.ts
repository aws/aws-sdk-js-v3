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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  ImportKeyPairRequest,
  ImportKeyPairRequestFilterSensitiveLog,
  ImportKeyPairResult,
  ImportKeyPairResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1ImportKeyPairCommand,
  serializeAws_json1_1ImportKeyPairCommand,
} from "../protocols/Aws_json1_1";

export interface ImportKeyPairCommandInput extends ImportKeyPairRequest {}
export interface ImportKeyPairCommandOutput extends ImportKeyPairResult, __MetadataBearer {}

/**
 * <p>Imports a public SSH key from a specific key pair.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, ImportKeyPairCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, ImportKeyPairCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new ImportKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportKeyPairCommandInput} for command's `input` shape.
 * @see {@link ImportKeyPairCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class ImportKeyPairCommand extends $Command<
  ImportKeyPairCommandInput,
  ImportKeyPairCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: ImportKeyPairCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportKeyPairCommandInput, ImportKeyPairCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ImportKeyPairCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "ImportKeyPairCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportKeyPairRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ImportKeyPairResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportKeyPairCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportKeyPairCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportKeyPairCommandOutput> {
    return deserializeAws_json1_1ImportKeyPairCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
