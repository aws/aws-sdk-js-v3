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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeLocationFsxWindowsRequest, DescribeLocationFsxWindowsResponse } from "../models/models_0";
import { de_DescribeLocationFsxWindowsCommand, se_DescribeLocationFsxWindowsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocationFsxWindowsCommand}.
 */
export interface DescribeLocationFsxWindowsCommandInput extends DescribeLocationFsxWindowsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocationFsxWindowsCommand}.
 */
export interface DescribeLocationFsxWindowsCommandOutput extends DescribeLocationFsxWindowsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns metadata about an Amazon FSx for Windows File Server location, such as information
 *       about its path.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationFsxWindowsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationFsxWindowsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // DescribeLocationFsxWindowsRequest
 *   LocationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeLocationFsxWindowsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocationFsxWindowsResponse
 * //   LocationArn: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
 * //   SecurityGroupArns: [ // Ec2SecurityGroupArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   User: "STRING_VALUE",
 * //   Domain: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLocationFsxWindowsCommandInput - {@link DescribeLocationFsxWindowsCommandInput}
 * @returns {@link DescribeLocationFsxWindowsCommandOutput}
 * @see {@link DescribeLocationFsxWindowsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationFsxWindowsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 */
export class DescribeLocationFsxWindowsCommand extends $Command<
  DescribeLocationFsxWindowsCommandInput,
  DescribeLocationFsxWindowsCommandOutput,
  DataSyncClientResolvedConfig
> {
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
  constructor(readonly input: DescribeLocationFsxWindowsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLocationFsxWindowsCommandInput, DescribeLocationFsxWindowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLocationFsxWindowsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "DescribeLocationFsxWindowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "FmrsService",
        operation: "DescribeLocationFsxWindows",
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
  private serialize(input: DescribeLocationFsxWindowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeLocationFsxWindowsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLocationFsxWindowsCommandOutput> {
    return de_DescribeLocationFsxWindowsCommand(output, context);
  }
}
