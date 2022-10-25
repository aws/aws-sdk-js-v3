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
  ListSigningJobsRequest,
  ListSigningJobsRequestFilterSensitiveLog,
  ListSigningJobsResponse,
  ListSigningJobsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListSigningJobsCommand,
  serializeAws_restJson1ListSigningJobsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

export interface ListSigningJobsCommandInput extends ListSigningJobsRequest {}
export interface ListSigningJobsCommandOutput extends ListSigningJobsResponse, __MetadataBearer {}

/**
 * <p>Lists all your signing jobs. You can use the <code>maxResults</code> parameter to
 * 			limit the number of signing jobs that are returned in the response. If additional jobs
 * 			remain to be listed, code signing returns a <code>nextToken</code> value. Use this value in
 * 			subsequent calls to <code>ListSigningJobs</code> to fetch the remaining values. You can
 * 			continue calling <code>ListSigningJobs</code> with your <code>maxResults</code>
 * 			parameter and with new values that code signing returns in the <code>nextToken</code>
 * 			parameter until all of your signing jobs have been returned. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, ListSigningJobsCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, ListSigningJobsCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new ListSigningJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSigningJobsCommandInput} for command's `input` shape.
 * @see {@link ListSigningJobsCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for SignerClient's `config` shape.
 *
 */
export class ListSigningJobsCommand extends $Command<
  ListSigningJobsCommandInput,
  ListSigningJobsCommandOutput,
  SignerClientResolvedConfig
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

  constructor(readonly input: ListSigningJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SignerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSigningJobsCommandInput, ListSigningJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSigningJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "ListSigningJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSigningJobsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSigningJobsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSigningJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSigningJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSigningJobsCommandOutput> {
    return deserializeAws_restJson1ListSigningJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
