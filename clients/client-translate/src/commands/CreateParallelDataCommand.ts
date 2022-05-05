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

import { CreateParallelDataRequest, CreateParallelDataResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateParallelDataCommand,
  serializeAws_json1_1CreateParallelDataCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

export interface CreateParallelDataCommandInput extends CreateParallelDataRequest {}
export interface CreateParallelDataCommandOutput extends CreateParallelDataResponse, __MetadataBearer {}

/**
 * <p>Creates a parallel data resource in Amazon Translate by importing an input file from
 *       Amazon S3. Parallel data files contain examples that show how you want segments of text to be
 *       translated. By adding parallel data, you can influence the style, tone, and word choice in
 *       your translation output.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, CreateParallelDataCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, CreateParallelDataCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new CreateParallelDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateParallelDataCommandInput} for command's `input` shape.
 * @see {@link CreateParallelDataCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 */
export class CreateParallelDataCommand extends $Command<
  CreateParallelDataCommandInput,
  CreateParallelDataCommandOutput,
  TranslateClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateParallelDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranslateClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateParallelDataCommandInput, CreateParallelDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "CreateParallelDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateParallelDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateParallelDataResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateParallelDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateParallelDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateParallelDataCommandOutput> {
    return deserializeAws_json1_1CreateParallelDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
