import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DescribeContainerInstancesRequest, DescribeContainerInstancesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeContainerInstancesCommand,
  serializeAws_json1_1DescribeContainerInstancesCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DescribeContainerInstancesCommandInput extends DescribeContainerInstancesRequest {}
export interface DescribeContainerInstancesCommandOutput extends DescribeContainerInstancesResponse, __MetadataBearer {}

/**
 * <p>Describes one or more container instances. Returns metadata about each container
 * 			instance requested.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeContainerInstancesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeContainerInstancesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DescribeContainerInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeContainerInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeContainerInstancesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeContainerInstancesCommand extends $Command<
  DescribeContainerInstancesCommandInput,
  DescribeContainerInstancesCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeContainerInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeContainerInstancesCommandInput, DescribeContainerInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DescribeContainerInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeContainerInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeContainerInstancesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeContainerInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeContainerInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeContainerInstancesCommandOutput> {
    return deserializeAws_json1_1DescribeContainerInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
