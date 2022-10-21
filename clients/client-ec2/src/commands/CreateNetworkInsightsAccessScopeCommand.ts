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
  CreateNetworkInsightsAccessScopeRequest,
  CreateNetworkInsightsAccessScopeRequestFilterSensitiveLog,
  CreateNetworkInsightsAccessScopeResult,
  CreateNetworkInsightsAccessScopeResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_ec2CreateNetworkInsightsAccessScopeCommand,
  serializeAws_ec2CreateNetworkInsightsAccessScopeCommand,
} from "../protocols/Aws_ec2";

export interface CreateNetworkInsightsAccessScopeCommandInput extends CreateNetworkInsightsAccessScopeRequest {}
export interface CreateNetworkInsightsAccessScopeCommandOutput
  extends CreateNetworkInsightsAccessScopeResult,
    __MetadataBearer {}

/**
 * <p>Creates a Network Access Scope.</p>
 *          <p>Amazon Web Services Network Access Analyzer enables cloud networking and cloud operations teams
 *          to verify that their networks on Amazon Web Services conform to their network security and governance
 *          objectives. For more information, see the <a href="https://docs.aws.amazon.com/vpc/latest/network-access-analyzer/">Amazon Web Services Network Access Analyzer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkInsightsAccessScopeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkInsightsAccessScopeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateNetworkInsightsAccessScopeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNetworkInsightsAccessScopeCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkInsightsAccessScopeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateNetworkInsightsAccessScopeCommand extends $Command<
  CreateNetworkInsightsAccessScopeCommandInput,
  CreateNetworkInsightsAccessScopeCommandOutput,
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

  constructor(readonly input: CreateNetworkInsightsAccessScopeCommandInput) {
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
  ): Handler<CreateNetworkInsightsAccessScopeCommandInput, CreateNetworkInsightsAccessScopeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNetworkInsightsAccessScopeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateNetworkInsightsAccessScopeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNetworkInsightsAccessScopeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateNetworkInsightsAccessScopeResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateNetworkInsightsAccessScopeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CreateNetworkInsightsAccessScopeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateNetworkInsightsAccessScopeCommandOutput> {
    return deserializeAws_ec2CreateNetworkInsightsAccessScopeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
