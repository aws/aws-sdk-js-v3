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

import { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient";
import {
  GetSnapshotBlockRequest,
  GetSnapshotBlockRequestFilterSensitiveLog,
  GetSnapshotBlockResponse,
  GetSnapshotBlockResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetSnapshotBlockCommand,
  serializeAws_restJson1GetSnapshotBlockCommand,
} from "../protocols/Aws_restJson1";

export interface GetSnapshotBlockCommandInput extends GetSnapshotBlockRequest {}
export interface GetSnapshotBlockCommandOutput
  extends __WithSdkStreamMixin<GetSnapshotBlockResponse, "BlockData">,
    __MetadataBearer {}

/**
 * <p>Returns the data in a block in an Amazon Elastic Block Store snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, GetSnapshotBlockCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, GetSnapshotBlockCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const command = new GetSnapshotBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSnapshotBlockCommandInput} for command's `input` shape.
 * @see {@link GetSnapshotBlockCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for EBSClient's `config` shape.
 *
 */
export class GetSnapshotBlockCommand extends $Command<
  GetSnapshotBlockCommandInput,
  GetSnapshotBlockCommandOutput,
  EBSClientResolvedConfig
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

  constructor(readonly input: GetSnapshotBlockCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EBSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSnapshotBlockCommandInput, GetSnapshotBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSnapshotBlockCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EBSClient";
    const commandName = "GetSnapshotBlockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSnapshotBlockRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSnapshotBlockResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSnapshotBlockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSnapshotBlockCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __SdkStreamSerdeContext
  ): Promise<GetSnapshotBlockCommandOutput> {
    return deserializeAws_restJson1GetSnapshotBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
