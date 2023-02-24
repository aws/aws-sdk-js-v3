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

import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import {
  DescribeVirtualNodeInput,
  DescribeVirtualNodeInputFilterSensitiveLog,
  DescribeVirtualNodeOutput,
  DescribeVirtualNodeOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeVirtualNodeCommand,
  serializeAws_restJson1DescribeVirtualNodeCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeVirtualNodeCommandInput extends DescribeVirtualNodeInput {}
export interface DescribeVirtualNodeCommandOutput extends DescribeVirtualNodeOutput, __MetadataBearer {}

/**
 * <p>Describes an existing virtual node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DescribeVirtualNodeCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DescribeVirtualNodeCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DescribeVirtualNodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVirtualNodeCommandInput} for command's `input` shape.
 * @see {@link DescribeVirtualNodeCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 */
export class DescribeVirtualNodeCommand extends $Command<
  DescribeVirtualNodeCommandInput,
  DescribeVirtualNodeCommandOutput,
  AppMeshClientResolvedConfig
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

  constructor(readonly input: DescribeVirtualNodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeVirtualNodeCommandInput, DescribeVirtualNodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVirtualNodeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "DescribeVirtualNodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVirtualNodeInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeVirtualNodeOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeVirtualNodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeVirtualNodeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVirtualNodeCommandOutput> {
    return deserializeAws_restJson1DescribeVirtualNodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
