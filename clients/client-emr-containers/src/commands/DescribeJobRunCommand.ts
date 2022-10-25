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

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import {
  DescribeJobRunRequest,
  DescribeJobRunRequestFilterSensitiveLog,
  DescribeJobRunResponse,
  DescribeJobRunResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeJobRunCommand,
  serializeAws_restJson1DescribeJobRunCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeJobRunCommandInput extends DescribeJobRunRequest {}
export interface DescribeJobRunCommandOutput extends DescribeJobRunResponse, __MetadataBearer {}

/**
 * <p>Displays detailed information about a job run. A job run is a unit of work, such as a
 *          Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, DescribeJobRunCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, DescribeJobRunCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const command = new DescribeJobRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJobRunCommandInput} for command's `input` shape.
 * @see {@link DescribeJobRunCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 */
export class DescribeJobRunCommand extends $Command<
  DescribeJobRunCommandInput,
  DescribeJobRunCommandOutput,
  EMRContainersClientResolvedConfig
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

  constructor(readonly input: DescribeJobRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRContainersClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeJobRunCommandInput, DescribeJobRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeJobRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRContainersClient";
    const commandName = "DescribeJobRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeJobRunRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeJobRunResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeJobRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeJobRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobRunCommandOutput> {
    return deserializeAws_restJson1DescribeJobRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
