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
  ListApplicationInstanceNodeInstancesRequest,
  ListApplicationInstanceNodeInstancesRequestFilterSensitiveLog,
  ListApplicationInstanceNodeInstancesResponse,
  ListApplicationInstanceNodeInstancesResponseFilterSensitiveLog,
} from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import {
  deserializeAws_restJson1ListApplicationInstanceNodeInstancesCommand,
  serializeAws_restJson1ListApplicationInstanceNodeInstancesCommand,
} from "../protocols/Aws_restJson1";

export interface ListApplicationInstanceNodeInstancesCommandInput extends ListApplicationInstanceNodeInstancesRequest {}
export interface ListApplicationInstanceNodeInstancesCommandOutput
  extends ListApplicationInstanceNodeInstancesResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of application node instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, ListApplicationInstanceNodeInstancesCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, ListApplicationInstanceNodeInstancesCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const command = new ListApplicationInstanceNodeInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApplicationInstanceNodeInstancesCommandInput} for command's `input` shape.
 * @see {@link ListApplicationInstanceNodeInstancesCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 */
export class ListApplicationInstanceNodeInstancesCommand extends $Command<
  ListApplicationInstanceNodeInstancesCommandInput,
  ListApplicationInstanceNodeInstancesCommandOutput,
  PanoramaClientResolvedConfig
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

  constructor(readonly input: ListApplicationInstanceNodeInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PanoramaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListApplicationInstanceNodeInstancesCommandInput, ListApplicationInstanceNodeInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListApplicationInstanceNodeInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "ListApplicationInstanceNodeInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListApplicationInstanceNodeInstancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListApplicationInstanceNodeInstancesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListApplicationInstanceNodeInstancesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListApplicationInstanceNodeInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListApplicationInstanceNodeInstancesCommandOutput> {
    return deserializeAws_restJson1ListApplicationInstanceNodeInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
