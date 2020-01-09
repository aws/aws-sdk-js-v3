import {
  ServiceInputTypes,
  ServiceOutputTypes,
  forecastClientResolvedConfig,
} from "../forecastClient";
import {
  UpdateDatasetGroupRequest,
  UpdateDatasetGroupResponse,
} from "../models/index";
import {
  deserializeAws_json1_1UpdateDatasetGroupCommand,
  serializeAws_json1_1UpdateDatasetGroupCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions,
} from "@aws-sdk/types";

export type UpdateDatasetGroupCommandInput = UpdateDatasetGroupRequest;
export type UpdateDatasetGroupCommandOutput = UpdateDatasetGroupResponse;

export class UpdateDatasetGroupCommand extends $Command<UpdateDatasetGroupCommandInput, UpdateDatasetGroupCommandOutput, forecastClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDatasetGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: forecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDatasetGroupCommandInput, UpdateDatasetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateDatasetGroupCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDatasetGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<UpdateDatasetGroupCommandOutput> {
    return deserializeAws_json1_1UpdateDatasetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
