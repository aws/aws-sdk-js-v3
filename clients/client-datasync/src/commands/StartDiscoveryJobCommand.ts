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
import { StartDiscoveryJobRequest, StartDiscoveryJobResponse } from "../models/models_0";
import { de_StartDiscoveryJobCommand, se_StartDiscoveryJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartDiscoveryJobCommand}.
 */
export interface StartDiscoveryJobCommandInput extends StartDiscoveryJobRequest {}
/**
 * @public
 *
 * The output of {@link StartDiscoveryJobCommand}.
 */
export interface StartDiscoveryJobCommandOutput extends StartDiscoveryJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Runs a DataSync discovery job on your on-premises storage system. If you haven't added the
 *       storage system to DataSync Discovery yet, do this first by using the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_AddStorageSystem.html">AddStorageSystem</a>
 *       operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, StartDiscoveryJobCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, StartDiscoveryJobCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // StartDiscoveryJobRequest
 *   StorageSystemArn: "STRING_VALUE", // required
 *   CollectionDurationMinutes: Number("int"), // required
 *   ClientToken: "STRING_VALUE", // required
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new StartDiscoveryJobCommand(input);
 * const response = await client.send(command);
 * // { // StartDiscoveryJobResponse
 * //   DiscoveryJobArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartDiscoveryJobCommandInput - {@link StartDiscoveryJobCommandInput}
 * @returns {@link StartDiscoveryJobCommandOutput}
 * @see {@link StartDiscoveryJobCommandInput} for command's `input` shape.
 * @see {@link StartDiscoveryJobCommandOutput} for command's `response` shape.
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
export class StartDiscoveryJobCommand extends $Command<
  StartDiscoveryJobCommandInput,
  StartDiscoveryJobCommandOutput,
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
  constructor(readonly input: StartDiscoveryJobCommandInput) {
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
  ): Handler<StartDiscoveryJobCommandInput, StartDiscoveryJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartDiscoveryJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "StartDiscoveryJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "FmrsService",
        operation: "StartDiscoveryJob",
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
  private serialize(input: StartDiscoveryJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartDiscoveryJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartDiscoveryJobCommandOutput> {
    return de_StartDiscoveryJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
