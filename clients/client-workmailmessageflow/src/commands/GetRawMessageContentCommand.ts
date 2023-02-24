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
  SdkStream as __SdkStream,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
  WithSdkStreamMixin as __WithSdkStreamMixin,
} from "@aws-sdk/types";

import {
  GetRawMessageContentRequest,
  GetRawMessageContentRequestFilterSensitiveLog,
  GetRawMessageContentResponse,
  GetRawMessageContentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetRawMessageContentCommand,
  serializeAws_restJson1GetRawMessageContentCommand,
} from "../protocols/Aws_restJson1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkMailMessageFlowClientResolvedConfig,
} from "../WorkMailMessageFlowClient";

export interface GetRawMessageContentCommandInput extends GetRawMessageContentRequest {}
export interface GetRawMessageContentCommandOutput
  extends __WithSdkStreamMixin<GetRawMessageContentResponse, "messageContent">,
    __MetadataBearer {}

/**
 * <p>Retrieves the raw content of an in-transit email message, in MIME format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailMessageFlowClient, GetRawMessageContentCommand } from "@aws-sdk/client-workmailmessageflow"; // ES Modules import
 * // const { WorkMailMessageFlowClient, GetRawMessageContentCommand } = require("@aws-sdk/client-workmailmessageflow"); // CommonJS import
 * const client = new WorkMailMessageFlowClient(config);
 * const command = new GetRawMessageContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRawMessageContentCommandInput} for command's `input` shape.
 * @see {@link GetRawMessageContentCommandOutput} for command's `response` shape.
 * @see {@link WorkMailMessageFlowClientResolvedConfig | config} for WorkMailMessageFlowClient's `config` shape.
 *
 */
export class GetRawMessageContentCommand extends $Command<
  GetRawMessageContentCommandInput,
  GetRawMessageContentCommandOutput,
  WorkMailMessageFlowClientResolvedConfig
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

  constructor(readonly input: GetRawMessageContentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailMessageFlowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRawMessageContentCommandInput, GetRawMessageContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRawMessageContentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailMessageFlowClient";
    const commandName = "GetRawMessageContentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRawMessageContentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetRawMessageContentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRawMessageContentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRawMessageContentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<GetRawMessageContentCommandOutput> {
    return deserializeAws_restJson1GetRawMessageContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
