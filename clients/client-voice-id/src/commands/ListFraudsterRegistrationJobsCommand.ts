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

import {
  ListFraudsterRegistrationJobsRequest,
  ListFraudsterRegistrationJobsRequestFilterSensitiveLog,
  ListFraudsterRegistrationJobsResponse,
  ListFraudsterRegistrationJobsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ListFraudsterRegistrationJobsCommand,
  serializeAws_json1_0ListFraudsterRegistrationJobsCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

export interface ListFraudsterRegistrationJobsCommandInput extends ListFraudsterRegistrationJobsRequest {}
export interface ListFraudsterRegistrationJobsCommandOutput
  extends ListFraudsterRegistrationJobsResponse,
    __MetadataBearer {}

/**
 * <p>Lists all the fraudster registration jobs in the domain with the given
 *                 <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all
 *             fraudster registration jobs in the given domain. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, ListFraudsterRegistrationJobsCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, ListFraudsterRegistrationJobsCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * const client = new VoiceIDClient(config);
 * const command = new ListFraudsterRegistrationJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFraudsterRegistrationJobsCommandInput} for command's `input` shape.
 * @see {@link ListFraudsterRegistrationJobsCommandOutput} for command's `response` shape.
 * @see {@link VoiceIDClientResolvedConfig | config} for VoiceIDClient's `config` shape.
 *
 */
export class ListFraudsterRegistrationJobsCommand extends $Command<
  ListFraudsterRegistrationJobsCommandInput,
  ListFraudsterRegistrationJobsCommandOutput,
  VoiceIDClientResolvedConfig
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

  constructor(readonly input: ListFraudsterRegistrationJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: VoiceIDClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFraudsterRegistrationJobsCommandInput, ListFraudsterRegistrationJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFraudsterRegistrationJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "VoiceIDClient";
    const commandName = "ListFraudsterRegistrationJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFraudsterRegistrationJobsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListFraudsterRegistrationJobsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFraudsterRegistrationJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListFraudsterRegistrationJobsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListFraudsterRegistrationJobsCommandOutput> {
    return deserializeAws_json1_0ListFraudsterRegistrationJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
