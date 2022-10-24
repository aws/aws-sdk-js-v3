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
  RetrieveTapeArchiveInput,
  RetrieveTapeArchiveInputFilterSensitiveLog,
  RetrieveTapeArchiveOutput,
  RetrieveTapeArchiveOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RetrieveTapeArchiveCommand,
  serializeAws_json1_1RetrieveTapeArchiveCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface RetrieveTapeArchiveCommandInput extends RetrieveTapeArchiveInput {}
export interface RetrieveTapeArchiveCommandOutput extends RetrieveTapeArchiveOutput, __MetadataBearer {}

/**
 * <p>Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway.
 *          Virtual tapes archived in the VTS are not associated with any gateway. However after a tape
 *          is retrieved, it is associated with a gateway, even though it is also listed in the VTS,
 *          that is, archive. This operation is only supported in the tape gateway type.</p>
 *
 *          <p>Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to
 *          another gateway. You must archive the tape again before you can retrieve it to another
 *          gateway. This operation is only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, RetrieveTapeArchiveCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, RetrieveTapeArchiveCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new RetrieveTapeArchiveCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RetrieveTapeArchiveCommandInput} for command's `input` shape.
 * @see {@link RetrieveTapeArchiveCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class RetrieveTapeArchiveCommand extends $Command<
  RetrieveTapeArchiveCommandInput,
  RetrieveTapeArchiveCommandOutput,
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

  constructor(readonly input: RetrieveTapeArchiveCommandInput) {
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
  ): Handler<RetrieveTapeArchiveCommandInput, RetrieveTapeArchiveCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RetrieveTapeArchiveCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "RetrieveTapeArchiveCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RetrieveTapeArchiveInputFilterSensitiveLog,
      outputFilterSensitiveLog: RetrieveTapeArchiveOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RetrieveTapeArchiveCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RetrieveTapeArchiveCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RetrieveTapeArchiveCommandOutput> {
    return deserializeAws_json1_1RetrieveTapeArchiveCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
