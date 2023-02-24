// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import {
  GetRemainingFreeTrialDaysRequest,
  GetRemainingFreeTrialDaysRequestFilterSensitiveLog,
  GetRemainingFreeTrialDaysResponse,
  GetRemainingFreeTrialDaysResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetRemainingFreeTrialDaysCommand,
  serializeAws_restJson1GetRemainingFreeTrialDaysCommand,
} from "../protocols/Aws_restJson1";

export interface GetRemainingFreeTrialDaysCommandInput extends GetRemainingFreeTrialDaysRequest {}
export interface GetRemainingFreeTrialDaysCommandOutput extends GetRemainingFreeTrialDaysResponse, __MetadataBearer {}

/**
 * <p>Provides the number of days left for each data source used in the free trial period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetRemainingFreeTrialDaysCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetRemainingFreeTrialDaysCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new GetRemainingFreeTrialDaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRemainingFreeTrialDaysCommandInput} for command's `input` shape.
 * @see {@link GetRemainingFreeTrialDaysCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 */
export class GetRemainingFreeTrialDaysCommand extends $Command<
  GetRemainingFreeTrialDaysCommandInput,
  GetRemainingFreeTrialDaysCommandOutput,
  GuardDutyClientResolvedConfig
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

  constructor(readonly input: GetRemainingFreeTrialDaysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRemainingFreeTrialDaysCommandInput, GetRemainingFreeTrialDaysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRemainingFreeTrialDaysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "GetRemainingFreeTrialDaysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRemainingFreeTrialDaysRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetRemainingFreeTrialDaysResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRemainingFreeTrialDaysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRemainingFreeTrialDaysCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRemainingFreeTrialDaysCommandOutput> {
    return deserializeAws_restJson1GetRemainingFreeTrialDaysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
