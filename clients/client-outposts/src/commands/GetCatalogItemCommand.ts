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
  GetCatalogItemInput,
  GetCatalogItemInputFilterSensitiveLog,
  GetCatalogItemOutput,
  GetCatalogItemOutputFilterSensitiveLog,
} from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import {
  deserializeAws_restJson1GetCatalogItemCommand,
  serializeAws_restJson1GetCatalogItemCommand,
} from "../protocols/Aws_restJson1";

export interface GetCatalogItemCommandInput extends GetCatalogItemInput {}
export interface GetCatalogItemCommandOutput extends GetCatalogItemOutput, __MetadataBearer {}

/**
 * <p>Gets information about the specified catalog item.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetCatalogItemCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetCatalogItemCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new GetCatalogItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCatalogItemCommandInput} for command's `input` shape.
 * @see {@link GetCatalogItemCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 */
export class GetCatalogItemCommand extends $Command<
  GetCatalogItemCommandInput,
  GetCatalogItemCommandOutput,
  OutpostsClientResolvedConfig
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

  constructor(readonly input: GetCatalogItemCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCatalogItemCommandInput, GetCatalogItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCatalogItemCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "GetCatalogItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCatalogItemInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetCatalogItemOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCatalogItemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCatalogItemCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCatalogItemCommandOutput> {
    return deserializeAws_restJson1GetCatalogItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
