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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  DescribeConformancePackStatusRequest,
  DescribeConformancePackStatusRequestFilterSensitiveLog,
  DescribeConformancePackStatusResponse,
  DescribeConformancePackStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeConformancePackStatusCommand,
  serializeAws_json1_1DescribeConformancePackStatusCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DescribeConformancePackStatusCommand}.
 */
export interface DescribeConformancePackStatusCommandInput extends DescribeConformancePackStatusRequest {}
/**
 * The output of {@link DescribeConformancePackStatusCommand}.
 */
export interface DescribeConformancePackStatusCommandOutput
  extends DescribeConformancePackStatusResponse,
    __MetadataBearer {}

/**
 * <p>Provides one or more conformance packs deployment status.</p>
 * 		       <note>
 *             <p>If there are no conformance packs then you will see an empty result.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConformancePackStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConformancePackStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeConformancePackStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConformancePackStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeConformancePackStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class DescribeConformancePackStatusCommand extends $Command<
  DescribeConformancePackStatusCommandInput,
  DescribeConformancePackStatusCommandOutput,
  ConfigServiceClientResolvedConfig
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

  constructor(readonly input: DescribeConformancePackStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConformancePackStatusCommandInput, DescribeConformancePackStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConformancePackStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeConformancePackStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConformancePackStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeConformancePackStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeConformancePackStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeConformancePackStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConformancePackStatusCommandOutput> {
    return deserializeAws_json1_1DescribeConformancePackStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
