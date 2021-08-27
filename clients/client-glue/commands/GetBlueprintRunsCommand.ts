import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetBlueprintRunsRequest, GetBlueprintRunsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetBlueprintRunsCommand,
  serializeAws_json1_1GetBlueprintRunsCommand,
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

export interface GetBlueprintRunsCommandInput extends GetBlueprintRunsRequest {}
export interface GetBlueprintRunsCommandOutput extends GetBlueprintRunsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of blueprint runs for a specified blueprint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetBlueprintRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetBlueprintRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetBlueprintRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBlueprintRunsCommandInput} for command's `input` shape.
 * @see {@link GetBlueprintRunsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetBlueprintRunsCommand extends $Command<
  GetBlueprintRunsCommandInput,
  GetBlueprintRunsCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBlueprintRunsCommandInput) {
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
  ): Handler<GetBlueprintRunsCommandInput, GetBlueprintRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetBlueprintRunsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBlueprintRunsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBlueprintRunsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBlueprintRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetBlueprintRunsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBlueprintRunsCommandOutput> {
    return deserializeAws_json1_1GetBlueprintRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
