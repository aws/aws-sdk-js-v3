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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { DescribeJobsRequest, DescribeJobsResponse, DescribeJobsResponseFilterSensitiveLog } from "../models/models_0";
import { de_DescribeJobsCommand, se_DescribeJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobsCommand}.
 */
export interface DescribeJobsCommandInput extends DescribeJobsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobsCommand}.
 */
export interface DescribeJobsCommandOutput extends DescribeJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normally created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DescribeJobsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DescribeJobsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // DescribeJobsRequest
 *   filters: { // DescribeJobsRequestFilters
 *     jobIDs: [ // DescribeJobsRequestFiltersJobIDs
 *       "STRING_VALUE",
 *     ],
 *     fromDate: "STRING_VALUE",
 *     toDate: "STRING_VALUE",
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   accountID: "STRING_VALUE",
 * };
 * const command = new DescribeJobsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobsResponse
 * //   items: [ // JobsList
 * //     { // Job
 * //       jobID: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       initiatedBy: "STRING_VALUE",
 * //       creationDateTime: "STRING_VALUE",
 * //       endDateTime: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       participatingServers: [ // ParticipatingServers
 * //         { // ParticipatingServer
 * //           sourceServerID: "STRING_VALUE", // required
 * //           launchStatus: "STRING_VALUE",
 * //           launchedEc2InstanceID: "STRING_VALUE",
 * //           postLaunchActionsStatus: { // PostLaunchActionsStatus
 * //             ssmAgentDiscoveryDatetime: "STRING_VALUE",
 * //             postLaunchActionsLaunchStatusList: [ // PostLaunchActionsLaunchStatusList
 * //               { // JobPostLaunchActionsLaunchStatus
 * //                 ssmDocument: { // SsmDocument
 * //                   actionName: "STRING_VALUE", // required
 * //                   ssmDocumentName: "STRING_VALUE", // required
 * //                   timeoutSeconds: Number("int"),
 * //                   mustSucceedForCutover: true || false,
 * //                   parameters: { // SsmDocumentParameters
 * //                     "<keys>": [ // SsmParameterStoreParameters
 * //                       { // SsmParameterStoreParameter
 * //                         parameterType: "STRING_VALUE", // required
 * //                         parameterName: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                   },
 * //                   externalParameters: { // SsmDocumentExternalParameters
 * //                     "<keys>": { // SsmExternalParameter Union: only one key present
 * //                       dynamicPath: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                 },
 * //                 ssmDocumentType: "STRING_VALUE",
 * //                 executionID: "STRING_VALUE",
 * //                 executionStatus: "STRING_VALUE",
 * //                 failureReason: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeJobsCommandInput - {@link DescribeJobsCommandInput}
 * @returns {@link DescribeJobsCommandOutput}
 * @see {@link DescribeJobsCommandInput} for command's `input` shape.
 * @see {@link DescribeJobsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 */
export class DescribeJobsCommand extends $Command<
  DescribeJobsCommandInput,
  DescribeJobsCommandOutput,
  MgnClientResolvedConfig
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
  constructor(readonly input: DescribeJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeJobsCommandInput, DescribeJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeJobsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "DescribeJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeJobsResponseFilterSensitiveLog,
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
  private serialize(input: DescribeJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobsCommandOutput> {
    return de_DescribeJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
