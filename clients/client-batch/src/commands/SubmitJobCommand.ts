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

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import {
  SubmitJobRequest,
  SubmitJobRequestFilterSensitiveLog,
  SubmitJobResponse,
  SubmitJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1SubmitJobCommand,
  serializeAws_restJson1SubmitJobCommand,
} from "../protocols/Aws_restJson1";

export interface SubmitJobCommandInput extends SubmitJobRequest {}
export interface SubmitJobCommandOutput extends SubmitJobResponse, __MetadataBearer {}

/**
 * <p>Submits an Batch job from a job definition. Parameters that are specified during <a>SubmitJob</a>
 *    override parameters defined in the job definition. vCPU and memory requirements that are specified in the
 *     <code>resourceRequirements</code> objects in the job definition are the exception. They can't be overridden this way
 *    using the <code>memory</code> and <code>vcpus</code> parameters. Rather, you must specify updates to job definition
 *    parameters in a <code>resourceRequirements</code> object that's included in the <code>containerOverrides</code>
 *    parameter.</p>
 *          <note>
 *             <p>Job queues with a scheduling policy are limited to 500 active fair share identifiers at a time. </p>
 *          </note>
 *          <important>
 *             <p>Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days. This is because, after 14
 *     days, Fargate resources might become unavailable and job might be terminated.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, SubmitJobCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, SubmitJobCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new SubmitJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubmitJobCommandInput} for command's `input` shape.
 * @see {@link SubmitJobCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 */
export class SubmitJobCommand extends $Command<
  SubmitJobCommandInput,
  SubmitJobCommandOutput,
  BatchClientResolvedConfig
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

  constructor(readonly input: SubmitJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SubmitJobCommandInput, SubmitJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SubmitJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "SubmitJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SubmitJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SubmitJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SubmitJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SubmitJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SubmitJobCommandOutput> {
    return deserializeAws_restJson1SubmitJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
