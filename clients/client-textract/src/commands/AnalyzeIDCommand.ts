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
  AnalyzeIDRequest,
  AnalyzeIDRequestFilterSensitiveLog,
  AnalyzeIDResponse,
  AnalyzeIDResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_1AnalyzeIDCommand, serializeAws_json1_1AnalyzeIDCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

export interface AnalyzeIDCommandInput extends AnalyzeIDRequest {}
export interface AnalyzeIDCommandOutput extends AnalyzeIDResponse, __MetadataBearer {}

/**
 * <p>Analyzes identity documents for relevant information. This information is extracted and
 *          returned as <code>IdentityDocumentFields</code>, which records both the normalized field
 *          and value of the extracted text.Unlike other Amazon Textract operations,
 *             <code>AnalyzeID</code> doesn't return any Geometry data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, AnalyzeIDCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, AnalyzeIDCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const command = new AnalyzeIDCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AnalyzeIDCommandInput} for command's `input` shape.
 * @see {@link AnalyzeIDCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 */
export class AnalyzeIDCommand extends $Command<
  AnalyzeIDCommandInput,
  AnalyzeIDCommandOutput,
  TextractClientResolvedConfig
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

  constructor(readonly input: AnalyzeIDCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TextractClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AnalyzeIDCommandInput, AnalyzeIDCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, AnalyzeIDCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TextractClient";
    const commandName = "AnalyzeIDCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AnalyzeIDRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AnalyzeIDResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AnalyzeIDCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AnalyzeIDCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AnalyzeIDCommandOutput> {
    return deserializeAws_json1_1AnalyzeIDCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
