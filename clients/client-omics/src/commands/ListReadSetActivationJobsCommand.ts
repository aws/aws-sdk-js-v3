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
  ListReadSetActivationJobsRequest,
  ListReadSetActivationJobsRequestFilterSensitiveLog,
  ListReadSetActivationJobsResponse,
  ListReadSetActivationJobsResponseFilterSensitiveLog,
} from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import {
  deserializeAws_restJson1ListReadSetActivationJobsCommand,
  serializeAws_restJson1ListReadSetActivationJobsCommand,
} from "../protocols/Aws_restJson1";

export interface ListReadSetActivationJobsCommandInput extends ListReadSetActivationJobsRequest {}
export interface ListReadSetActivationJobsCommandOutput extends ListReadSetActivationJobsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of read set activation jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListReadSetActivationJobsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListReadSetActivationJobsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const command = new ListReadSetActivationJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReadSetActivationJobsCommandInput} for command's `input` shape.
 * @see {@link ListReadSetActivationJobsCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 */
export class ListReadSetActivationJobsCommand extends $Command<
  ListReadSetActivationJobsCommandInput,
  ListReadSetActivationJobsCommandOutput,
  OmicsClientResolvedConfig
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

  constructor(readonly input: ListReadSetActivationJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OmicsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReadSetActivationJobsCommandInput, ListReadSetActivationJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListReadSetActivationJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "ListReadSetActivationJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListReadSetActivationJobsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListReadSetActivationJobsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListReadSetActivationJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListReadSetActivationJobsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListReadSetActivationJobsCommandOutput> {
    return deserializeAws_restJson1ListReadSetActivationJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
