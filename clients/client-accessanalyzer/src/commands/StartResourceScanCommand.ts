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

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { StartResourceScanRequest, StartResourceScanRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1StartResourceScanCommand,
  serializeAws_restJson1StartResourceScanCommand,
} from "../protocols/Aws_restJson1";

export interface StartResourceScanCommandInput extends StartResourceScanRequest {}
export interface StartResourceScanCommandOutput extends __MetadataBearer {}

/**
 * <p>Immediately starts a scan of the policies applied to the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, StartResourceScanCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, StartResourceScanCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new StartResourceScanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartResourceScanCommandInput} for command's `input` shape.
 * @see {@link StartResourceScanCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 */
export class StartResourceScanCommand extends $Command<
  StartResourceScanCommandInput,
  StartResourceScanCommandOutput,
  AccessAnalyzerClientResolvedConfig
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

  constructor(readonly input: StartResourceScanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartResourceScanCommandInput, StartResourceScanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartResourceScanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "StartResourceScanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartResourceScanRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartResourceScanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartResourceScanCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartResourceScanCommandOutput> {
    return deserializeAws_restJson1StartResourceScanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
