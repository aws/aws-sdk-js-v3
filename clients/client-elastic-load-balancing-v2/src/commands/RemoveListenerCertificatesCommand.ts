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
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import {
  RemoveListenerCertificatesInput,
  RemoveListenerCertificatesInputFilterSensitiveLog,
  RemoveListenerCertificatesOutput,
  RemoveListenerCertificatesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryRemoveListenerCertificatesCommand,
  serializeAws_queryRemoveListenerCertificatesCommand,
} from "../protocols/Aws_query";

export interface RemoveListenerCertificatesCommandInput extends RemoveListenerCertificatesInput {}
export interface RemoveListenerCertificatesCommandOutput extends RemoveListenerCertificatesOutput, __MetadataBearer {}

/**
 * <p>Removes the specified certificate from the certificate list for the specified HTTPS or TLS
 *       listener.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, RemoveListenerCertificatesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, RemoveListenerCertificatesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new RemoveListenerCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveListenerCertificatesCommandInput} for command's `input` shape.
 * @see {@link RemoveListenerCertificatesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 */
export class RemoveListenerCertificatesCommand extends $Command<
  RemoveListenerCertificatesCommandInput,
  RemoveListenerCertificatesCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
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

  constructor(readonly input: RemoveListenerCertificatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveListenerCertificatesCommandInput, RemoveListenerCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveListenerCertificatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "RemoveListenerCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveListenerCertificatesInputFilterSensitiveLog,
      outputFilterSensitiveLog: RemoveListenerCertificatesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveListenerCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRemoveListenerCertificatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveListenerCertificatesCommandOutput> {
    return deserializeAws_queryRemoveListenerCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
