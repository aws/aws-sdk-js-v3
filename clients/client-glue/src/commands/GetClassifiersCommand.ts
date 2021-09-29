import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetClassifiersRequest, GetClassifiersResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetClassifiersCommand,
  serializeAws_json1_1GetClassifiersCommand,
} from "../protocols/Aws_json1_1";
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

export interface GetClassifiersCommandInput extends GetClassifiersRequest {}
export interface GetClassifiersCommandOutput extends GetClassifiersResponse, __MetadataBearer {}

/**
 * <p>Lists all classifier objects in the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetClassifiersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetClassifiersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetClassifiersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetClassifiersCommandInput} for command's `input` shape.
 * @see {@link GetClassifiersCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetClassifiersCommand extends $Command<
  GetClassifiersCommandInput,
  GetClassifiersCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetClassifiersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetClassifiersCommandInput, GetClassifiersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetClassifiersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetClassifiersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetClassifiersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetClassifiersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetClassifiersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetClassifiersCommandOutput> {
    return deserializeAws_json1_1GetClassifiersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
