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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import {
  CreateLocationFsxOntapRequest,
  CreateLocationFsxOntapRequestFilterSensitiveLog,
  CreateLocationFsxOntapResponse,
  CreateLocationFsxOntapResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateLocationFsxOntapCommand,
  serializeAws_json1_1CreateLocationFsxOntapCommand,
} from "../protocols/Aws_json1_1";

export interface CreateLocationFsxOntapCommandInput extends CreateLocationFsxOntapRequest {}
export interface CreateLocationFsxOntapCommandOutput extends CreateLocationFsxOntapResponse, __MetadataBearer {}

/**
 * <p>Creates an endpoint for an Amazon FSx for NetApp ONTAP file system that DataSync
 *       can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html">Creating a location for FSx for ONTAP</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationFsxOntapCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationFsxOntapCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateLocationFsxOntapCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocationFsxOntapCommandInput} for command's `input` shape.
 * @see {@link CreateLocationFsxOntapCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 */
export class CreateLocationFsxOntapCommand extends $Command<
  CreateLocationFsxOntapCommandInput,
  CreateLocationFsxOntapCommandOutput,
  DataSyncClientResolvedConfig
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

  constructor(readonly input: CreateLocationFsxOntapCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLocationFsxOntapCommandInput, CreateLocationFsxOntapCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLocationFsxOntapCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "CreateLocationFsxOntapCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLocationFsxOntapRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateLocationFsxOntapResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLocationFsxOntapCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLocationFsxOntapCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLocationFsxOntapCommandOutput> {
    return deserializeAws_json1_1CreateLocationFsxOntapCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
