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

import { ListResourceDataSyncRequest, ListResourceDataSyncResult } from "../models/models_1";
import { de_ListResourceDataSyncCommand, se_ListResourceDataSyncCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListResourceDataSyncCommand}.
 */
export interface ListResourceDataSyncCommandInput extends ListResourceDataSyncRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceDataSyncCommand}.
 */
export interface ListResourceDataSyncCommandOutput extends ListResourceDataSyncResult, __MetadataBearer {}

/**
 * @public
 * <p>Lists your resource data sync configurations. Includes information about the last time a
 *    sync attempted to start, the last sync status, and the last time a sync successfully
 *    completed.</p>
 *          <p>The number of sync configurations might be too large to return using a single call to
 *     <code>ListResourceDataSync</code>. You can limit the number of sync configurations returned by
 *    using the <code>MaxResults</code> parameter. To determine whether there are more sync
 *    configurations to list, check the value of <code>NextToken</code> in the output. If there are
 *    more sync configurations to list, you can request them by specifying the <code>NextToken</code>
 *    returned in the call to the parameter of a subsequent call. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // ListResourceDataSyncRequest
 *   SyncType: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceDataSyncResult
 * //   ResourceDataSyncItems: [ // ResourceDataSyncItemList
 * //     { // ResourceDataSyncItem
 * //       SyncName: "STRING_VALUE",
 * //       SyncType: "STRING_VALUE",
 * //       SyncSource: { // ResourceDataSyncSourceWithState
 * //         SourceType: "STRING_VALUE",
 * //         AwsOrganizationsSource: { // ResourceDataSyncAwsOrganizationsSource
 * //           OrganizationSourceType: "STRING_VALUE", // required
 * //           OrganizationalUnits: [ // ResourceDataSyncOrganizationalUnitList
 * //             { // ResourceDataSyncOrganizationalUnit
 * //               OrganizationalUnitId: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         SourceRegions: [ // ResourceDataSyncSourceRegionList
 * //           "STRING_VALUE",
 * //         ],
 * //         IncludeFutureRegions: true || false,
 * //         State: "STRING_VALUE",
 * //         EnableAllOpsDataSources: true || false,
 * //       },
 * //       S3Destination: { // ResourceDataSyncS3Destination
 * //         BucketName: "STRING_VALUE", // required
 * //         Prefix: "STRING_VALUE",
 * //         SyncFormat: "JsonSerDe", // required
 * //         Region: "STRING_VALUE", // required
 * //         AWSKMSKeyARN: "STRING_VALUE",
 * //         DestinationDataSharing: { // ResourceDataSyncDestinationDataSharing
 * //           DestinationDataSharingType: "STRING_VALUE",
 * //         },
 * //       },
 * //       LastSyncTime: new Date("TIMESTAMP"),
 * //       LastSuccessfulSyncTime: new Date("TIMESTAMP"),
 * //       SyncLastModifiedTime: new Date("TIMESTAMP"),
 * //       LastStatus: "Successful" || "Failed" || "InProgress",
 * //       SyncCreatedTime: new Date("TIMESTAMP"),
 * //       LastSyncStatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceDataSyncCommandInput - {@link ListResourceDataSyncCommandInput}
 * @returns {@link ListResourceDataSyncCommandOutput}
 * @see {@link ListResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link ListResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link ResourceDataSyncInvalidConfigurationException} (client fault)
 *  <p>The specified sync configuration is invalid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class ListResourceDataSyncCommand extends $Command<
  ListResourceDataSyncCommandInput,
  ListResourceDataSyncCommandOutput,
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
  constructor(readonly input: ListResourceDataSyncCommandInput) {
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
  ): Handler<ListResourceDataSyncCommandInput, ListResourceDataSyncCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListResourceDataSyncCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListResourceDataSyncCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "ListResourceDataSync",
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
  private serialize(input: ListResourceDataSyncCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListResourceDataSyncCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListResourceDataSyncCommandOutput> {
    return de_ListResourceDataSyncCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
