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
  DeleteIndexFieldRequest,
  DeleteIndexFieldRequestFilterSensitiveLog,
  DeleteIndexFieldResponse,
  DeleteIndexFieldResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeleteIndexFieldCommand,
  serializeAws_queryDeleteIndexFieldCommand,
} from "../protocols/Aws_query";

export interface DeleteIndexFieldCommandInput extends DeleteIndexFieldRequest {}
export interface DeleteIndexFieldCommandOutput extends DeleteIndexFieldResponse, __MetadataBearer {}

/**
 * <p>Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DeleteIndexFieldCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DeleteIndexFieldCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DeleteIndexFieldCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIndexFieldCommandInput} for command's `input` shape.
 * @see {@link DeleteIndexFieldCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 */
export class DeleteIndexFieldCommand extends $Command<
  DeleteIndexFieldCommandInput,
  DeleteIndexFieldCommandOutput,
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

  constructor(readonly input: DeleteIndexFieldCommandInput) {
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
  ): Handler<DeleteIndexFieldCommandInput, DeleteIndexFieldCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteIndexFieldCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DeleteIndexFieldCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteIndexFieldRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteIndexFieldResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteIndexFieldCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteIndexFieldCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteIndexFieldCommandOutput> {
    return deserializeAws_queryDeleteIndexFieldCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
