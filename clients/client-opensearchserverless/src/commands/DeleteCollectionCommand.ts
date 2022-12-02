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
  DeleteCollectionRequest,
  DeleteCollectionRequestFilterSensitiveLog,
  DeleteCollectionResponse,
  DeleteCollectionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import {
  deserializeAws_json1_0DeleteCollectionCommand,
  serializeAws_json1_0DeleteCollectionCommand,
} from "../protocols/Aws_json1_0";

export interface DeleteCollectionCommandInput extends DeleteCollectionRequest {}
export interface DeleteCollectionCommandOutput extends DeleteCollectionResponse, __MetadataBearer {}

/**
 * <p>Deletes an OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and
 *                 managing Amazon OpenSearch Serverless collections</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, DeleteCollectionCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, DeleteCollectionCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * const client = new OpenSearchServerlessClient(config);
 * const command = new DeleteCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCollectionCommandInput} for command's `input` shape.
 * @see {@link DeleteCollectionCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 */
export class DeleteCollectionCommand extends $Command<
  DeleteCollectionCommandInput,
  DeleteCollectionCommandOutput,
  OpenSearchServerlessClientResolvedConfig
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

  constructor(readonly input: DeleteCollectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCollectionCommandInput, DeleteCollectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCollectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchServerlessClient";
    const commandName = "DeleteCollectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCollectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteCollectionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCollectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteCollectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCollectionCommandOutput> {
    return deserializeAws_json1_0DeleteCollectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
