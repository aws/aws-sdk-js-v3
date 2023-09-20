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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DescribeNFSFileSharesInput, DescribeNFSFileSharesOutput } from "../models/models_0";
import { de_DescribeNFSFileSharesCommand, se_DescribeNFSFileSharesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeNFSFileSharesCommand}.
 */
export interface DescribeNFSFileSharesCommandInput extends DescribeNFSFileSharesInput {}
/**
 * @public
 *
 * The output of {@link DescribeNFSFileSharesCommand}.
 */
export interface DescribeNFSFileSharesCommandOutput extends DescribeNFSFileSharesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets a description for one or more Network File System (NFS) file shares from an S3 File
 *          Gateway. This operation is only supported for S3 File Gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeNFSFileSharesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeNFSFileSharesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeNFSFileSharesInput
 *   FileShareARNList: [ // FileShareARNList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeNFSFileSharesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNFSFileSharesOutput
 * //   NFSFileShareInfoList: [ // NFSFileShareInfoList
 * //     { // NFSFileShareInfo
 * //       NFSFileShareDefaults: { // NFSFileShareDefaults
 * //         FileMode: "STRING_VALUE",
 * //         DirectoryMode: "STRING_VALUE",
 * //         GroupId: Number("long"),
 * //         OwnerId: Number("long"),
 * //       },
 * //       FileShareARN: "STRING_VALUE",
 * //       FileShareId: "STRING_VALUE",
 * //       FileShareStatus: "STRING_VALUE",
 * //       GatewayARN: "STRING_VALUE",
 * //       KMSEncrypted: true || false,
 * //       KMSKey: "STRING_VALUE",
 * //       Path: "STRING_VALUE",
 * //       Role: "STRING_VALUE",
 * //       LocationARN: "STRING_VALUE",
 * //       DefaultStorageClass: "STRING_VALUE",
 * //       ObjectACL: "private" || "public-read" || "public-read-write" || "authenticated-read" || "bucket-owner-read" || "bucket-owner-full-control" || "aws-exec-read",
 * //       ClientList: [ // FileShareClientList
 * //         "STRING_VALUE",
 * //       ],
 * //       Squash: "STRING_VALUE",
 * //       ReadOnly: true || false,
 * //       GuessMIMETypeEnabled: true || false,
 * //       RequesterPays: true || false,
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       FileShareName: "STRING_VALUE",
 * //       CacheAttributes: { // CacheAttributes
 * //         CacheStaleTimeoutInSeconds: Number("int"),
 * //       },
 * //       NotificationPolicy: "STRING_VALUE",
 * //       VPCEndpointDNSName: "STRING_VALUE",
 * //       BucketRegion: "STRING_VALUE",
 * //       AuditDestinationARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeNFSFileSharesCommandInput - {@link DescribeNFSFileSharesCommandInput}
 * @returns {@link DescribeNFSFileSharesCommandOutput}
 * @see {@link DescribeNFSFileSharesCommandInput} for command's `input` shape.
 * @see {@link DescribeNFSFileSharesCommandOutput} for command's `response` shape.
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
export class DescribeNFSFileSharesCommand extends $Command<
  DescribeNFSFileSharesCommandInput,
  DescribeNFSFileSharesCommandOutput,
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
  constructor(readonly input: DescribeNFSFileSharesCommandInput) {
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
  ): Handler<DescribeNFSFileSharesCommandInput, DescribeNFSFileSharesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeNFSFileSharesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeNFSFileSharesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "DescribeNFSFileShares",
      },
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
  private serialize(input: DescribeNFSFileSharesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeNFSFileSharesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeNFSFileSharesCommandOutput> {
    return de_DescribeNFSFileSharesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
