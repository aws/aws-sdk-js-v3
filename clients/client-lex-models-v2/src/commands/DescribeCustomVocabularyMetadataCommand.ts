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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import {
  DescribeCustomVocabularyMetadataRequest,
  DescribeCustomVocabularyMetadataRequestFilterSensitiveLog,
  DescribeCustomVocabularyMetadataResponse,
  DescribeCustomVocabularyMetadataResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeCustomVocabularyMetadataCommand,
  serializeAws_restJson1DescribeCustomVocabularyMetadataCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeCustomVocabularyMetadataCommandInput extends DescribeCustomVocabularyMetadataRequest {}
export interface DescribeCustomVocabularyMetadataCommandOutput
  extends DescribeCustomVocabularyMetadataResponse,
    __MetadataBearer {}

/**
 * <p>Provides metadata information about a custom vocabulary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeCustomVocabularyMetadataCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeCustomVocabularyMetadataCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DescribeCustomVocabularyMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCustomVocabularyMetadataCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomVocabularyMetadataCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 */
export class DescribeCustomVocabularyMetadataCommand extends $Command<
  DescribeCustomVocabularyMetadataCommandInput,
  DescribeCustomVocabularyMetadataCommandOutput,
  LexModelsV2ClientResolvedConfig
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

  constructor(readonly input: DescribeCustomVocabularyMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCustomVocabularyMetadataCommandInput, DescribeCustomVocabularyMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCustomVocabularyMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "DescribeCustomVocabularyMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCustomVocabularyMetadataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeCustomVocabularyMetadataResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeCustomVocabularyMetadataCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeCustomVocabularyMetadataCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCustomVocabularyMetadataCommandOutput> {
    return deserializeAws_restJson1DescribeCustomVocabularyMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
