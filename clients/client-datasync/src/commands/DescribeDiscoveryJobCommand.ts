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
import { DescribeDiscoveryJobRequest, DescribeDiscoveryJobResponse } from "../models/models_0";
import { de_DescribeDiscoveryJobCommand, se_DescribeDiscoveryJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDiscoveryJobCommand}.
 */
export interface DescribeDiscoveryJobCommandInput extends DescribeDiscoveryJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDiscoveryJobCommand}.
 */
export interface DescribeDiscoveryJobCommandOutput extends DescribeDiscoveryJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a DataSync discovery job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeDiscoveryJobCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeDiscoveryJobCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // DescribeDiscoveryJobRequest
 *   DiscoveryJobArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeDiscoveryJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDiscoveryJobResponse
 * //   StorageSystemArn: "STRING_VALUE",
 * //   DiscoveryJobArn: "STRING_VALUE",
 * //   CollectionDurationMinutes: Number("int"),
 * //   Status: "RUNNING" || "WARNING" || "TERMINATED" || "FAILED" || "STOPPED" || "COMPLETED" || "COMPLETED_WITH_ISSUES",
 * //   JobStartTime: new Date("TIMESTAMP"),
 * //   JobEndTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeDiscoveryJobCommandInput - {@link DescribeDiscoveryJobCommandInput}
 * @returns {@link DescribeDiscoveryJobCommandOutput}
 * @see {@link DescribeDiscoveryJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDiscoveryJobCommandOutput} for command's `response` shape.
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
export class DescribeDiscoveryJobCommand extends $Command<
  DescribeDiscoveryJobCommandInput,
  DescribeDiscoveryJobCommandOutput,
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
  constructor(readonly input: DescribeDiscoveryJobCommandInput) {
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
  ): Handler<DescribeDiscoveryJobCommandInput, DescribeDiscoveryJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDiscoveryJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "DescribeDiscoveryJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "FmrsService",
        operation: "DescribeDiscoveryJob",
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
  private serialize(input: DescribeDiscoveryJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDiscoveryJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDiscoveryJobCommandOutput> {
    return de_DescribeDiscoveryJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
