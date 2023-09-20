// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  EnableReachabilityAnalyzerOrganizationSharingRequest,
  EnableReachabilityAnalyzerOrganizationSharingResult,
} from "../models/models_5";
import {
  de_EnableReachabilityAnalyzerOrganizationSharingCommand,
  se_EnableReachabilityAnalyzerOrganizationSharingCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EnableReachabilityAnalyzerOrganizationSharingCommand}.
 */
export interface EnableReachabilityAnalyzerOrganizationSharingCommandInput
  extends EnableReachabilityAnalyzerOrganizationSharingRequest {}
/**
 * @public
 *
 * The output of {@link EnableReachabilityAnalyzerOrganizationSharingCommand}.
 */
export interface EnableReachabilityAnalyzerOrganizationSharingCommandOutput
  extends EnableReachabilityAnalyzerOrganizationSharingResult,
    __MetadataBearer {}

/**
 * @public
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
 * const input = { // EnableReachabilityAnalyzerOrganizationSharingRequest
 *   DryRun: true || false,
 * };
 * const command = new EnableReachabilityAnalyzerOrganizationSharingCommand(input);
 * const response = await client.send(command);
 * // { // EnableReachabilityAnalyzerOrganizationSharingResult
 * //   ReturnValue: true || false,
 * // };
 *
 * ```
 *
 * @param EnableReachabilityAnalyzerOrganizationSharingCommandInput - {@link EnableReachabilityAnalyzerOrganizationSharingCommandInput}
 * @returns {@link EnableReachabilityAnalyzerOrganizationSharingCommandOutput}
 * @see {@link EnableReachabilityAnalyzerOrganizationSharingCommandInput} for command's `input` shape.
 * @see {@link EnableReachabilityAnalyzerOrganizationSharingCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "EnableReachabilityAnalyzerOrganizationSharing",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: EnableReachabilityAnalyzerOrganizationSharingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_EnableReachabilityAnalyzerOrganizationSharingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableReachabilityAnalyzerOrganizationSharingCommandOutput> {
    return de_EnableReachabilityAnalyzerOrganizationSharingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
