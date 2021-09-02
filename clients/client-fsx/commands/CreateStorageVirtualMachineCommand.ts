import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { CreateStorageVirtualMachineRequest, CreateStorageVirtualMachineResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateStorageVirtualMachineCommand,
  serializeAws_json1_1CreateStorageVirtualMachineCommand,
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

export interface CreateStorageVirtualMachineCommandInput extends CreateStorageVirtualMachineRequest {}
export interface CreateStorageVirtualMachineCommandOutput
  extends CreateStorageVirtualMachineResponse,
    __MetadataBearer {}

/**
 * <p>Creates a storage virtual machine (SVM) for an Amazon FSx for ONTAP file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateStorageVirtualMachineCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateStorageVirtualMachineCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CreateStorageVirtualMachineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStorageVirtualMachineCommandInput} for command's `input` shape.
 * @see {@link CreateStorageVirtualMachineCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateStorageVirtualMachineCommand extends $Command<
  CreateStorageVirtualMachineCommandInput,
  CreateStorageVirtualMachineCommandOutput,
  FSxClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateStorageVirtualMachineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateStorageVirtualMachineCommandInput, CreateStorageVirtualMachineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CreateStorageVirtualMachineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStorageVirtualMachineRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateStorageVirtualMachineResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateStorageVirtualMachineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateStorageVirtualMachineCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateStorageVirtualMachineCommandOutput> {
    return deserializeAws_json1_1CreateStorageVirtualMachineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
