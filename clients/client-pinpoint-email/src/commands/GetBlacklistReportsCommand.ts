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

import { GetBlacklistReportsRequest, GetBlacklistReportsResponse } from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { de_GetBlacklistReportsCommand, se_GetBlacklistReportsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBlacklistReportsCommand}.
 */
export interface GetBlacklistReportsCommandInput extends GetBlacklistReportsRequest {}
/**
 * @public
 *
 * The output of {@link GetBlacklistReportsCommand}.
 */
export interface GetBlacklistReportsCommandOutput extends GetBlacklistReportsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieve a list of the blacklists that your dedicated IP addresses appear on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetBlacklistReportsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetBlacklistReportsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const input = { // GetBlacklistReportsRequest
 *   BlacklistItemNames: [ // BlacklistItemNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetBlacklistReportsCommand(input);
 * const response = await client.send(command);
 * // { // GetBlacklistReportsResponse
 * //   BlacklistReport: { // BlacklistReport // required
 * //     "<keys>": [ // BlacklistEntries
 * //       { // BlacklistEntry
 * //         RblName: "STRING_VALUE",
 * //         ListingTime: new Date("TIMESTAMP"),
 * //         Description: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBlacklistReportsCommandInput - {@link GetBlacklistReportsCommandInput}
 * @returns {@link GetBlacklistReportsCommandOutput}
 * @see {@link GetBlacklistReportsCommandInput} for command's `input` shape.
 * @see {@link GetBlacklistReportsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 */
export class GetBlacklistReportsCommand extends $Command<
  GetBlacklistReportsCommandInput,
  GetBlacklistReportsCommandOutput,
  PinpointEmailClientResolvedConfig
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
  constructor(readonly input: GetBlacklistReportsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBlacklistReportsCommandInput, GetBlacklistReportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBlacklistReportsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "GetBlacklistReportsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonPinpointEmailService",
        operation: "GetBlacklistReports",
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
  private serialize(input: GetBlacklistReportsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetBlacklistReportsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBlacklistReportsCommandOutput> {
    return de_GetBlacklistReportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
