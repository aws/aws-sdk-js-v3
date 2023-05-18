// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { UntagAttendeeRequest, UntagAttendeeRequestFilterSensitiveLog } from "../models/models_1";
import { de_UntagAttendeeCommand, se_UntagAttendeeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UntagAttendeeCommand}.
 */
export interface UntagAttendeeCommandInput extends UntagAttendeeRequest {}
/**
 * @public
 *
 * The output of {@link UntagAttendeeCommand}.
 */
export interface UntagAttendeeCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Untags the specified tags from the specified Amazon Chime SDK attendee.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UntagAttendeeCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UntagAttendeeCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // UntagAttendeeRequest
 *   MeetingId: "STRING_VALUE", // required
 *   AttendeeId: "STRING_VALUE", // required
 *   TagKeys: [ // AttendeeTagKeyList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UntagAttendeeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UntagAttendeeRequest - {@link UntagAttendeeRequest}
 * @returns {@link Unit}
 * @see {@link UntagAttendeeCommandInput} for command's `input` shape.
 * @see {@link UntagAttendeeCommandOutput} for command's `response` shape.
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
export class UntagAttendeeCommand extends $Command<
  UntagAttendeeCommandInput,
  UntagAttendeeCommandOutput,
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
  constructor(readonly input: UntagAttendeeCommandInput) {
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
  ): Handler<UntagAttendeeCommandInput, UntagAttendeeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UntagAttendeeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "UntagAttendeeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UntagAttendeeRequestFilterSensitiveLog,
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
  private serialize(input: UntagAttendeeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UntagAttendeeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UntagAttendeeCommandOutput> {
    return de_UntagAttendeeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
