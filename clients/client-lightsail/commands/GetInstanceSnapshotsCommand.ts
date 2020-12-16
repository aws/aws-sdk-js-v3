import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetInstanceSnapshotsRequest, GetInstanceSnapshotsResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetInstanceSnapshotsCommand,
  serializeAws_json1_1GetInstanceSnapshotsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetInstanceSnapshotsCommandInput = GetInstanceSnapshotsRequest;
export type GetInstanceSnapshotsCommandOutput = GetInstanceSnapshotsResult & __MetadataBearer;

/**
 * <p>Returns all instance snapshots for the user's account.</p>
 */
export class GetInstanceSnapshotsCommand extends $Command<
  GetInstanceSnapshotsCommandInput,
  GetInstanceSnapshotsCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetInstanceSnapshotsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInstanceSnapshotsCommandInput, GetInstanceSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetInstanceSnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInstanceSnapshotsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetInstanceSnapshotsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInstanceSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetInstanceSnapshotsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInstanceSnapshotsCommandOutput> {
    return deserializeAws_json1_1GetInstanceSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
