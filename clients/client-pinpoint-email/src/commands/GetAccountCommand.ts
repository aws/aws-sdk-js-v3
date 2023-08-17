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

import { GetAccountRequest, GetAccountResponse } from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { de_GetAccountCommand, se_GetAccountCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAccountCommand}.
 */
export interface GetAccountCommandInput extends GetAccountRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountCommand}.
 */
export interface GetAccountCommandOutput extends GetAccountResponse, __MetadataBearer {}

/**
 * @public
 * <p>Obtain information about the email-sending status and capabilities of your Amazon Pinpoint
 *             account in the current AWS Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetAccountCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetAccountCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const input = {};
 * const command = new GetAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountResponse
 * //   SendQuota: { // SendQuota
 * //     Max24HourSend: Number("double"),
 * //     MaxSendRate: Number("double"),
 * //     SentLast24Hours: Number("double"),
 * //   },
 * //   SendingEnabled: true || false,
 * //   DedicatedIpAutoWarmupEnabled: true || false,
 * //   EnforcementStatus: "STRING_VALUE",
 * //   ProductionAccessEnabled: true || false,
 * // };
 *
 * ```
 *
 * @param GetAccountCommandInput - {@link GetAccountCommandInput}
 * @returns {@link GetAccountCommandOutput}
 * @see {@link GetAccountCommandInput} for command's `input` shape.
 * @see {@link GetAccountCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 */
export class GetAccountCommand extends $Command<
  GetAccountCommandInput,
  GetAccountCommandOutput,
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
  constructor(readonly input: GetAccountCommandInput) {
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
  ): Handler<GetAccountCommandInput, GetAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetAccountCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "GetAccountCommand";
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
  private serialize(input: GetAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccountCommandOutput> {
    return de_GetAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
