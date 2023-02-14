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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  GetIpamDiscoveredAccountsRequest,
  GetIpamDiscoveredAccountsRequestFilterSensitiveLog,
  GetIpamDiscoveredAccountsResult,
  GetIpamDiscoveredAccountsResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2GetIpamDiscoveredAccountsCommand,
  serializeAws_ec2GetIpamDiscoveredAccountsCommand,
} from "../protocols/Aws_ec2";

export interface GetIpamDiscoveredAccountsCommandInput extends GetIpamDiscoveredAccountsRequest {}
export interface GetIpamDiscoveredAccountsCommandOutput extends GetIpamDiscoveredAccountsResult, __MetadataBearer {}

/**
 * <p>Gets IPAM discovered accounts. A discovered account is an Amazon Web Services account that is monitored under a resource discovery. If you have integrated IPAM with Amazon Web Services Organizations, all accounts in the organization are discovered accounts. Only the IPAM account can get all discovered accounts in the organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamDiscoveredAccountsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamDiscoveredAccountsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetIpamDiscoveredAccountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIpamDiscoveredAccountsCommandInput} for command's `input` shape.
 * @see {@link GetIpamDiscoveredAccountsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class GetIpamDiscoveredAccountsCommand extends $Command<
  GetIpamDiscoveredAccountsCommandInput,
  GetIpamDiscoveredAccountsCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: GetIpamDiscoveredAccountsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIpamDiscoveredAccountsCommandInput, GetIpamDiscoveredAccountsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIpamDiscoveredAccountsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetIpamDiscoveredAccountsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIpamDiscoveredAccountsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetIpamDiscoveredAccountsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetIpamDiscoveredAccountsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetIpamDiscoveredAccountsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetIpamDiscoveredAccountsCommandOutput> {
    return deserializeAws_ec2GetIpamDiscoveredAccountsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
