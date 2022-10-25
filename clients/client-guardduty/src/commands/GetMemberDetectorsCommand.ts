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
  GetMemberDetectorsRequest,
  GetMemberDetectorsRequestFilterSensitiveLog,
  GetMemberDetectorsResponse,
  GetMemberDetectorsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetMemberDetectorsCommand,
  serializeAws_restJson1GetMemberDetectorsCommand,
} from "../protocols/Aws_restJson1";

export interface GetMemberDetectorsCommandInput extends GetMemberDetectorsRequest {}
export interface GetMemberDetectorsCommandOutput extends GetMemberDetectorsResponse, __MetadataBearer {}

/**
 * <p>Describes which data sources are enabled for the member account's detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetMemberDetectorsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetMemberDetectorsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new GetMemberDetectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMemberDetectorsCommandInput} for command's `input` shape.
 * @see {@link GetMemberDetectorsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 */
export class GetMemberDetectorsCommand extends $Command<
  GetMemberDetectorsCommandInput,
  GetMemberDetectorsCommandOutput,
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

  constructor(readonly input: GetMemberDetectorsCommandInput) {
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
  ): Handler<GetMemberDetectorsCommandInput, GetMemberDetectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMemberDetectorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "GetMemberDetectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMemberDetectorsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetMemberDetectorsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMemberDetectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetMemberDetectorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMemberDetectorsCommandOutput> {
    return deserializeAws_restJson1GetMemberDetectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
