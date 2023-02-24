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
  ListVolumeInitiatorsInput,
  ListVolumeInitiatorsInputFilterSensitiveLog,
  ListVolumeInitiatorsOutput,
  ListVolumeInitiatorsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListVolumeInitiatorsCommand,
  serializeAws_json1_1ListVolumeInitiatorsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface ListVolumeInitiatorsCommandInput extends ListVolumeInitiatorsInput {}
export interface ListVolumeInitiatorsCommandOutput extends ListVolumeInitiatorsOutput, __MetadataBearer {}

/**
 * <p>Lists iSCSI initiators that are connected to a volume. You can use this operation to
 *          determine whether a volume is being used or not. This operation is only supported in the
 *          cached volume and stored volume gateway types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListVolumeInitiatorsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListVolumeInitiatorsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ListVolumeInitiatorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVolumeInitiatorsCommandInput} for command's `input` shape.
 * @see {@link ListVolumeInitiatorsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class ListVolumeInitiatorsCommand extends $Command<
  ListVolumeInitiatorsCommandInput,
  ListVolumeInitiatorsCommandOutput,
  StorageGatewayClientResolvedConfig
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

  constructor(readonly input: ListVolumeInitiatorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVolumeInitiatorsCommandInput, ListVolumeInitiatorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVolumeInitiatorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ListVolumeInitiatorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVolumeInitiatorsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListVolumeInitiatorsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVolumeInitiatorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListVolumeInitiatorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVolumeInitiatorsCommandOutput> {
    return deserializeAws_json1_1ListVolumeInitiatorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
