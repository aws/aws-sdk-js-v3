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

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import {
  ListResourceSetResourcesRequest,
  ListResourceSetResourcesRequestFilterSensitiveLog,
  ListResourceSetResourcesResponse,
  ListResourceSetResourcesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListResourceSetResourcesCommand,
  serializeAws_json1_1ListResourceSetResourcesCommand,
} from "../protocols/Aws_json1_1";

export interface ListResourceSetResourcesCommandInput extends ListResourceSetResourcesRequest {}
export interface ListResourceSetResourcesCommandOutput extends ListResourceSetResourcesResponse, __MetadataBearer {}

/**
 * <p>Returns an array of resources that are currently associated to a resource set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListResourceSetResourcesCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListResourceSetResourcesCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new ListResourceSetResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceSetResourcesCommandInput} for command's `input` shape.
 * @see {@link ListResourceSetResourcesCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 */
export class ListResourceSetResourcesCommand extends $Command<
  ListResourceSetResourcesCommandInput,
  ListResourceSetResourcesCommandOutput,
  FMSClientResolvedConfig
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

  constructor(readonly input: ListResourceSetResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListResourceSetResourcesCommandInput, ListResourceSetResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListResourceSetResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "ListResourceSetResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResourceSetResourcesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListResourceSetResourcesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListResourceSetResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListResourceSetResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListResourceSetResourcesCommandOutput> {
    return deserializeAws_json1_1ListResourceSetResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
