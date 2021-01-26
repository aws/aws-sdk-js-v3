import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import {
  GetDeployablePatchSnapshotForInstanceRequest,
  GetDeployablePatchSnapshotForInstanceResult,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand,
  serializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand,
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

export type GetDeployablePatchSnapshotForInstanceCommandInput = GetDeployablePatchSnapshotForInstanceRequest;
export type GetDeployablePatchSnapshotForInstanceCommandOutput = GetDeployablePatchSnapshotForInstanceResult &
  __MetadataBearer;

/**
 * <p>Retrieves the current snapshot for the patch baseline the instance uses. This API is
 *    primarily used by the AWS-RunPatchBaseline Systems Manager document. </p>
 */
export class GetDeployablePatchSnapshotForInstanceCommand extends $Command<
  GetDeployablePatchSnapshotForInstanceCommandInput,
  GetDeployablePatchSnapshotForInstanceCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDeployablePatchSnapshotForInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDeployablePatchSnapshotForInstanceCommandInput, GetDeployablePatchSnapshotForInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetDeployablePatchSnapshotForInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDeployablePatchSnapshotForInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDeployablePatchSnapshotForInstanceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetDeployablePatchSnapshotForInstanceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDeployablePatchSnapshotForInstanceCommandOutput> {
    return deserializeAws_json1_1GetDeployablePatchSnapshotForInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
