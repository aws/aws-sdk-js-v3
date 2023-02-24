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

import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import {
  ListModelPackagingJobsRequest,
  ListModelPackagingJobsRequestFilterSensitiveLog,
  ListModelPackagingJobsResponse,
  ListModelPackagingJobsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListModelPackagingJobsCommand,
  serializeAws_restJson1ListModelPackagingJobsCommand,
} from "../protocols/Aws_restJson1";

export interface ListModelPackagingJobsCommandInput extends ListModelPackagingJobsRequest {}
export interface ListModelPackagingJobsCommandOutput extends ListModelPackagingJobsResponse, __MetadataBearer {}

/**
 * <p>
 * Lists the model packaging jobs created for an Amazon Lookout for Vision project.
 * </p>
 *          <p>This operation requires permissions to perform the
 *     <code>lookoutvision:ListModelPackagingJobs</code> operation.
 * </p>
 *
 *          <p>For more information, see
 *       <i>Using your Amazon Lookout for Vision model on an edge device</i> in the  Amazon Lookout for Vision Developer Guide. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, ListModelPackagingJobsCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, ListModelPackagingJobsCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new ListModelPackagingJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListModelPackagingJobsCommandInput} for command's `input` shape.
 * @see {@link ListModelPackagingJobsCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 */
export class ListModelPackagingJobsCommand extends $Command<
  ListModelPackagingJobsCommandInput,
  ListModelPackagingJobsCommandOutput,
  LookoutVisionClientResolvedConfig
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

  constructor(readonly input: ListModelPackagingJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutVisionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListModelPackagingJobsCommandInput, ListModelPackagingJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListModelPackagingJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutVisionClient";
    const commandName = "ListModelPackagingJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListModelPackagingJobsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListModelPackagingJobsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListModelPackagingJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListModelPackagingJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListModelPackagingJobsCommandOutput> {
    return deserializeAws_restJson1ListModelPackagingJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
