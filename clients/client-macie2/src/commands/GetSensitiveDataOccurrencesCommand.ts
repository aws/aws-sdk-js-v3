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

import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetSensitiveDataOccurrencesRequest, GetSensitiveDataOccurrencesResponse } from "../models/models_0";
import {
  de_GetSensitiveDataOccurrencesCommand,
  se_GetSensitiveDataOccurrencesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSensitiveDataOccurrencesCommand}.
 */
export interface GetSensitiveDataOccurrencesCommandInput extends GetSensitiveDataOccurrencesRequest {}
/**
 * @public
 *
 * The output of {@link GetSensitiveDataOccurrencesCommand}.
 */
export interface GetSensitiveDataOccurrencesCommandOutput
  extends GetSensitiveDataOccurrencesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves occurrences of sensitive data reported by a finding.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetSensitiveDataOccurrencesCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetSensitiveDataOccurrencesCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // GetSensitiveDataOccurrencesRequest
 *   findingId: "STRING_VALUE", // required
 * };
 * const command = new GetSensitiveDataOccurrencesCommand(input);
 * const response = await client.send(command);
 * // { // GetSensitiveDataOccurrencesResponse
 * //   error: "STRING_VALUE",
 * //   sensitiveDataOccurrences: { // SensitiveDataOccurrences
 * //     "<keys>": [ // __listOfDetectedDataDetails
 * //       { // DetectedDataDetails
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   status: "SUCCESS" || "PROCESSING" || "ERROR",
 * // };
 *
 * ```
 *
 * @param GetSensitiveDataOccurrencesCommandInput - {@link GetSensitiveDataOccurrencesCommandInput}
 * @returns {@link GetSensitiveDataOccurrencesCommandOutput}
 * @see {@link GetSensitiveDataOccurrencesCommandInput} for command's `input` shape.
 * @see {@link GetSensitiveDataOccurrencesCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  <p>Provides information about an error that occurred due to an unprocessable entity.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 */
export class GetSensitiveDataOccurrencesCommand extends $Command<
  GetSensitiveDataOccurrencesCommandInput,
  GetSensitiveDataOccurrencesCommandOutput,
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
  constructor(readonly input: GetSensitiveDataOccurrencesCommandInput) {
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
  ): Handler<GetSensitiveDataOccurrencesCommandInput, GetSensitiveDataOccurrencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSensitiveDataOccurrencesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "GetSensitiveDataOccurrencesCommand";
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
  private serialize(input: GetSensitiveDataOccurrencesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSensitiveDataOccurrencesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSensitiveDataOccurrencesCommandOutput> {
    return de_GetSensitiveDataOccurrencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
