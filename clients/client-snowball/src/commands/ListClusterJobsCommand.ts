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
  ListClusterJobsRequest,
  ListClusterJobsRequestFilterSensitiveLog,
  ListClusterJobsResult,
  ListClusterJobsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListClusterJobsCommand,
  serializeAws_json1_1ListClusterJobsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

export interface ListClusterJobsCommandInput extends ListClusterJobsRequest {}
export interface ListClusterJobsCommandOutput extends ListClusterJobsResult, __MetadataBearer {}

/**
 * <p>Returns an array of <code>JobListEntry</code> objects of the specified length. Each
 *         <code>JobListEntry</code> object is for a job in the specified cluster and contains a job's
 *       state, a job's ID, and other information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, ListClusterJobsCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, ListClusterJobsCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new ListClusterJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListClusterJobsCommandInput} for command's `input` shape.
 * @see {@link ListClusterJobsCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 */
export class ListClusterJobsCommand extends $Command<
  ListClusterJobsCommandInput,
  ListClusterJobsCommandOutput,
  SnowballClientResolvedConfig
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

  constructor(readonly input: ListClusterJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListClusterJobsCommandInput, ListClusterJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListClusterJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "ListClusterJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListClusterJobsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListClusterJobsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListClusterJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListClusterJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListClusterJobsCommandOutput> {
    return deserializeAws_json1_1ListClusterJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
