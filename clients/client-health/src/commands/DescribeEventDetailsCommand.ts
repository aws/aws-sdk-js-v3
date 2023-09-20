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

import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeEventDetailsRequest, DescribeEventDetailsResponse } from "../models/models_0";
import { de_DescribeEventDetailsCommand, se_DescribeEventDetailsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventDetailsCommand}.
 */
export interface DescribeEventDetailsCommandInput extends DescribeEventDetailsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventDetailsCommand}.
 */
export interface DescribeEventDetailsCommandOutput extends DescribeEventDetailsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns detailed information about one or more specified events. Information includes
 *          standard event data (Amazon Web Services Region, service, and so on, as returned by <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a>), a detailed event description, and possible additional metadata
 *          that depends upon the nature of the event. Affected entities are not included. To retrieve
 *          the entities, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operation.</p>
 *          <p>If a specified event can't be retrieved, an error message is returned for that
 *          event.</p>
 *          <note>
 *             <p>This operation supports resource-level permissions. You can use this operation to allow or deny access to specific Health events. For more
 *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventDetailsCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEventDetailsCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const input = { // DescribeEventDetailsRequest
 *   eventArns: [ // eventArnList // required
 *     "STRING_VALUE",
 *   ],
 *   locale: "STRING_VALUE",
 * };
 * const command = new DescribeEventDetailsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventDetailsResponse
 * //   successfulSet: [ // DescribeEventDetailsSuccessfulSet
 * //     { // EventDetails
 * //       event: { // Event
 * //         arn: "STRING_VALUE",
 * //         service: "STRING_VALUE",
 * //         eventTypeCode: "STRING_VALUE",
 * //         eventTypeCategory: "issue" || "accountNotification" || "scheduledChange" || "investigation",
 * //         region: "STRING_VALUE",
 * //         availabilityZone: "STRING_VALUE",
 * //         startTime: new Date("TIMESTAMP"),
 * //         endTime: new Date("TIMESTAMP"),
 * //         lastUpdatedTime: new Date("TIMESTAMP"),
 * //         statusCode: "open" || "closed" || "upcoming",
 * //         eventScopeCode: "PUBLIC" || "ACCOUNT_SPECIFIC" || "NONE",
 * //       },
 * //       eventDescription: { // EventDescription
 * //         latestDescription: "STRING_VALUE",
 * //       },
 * //       eventMetadata: { // eventMetadata
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   failedSet: [ // DescribeEventDetailsFailedSet
 * //     { // EventDetailsErrorItem
 * //       eventArn: "STRING_VALUE",
 * //       errorName: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEventDetailsCommandInput - {@link DescribeEventDetailsCommandInput}
 * @returns {@link DescribeEventDetailsCommandOutput}
 * @see {@link DescribeEventDetailsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventDetailsCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link UnsupportedLocale} (client fault)
 *  <p>The specified locale is not supported.</p>
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 */
export class DescribeEventDetailsCommand extends $Command<
  DescribeEventDetailsCommandInput,
  DescribeEventDetailsCommandOutput,
  HealthClientResolvedConfig
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
  constructor(readonly input: DescribeEventDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEventDetailsCommandInput, DescribeEventDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEventDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeEventDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHealth_20160804",
        operation: "DescribeEventDetails",
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
  private serialize(input: DescribeEventDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEventDetailsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEventDetailsCommandOutput> {
    return de_DescribeEventDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
