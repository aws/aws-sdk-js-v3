import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DefineIndexFieldRequest, DefineIndexFieldResponse } from "../models/models_0";
import {
  deserializeAws_queryDefineIndexFieldCommand,
  serializeAws_queryDefineIndexFieldCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DefineIndexFieldCommandInput = DefineIndexFieldRequest;
export type DefineIndexFieldCommandOutput = DefineIndexFieldResponse & __MetadataBearer;

/**
 * <p>Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
 */
export class DefineIndexFieldCommand extends $Command<
  DefineIndexFieldCommandInput,
  DefineIndexFieldCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DefineIndexFieldCommandInput) {
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
  ): Handler<DefineIndexFieldCommandInput, DefineIndexFieldCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DefineIndexFieldCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DefineIndexFieldRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DefineIndexFieldResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DefineIndexFieldCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDefineIndexFieldCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DefineIndexFieldCommandOutput> {
    return deserializeAws_queryDefineIndexFieldCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
