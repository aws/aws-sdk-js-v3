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

import { DescribeFileSystemAssociationsInput, DescribeFileSystemAssociationsOutput } from "../models/models_0";
import {
  de_DescribeFileSystemAssociationsCommand,
  se_DescribeFileSystemAssociationsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFileSystemAssociationsCommand}.
 */
export interface DescribeFileSystemAssociationsCommandInput extends DescribeFileSystemAssociationsInput {}
/**
 * @public
 *
 * The output of {@link DescribeFileSystemAssociationsCommand}.
 */
export interface DescribeFileSystemAssociationsCommandOutput
  extends DescribeFileSystemAssociationsOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the file system association information. This operation is only supported for FSx
 *          File Gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeFileSystemAssociationsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeFileSystemAssociationsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeFileSystemAssociationsInput
 *   FileSystemAssociationARNList: [ // FileSystemAssociationARNList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeFileSystemAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFileSystemAssociationsOutput
 * //   FileSystemAssociationInfoList: [ // FileSystemAssociationInfoList
 * //     { // FileSystemAssociationInfo
 * //       FileSystemAssociationARN: "STRING_VALUE",
 * //       LocationARN: "STRING_VALUE",
 * //       FileSystemAssociationStatus: "STRING_VALUE",
 * //       AuditDestinationARN: "STRING_VALUE",
 * //       GatewayARN: "STRING_VALUE",
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       CacheAttributes: { // CacheAttributes
 * //         CacheStaleTimeoutInSeconds: Number("int"),
 * //       },
 * //       EndpointNetworkConfiguration: { // EndpointNetworkConfiguration
 * //         IpAddresses: [ // IpAddressList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       FileSystemAssociationStatusDetails: [ // FileSystemAssociationStatusDetails
 * //         { // FileSystemAssociationStatusDetail
 * //           ErrorCode: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeFileSystemAssociationsCommandInput - {@link DescribeFileSystemAssociationsCommandInput}
 * @returns {@link DescribeFileSystemAssociationsCommandOutput}
 * @see {@link DescribeFileSystemAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeFileSystemAssociationsCommandOutput} for command's `response` shape.
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
export class DescribeFileSystemAssociationsCommand extends $Command<
  DescribeFileSystemAssociationsCommandInput,
  DescribeFileSystemAssociationsCommandOutput,
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
  constructor(readonly input: DescribeFileSystemAssociationsCommandInput) {
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
  ): Handler<DescribeFileSystemAssociationsCommandInput, DescribeFileSystemAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFileSystemAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeFileSystemAssociationsCommand";
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
  private serialize(
    input: DescribeFileSystemAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeFileSystemAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFileSystemAssociationsCommandOutput> {
    return de_DescribeFileSystemAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
