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

import {
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { ListServersRequest, ListServersResponse } from "../models/models_0";
import { de_ListServersCommand, se_ListServersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListServersCommand}.
 */
export interface ListServersCommandInput extends ListServersRequest {}
/**
 * @public
 *
 * The output of {@link ListServersCommand}.
 */
export interface ListServersCommandOutput extends ListServersResponse, __MetadataBearer {}

/**
 * @public
 * <p> Returns a list of all the servers. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, ListServersCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, ListServersCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // ListServersRequest
 *   serverCriteria: "STRING_VALUE",
 *   filterValue: "STRING_VALUE",
 *   sort: "STRING_VALUE",
 *   groupIdFilter: [ // GroupIds
 *     { // Group
 *       name: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListServersCommand(input);
 * const response = await client.send(command);
 * // { // ListServersResponse
 * //   serverInfos: [ // ServerDetails
 * //     { // ServerDetail
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       recommendationSet: { // RecommendationSet
 * //         transformationTool: { // TransformationTool
 * //           name: "STRING_VALUE",
 * //           description: "STRING_VALUE",
 * //           tranformationToolInstallationLink: "STRING_VALUE",
 * //         },
 * //         targetDestination: "STRING_VALUE",
 * //         strategy: "STRING_VALUE",
 * //       },
 * //       dataCollectionStatus: "STRING_VALUE",
 * //       statusMessage: "STRING_VALUE",
 * //       listAntipatternSeveritySummary: [ // ListAntipatternSeveritySummary
 * //         { // AntipatternSeveritySummary
 * //           severity: "STRING_VALUE",
 * //           count: Number("int"),
 * //         },
 * //       ],
 * //       systemInfo: { // SystemInfo
 * //         osInfo: { // OSInfo
 * //           type: "STRING_VALUE",
 * //           version: "STRING_VALUE",
 * //         },
 * //         fileSystemType: "STRING_VALUE",
 * //         networkInfoList: [ // NetworkInfoList
 * //           { // NetworkInfo
 * //             interfaceName: "STRING_VALUE", // required
 * //             ipAddress: "STRING_VALUE", // required
 * //             macAddress: "STRING_VALUE", // required
 * //             netMask: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         cpuArchitecture: "STRING_VALUE",
 * //       },
 * //       applicationComponentStrategySummary: [ // ListStrategySummary
 * //         { // StrategySummary
 * //           strategy: "STRING_VALUE",
 * //           count: Number("int"),
 * //         },
 * //       ],
 * //       antipatternReportS3Object: { // S3Object
 * //         s3Bucket: "STRING_VALUE",
 * //         s3key: "STRING_VALUE",
 * //       },
 * //       antipatternReportStatus: "STRING_VALUE",
 * //       antipatternReportStatusMessage: "STRING_VALUE",
 * //       serverType: "STRING_VALUE",
 * //       lastAnalyzedTimestamp: new Date("TIMESTAMP"),
 * //       serverError: { // ServerError
 * //         serverErrorCategory: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServersCommandInput - {@link ListServersCommandInput}
 * @returns {@link ListServersCommandOutput}
 * @see {@link ListServersCommandInput} for command's `input` shape.
 * @see {@link ListServersCommandOutput} for command's `response` shape.
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
export class ListServersCommand extends $Command<
  ListServersCommandInput,
  ListServersCommandOutput,
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
  constructor(readonly input: ListServersCommandInput) {
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
  ): Handler<ListServersCommandInput, ListServersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListServersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "ListServersCommand";
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
  private serialize(input: ListServersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListServersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListServersCommandOutput> {
    return de_ListServersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
