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
import { EnableFastLaunchRequest, EnableFastLaunchResult } from "../models/models_5";
import { de_EnableFastLaunchCommand, se_EnableFastLaunchCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EnableFastLaunchCommand}.
 */
export interface EnableFastLaunchCommandInput extends EnableFastLaunchRequest {}
/**
 * @public
 *
 * The output of {@link EnableFastLaunchCommand}.
 */
export interface EnableFastLaunchCommandOutput extends EnableFastLaunchResult, __MetadataBearer {}

/**
 * @public
 * <p>When you enable faster launching for a Windows AMI, images are pre-provisioned,
 * 			using snapshots to launch instances up to 65% faster. To create the optimized Windows
 * 			image, Amazon EC2 launches an instance and runs through Sysprep steps, rebooting as required.
 * 			Then it creates a set of reserved snapshots that are used for subsequent launches. The
 * 			reserved snapshots are automatically replenished as they are used, depending on your
 * 			settings for launch frequency.</p>
 *          <note>
 *             <p>To change these settings, you must own the AMI.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableFastLaunchCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableFastLaunchCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // EnableFastLaunchRequest
 *   ImageId: "STRING_VALUE", // required
 *   ResourceType: "STRING_VALUE",
 *   SnapshotConfiguration: { // FastLaunchSnapshotConfigurationRequest
 *     TargetResourceCount: Number("int"),
 *   },
 *   LaunchTemplate: { // FastLaunchLaunchTemplateSpecificationRequest
 *     LaunchTemplateId: "STRING_VALUE",
 *     LaunchTemplateName: "STRING_VALUE",
 *     Version: "STRING_VALUE", // required
 *   },
 *   MaxParallelLaunches: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new EnableFastLaunchCommand(input);
 * const response = await client.send(command);
 * // { // EnableFastLaunchResult
 * //   ImageId: "STRING_VALUE",
 * //   ResourceType: "snapshot",
 * //   SnapshotConfiguration: { // FastLaunchSnapshotConfigurationResponse
 * //     TargetResourceCount: Number("int"),
 * //   },
 * //   LaunchTemplate: { // FastLaunchLaunchTemplateSpecificationResponse
 * //     LaunchTemplateId: "STRING_VALUE",
 * //     LaunchTemplateName: "STRING_VALUE",
 * //     Version: "STRING_VALUE",
 * //   },
 * //   MaxParallelLaunches: Number("int"),
 * //   OwnerId: "STRING_VALUE",
 * //   State: "enabling" || "enabling-failed" || "enabled" || "enabled-failed" || "disabling" || "disabling-failed",
 * //   StateTransitionReason: "STRING_VALUE",
 * //   StateTransitionTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param EnableFastLaunchCommandInput - {@link EnableFastLaunchCommandInput}
 * @returns {@link EnableFastLaunchCommandOutput}
 * @see {@link EnableFastLaunchCommandInput} for command's `input` shape.
 * @see {@link EnableFastLaunchCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class EnableFastLaunchCommand extends $Command<
  EnableFastLaunchCommandInput,
  EnableFastLaunchCommandOutput,
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
  constructor(readonly input: EnableFastLaunchCommandInput) {
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
  ): Handler<EnableFastLaunchCommandInput, EnableFastLaunchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableFastLaunchCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableFastLaunchCommand";
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
  private serialize(input: EnableFastLaunchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EnableFastLaunchCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableFastLaunchCommandOutput> {
    return de_EnableFastLaunchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
