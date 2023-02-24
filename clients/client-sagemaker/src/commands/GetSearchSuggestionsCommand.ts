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
  GetSearchSuggestionsRequest,
  GetSearchSuggestionsRequestFilterSensitiveLog,
  GetSearchSuggestionsResponse,
  GetSearchSuggestionsResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1GetSearchSuggestionsCommand,
  serializeAws_json1_1GetSearchSuggestionsCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface GetSearchSuggestionsCommandInput extends GetSearchSuggestionsRequest {}
export interface GetSearchSuggestionsCommandOutput extends GetSearchSuggestionsResponse, __MetadataBearer {}

/**
 * <p>An auto-complete API for the search functionality in the Amazon SageMaker console. It returns
 *       suggestions of possible matches for the property name to use in <code>Search</code>
 *       queries. Provides suggestions for <code>HyperParameters</code>, <code>Tags</code>, and
 *       <code>Metrics</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, GetSearchSuggestionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, GetSearchSuggestionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new GetSearchSuggestionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSearchSuggestionsCommandInput} for command's `input` shape.
 * @see {@link GetSearchSuggestionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class GetSearchSuggestionsCommand extends $Command<
  GetSearchSuggestionsCommandInput,
  GetSearchSuggestionsCommandOutput,
  SageMakerClientResolvedConfig
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

  constructor(readonly input: GetSearchSuggestionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSearchSuggestionsCommandInput, GetSearchSuggestionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSearchSuggestionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "GetSearchSuggestionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSearchSuggestionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSearchSuggestionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSearchSuggestionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSearchSuggestionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSearchSuggestionsCommandOutput> {
    return deserializeAws_json1_1GetSearchSuggestionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
