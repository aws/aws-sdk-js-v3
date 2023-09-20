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
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
  StreamingBlobPayloadOutputTypes,
} from "@smithy/types";

import {
  GetRawMessageContentRequest,
  GetRawMessageContentResponse,
  GetRawMessageContentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetRawMessageContentCommand, se_GetRawMessageContentCommand } from "../protocols/Aws_restJson1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkMailMessageFlowClientResolvedConfig,
} from "../WorkMailMessageFlowClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRawMessageContentCommand}.
 */
export interface GetRawMessageContentCommandInput extends GetRawMessageContentRequest {}
/**
 * @public
 *
 * The output of {@link GetRawMessageContentCommand}.
 */
export interface GetRawMessageContentCommandOutput
  extends Omit<GetRawMessageContentResponse, "messageContent">,
    __MetadataBearer {
  messageContent: StreamingBlobPayloadOutputTypes;
}

/**
 * @public
 * <p>Retrieves the raw content of an in-transit email message, in MIME format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailMessageFlowClient, GetRawMessageContentCommand } from "@aws-sdk/client-workmailmessageflow"; // ES Modules import
 * // const { WorkMailMessageFlowClient, GetRawMessageContentCommand } = require("@aws-sdk/client-workmailmessageflow"); // CommonJS import
 * const client = new WorkMailMessageFlowClient(config);
 * const input = { // GetRawMessageContentRequest
 *   messageId: "STRING_VALUE", // required
 * };
 * const command = new GetRawMessageContentCommand(input);
 * const response = await client.send(command);
 * // { // GetRawMessageContentResponse
 * //   messageContent: "STREAMING_BLOB_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetRawMessageContentCommandInput - {@link GetRawMessageContentCommandInput}
 * @returns {@link GetRawMessageContentCommandOutput}
 * @see {@link GetRawMessageContentCommandInput} for command's `input` shape.
 * @see {@link GetRawMessageContentCommandOutput} for command's `response` shape.
 * @see {@link WorkMailMessageFlowClientResolvedConfig | config} for WorkMailMessageFlowClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested email message is not found.</p>
 *
 * @throws {@link WorkMailMessageFlowServiceException}
 * <p>Base exception class for all service exceptions from WorkMailMessageFlow service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetRawMessageContentResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "GiraffeMessageInTransitService",
        operation: "GetRawMessageContent",
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
  private serialize(input: GetRawMessageContentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRawMessageContentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<GetRawMessageContentCommandOutput> {
    return de_GetRawMessageContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
