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
  EnableReachabilityAnalyzerOrganizationSharingRequest,
  EnableReachabilityAnalyzerOrganizationSharingRequestFilterSensitiveLog,
  EnableReachabilityAnalyzerOrganizationSharingResult,
  EnableReachabilityAnalyzerOrganizationSharingResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2EnableReachabilityAnalyzerOrganizationSharingCommand,
  serializeAws_ec2EnableReachabilityAnalyzerOrganizationSharingCommand,
} from "../protocols/Aws_ec2";

export interface EnableReachabilityAnalyzerOrganizationSharingCommandInput
  extends EnableReachabilityAnalyzerOrganizationSharingRequest {}
export interface EnableReachabilityAnalyzerOrganizationSharingCommandOutput
  extends EnableReachabilityAnalyzerOrganizationSharingResult,
    __MetadataBearer {}

/**
 * <p>Establishes a trust relationship between Reachability Analyzer and Organizations.
 *          This operation must be performed by the management account for the organization.</p>
 *          <p>After you establish a trust relationship, a user in the management account or
 *          a delegated administrator account can run a cross-account analysis using resources
 *          from the member accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableReachabilityAnalyzerOrganizationSharingCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableReachabilityAnalyzerOrganizationSharingCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new EnableReachabilityAnalyzerOrganizationSharingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableReachabilityAnalyzerOrganizationSharingCommandInput} for command's `input` shape.
 * @see {@link EnableReachabilityAnalyzerOrganizationSharingCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class EnableReachabilityAnalyzerOrganizationSharingCommand extends $Command<
  EnableReachabilityAnalyzerOrganizationSharingCommandInput,
  EnableReachabilityAnalyzerOrganizationSharingCommandOutput,
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

  constructor(readonly input: EnableReachabilityAnalyzerOrganizationSharingCommandInput) {
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
  ): Handler<
    EnableReachabilityAnalyzerOrganizationSharingCommandInput,
    EnableReachabilityAnalyzerOrganizationSharingCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        EnableReachabilityAnalyzerOrganizationSharingCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableReachabilityAnalyzerOrganizationSharingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableReachabilityAnalyzerOrganizationSharingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: EnableReachabilityAnalyzerOrganizationSharingResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: EnableReachabilityAnalyzerOrganizationSharingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2EnableReachabilityAnalyzerOrganizationSharingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableReachabilityAnalyzerOrganizationSharingCommandOutput> {
    return deserializeAws_ec2EnableReachabilityAnalyzerOrganizationSharingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
