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

import {
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { ListCollectorsRequest, ListCollectorsResponse } from "../models/models_0";
import { de_ListCollectorsCommand, se_ListCollectorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCollectorsCommand}.
 */
export interface ListCollectorsCommandInput extends ListCollectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListCollectorsCommand}.
 */
export interface ListCollectorsCommandOutput extends ListCollectorsResponse, __MetadataBearer {}

/**
 * @public
 * <p> Retrieves a list of all the installed collectors. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, ListCollectorsCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, ListCollectorsCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // ListCollectorsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCollectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListCollectorsResponse
 * //   Collectors: [ // Collectors
 * //     { // Collector
 * //       collectorId: "STRING_VALUE",
 * //       ipAddress: "STRING_VALUE",
 * //       hostName: "STRING_VALUE",
 * //       collectorHealth: "STRING_VALUE",
 * //       collectorVersion: "STRING_VALUE",
 * //       registeredTimeStamp: "STRING_VALUE",
 * //       lastActivityTimeStamp: "STRING_VALUE",
 * //       configurationSummary: { // ConfigurationSummary
 * //         vcenterBasedRemoteInfoList: [ // VcenterBasedRemoteInfoList
 * //           { // VcenterBasedRemoteInfo
 * //             vcenterConfigurationTimeStamp: "STRING_VALUE",
 * //             osType: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ipAddressBasedRemoteInfoList: [ // IPAddressBasedRemoteInfoList
 * //           { // IPAddressBasedRemoteInfo
 * //             ipAddressConfigurationTimeStamp: "STRING_VALUE",
 * //             authType: "STRING_VALUE",
 * //             osType: "STRING_VALUE",
 * //           },
 * //         ],
 * //         versionControlInfoList: [ // VersionControlInfoList
 * //           { // VersionControlInfo
 * //             versionControlType: "STRING_VALUE",
 * //             versionControlConfigurationTimeStamp: "STRING_VALUE",
 * //           },
 * //         ],
 * //         pipelineInfoList: [ // PipelineInfoList
 * //           { // PipelineInfo
 * //             pipelineType: "STRING_VALUE",
 * //             pipelineConfigurationTimeStamp: "STRING_VALUE",
 * //           },
 * //         ],
 * //         remoteSourceCodeAnalysisServerInfo: { // RemoteSourceCodeAnalysisServerInfo
 * //           remoteSourceCodeAnalysisServerConfigurationTimestamp: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCollectorsCommandInput - {@link ListCollectorsCommandInput}
 * @returns {@link ListCollectorsCommandOutput}
 * @see {@link ListCollectorsCommandInput} for command's `input` shape.
 * @see {@link ListCollectorsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request body isn't valid. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 */
export class ListCollectorsCommand extends $Command<
  ListCollectorsCommandInput,
  ListCollectorsCommandOutput,
  MigrationHubStrategyClientResolvedConfig
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
  constructor(readonly input: ListCollectorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubStrategyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCollectorsCommandInput, ListCollectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCollectorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "ListCollectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSMigrationHubStrategyRecommendation",
        operation: "ListCollectors",
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
  private serialize(input: ListCollectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCollectorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCollectorsCommandOutput> {
    return de_ListCollectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
