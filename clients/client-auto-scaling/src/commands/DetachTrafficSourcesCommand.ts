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

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import {
  DetachTrafficSourcesResultType,
  DetachTrafficSourcesResultTypeFilterSensitiveLog,
  DetachTrafficSourcesType,
  DetachTrafficSourcesTypeFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDetachTrafficSourcesCommand,
  serializeAws_queryDetachTrafficSourcesCommand,
} from "../protocols/Aws_query";

export interface DetachTrafficSourcesCommandInput extends DetachTrafficSourcesType {}
export interface DetachTrafficSourcesCommandOutput extends DetachTrafficSourcesResultType, __MetadataBearer {}

/**
 * <p>
 *             <b>Reserved for use with Amazon VPC Lattice, which is in preview and subject to change.
 *             Do not use this API for production workloads. This API is also subject to change.</b>
 *          </p>
 *          <p>Detaches one or more traffic sources from the specified Auto Scaling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DetachTrafficSourcesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DetachTrafficSourcesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DetachTrafficSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachTrafficSourcesCommandInput} for command's `input` shape.
 * @see {@link DetachTrafficSourcesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 */
export class DetachTrafficSourcesCommand extends $Command<
  DetachTrafficSourcesCommandInput,
  DetachTrafficSourcesCommandOutput,
  AutoScalingClientResolvedConfig
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

  constructor(readonly input: DetachTrafficSourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetachTrafficSourcesCommandInput, DetachTrafficSourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetachTrafficSourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DetachTrafficSourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetachTrafficSourcesTypeFilterSensitiveLog,
      outputFilterSensitiveLog: DetachTrafficSourcesResultTypeFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetachTrafficSourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDetachTrafficSourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetachTrafficSourcesCommandOutput> {
    return deserializeAws_queryDetachTrafficSourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
