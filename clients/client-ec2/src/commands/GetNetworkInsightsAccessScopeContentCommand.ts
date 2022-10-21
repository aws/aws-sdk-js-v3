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
  GetNetworkInsightsAccessScopeContentRequest,
  GetNetworkInsightsAccessScopeContentRequestFilterSensitiveLog,
  GetNetworkInsightsAccessScopeContentResult,
  GetNetworkInsightsAccessScopeContentResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2GetNetworkInsightsAccessScopeContentCommand,
  serializeAws_ec2GetNetworkInsightsAccessScopeContentCommand,
} from "../protocols/Aws_ec2";

export interface GetNetworkInsightsAccessScopeContentCommandInput extends GetNetworkInsightsAccessScopeContentRequest {}
export interface GetNetworkInsightsAccessScopeContentCommandOutput
  extends GetNetworkInsightsAccessScopeContentResult,
    __MetadataBearer {}

/**
 * <p>Gets the content for the specified Network Access Scope.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetNetworkInsightsAccessScopeContentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetNetworkInsightsAccessScopeContentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetNetworkInsightsAccessScopeContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNetworkInsightsAccessScopeContentCommandInput} for command's `input` shape.
 * @see {@link GetNetworkInsightsAccessScopeContentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class GetNetworkInsightsAccessScopeContentCommand extends $Command<
  GetNetworkInsightsAccessScopeContentCommandInput,
  GetNetworkInsightsAccessScopeContentCommandOutput,
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

  constructor(readonly input: GetNetworkInsightsAccessScopeContentCommandInput) {
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
  ): Handler<GetNetworkInsightsAccessScopeContentCommandInput, GetNetworkInsightsAccessScopeContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetNetworkInsightsAccessScopeContentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetNetworkInsightsAccessScopeContentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetNetworkInsightsAccessScopeContentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetNetworkInsightsAccessScopeContentResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetNetworkInsightsAccessScopeContentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2GetNetworkInsightsAccessScopeContentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetNetworkInsightsAccessScopeContentCommandOutput> {
    return deserializeAws_ec2GetNetworkInsightsAccessScopeContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
