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
  ListNodeFromTemplateJobsRequest,
  ListNodeFromTemplateJobsRequestFilterSensitiveLog,
  ListNodeFromTemplateJobsResponse,
  ListNodeFromTemplateJobsResponseFilterSensitiveLog,
} from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import {
  deserializeAws_restJson1ListNodeFromTemplateJobsCommand,
  serializeAws_restJson1ListNodeFromTemplateJobsCommand,
} from "../protocols/Aws_restJson1";

export interface ListNodeFromTemplateJobsCommandInput extends ListNodeFromTemplateJobsRequest {}
export interface ListNodeFromTemplateJobsCommandOutput extends ListNodeFromTemplateJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of camera stream node jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, ListNodeFromTemplateJobsCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, ListNodeFromTemplateJobsCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const command = new ListNodeFromTemplateJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNodeFromTemplateJobsCommandInput} for command's `input` shape.
 * @see {@link ListNodeFromTemplateJobsCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 */
export class ListNodeFromTemplateJobsCommand extends $Command<
  ListNodeFromTemplateJobsCommandInput,
  ListNodeFromTemplateJobsCommandOutput,
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

  constructor(readonly input: ListNodeFromTemplateJobsCommandInput) {
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
  ): Handler<ListNodeFromTemplateJobsCommandInput, ListNodeFromTemplateJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListNodeFromTemplateJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "ListNodeFromTemplateJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListNodeFromTemplateJobsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListNodeFromTemplateJobsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListNodeFromTemplateJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListNodeFromTemplateJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNodeFromTemplateJobsCommandOutput> {
    return deserializeAws_restJson1ListNodeFromTemplateJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
