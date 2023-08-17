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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
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
 * <p>Returns a list of Jobs. Use the JobsID and fromDate and toDate filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are created by the StartRecovery, TerminateRecoveryInstances and StartFailbackLaunch APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DescribeJobsCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DescribeJobsCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
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
 * //           sourceServerID: "STRING_VALUE",
 * //           recoveryInstanceID: "STRING_VALUE",
 * //           launchStatus: "STRING_VALUE",
 * //         },
 * //       ],
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       participatingResources: [ // ParticipatingResources
 * //         { // ParticipatingResource
 * //           participatingResourceID: { // ParticipatingResourceID Union: only one key present
 * //             sourceNetworkID: "STRING_VALUE",
 * //           },
 * //           launchStatus: "STRING_VALUE",
 * //         },
 * //       ],
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
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 */
export class DescribeJobsCommand extends $Command<
  DescribeJobsCommandInput,
  DescribeJobsCommandOutput,
  DrsClientResolvedConfig
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
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeJobsCommandInput, DescribeJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeJobsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
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
