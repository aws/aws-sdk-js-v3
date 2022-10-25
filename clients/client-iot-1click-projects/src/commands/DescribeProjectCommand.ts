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
  IoT1ClickProjectsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickProjectsClient";
import {
  DescribeProjectRequest,
  DescribeProjectRequestFilterSensitiveLog,
  DescribeProjectResponse,
  DescribeProjectResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeProjectCommand,
  serializeAws_restJson1DescribeProjectCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeProjectCommandInput extends DescribeProjectRequest {}
export interface DescribeProjectCommandOutput extends DescribeProjectResponse, __MetadataBearer {}

/**
 * <p>Returns an object describing a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, DescribeProjectCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, DescribeProjectCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new DescribeProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProjectCommandInput} for command's `input` shape.
 * @see {@link DescribeProjectCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for IoT1ClickProjectsClient's `config` shape.
 *
 */
export class DescribeProjectCommand extends $Command<
  DescribeProjectCommandInput,
  DescribeProjectCommandOutput,
  IoT1ClickProjectsClientResolvedConfig
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

  constructor(readonly input: DescribeProjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickProjectsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeProjectCommandInput, DescribeProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeProjectCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickProjectsClient";
    const commandName = "DescribeProjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeProjectRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeProjectResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeProjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeProjectCommandOutput> {
    return deserializeAws_restJson1DescribeProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
