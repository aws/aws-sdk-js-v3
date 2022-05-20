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

import { ListAppVersionResourceMappingsRequest, ListAppVersionResourceMappingsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListAppVersionResourceMappingsCommand,
  serializeAws_restJson1ListAppVersionResourceMappingsCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

export interface ListAppVersionResourceMappingsCommandInput extends ListAppVersionResourceMappingsRequest {}
export interface ListAppVersionResourceMappingsCommandOutput
  extends ListAppVersionResourceMappingsResponse,
    __MetadataBearer {}

/**
 * <p>Lists how the resources in an application version are mapped/sourced from. Mappings can be
 *       physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry
 *       app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListAppVersionResourceMappingsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListAppVersionResourceMappingsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const command = new ListAppVersionResourceMappingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAppVersionResourceMappingsCommandInput} for command's `input` shape.
 * @see {@link ListAppVersionResourceMappingsCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 */
export class ListAppVersionResourceMappingsCommand extends $Command<
  ListAppVersionResourceMappingsCommandInput,
  ListAppVersionResourceMappingsCommandOutput,
  ResiliencehubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAppVersionResourceMappingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAppVersionResourceMappingsCommandInput, ListAppVersionResourceMappingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "ListAppVersionResourceMappingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAppVersionResourceMappingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAppVersionResourceMappingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAppVersionResourceMappingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAppVersionResourceMappingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAppVersionResourceMappingsCommandOutput> {
    return deserializeAws_restJson1ListAppVersionResourceMappingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
