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

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import {
  ListApiKeysRequest,
  ListApiKeysRequestFilterSensitiveLog,
  ListApiKeysResponse,
  ListApiKeysResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListApiKeysCommand,
  serializeAws_restJson1ListApiKeysCommand,
} from "../protocols/Aws_restJson1";

export interface ListApiKeysCommandInput extends ListApiKeysRequest {}
export interface ListApiKeysCommandOutput extends ListApiKeysResponse, __MetadataBearer {}

/**
 * <p>Lists the API keys for a given API.</p>
 *          <note>
 *             <p>API keys are deleted automatically 60 days after they expire. However, they may still be included in the
 *             response until they have actually been deleted. You can safely call <code>DeleteApiKey</code> to manually
 *             delete a key before it's automatically deleted.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListApiKeysCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListApiKeysCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new ListApiKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApiKeysCommandInput} for command's `input` shape.
 * @see {@link ListApiKeysCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 */
export class ListApiKeysCommand extends $Command<
  ListApiKeysCommandInput,
  ListApiKeysCommandOutput,
  AppSyncClientResolvedConfig
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

  constructor(readonly input: ListApiKeysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListApiKeysCommandInput, ListApiKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListApiKeysCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "ListApiKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListApiKeysRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListApiKeysResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListApiKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListApiKeysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListApiKeysCommandOutput> {
    return deserializeAws_restJson1ListApiKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
