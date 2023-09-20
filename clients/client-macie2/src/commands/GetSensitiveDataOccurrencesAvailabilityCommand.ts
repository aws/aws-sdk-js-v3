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

import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import {
  GetSensitiveDataOccurrencesAvailabilityRequest,
  GetSensitiveDataOccurrencesAvailabilityResponse,
} from "../models/models_0";
import {
  de_GetSensitiveDataOccurrencesAvailabilityCommand,
  se_GetSensitiveDataOccurrencesAvailabilityCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSensitiveDataOccurrencesAvailabilityCommand}.
 */
export interface GetSensitiveDataOccurrencesAvailabilityCommandInput
  extends GetSensitiveDataOccurrencesAvailabilityRequest {}
/**
 * @public
 *
 * The output of {@link GetSensitiveDataOccurrencesAvailabilityCommand}.
 */
export interface GetSensitiveDataOccurrencesAvailabilityCommandOutput
  extends GetSensitiveDataOccurrencesAvailabilityResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Checks whether occurrences of sensitive data can be retrieved for a finding.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetSensitiveDataOccurrencesAvailabilityCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetSensitiveDataOccurrencesAvailabilityCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // GetSensitiveDataOccurrencesAvailabilityRequest
 *   findingId: "STRING_VALUE", // required
 * };
 * const command = new GetSensitiveDataOccurrencesAvailabilityCommand(input);
 * const response = await client.send(command);
 * // { // GetSensitiveDataOccurrencesAvailabilityResponse
 * //   code: "AVAILABLE" || "UNAVAILABLE",
 * //   reasons: [ // __listOfUnavailabilityReasonCode
 * //     "OBJECT_EXCEEDS_SIZE_QUOTA" || "UNSUPPORTED_OBJECT_TYPE" || "UNSUPPORTED_FINDING_TYPE" || "INVALID_CLASSIFICATION_RESULT" || "OBJECT_UNAVAILABLE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSensitiveDataOccurrencesAvailabilityCommandInput - {@link GetSensitiveDataOccurrencesAvailabilityCommandInput}
 * @returns {@link GetSensitiveDataOccurrencesAvailabilityCommandOutput}
 * @see {@link GetSensitiveDataOccurrencesAvailabilityCommandInput} for command's `input` shape.
 * @see {@link GetSensitiveDataOccurrencesAvailabilityCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 */
export class GetSensitiveDataOccurrencesAvailabilityCommand extends $Command<
  GetSensitiveDataOccurrencesAvailabilityCommandInput,
  GetSensitiveDataOccurrencesAvailabilityCommandOutput,
  Macie2ClientResolvedConfig
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
  constructor(readonly input: GetSensitiveDataOccurrencesAvailabilityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetSensitiveDataOccurrencesAvailabilityCommandInput,
    GetSensitiveDataOccurrencesAvailabilityCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetSensitiveDataOccurrencesAvailabilityCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "GetSensitiveDataOccurrencesAvailabilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Macie2",
        operation: "GetSensitiveDataOccurrencesAvailability",
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
    input: GetSensitiveDataOccurrencesAvailabilityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetSensitiveDataOccurrencesAvailabilityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSensitiveDataOccurrencesAvailabilityCommandOutput> {
    return de_GetSensitiveDataOccurrencesAvailabilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
