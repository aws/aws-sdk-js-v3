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
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { ListVolumeInitiatorsInput, ListVolumeInitiatorsOutput } from "../models/models_0";
import { de_ListVolumeInitiatorsCommand, se_ListVolumeInitiatorsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListVolumeInitiatorsCommand}.
 */
export interface ListVolumeInitiatorsCommandInput extends ListVolumeInitiatorsInput {}
/**
 * @public
 *
 * The output of {@link ListVolumeInitiatorsCommand}.
 */
export interface ListVolumeInitiatorsCommandOutput extends ListVolumeInitiatorsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists iSCSI initiators that are connected to a volume. You can use this operation to
 *          determine whether a volume is being used or not. This operation is only supported in the
 *          cached volume and stored volume gateway types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListVolumeInitiatorsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListVolumeInitiatorsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // ListVolumeInitiatorsInput
 *   VolumeARN: "STRING_VALUE", // required
 * };
 * const command = new ListVolumeInitiatorsCommand(input);
 * const response = await client.send(command);
 * // { // ListVolumeInitiatorsOutput
 * //   Initiators: [ // Initiators
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListVolumeInitiatorsCommandInput - {@link ListVolumeInitiatorsCommandInput}
 * @returns {@link ListVolumeInitiatorsCommandOutput}
 * @see {@link ListVolumeInitiatorsCommandInput} for command's `input` shape.
 * @see {@link ListVolumeInitiatorsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: ListVolumeInitiatorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListVolumeInitiatorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVolumeInitiatorsCommandOutput> {
    return de_ListVolumeInitiatorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
