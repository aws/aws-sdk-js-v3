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
  AttachTrafficSourcesResultType,
  AttachTrafficSourcesResultTypeFilterSensitiveLog,
  AttachTrafficSourcesType,
  AttachTrafficSourcesTypeFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryAttachTrafficSourcesCommand,
  serializeAws_queryAttachTrafficSourcesCommand,
} from "../protocols/Aws_query";

export interface AttachTrafficSourcesCommandInput extends AttachTrafficSourcesType {}
export interface AttachTrafficSourcesCommandOutput extends AttachTrafficSourcesResultType, __MetadataBearer {}

/**
 * <p>
 *             <b>Reserved for use with Amazon VPC Lattice, which is in preview and subject to change.
 *             Do not use this API for production workloads. This API is also subject to change.</b>
 *          </p>
 *          <p>Attaches one or more traffic sources to the specified Auto Scaling group.</p>
 *          <p>To describe the traffic sources for an Auto Scaling group, call the <a>DescribeTrafficSources</a> API. To detach a traffic source from the Auto Scaling
 *             group, call the <a>DetachTrafficSources</a> API.</p>
 *          <p>This operation is additive and does not detach existing traffic sources from the Auto Scaling
 *             group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, AttachTrafficSourcesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, AttachTrafficSourcesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new AttachTrafficSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachTrafficSourcesCommandInput} for command's `input` shape.
 * @see {@link AttachTrafficSourcesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 */
export class AttachTrafficSourcesCommand extends $Command<
  AttachTrafficSourcesCommandInput,
  AttachTrafficSourcesCommandOutput,
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

  constructor(readonly input: AttachTrafficSourcesCommandInput) {
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
  ): Handler<AttachTrafficSourcesCommandInput, AttachTrafficSourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AttachTrafficSourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "AttachTrafficSourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachTrafficSourcesTypeFilterSensitiveLog,
      outputFilterSensitiveLog: AttachTrafficSourcesResultTypeFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachTrafficSourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAttachTrafficSourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachTrafficSourcesCommandOutput> {
    return deserializeAws_queryAttachTrafficSourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
