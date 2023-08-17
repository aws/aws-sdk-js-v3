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
import { GetServerDetailsRequest, GetServerDetailsResponse } from "../models/models_0";
import { de_GetServerDetailsCommand, se_GetServerDetailsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetServerDetailsCommand}.
 */
export interface GetServerDetailsCommandInput extends GetServerDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetServerDetailsCommand}.
 */
export interface GetServerDetailsCommandOutput extends GetServerDetailsResponse, __MetadataBearer {}

/**
 * @public
 * <p> Retrieves detailed information about a specified server. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetServerDetailsCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetServerDetailsCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // GetServerDetailsRequest
 *   serverId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetServerDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetServerDetailsResponse
 * //   nextToken: "STRING_VALUE",
 * //   serverDetail: { // ServerDetail
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     recommendationSet: { // RecommendationSet
 * //       transformationTool: { // TransformationTool
 * //         name: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         tranformationToolInstallationLink: "STRING_VALUE",
 * //       },
 * //       targetDestination: "STRING_VALUE",
 * //       strategy: "STRING_VALUE",
 * //     },
 * //     dataCollectionStatus: "STRING_VALUE",
 * //     statusMessage: "STRING_VALUE",
 * //     listAntipatternSeveritySummary: [ // ListAntipatternSeveritySummary
 * //       { // AntipatternSeveritySummary
 * //         severity: "STRING_VALUE",
 * //         count: Number("int"),
 * //       },
 * //     ],
 * //     systemInfo: { // SystemInfo
 * //       osInfo: { // OSInfo
 * //         type: "STRING_VALUE",
 * //         version: "STRING_VALUE",
 * //       },
 * //       fileSystemType: "STRING_VALUE",
 * //       networkInfoList: [ // NetworkInfoList
 * //         { // NetworkInfo
 * //           interfaceName: "STRING_VALUE", // required
 * //           ipAddress: "STRING_VALUE", // required
 * //           macAddress: "STRING_VALUE", // required
 * //           netMask: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       cpuArchitecture: "STRING_VALUE",
 * //     },
 * //     applicationComponentStrategySummary: [ // ListStrategySummary
 * //       { // StrategySummary
 * //         strategy: "STRING_VALUE",
 * //         count: Number("int"),
 * //       },
 * //     ],
 * //     antipatternReportS3Object: { // S3Object
 * //       s3Bucket: "STRING_VALUE",
 * //       s3key: "STRING_VALUE",
 * //     },
 * //     antipatternReportStatus: "STRING_VALUE",
 * //     antipatternReportStatusMessage: "STRING_VALUE",
 * //     serverType: "STRING_VALUE",
 * //     lastAnalyzedTimestamp: new Date("TIMESTAMP"),
 * //     serverError: { // ServerError
 * //       serverErrorCategory: "STRING_VALUE",
 * //     },
 * //   },
 * //   associatedApplications: [ // AssociatedApplications
 * //     { // AssociatedApplication
 * //       name: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetServerDetailsCommandInput - {@link GetServerDetailsCommandInput}
 * @returns {@link GetServerDetailsCommandOutput}
 * @see {@link GetServerDetailsCommandInput} for command's `input` shape.
 * @see {@link GetServerDetailsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ID in the request is not found. </p>
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
export class GetServerDetailsCommand extends $Command<
  GetServerDetailsCommandInput,
  GetServerDetailsCommandOutput,
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
  constructor(readonly input: GetServerDetailsCommandInput) {
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
  ): Handler<GetServerDetailsCommandInput, GetServerDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetServerDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "GetServerDetailsCommand";
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
  private serialize(input: GetServerDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetServerDetailsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetServerDetailsCommandOutput> {
    return de_GetServerDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
