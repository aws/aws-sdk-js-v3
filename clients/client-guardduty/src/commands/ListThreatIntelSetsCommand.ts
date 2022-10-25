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
  ListThreatIntelSetsRequest,
  ListThreatIntelSetsRequestFilterSensitiveLog,
  ListThreatIntelSetsResponse,
  ListThreatIntelSetsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListThreatIntelSetsCommand,
  serializeAws_restJson1ListThreatIntelSetsCommand,
} from "../protocols/Aws_restJson1";

export interface ListThreatIntelSetsCommandInput extends ListThreatIntelSetsRequest {}
export interface ListThreatIntelSetsCommandOutput extends ListThreatIntelSetsResponse, __MetadataBearer {}

/**
 * <p>Lists the ThreatIntelSets of the GuardDuty service specified by the detector ID. If you
 *       use this operation from a member account, the ThreatIntelSets associated with the administrator
 *       account are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListThreatIntelSetsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListThreatIntelSetsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new ListThreatIntelSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThreatIntelSetsCommandInput} for command's `input` shape.
 * @see {@link ListThreatIntelSetsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 */
export class ListThreatIntelSetsCommand extends $Command<
  ListThreatIntelSetsCommandInput,
  ListThreatIntelSetsCommandOutput,
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

  constructor(readonly input: ListThreatIntelSetsCommandInput) {
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
  ): Handler<ListThreatIntelSetsCommandInput, ListThreatIntelSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListThreatIntelSetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "ListThreatIntelSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListThreatIntelSetsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListThreatIntelSetsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListThreatIntelSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListThreatIntelSetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListThreatIntelSetsCommandOutput> {
    return deserializeAws_restJson1ListThreatIntelSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
