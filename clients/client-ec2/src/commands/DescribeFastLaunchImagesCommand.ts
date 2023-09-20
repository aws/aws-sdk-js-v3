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
import { DescribeFastLaunchImagesRequest, DescribeFastLaunchImagesResult } from "../models/models_3";
import { de_DescribeFastLaunchImagesCommand, se_DescribeFastLaunchImagesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFastLaunchImagesCommand}.
 */
export interface DescribeFastLaunchImagesCommandInput extends DescribeFastLaunchImagesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFastLaunchImagesCommand}.
 */
export interface DescribeFastLaunchImagesCommandOutput extends DescribeFastLaunchImagesResult, __MetadataBearer {}

/**
 * @public
 * <p>Describe details for Windows AMIs that are configured for faster launching.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFastLaunchImagesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFastLaunchImagesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeFastLaunchImagesRequest
 *   ImageIds: [ // FastLaunchImageIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DescribeFastLaunchImagesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFastLaunchImagesResult
 * //   FastLaunchImages: [ // DescribeFastLaunchImagesSuccessSet
 * //     { // DescribeFastLaunchImagesSuccessItem
 * //       ImageId: "STRING_VALUE",
 * //       ResourceType: "snapshot",
 * //       SnapshotConfiguration: { // FastLaunchSnapshotConfigurationResponse
 * //         TargetResourceCount: Number("int"),
 * //       },
 * //       LaunchTemplate: { // FastLaunchLaunchTemplateSpecificationResponse
 * //         LaunchTemplateId: "STRING_VALUE",
 * //         LaunchTemplateName: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //       MaxParallelLaunches: Number("int"),
 * //       OwnerId: "STRING_VALUE",
 * //       State: "enabling" || "enabling-failed" || "enabled" || "enabled-failed" || "disabling" || "disabling-failed",
 * //       StateTransitionReason: "STRING_VALUE",
 * //       StateTransitionTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFastLaunchImagesCommandInput - {@link DescribeFastLaunchImagesCommandInput}
 * @returns {@link DescribeFastLaunchImagesCommandOutput}
 * @see {@link DescribeFastLaunchImagesCommandInput} for command's `input` shape.
 * @see {@link DescribeFastLaunchImagesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeFastLaunchImagesCommand extends $Command<
  DescribeFastLaunchImagesCommandInput,
  DescribeFastLaunchImagesCommandOutput,
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
  constructor(readonly input: DescribeFastLaunchImagesCommandInput) {
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
  ): Handler<DescribeFastLaunchImagesCommandInput, DescribeFastLaunchImagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFastLaunchImagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeFastLaunchImagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeFastLaunchImages",
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
  private serialize(input: DescribeFastLaunchImagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFastLaunchImagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFastLaunchImagesCommandOutput> {
    return de_DescribeFastLaunchImagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
