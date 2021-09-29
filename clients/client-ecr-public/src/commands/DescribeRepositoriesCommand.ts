import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { DescribeRepositoriesRequest, DescribeRepositoriesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeRepositoriesCommand,
  serializeAws_json1_1DescribeRepositoriesCommand,
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

export interface DescribeRepositoriesCommandInput extends DescribeRepositoriesRequest {}
export interface DescribeRepositoriesCommandOutput extends DescribeRepositoriesResponse, __MetadataBearer {}

/**
 * <p>Describes repositories in a public registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, DescribeRepositoriesCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, DescribeRepositoriesCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new DescribeRepositoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRepositoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeRepositoriesCommand extends $Command<
  DescribeRepositoriesCommandInput,
  DescribeRepositoriesCommandOutput,
  ECRPUBLICClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRepositoriesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRPUBLICClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRepositoriesCommandInput, DescribeRepositoriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRPUBLICClient";
    const commandName = "DescribeRepositoriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRepositoriesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRepositoriesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRepositoriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeRepositoriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRepositoriesCommandOutput> {
    return deserializeAws_json1_1DescribeRepositoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
