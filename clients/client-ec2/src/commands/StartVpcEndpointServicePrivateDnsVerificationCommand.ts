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
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  StartVpcEndpointServicePrivateDnsVerificationRequest,
  StartVpcEndpointServicePrivateDnsVerificationResult,
} from "../models/models_7";
import {
  de_StartVpcEndpointServicePrivateDnsVerificationCommand,
  se_StartVpcEndpointServicePrivateDnsVerificationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartVpcEndpointServicePrivateDnsVerificationCommand}.
 */
export interface StartVpcEndpointServicePrivateDnsVerificationCommandInput
  extends StartVpcEndpointServicePrivateDnsVerificationRequest {}
/**
 * @public
 *
 * The output of {@link StartVpcEndpointServicePrivateDnsVerificationCommand}.
 */
export interface StartVpcEndpointServicePrivateDnsVerificationCommandOutput
  extends StartVpcEndpointServicePrivateDnsVerificationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Initiates the verification process to prove that the service provider owns the private
 *             DNS name domain for the endpoint service.</p>
 *          <p>The service provider must successfully perform the verification before the consumer can use the name to access the service.</p>
 *          <p>Before the service provider runs this command, they must add a record to the DNS server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, StartVpcEndpointServicePrivateDnsVerificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, StartVpcEndpointServicePrivateDnsVerificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // StartVpcEndpointServicePrivateDnsVerificationRequest
 *   DryRun: true || false,
 *   ServiceId: "STRING_VALUE", // required
 * };
 * const command = new StartVpcEndpointServicePrivateDnsVerificationCommand(input);
 * const response = await client.send(command);
 * // { // StartVpcEndpointServicePrivateDnsVerificationResult
 * //   ReturnValue: true || false,
 * // };
 *
 * ```
 *
 * @param StartVpcEndpointServicePrivateDnsVerificationCommandInput - {@link StartVpcEndpointServicePrivateDnsVerificationCommandInput}
 * @returns {@link StartVpcEndpointServicePrivateDnsVerificationCommandOutput}
 * @see {@link StartVpcEndpointServicePrivateDnsVerificationCommandInput} for command's `input` shape.
 * @see {@link StartVpcEndpointServicePrivateDnsVerificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class StartVpcEndpointServicePrivateDnsVerificationCommand extends $Command<
  StartVpcEndpointServicePrivateDnsVerificationCommandInput,
  StartVpcEndpointServicePrivateDnsVerificationCommandOutput,
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
  constructor(readonly input: StartVpcEndpointServicePrivateDnsVerificationCommandInput) {
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
    StartVpcEndpointServicePrivateDnsVerificationCommandInput,
    StartVpcEndpointServicePrivateDnsVerificationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        StartVpcEndpointServicePrivateDnsVerificationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "StartVpcEndpointServicePrivateDnsVerificationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
    input: StartVpcEndpointServicePrivateDnsVerificationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_StartVpcEndpointServicePrivateDnsVerificationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartVpcEndpointServicePrivateDnsVerificationCommandOutput> {
    return de_StartVpcEndpointServicePrivateDnsVerificationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
