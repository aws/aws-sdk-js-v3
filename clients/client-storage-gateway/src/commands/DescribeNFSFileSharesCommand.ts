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

import { DescribeNFSFileSharesInput, DescribeNFSFileSharesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeNFSFileSharesCommand,
  serializeAws_json1_1DescribeNFSFileSharesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

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
 * const command = new DescribeNFSFileSharesCommand(input);
 * const response = await client.send(command);
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
    return serializeAws_json1_1DescribeNFSFileSharesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeNFSFileSharesCommandOutput> {
    return deserializeAws_json1_1DescribeNFSFileSharesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
