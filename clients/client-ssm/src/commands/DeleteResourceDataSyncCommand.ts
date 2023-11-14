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

import { DeleteResourceDataSyncRequest, DeleteResourceDataSyncResult } from "../models/models_0";
import { de_DeleteResourceDataSyncCommand, se_DeleteResourceDataSyncCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteResourceDataSyncCommand}.
 */
export interface DeleteResourceDataSyncCommandInput extends DeleteResourceDataSyncRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResourceDataSyncCommand}.
 */
export interface DeleteResourceDataSyncCommandOutput extends DeleteResourceDataSyncResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a resource data sync configuration. After the configuration is deleted, changes to
 *    data on managed nodes are no longer synced to or from the target. Deleting a sync configuration
 *    doesn't delete data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DeleteResourceDataSyncRequest
 *   SyncName: "STRING_VALUE", // required
 *   SyncType: "STRING_VALUE",
 * };
 * const command = new DeleteResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResourceDataSyncCommandInput - {@link DeleteResourceDataSyncCommandInput}
 * @returns {@link DeleteResourceDataSyncCommandOutput}
 * @see {@link DeleteResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceDataSyncInvalidConfigurationException} (client fault)
 *  <p>The specified sync configuration is invalid.</p>
 *
 * @throws {@link ResourceDataSyncNotFoundException} (client fault)
 *  <p>The specified sync name wasn't found.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class DeleteResourceDataSyncCommand extends $Command<
  DeleteResourceDataSyncCommandInput,
  DeleteResourceDataSyncCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: DeleteResourceDataSyncCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteResourceDataSyncCommandInput, DeleteResourceDataSyncCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteResourceDataSyncCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DeleteResourceDataSyncCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "DeleteResourceDataSync",
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
  private serialize(input: DeleteResourceDataSyncCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteResourceDataSyncCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteResourceDataSyncCommandOutput> {
    return de_DeleteResourceDataSyncCommand(output, context);
  }
}
