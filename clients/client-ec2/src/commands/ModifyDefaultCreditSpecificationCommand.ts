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
import { ModifyDefaultCreditSpecificationRequest, ModifyDefaultCreditSpecificationResult } from "../models/models_6";
import {
  de_ModifyDefaultCreditSpecificationCommand,
  se_ModifyDefaultCreditSpecificationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyDefaultCreditSpecificationCommand}.
 */
export interface ModifyDefaultCreditSpecificationCommandInput extends ModifyDefaultCreditSpecificationRequest {}
/**
 * @public
 *
 * The output of {@link ModifyDefaultCreditSpecificationCommand}.
 */
export interface ModifyDefaultCreditSpecificationCommandOutput
  extends ModifyDefaultCreditSpecificationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the default credit option for CPU usage of burstable performance instances.
 *             The default credit option is set at the account level per Amazon Web Services Region, and
 *             is specified per instance family. All new burstable performance instances in the account
 *             launch using the default credit option.</p>
 *          <p>
 *             <code>ModifyDefaultCreditSpecification</code> is an asynchronous operation, which
 *             works at an Amazon Web Services Region level and modifies the credit option for each
 *             Availability Zone. All zones in a Region are updated within five minutes. But if
 *             instances are launched during this operation, they might not get the new credit option
 *             until the zone is updated. To verify whether the update has occurred, you can call
 *                 <code>GetDefaultCreditSpecification</code> and check
 *                 <code>DefaultCreditSpecification</code> for updates.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
 *                 performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyDefaultCreditSpecificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyDefaultCreditSpecificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyDefaultCreditSpecificationRequest
 *   DryRun: true || false,
 *   InstanceFamily: "t2" || "t3" || "t3a" || "t4g", // required
 *   CpuCredits: "STRING_VALUE", // required
 * };
 * const command = new ModifyDefaultCreditSpecificationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDefaultCreditSpecificationResult
 * //   InstanceFamilyCreditSpecification: { // InstanceFamilyCreditSpecification
 * //     InstanceFamily: "t2" || "t3" || "t3a" || "t4g",
 * //     CpuCredits: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyDefaultCreditSpecificationCommandInput - {@link ModifyDefaultCreditSpecificationCommandInput}
 * @returns {@link ModifyDefaultCreditSpecificationCommandOutput}
 * @see {@link ModifyDefaultCreditSpecificationCommandInput} for command's `input` shape.
 * @see {@link ModifyDefaultCreditSpecificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyDefaultCreditSpecificationCommand extends $Command<
  ModifyDefaultCreditSpecificationCommandInput,
  ModifyDefaultCreditSpecificationCommandOutput,
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
  constructor(readonly input: ModifyDefaultCreditSpecificationCommandInput) {
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
  ): Handler<ModifyDefaultCreditSpecificationCommandInput, ModifyDefaultCreditSpecificationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDefaultCreditSpecificationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyDefaultCreditSpecificationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifyDefaultCreditSpecification",
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
    input: ModifyDefaultCreditSpecificationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ModifyDefaultCreditSpecificationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyDefaultCreditSpecificationCommandOutput> {
    return de_ModifyDefaultCreditSpecificationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
