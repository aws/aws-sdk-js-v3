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

import { UpdateResourceDataSyncRequest, UpdateResourceDataSyncResult } from "../models/models_2";
import { de_UpdateResourceDataSyncCommand, se_UpdateResourceDataSyncCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateResourceDataSyncCommand}.
 */
export interface UpdateResourceDataSyncCommandInput extends UpdateResourceDataSyncRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResourceDataSyncCommand}.
 */
export interface UpdateResourceDataSyncCommandOutput extends UpdateResourceDataSyncResult, __MetadataBearer {}

/**
 * @public
 * <p>Update a resource data sync. After you create a resource data sync for a Region, you can't
 *    change the account options for that sync. For example, if you create a sync in the us-east-2
 *    (Ohio) Region and you choose the <code>Include only the current account</code> option, you can't
 *    edit that sync later and choose the <code>Include all accounts from my Organizations
 *     configuration</code> option. Instead, you must delete the first resource data sync, and create a
 *    new one.</p>
 *          <note>
 *             <p>This API operation only supports a resource data sync that was created with a
 *     SyncFromSource <code>SyncType</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // UpdateResourceDataSyncRequest
 *   SyncName: "STRING_VALUE", // required
 *   SyncType: "STRING_VALUE", // required
 *   SyncSource: { // ResourceDataSyncSource
 *     SourceType: "STRING_VALUE", // required
 *     AwsOrganizationsSource: { // ResourceDataSyncAwsOrganizationsSource
 *       OrganizationSourceType: "STRING_VALUE", // required
 *       OrganizationalUnits: [ // ResourceDataSyncOrganizationalUnitList
 *         { // ResourceDataSyncOrganizationalUnit
 *           OrganizationalUnitId: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *     SourceRegions: [ // ResourceDataSyncSourceRegionList // required
 *       "STRING_VALUE",
 *     ],
 *     IncludeFutureRegions: true || false,
 *     EnableAllOpsDataSources: true || false,
 *   },
 * };
 * const command = new UpdateResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateResourceDataSyncCommandInput - {@link UpdateResourceDataSyncCommandInput}
 * @returns {@link UpdateResourceDataSyncCommandOutput}
 * @see {@link UpdateResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceDataSyncConflictException} (client fault)
 *  <p>Another <code>UpdateResourceDataSync</code> request is being processed. Wait a few minutes
 *    and try again.</p>
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
export class UpdateResourceDataSyncCommand extends $Command<
  UpdateResourceDataSyncCommandInput,
  UpdateResourceDataSyncCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: UpdateResourceDataSyncCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateResourceDataSyncCommandInput, UpdateResourceDataSyncCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateResourceDataSyncCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateResourceDataSyncCommand";
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
  private serialize(input: UpdateResourceDataSyncCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateResourceDataSyncCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateResourceDataSyncCommandOutput> {
    return de_UpdateResourceDataSyncCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
