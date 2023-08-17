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

import { ListLocalDisksInput, ListLocalDisksOutput } from "../models/models_0";
import { de_ListLocalDisksCommand, se_ListLocalDisksCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLocalDisksCommand}.
 */
export interface ListLocalDisksCommandInput extends ListLocalDisksInput {}
/**
 * @public
 *
 * The output of {@link ListLocalDisksCommand}.
 */
export interface ListLocalDisksCommandOutput extends ListLocalDisksOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the gateway's local disks. To specify which gateway to describe,
 *          you use the Amazon Resource Name (ARN) of the gateway in the body of the request.</p>
 *
 *          <p>The request returns a list of all disks, specifying which are configured as working
 *          storage, cache storage, or stored volume or not configured at all. The response includes a
 *             <code>DiskStatus</code> field. This field can have a value of present (the disk is
 *          available to use), missing (the disk is no longer connected to the gateway), or mismatch
 *          (the disk node is occupied by a disk that has incorrect metadata or the disk content is
 *          corrupted).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListLocalDisksCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListLocalDisksCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // ListLocalDisksInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new ListLocalDisksCommand(input);
 * const response = await client.send(command);
 * // { // ListLocalDisksOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   Disks: [ // Disks
 * //     { // Disk
 * //       DiskId: "STRING_VALUE",
 * //       DiskPath: "STRING_VALUE",
 * //       DiskNode: "STRING_VALUE",
 * //       DiskStatus: "STRING_VALUE",
 * //       DiskSizeInBytes: Number("long"),
 * //       DiskAllocationType: "STRING_VALUE",
 * //       DiskAllocationResource: "STRING_VALUE",
 * //       DiskAttributeList: [ // DiskAttributeList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListLocalDisksCommandInput - {@link ListLocalDisksCommandInput}
 * @returns {@link ListLocalDisksCommandOutput}
 * @see {@link ListLocalDisksCommandInput} for command's `input` shape.
 * @see {@link ListLocalDisksCommandOutput} for command's `response` shape.
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
 * @example To list the gateway's local disks
 * ```javascript
 * // The request returns a list of all disks, specifying which are configured as working storage, cache storage, or stored volume or not configured at all.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new ListLocalDisksCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Disks": [
 *     {
 *       "DiskAllocationType": "CACHE_STORAGE",
 *       "DiskId": "pci-0000:03:00.0-scsi-0:0:0:0",
 *       "DiskNode": "SCSI(0:0)",
 *       "DiskPath": "/dev/sda",
 *       "DiskSizeInBytes": 1099511627776,
 *       "DiskStatus": "missing"
 *     },
 *     {
 *       "DiskAllocationResource": "",
 *       "DiskAllocationType": "UPLOAD_BUFFER",
 *       "DiskId": "pci-0000:03:00.0-scsi-0:0:1:0",
 *       "DiskNode": "SCSI(0:1)",
 *       "DiskPath": "/dev/sdb",
 *       "DiskSizeInBytes": 1099511627776,
 *       "DiskStatus": "present"
 *     }
 *   ],
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * }
 * *\/
 * // example id: to-list-the-gateways-local-disks-1472079564618
 * ```
 *
 */
export class ListLocalDisksCommand extends $Command<
  ListLocalDisksCommandInput,
  ListLocalDisksCommandOutput,
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
  constructor(readonly input: ListLocalDisksCommandInput) {
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
  ): Handler<ListLocalDisksCommandInput, ListLocalDisksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLocalDisksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ListLocalDisksCommand";
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
  private serialize(input: ListLocalDisksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLocalDisksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLocalDisksCommandOutput> {
    return de_ListLocalDisksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
