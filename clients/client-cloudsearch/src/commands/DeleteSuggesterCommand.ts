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

import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import {
  DeleteSuggesterRequest,
  DeleteSuggesterRequestFilterSensitiveLog,
  DeleteSuggesterResponse,
  DeleteSuggesterResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeleteSuggesterCommand,
  serializeAws_queryDeleteSuggesterCommand,
} from "../protocols/Aws_query";

export interface DeleteSuggesterCommandInput extends DeleteSuggesterRequest {}
export interface DeleteSuggesterCommandOutput extends DeleteSuggesterResponse, __MetadataBearer {}

/**
 * <p>Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DeleteSuggesterCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DeleteSuggesterCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DeleteSuggesterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSuggesterCommandInput} for command's `input` shape.
 * @see {@link DeleteSuggesterCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 */
export class DeleteSuggesterCommand extends $Command<
  DeleteSuggesterCommandInput,
  DeleteSuggesterCommandOutput,
  CloudSearchClientResolvedConfig
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

  constructor(readonly input: DeleteSuggesterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSuggesterCommandInput, DeleteSuggesterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteSuggesterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DeleteSuggesterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSuggesterRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteSuggesterResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSuggesterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteSuggesterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSuggesterCommandOutput> {
    return deserializeAws_queryDeleteSuggesterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
