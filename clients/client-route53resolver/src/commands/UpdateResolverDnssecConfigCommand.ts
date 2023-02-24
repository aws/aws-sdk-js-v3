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
  UpdateResolverDnssecConfigRequest,
  UpdateResolverDnssecConfigRequestFilterSensitiveLog,
  UpdateResolverDnssecConfigResponse,
  UpdateResolverDnssecConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateResolverDnssecConfigCommand,
  serializeAws_json1_1UpdateResolverDnssecConfigCommand,
} from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

export interface UpdateResolverDnssecConfigCommandInput extends UpdateResolverDnssecConfigRequest {}
export interface UpdateResolverDnssecConfigCommandOutput extends UpdateResolverDnssecConfigResponse, __MetadataBearer {}

/**
 * <p>Updates an existing DNSSEC validation configuration. If there is no existing DNSSEC validation configuration, one is created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateResolverDnssecConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateResolverDnssecConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new UpdateResolverDnssecConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResolverDnssecConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateResolverDnssecConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 */
export class UpdateResolverDnssecConfigCommand extends $Command<
  UpdateResolverDnssecConfigCommandInput,
  UpdateResolverDnssecConfigCommandOutput,
  Route53ResolverClientResolvedConfig
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

  constructor(readonly input: UpdateResolverDnssecConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateResolverDnssecConfigCommandInput, UpdateResolverDnssecConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateResolverDnssecConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "UpdateResolverDnssecConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateResolverDnssecConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateResolverDnssecConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateResolverDnssecConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateResolverDnssecConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateResolverDnssecConfigCommandOutput> {
    return deserializeAws_json1_1UpdateResolverDnssecConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
