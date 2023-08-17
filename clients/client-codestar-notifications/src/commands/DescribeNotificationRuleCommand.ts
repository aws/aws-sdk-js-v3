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

import {
  CodestarNotificationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodestarNotificationsClient";
import {
  DescribeNotificationRuleRequest,
  DescribeNotificationRuleResult,
  DescribeNotificationRuleResultFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeNotificationRuleCommand, se_DescribeNotificationRuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeNotificationRuleCommand}.
 */
export interface DescribeNotificationRuleCommandInput extends DescribeNotificationRuleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNotificationRuleCommand}.
 */
export interface DescribeNotificationRuleCommandOutput extends DescribeNotificationRuleResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a specified notification rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, DescribeNotificationRuleCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, DescribeNotificationRuleCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const input = { // DescribeNotificationRuleRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new DescribeNotificationRuleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNotificationRuleResult
 * //   Arn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE",
 * //   EventTypes: [ // EventTypeBatch
 * //     { // EventTypeSummary
 * //       EventTypeId: "STRING_VALUE",
 * //       ServiceName: "STRING_VALUE",
 * //       EventTypeName: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Resource: "STRING_VALUE",
 * //   Targets: [ // TargetsBatch
 * //     { // TargetSummary
 * //       TargetAddress: "STRING_VALUE",
 * //       TargetType: "STRING_VALUE",
 * //       TargetStatus: "PENDING" || "ACTIVE" || "UNREACHABLE" || "INACTIVE" || "DEACTIVATED",
 * //     },
 * //   ],
 * //   DetailType: "BASIC" || "FULL",
 * //   CreatedBy: "STRING_VALUE",
 * //   Status: "ENABLED" || "DISABLED",
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * //   LastModifiedTimestamp: new Date("TIMESTAMP"),
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeNotificationRuleCommandInput - {@link DescribeNotificationRuleCommandInput}
 * @returns {@link DescribeNotificationRuleCommandOutput}
 * @see {@link DescribeNotificationRuleCommandInput} for command's `input` shape.
 * @see {@link DescribeNotificationRuleCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for CodestarNotificationsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>AWS CodeStar Notifications can't find a resource that matches the provided ARN. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link CodestarNotificationsServiceException}
 * <p>Base exception class for all service exceptions from CodestarNotifications service.</p>
 *
 */
export class DescribeNotificationRuleCommand extends $Command<
  DescribeNotificationRuleCommandInput,
  DescribeNotificationRuleCommandOutput,
  CodestarNotificationsClientResolvedConfig
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
  constructor(readonly input: DescribeNotificationRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodestarNotificationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeNotificationRuleCommandInput, DescribeNotificationRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeNotificationRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodestarNotificationsClient";
    const commandName = "DescribeNotificationRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeNotificationRuleResultFilterSensitiveLog,
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
  private serialize(input: DescribeNotificationRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeNotificationRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeNotificationRuleCommandOutput> {
    return de_DescribeNotificationRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
