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
  GetReadSetActivationJobRequest,
  GetReadSetActivationJobRequestFilterSensitiveLog,
  GetReadSetActivationJobResponse,
  GetReadSetActivationJobResponseFilterSensitiveLog,
} from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import {
  deserializeAws_restJson1GetReadSetActivationJobCommand,
  serializeAws_restJson1GetReadSetActivationJobCommand,
} from "../protocols/Aws_restJson1";

export interface GetReadSetActivationJobCommandInput extends GetReadSetActivationJobRequest {}
export interface GetReadSetActivationJobCommandOutput extends GetReadSetActivationJobResponse, __MetadataBearer {}

/**
 * <p>Gets information about a read set activation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetReadSetActivationJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetReadSetActivationJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const command = new GetReadSetActivationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReadSetActivationJobCommandInput} for command's `input` shape.
 * @see {@link GetReadSetActivationJobCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 */
export class GetReadSetActivationJobCommand extends $Command<
  GetReadSetActivationJobCommandInput,
  GetReadSetActivationJobCommandOutput,
  OmicsClientResolvedConfig
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

  constructor(readonly input: GetReadSetActivationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OmicsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetReadSetActivationJobCommandInput, GetReadSetActivationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetReadSetActivationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "GetReadSetActivationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetReadSetActivationJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetReadSetActivationJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetReadSetActivationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetReadSetActivationJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetReadSetActivationJobCommandOutput> {
    return deserializeAws_restJson1GetReadSetActivationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
