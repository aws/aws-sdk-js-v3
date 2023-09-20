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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  BatchCreateAttendeeRequest,
  BatchCreateAttendeeRequestFilterSensitiveLog,
  BatchCreateAttendeeResponse,
  BatchCreateAttendeeResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchCreateAttendeeCommand, se_BatchCreateAttendeeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchCreateAttendeeCommand}.
 */
export interface BatchCreateAttendeeCommandInput extends BatchCreateAttendeeRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateAttendeeCommand}.
 */
export interface BatchCreateAttendeeCommandOutput extends BatchCreateAttendeeResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Creates up to 100 new attendees for an active Amazon Chime SDK meeting.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_BatchCreateAttendee.html">BatchCreateAttendee</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *             <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 *          <p>For more information about the Amazon Chime SDK, see
 * <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
 * in the
 * <i>Amazon Chime SDK Developer Guide</i>.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchCreateAttendeeCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchCreateAttendeeCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // BatchCreateAttendeeRequest
 *   MeetingId: "STRING_VALUE", // required
 *   Attendees: [ // CreateAttendeeRequestItemList // required
 *     { // CreateAttendeeRequestItem
 *       ExternalUserId: "STRING_VALUE", // required
 *       Tags: [ // AttendeeTagList
 *         { // Tag
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new BatchCreateAttendeeCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateAttendeeResponse
 * //   Attendees: [ // AttendeeList
 * //     { // Attendee
 * //       ExternalUserId: "STRING_VALUE",
 * //       AttendeeId: "STRING_VALUE",
 * //       JoinToken: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Errors: [ // BatchCreateAttendeeErrorList
 * //     { // CreateAttendeeError
 * //       ExternalUserId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCreateAttendeeCommandInput - {@link BatchCreateAttendeeCommandInput}
 * @returns {@link BatchCreateAttendeeCommandOutput}
 * @see {@link BatchCreateAttendeeCommandInput} for command's `input` shape.
 * @see {@link BatchCreateAttendeeCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 */
export class BatchCreateAttendeeCommand extends $Command<
  BatchCreateAttendeeCommandInput,
  BatchCreateAttendeeCommandOutput,
  ChimeClientResolvedConfig
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
  constructor(readonly input: BatchCreateAttendeeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchCreateAttendeeCommandInput, BatchCreateAttendeeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchCreateAttendeeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "BatchCreateAttendeeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchCreateAttendeeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchCreateAttendeeResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "UCBuzzConsoleService",
        operation: "BatchCreateAttendee",
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
  private serialize(input: BatchCreateAttendeeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchCreateAttendeeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchCreateAttendeeCommandOutput> {
    return de_BatchCreateAttendeeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
