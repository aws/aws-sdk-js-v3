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
import { DescribeLocationNfsRequest, DescribeLocationNfsResponse } from "../models/models_0";
import { de_DescribeLocationNfsCommand, se_DescribeLocationNfsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocationNfsCommand}.
 */
export interface DescribeLocationNfsCommandInput extends DescribeLocationNfsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocationNfsCommand}.
 */
export interface DescribeLocationNfsCommandOutput extends DescribeLocationNfsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides details about how an DataSync transfer location for a Network
 *       File System (NFS) file server is configured.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationNfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationNfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // DescribeLocationNfsRequest
 *   LocationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeLocationNfsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocationNfsResponse
 * //   LocationArn: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
 * //   OnPremConfig: { // OnPremConfig
 * //     AgentArns: [ // AgentArnList // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   MountOptions: { // NfsMountOptions
 * //     Version: "AUTOMATIC" || "NFS3" || "NFS4_0" || "NFS4_1",
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeLocationNfsCommandInput - {@link DescribeLocationNfsCommandInput}
 * @returns {@link DescribeLocationNfsCommandOutput}
 * @see {@link DescribeLocationNfsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationNfsCommandOutput} for command's `response` shape.
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
export class DescribeLocationNfsCommand extends $Command<
  DescribeLocationNfsCommandInput,
  DescribeLocationNfsCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DescribeLocationNfsCommandInput) {
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
  ): Handler<DescribeLocationNfsCommandInput, DescribeLocationNfsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLocationNfsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "DescribeLocationNfsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "FmrsService",
        operation: "DescribeLocationNfs",
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
  private serialize(input: DescribeLocationNfsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeLocationNfsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLocationNfsCommandOutput> {
    return de_DescribeLocationNfsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
