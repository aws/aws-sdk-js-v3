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

import { CreateRotationRequest, CreateRotationResult } from "../models/models_0";
import { de_CreateRotationCommand, se_CreateRotationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateRotationCommand}.
 */
export interface CreateRotationCommandInput extends CreateRotationRequest {}
/**
 * @public
 *
 * The output of {@link CreateRotationCommand}.
 */
export interface CreateRotationCommandOutput extends CreateRotationResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a rotation in an on-call schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, CreateRotationCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, CreateRotationCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const input = { // CreateRotationRequest
 *   Name: "STRING_VALUE", // required
 *   ContactIds: [ // RotationContactsArnList // required
 *     "STRING_VALUE",
 *   ],
 *   StartTime: new Date("TIMESTAMP"),
 *   TimeZoneId: "STRING_VALUE", // required
 *   Recurrence: { // RecurrenceSettings
 *     MonthlySettings: [ // MonthlySettings
 *       { // MonthlySetting
 *         DayOfMonth: Number("int"), // required
 *         HandOffTime: { // HandOffTime
 *           HourOfDay: Number("int"), // required
 *           MinuteOfHour: Number("int"), // required
 *         },
 *       },
 *     ],
 *     WeeklySettings: [ // WeeklySettings
 *       { // WeeklySetting
 *         DayOfWeek: "MON" || "TUE" || "WED" || "THU" || "FRI" || "SAT" || "SUN", // required
 *         HandOffTime: {
 *           HourOfDay: Number("int"), // required
 *           MinuteOfHour: Number("int"), // required
 *         },
 *       },
 *     ],
 *     DailySettings: [ // DailySettings
 *       {
 *         HourOfDay: Number("int"), // required
 *         MinuteOfHour: Number("int"), // required
 *       },
 *     ],
 *     NumberOfOnCalls: Number("int"), // required
 *     ShiftCoverages: { // ShiftCoveragesMap
 *       "<keys>": [ // CoverageTimes
 *         { // CoverageTime
 *           Start: "<HandOffTime>",
 *           End: "<HandOffTime>",
 *         },
 *       ],
 *     },
 *     RecurrenceMultiplier: Number("int"), // required
 *   },
 *   Tags: [ // TagsList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   IdempotencyToken: "STRING_VALUE",
 * };
 * const command = new CreateRotationCommand(input);
 * const response = await client.send(command);
 * // { // CreateRotationResult
 * //   RotationArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRotationCommandInput - {@link CreateRotationCommandInput}
 * @returns {@link CreateRotationCommandOutput}
 * @see {@link CreateRotationCommandInput} for command's `input` shape.
 * @see {@link CreateRotationCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
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
export class CreateRotationCommand extends $Command<
  CreateRotationCommandInput,
  CreateRotationCommandOutput,
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
  constructor(readonly input: CreateRotationCommandInput) {
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
  ): Handler<CreateRotationCommandInput, CreateRotationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRotationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "CreateRotationCommand";
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
  private serialize(input: CreateRotationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateRotationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRotationCommandOutput> {
    return de_CreateRotationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
