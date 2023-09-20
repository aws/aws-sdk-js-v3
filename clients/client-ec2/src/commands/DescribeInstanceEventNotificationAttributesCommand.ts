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
  DescribeInstanceEventNotificationAttributesRequest,
  DescribeInstanceEventNotificationAttributesResult,
} from "../models/models_3";
import {
  de_DescribeInstanceEventNotificationAttributesCommand,
  se_DescribeInstanceEventNotificationAttributesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceEventNotificationAttributesCommand}.
 */
export interface DescribeInstanceEventNotificationAttributesCommandInput
  extends DescribeInstanceEventNotificationAttributesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceEventNotificationAttributesCommand}.
 */
export interface DescribeInstanceEventNotificationAttributesCommandOutput
  extends DescribeInstanceEventNotificationAttributesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the tag keys that are registered to appear in scheduled event notifications for
 *       	resources in the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceEventNotificationAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceEventNotificationAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeInstanceEventNotificationAttributesRequest
 *   DryRun: true || false,
 * };
 * const command = new DescribeInstanceEventNotificationAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceEventNotificationAttributesResult
 * //   InstanceTagAttribute: { // InstanceTagNotificationAttribute
 * //     InstanceTagKeys: [ // InstanceTagKeySet
 * //       "STRING_VALUE",
 * //     ],
 * //     IncludeAllTagsOfInstance: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeInstanceEventNotificationAttributesCommandInput - {@link DescribeInstanceEventNotificationAttributesCommandInput}
 * @returns {@link DescribeInstanceEventNotificationAttributesCommandOutput}
 * @see {@link DescribeInstanceEventNotificationAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceEventNotificationAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeInstanceEventNotificationAttributesCommand extends $Command<
  DescribeInstanceEventNotificationAttributesCommandInput,
  DescribeInstanceEventNotificationAttributesCommandOutput,
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
  constructor(readonly input: DescribeInstanceEventNotificationAttributesCommandInput) {
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
    DescribeInstanceEventNotificationAttributesCommandInput,
    DescribeInstanceEventNotificationAttributesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeInstanceEventNotificationAttributesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeInstanceEventNotificationAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeInstanceEventNotificationAttributes",
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
    input: DescribeInstanceEventNotificationAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeInstanceEventNotificationAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceEventNotificationAttributesCommandOutput> {
    return de_DescribeInstanceEventNotificationAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
