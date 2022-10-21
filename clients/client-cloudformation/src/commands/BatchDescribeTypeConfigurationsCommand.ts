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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import {
  BatchDescribeTypeConfigurationsInput,
  BatchDescribeTypeConfigurationsInputFilterSensitiveLog,
  BatchDescribeTypeConfigurationsOutput,
  BatchDescribeTypeConfigurationsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryBatchDescribeTypeConfigurationsCommand,
  serializeAws_queryBatchDescribeTypeConfigurationsCommand,
} from "../protocols/Aws_query";

export interface BatchDescribeTypeConfigurationsCommandInput extends BatchDescribeTypeConfigurationsInput {}
export interface BatchDescribeTypeConfigurationsCommandOutput
  extends BatchDescribeTypeConfigurationsOutput,
    __MetadataBearer {}

/**
 * <p>Returns configuration data for the specified CloudFormation extensions, from
 *          the CloudFormation registry for the account and region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the
 *             <i>CloudFormation User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, BatchDescribeTypeConfigurationsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, BatchDescribeTypeConfigurationsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new BatchDescribeTypeConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDescribeTypeConfigurationsCommandInput} for command's `input` shape.
 * @see {@link BatchDescribeTypeConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class BatchDescribeTypeConfigurationsCommand extends $Command<
  BatchDescribeTypeConfigurationsCommandInput,
  BatchDescribeTypeConfigurationsCommandOutput,
  CloudFormationClientResolvedConfig
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

  constructor(readonly input: BatchDescribeTypeConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDescribeTypeConfigurationsCommandInput, BatchDescribeTypeConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDescribeTypeConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "BatchDescribeTypeConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDescribeTypeConfigurationsInputFilterSensitiveLog,
      outputFilterSensitiveLog: BatchDescribeTypeConfigurationsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchDescribeTypeConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryBatchDescribeTypeConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDescribeTypeConfigurationsCommandOutput> {
    return deserializeAws_queryBatchDescribeTypeConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
