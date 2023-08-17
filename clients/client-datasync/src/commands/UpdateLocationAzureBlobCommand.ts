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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import {
  UpdateLocationAzureBlobRequest,
  UpdateLocationAzureBlobRequestFilterSensitiveLog,
  UpdateLocationAzureBlobResponse,
} from "../models/models_0";
import { de_UpdateLocationAzureBlobCommand, se_UpdateLocationAzureBlobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateLocationAzureBlobCommand}.
 */
export interface UpdateLocationAzureBlobCommandInput extends UpdateLocationAzureBlobRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLocationAzureBlobCommand}.
 */
export interface UpdateLocationAzureBlobCommandOutput extends UpdateLocationAzureBlobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies some configurations of the Microsoft Azure Blob Storage transfer location that you're using with DataSync.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationAzureBlobCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationAzureBlobCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // UpdateLocationAzureBlobRequest
 *   LocationArn: "STRING_VALUE", // required
 *   Subdirectory: "STRING_VALUE",
 *   AuthenticationType: "SAS",
 *   SasConfiguration: { // AzureBlobSasConfiguration
 *     Token: "STRING_VALUE", // required
 *   },
 *   BlobType: "BLOCK",
 *   AccessTier: "HOT" || "COOL" || "ARCHIVE",
 *   AgentArns: [ // AgentArnList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateLocationAzureBlobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLocationAzureBlobCommandInput - {@link UpdateLocationAzureBlobCommandInput}
 * @returns {@link UpdateLocationAzureBlobCommandOutput}
 * @see {@link UpdateLocationAzureBlobCommandInput} for command's `input` shape.
 * @see {@link UpdateLocationAzureBlobCommandOutput} for command's `response` shape.
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
export class UpdateLocationAzureBlobCommand extends $Command<
  UpdateLocationAzureBlobCommandInput,
  UpdateLocationAzureBlobCommandOutput,
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
  constructor(readonly input: UpdateLocationAzureBlobCommandInput) {
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
  ): Handler<UpdateLocationAzureBlobCommandInput, UpdateLocationAzureBlobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateLocationAzureBlobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "UpdateLocationAzureBlobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateLocationAzureBlobRequestFilterSensitiveLog,
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
  private serialize(input: UpdateLocationAzureBlobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateLocationAzureBlobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateLocationAzureBlobCommandOutput> {
    return de_UpdateLocationAzureBlobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
