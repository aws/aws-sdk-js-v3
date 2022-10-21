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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  PutInstancePublicPortsRequest,
  PutInstancePublicPortsRequestFilterSensitiveLog,
  PutInstancePublicPortsResult,
  PutInstancePublicPortsResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1PutInstancePublicPortsCommand,
  serializeAws_json1_1PutInstancePublicPortsCommand,
} from "../protocols/Aws_json1_1";

export interface PutInstancePublicPortsCommandInput extends PutInstancePublicPortsRequest {}
export interface PutInstancePublicPortsCommandOutput extends PutInstancePublicPortsResult, __MetadataBearer {}

/**
 * <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses
 *       allowed to connect to the instance through the ports, and the protocol. This action also
 *       closes all currently open ports that are not included in the request. Include all of the ports
 *       and the protocols you want to open in your <code>PutInstancePublicPorts</code>request. Or use
 *       the <code>OpenInstancePublicPorts</code> action to open ports without closing currently open
 *       ports.</p>
 *          <p>The <code>PutInstancePublicPorts</code> action supports tag-based access control via
 *       resource tags applied to the resource identified by <code>instanceName</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, PutInstancePublicPortsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, PutInstancePublicPortsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new PutInstancePublicPortsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutInstancePublicPortsCommandInput} for command's `input` shape.
 * @see {@link PutInstancePublicPortsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class PutInstancePublicPortsCommand extends $Command<
  PutInstancePublicPortsCommandInput,
  PutInstancePublicPortsCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: PutInstancePublicPortsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutInstancePublicPortsCommandInput, PutInstancePublicPortsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutInstancePublicPortsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "PutInstancePublicPortsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutInstancePublicPortsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutInstancePublicPortsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutInstancePublicPortsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutInstancePublicPortsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutInstancePublicPortsCommandOutput> {
    return deserializeAws_json1_1PutInstancePublicPortsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
