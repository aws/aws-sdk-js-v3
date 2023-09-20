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

import { ListRotationsRequest, ListRotationsResult } from "../models/models_0";
import { de_ListRotationsCommand, se_ListRotationsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRotationsCommand}.
 */
export interface ListRotationsCommandInput extends ListRotationsRequest {}
/**
 * @public
 *
 * The output of {@link ListRotationsCommand}.
 */
export interface ListRotationsCommandOutput extends ListRotationsResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of on-call rotations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListRotationsCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListRotationsCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const input = { // ListRotationsRequest
 *   RotationNamePrefix: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRotationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRotationsResult
 * //   NextToken: "STRING_VALUE",
 * //   Rotations: [ // Rotations // required
 * //     { // Rotation
 * //       RotationArn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       ContactIds: [ // SsmContactsArnList
 * //         "STRING_VALUE",
 * //       ],
 * //       StartTime: new Date("TIMESTAMP"),
 * //       TimeZoneId: "STRING_VALUE",
 * //       Recurrence: { // RecurrenceSettings
 * //         MonthlySettings: [ // MonthlySettings
 * //           { // MonthlySetting
 * //             DayOfMonth: Number("int"), // required
 * //             HandOffTime: { // HandOffTime
 * //               HourOfDay: Number("int"), // required
 * //               MinuteOfHour: Number("int"), // required
 * //             },
 * //           },
 * //         ],
 * //         WeeklySettings: [ // WeeklySettings
 * //           { // WeeklySetting
 * //             DayOfWeek: "MON" || "TUE" || "WED" || "THU" || "FRI" || "SAT" || "SUN", // required
 * //             HandOffTime: {
 * //               HourOfDay: Number("int"), // required
 * //               MinuteOfHour: Number("int"), // required
 * //             },
 * //           },
 * //         ],
 * //         DailySettings: [ // DailySettings
 * //           {
 * //             HourOfDay: Number("int"), // required
 * //             MinuteOfHour: Number("int"), // required
 * //           },
 * //         ],
 * //         NumberOfOnCalls: Number("int"), // required
 * //         ShiftCoverages: { // ShiftCoveragesMap
 * //           "<keys>": [ // CoverageTimes
 * //             { // CoverageTime
 * //               Start: "<HandOffTime>",
 * //               End: "<HandOffTime>",
 * //             },
 * //           ],
 * //         },
 * //         RecurrenceMultiplier: Number("int"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRotationsCommandInput - {@link ListRotationsCommandInput}
 * @returns {@link ListRotationsCommandOutput}
 * @see {@link ListRotationsCommandInput} for command's `input` shape.
 * @see {@link ListRotationsCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link SSMContactsServiceException}
 * <p>Base exception class for all service exceptions from SSMContacts service.</p>
 *
 */
export class ListRotationsCommand extends $Command<
  ListRotationsCommandInput,
  ListRotationsCommandOutput,
  SSMContactsClientResolvedConfig
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
  constructor(readonly input: ListRotationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMContactsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRotationsCommandInput, ListRotationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListRotationsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "ListRotationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SSMContacts",
        operation: "ListRotations",
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
  private serialize(input: ListRotationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRotationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRotationsCommandOutput> {
    return de_ListRotationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
