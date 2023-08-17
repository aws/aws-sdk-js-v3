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
  DeregisterInstanceEventNotificationAttributesRequest,
  DeregisterInstanceEventNotificationAttributesResult,
} from "../models/models_3";
import {
  de_DeregisterInstanceEventNotificationAttributesCommand,
  se_DeregisterInstanceEventNotificationAttributesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeregisterInstanceEventNotificationAttributesCommand}.
 */
export interface DeregisterInstanceEventNotificationAttributesCommandInput
  extends DeregisterInstanceEventNotificationAttributesRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterInstanceEventNotificationAttributesCommand}.
 */
export interface DeregisterInstanceEventNotificationAttributesCommandOutput
  extends DeregisterInstanceEventNotificationAttributesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Deregisters tag keys to prevent tags that have the specified tag keys from being included
 * 			in scheduled event notifications for resources in the Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeregisterInstanceEventNotificationAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeregisterInstanceEventNotificationAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeregisterInstanceEventNotificationAttributesRequest
 *   DryRun: true || false,
 *   InstanceTagAttribute: { // DeregisterInstanceTagAttributeRequest
 *     IncludeAllTagsOfInstance: true || false,
 *     InstanceTagKeys: [ // InstanceTagKeySet
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new DeregisterInstanceEventNotificationAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterInstanceEventNotificationAttributesResult
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
 * @param DeregisterInstanceEventNotificationAttributesCommandInput - {@link DeregisterInstanceEventNotificationAttributesCommandInput}
 * @returns {@link DeregisterInstanceEventNotificationAttributesCommandOutput}
 * @see {@link DeregisterInstanceEventNotificationAttributesCommandInput} for command's `input` shape.
 * @see {@link DeregisterInstanceEventNotificationAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeregisterInstanceEventNotificationAttributesCommand extends $Command<
  DeregisterInstanceEventNotificationAttributesCommandInput,
  DeregisterInstanceEventNotificationAttributesCommandOutput,
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
  constructor(readonly input: DeregisterInstanceEventNotificationAttributesCommandInput) {
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
    DeregisterInstanceEventNotificationAttributesCommandInput,
    DeregisterInstanceEventNotificationAttributesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DeregisterInstanceEventNotificationAttributesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeregisterInstanceEventNotificationAttributesCommand";
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
    input: DeregisterInstanceEventNotificationAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeregisterInstanceEventNotificationAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterInstanceEventNotificationAttributesCommandOutput> {
    return de_DeregisterInstanceEventNotificationAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
