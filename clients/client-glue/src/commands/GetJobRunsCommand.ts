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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetJobRunsRequest, GetJobRunsResponse } from "../models/models_1";
import { de_GetJobRunsCommand, se_GetJobRunsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetJobRunsCommand}.
 */
export interface GetJobRunsCommandInput extends GetJobRunsRequest {}
/**
 * @public
 *
 * The output of {@link GetJobRunsCommand}.
 */
export interface GetJobRunsCommandOutput extends GetJobRunsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves metadata for all runs of a given job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetJobRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetJobRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetJobRunsRequest
 *   JobName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetJobRunsCommand(input);
 * const response = await client.send(command);
 * // { // GetJobRunsResponse
 * //   JobRuns: [ // JobRunList
 * //     { // JobRun
 * //       Id: "STRING_VALUE",
 * //       Attempt: Number("int"),
 * //       PreviousRunId: "STRING_VALUE",
 * //       TriggerName: "STRING_VALUE",
 * //       JobName: "STRING_VALUE",
 * //       StartedOn: new Date("TIMESTAMP"),
 * //       LastModifiedOn: new Date("TIMESTAMP"),
 * //       CompletedOn: new Date("TIMESTAMP"),
 * //       JobRunState: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT" || "ERROR" || "WAITING",
 * //       Arguments: { // GenericMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ErrorMessage: "STRING_VALUE",
 * //       PredecessorRuns: [ // PredecessorList
 * //         { // Predecessor
 * //           JobName: "STRING_VALUE",
 * //           RunId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AllocatedCapacity: Number("int"),
 * //       ExecutionTime: Number("int"),
 * //       Timeout: Number("int"),
 * //       MaxCapacity: Number("double"),
 * //       WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 * //       NumberOfWorkers: Number("int"),
 * //       SecurityConfiguration: "STRING_VALUE",
 * //       LogGroupName: "STRING_VALUE",
 * //       NotificationProperty: { // NotificationProperty
 * //         NotifyDelayAfter: Number("int"),
 * //       },
 * //       GlueVersion: "STRING_VALUE",
 * //       DPUSeconds: Number("double"),
 * //       ExecutionClass: "FLEX" || "STANDARD",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetJobRunsCommandInput - {@link GetJobRunsCommandInput}
 * @returns {@link GetJobRunsCommandOutput}
 * @see {@link GetJobRunsCommandInput} for command's `input` shape.
 * @see {@link GetJobRunsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class GetJobRunsCommand extends $Command<
  GetJobRunsCommandInput,
  GetJobRunsCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: GetJobRunsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetJobRunsCommandInput, GetJobRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetJobRunsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetJobRunsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetJobRuns",
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
  private serialize(input: GetJobRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetJobRunsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetJobRunsCommandOutput> {
    return de_GetJobRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
