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

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import {
  DescribeImageReplicationStatusRequest,
  DescribeImageReplicationStatusRequestFilterSensitiveLog,
  DescribeImageReplicationStatusResponse,
  DescribeImageReplicationStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeImageReplicationStatusCommand,
  serializeAws_json1_1DescribeImageReplicationStatusCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeImageReplicationStatusCommandInput extends DescribeImageReplicationStatusRequest {}
export interface DescribeImageReplicationStatusCommandOutput
  extends DescribeImageReplicationStatusResponse,
    __MetadataBearer {}

/**
 * <p>Returns the replication status for a specified image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribeImageReplicationStatusCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribeImageReplicationStatusCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new DescribeImageReplicationStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImageReplicationStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeImageReplicationStatusCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 */
export class DescribeImageReplicationStatusCommand extends $Command<
  DescribeImageReplicationStatusCommandInput,
  DescribeImageReplicationStatusCommandOutput,
  ECRClientResolvedConfig
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

  constructor(readonly input: DescribeImageReplicationStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeImageReplicationStatusCommandInput, DescribeImageReplicationStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeImageReplicationStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "DescribeImageReplicationStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeImageReplicationStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeImageReplicationStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeImageReplicationStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeImageReplicationStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeImageReplicationStatusCommandOutput> {
    return deserializeAws_json1_1DescribeImageReplicationStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
