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

import { BCMDataExportsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BCMDataExportsClient";
import { UpdateExportRequest, UpdateExportResponse } from "../models/models_0";
import { de_UpdateExportCommand, se_UpdateExportCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateExportCommand}.
 */
export interface UpdateExportCommandInput extends UpdateExportRequest {}
/**
 * @public
 *
 * The output of {@link UpdateExportCommand}.
 */
export interface UpdateExportCommandOutput extends UpdateExportResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing data export by overwriting all export parameters. All export
 *       parameters must be provided in the UpdateExport request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMDataExportsClient, UpdateExportCommand } from "@aws-sdk/client-bcm-data-exports"; // ES Modules import
 * // const { BCMDataExportsClient, UpdateExportCommand } = require("@aws-sdk/client-bcm-data-exports"); // CommonJS import
 * const client = new BCMDataExportsClient(config);
 * const input = { // UpdateExportRequest
 *   ExportArn: "STRING_VALUE", // required
 *   Export: { // Export
 *     ExportArn: "STRING_VALUE",
 *     Name: "STRING_VALUE", // required
 *     Description: "STRING_VALUE",
 *     DataQuery: { // DataQuery
 *       QueryStatement: "STRING_VALUE", // required
 *       TableConfigurations: { // TableConfigurations
 *         "<keys>": { // TableProperties
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *     DestinationConfigurations: { // DestinationConfigurations
 *       S3Destination: { // S3Destination
 *         S3Bucket: "STRING_VALUE", // required
 *         S3Prefix: "STRING_VALUE", // required
 *         S3Region: "STRING_VALUE", // required
 *         S3OutputConfigurations: { // S3OutputConfigurations
 *           OutputType: "CUSTOM", // required
 *           Format: "TEXT_OR_CSV" || "PARQUET", // required
 *           Compression: "GZIP" || "PARQUET", // required
 *           Overwrite: "CREATE_NEW_REPORT" || "OVERWRITE_REPORT", // required
 *         },
 *       },
 *     },
 *     RefreshCadence: { // RefreshCadence
 *       Frequency: "SYNCHRONOUS", // required
 *     },
 *   },
 * };
 * const command = new UpdateExportCommand(input);
 * const response = await client.send(command);
 * // { // UpdateExportResponse
 * //   ExportArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateExportCommandInput - {@link UpdateExportCommandInput}
 * @returns {@link UpdateExportCommandOutput}
 * @see {@link UpdateExportCommandInput} for command's `input` shape.
 * @see {@link UpdateExportCommandOutput} for command's `response` shape.
 * @see {@link BCMDataExportsClientResolvedConfig | config} for BCMDataExportsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Resource Name (ARN) in the request doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link BCMDataExportsServiceException}
 * <p>Base exception class for all service exceptions from BCMDataExports service.</p>
 *
 */
export class UpdateExportCommand extends $Command<
  UpdateExportCommandInput,
  UpdateExportCommandOutput,
  BCMDataExportsClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateExportCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BCMDataExportsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateExportCommandInput, UpdateExportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateExportCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BCMDataExportsClient";
    const commandName = "UpdateExportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBillingAndCostManagementDataExports",
        operation: "UpdateExport",
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
  private serialize(input: UpdateExportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateExportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateExportCommandOutput> {
    return de_UpdateExportCommand(output, context);
  }
}
