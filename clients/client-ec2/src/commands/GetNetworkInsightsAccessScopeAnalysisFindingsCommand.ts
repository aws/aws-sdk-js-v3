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
  GetNetworkInsightsAccessScopeAnalysisFindingsRequest,
  GetNetworkInsightsAccessScopeAnalysisFindingsRequestFilterSensitiveLog,
  GetNetworkInsightsAccessScopeAnalysisFindingsResult,
  GetNetworkInsightsAccessScopeAnalysisFindingsResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2GetNetworkInsightsAccessScopeAnalysisFindingsCommand,
  serializeAws_ec2GetNetworkInsightsAccessScopeAnalysisFindingsCommand,
} from "../protocols/Aws_ec2";

export interface GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput
  extends GetNetworkInsightsAccessScopeAnalysisFindingsRequest {}
export interface GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput
  extends GetNetworkInsightsAccessScopeAnalysisFindingsResult,
    __MetadataBearer {}

/**
 * <p>Gets the findings for the specified Network Access Scope analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetNetworkInsightsAccessScopeAnalysisFindingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetNetworkInsightsAccessScopeAnalysisFindingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetNetworkInsightsAccessScopeAnalysisFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput} for command's `input` shape.
 * @see {@link GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class GetNetworkInsightsAccessScopeAnalysisFindingsCommand extends $Command<
  GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput,
  GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput,
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

  constructor(readonly input: GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput) {
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
    GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput,
    GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetNetworkInsightsAccessScopeAnalysisFindingsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetNetworkInsightsAccessScopeAnalysisFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetNetworkInsightsAccessScopeAnalysisFindingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetNetworkInsightsAccessScopeAnalysisFindingsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetNetworkInsightsAccessScopeAnalysisFindingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2GetNetworkInsightsAccessScopeAnalysisFindingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetNetworkInsightsAccessScopeAnalysisFindingsCommandOutput> {
    return deserializeAws_ec2GetNetworkInsightsAccessScopeAnalysisFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
