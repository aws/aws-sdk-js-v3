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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { UpdateDirectorySetupRequest, UpdateDirectorySetupResult } from "../models/models_0";
import { de_UpdateDirectorySetupCommand, se_UpdateDirectorySetupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDirectorySetupCommand}.
 */
export interface UpdateDirectorySetupCommandInput extends UpdateDirectorySetupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDirectorySetupCommand}.
 */
export interface UpdateDirectorySetupCommandOutput extends UpdateDirectorySetupResult, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Updates the directory for a particular update type.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateDirectorySetupCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateDirectorySetupCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // UpdateDirectorySetupRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   UpdateType: "OS", // required
 *   OSUpdateSettings: { // OSUpdateSettings
 *     OSVersion: "SERVER_2012" || "SERVER_2019",
 *   },
 *   CreateSnapshotBeforeUpdate: true || false,
 * };
 * const command = new UpdateDirectorySetupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDirectorySetupCommandInput - {@link UpdateDirectorySetupCommandInput}
 * @returns {@link UpdateDirectorySetupCommandOutput}
 * @see {@link UpdateDirectorySetupCommandInput} for command's `input` shape.
 * @see {@link UpdateDirectorySetupCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Client authentication is not available in this region at this time.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *  <p>The specified directory does not exist in the system.</p>
 *
 * @throws {@link DirectoryInDesiredStateException} (client fault)
 *  <p>
 *       The directory is already updated to desired update type settings.
 *     </p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The specified directory is unavailable or could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link SnapshotLimitExceededException} (client fault)
 *  <p>The maximum number of manual snapshots for the directory has been reached. You can
 *             use the <a>GetSnapshotLimits</a> operation to determine the snapshot limits
 *             for a directory.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 */
export class UpdateDirectorySetupCommand extends $Command<
  UpdateDirectorySetupCommandInput,
  UpdateDirectorySetupCommandOutput,
  DirectoryServiceClientResolvedConfig
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
  constructor(readonly input: UpdateDirectorySetupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDirectorySetupCommandInput, UpdateDirectorySetupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDirectorySetupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "UpdateDirectorySetupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DirectoryService_20150416",
        operation: "UpdateDirectorySetup",
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
  private serialize(input: UpdateDirectorySetupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateDirectorySetupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDirectorySetupCommandOutput> {
    return de_UpdateDirectorySetupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
