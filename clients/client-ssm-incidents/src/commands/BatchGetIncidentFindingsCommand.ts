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

import { BatchGetIncidentFindingsInput, BatchGetIncidentFindingsOutput } from "../models/models_0";
import { de_BatchGetIncidentFindingsCommand, se_BatchGetIncidentFindingsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetIncidentFindingsCommand}.
 */
export interface BatchGetIncidentFindingsCommandInput extends BatchGetIncidentFindingsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetIncidentFindingsCommand}.
 */
export interface BatchGetIncidentFindingsCommandOutput extends BatchGetIncidentFindingsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves details about all specified findings for an incident, including descriptive details about each finding. A finding
 *       represents a recent application environment change made by an CodeDeploy
 *       deployment or an CloudFormation stack creation or update that can be investigated as a
 *       potential cause of the incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, BatchGetIncidentFindingsCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, BatchGetIncidentFindingsCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const input = { // BatchGetIncidentFindingsInput
 *   incidentRecordArn: "STRING_VALUE", // required
 *   findingIds: [ // FindingIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetIncidentFindingsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetIncidentFindingsOutput
 * //   findings: [ // FindingList // required
 * //     { // Finding
 * //       id: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       lastModifiedTime: new Date("TIMESTAMP"), // required
 * //       details: { // FindingDetails Union: only one key present
 * //         codeDeployDeployment: { // CodeDeployDeployment
 * //           startTime: new Date("TIMESTAMP"), // required
 * //           endTime: new Date("TIMESTAMP"),
 * //           deploymentGroupArn: "STRING_VALUE", // required
 * //           deploymentId: "STRING_VALUE", // required
 * //         },
 * //         cloudFormationStackUpdate: { // CloudFormationStackUpdate
 * //           startTime: new Date("TIMESTAMP"), // required
 * //           endTime: new Date("TIMESTAMP"),
 * //           stackArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   errors: [ // BatchGetIncidentFindingsErrorList // required
 * //     { // BatchGetIncidentFindingsError
 * //       findingId: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetIncidentFindingsCommandInput - {@link BatchGetIncidentFindingsCommandInput}
 * @returns {@link BatchGetIncidentFindingsCommandOutput}
 * @see {@link BatchGetIncidentFindingsCommandInput} for command's `input` shape.
 * @see {@link BatchGetIncidentFindingsCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which doesn't exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link SSMIncidentsServiceException}
 * <p>Base exception class for all service exceptions from SSMIncidents service.</p>
 *
 */
export class BatchGetIncidentFindingsCommand extends $Command<
  BatchGetIncidentFindingsCommandInput,
  BatchGetIncidentFindingsCommandOutput,
  SSMIncidentsClientResolvedConfig
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
  constructor(readonly input: BatchGetIncidentFindingsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMIncidentsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetIncidentFindingsCommandInput, BatchGetIncidentFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetIncidentFindingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMIncidentsClient";
    const commandName = "BatchGetIncidentFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SSMIncidents",
        operation: "BatchGetIncidentFindings",
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
  private serialize(input: BatchGetIncidentFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetIncidentFindingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetIncidentFindingsCommandOutput> {
    return de_BatchGetIncidentFindingsCommand(output, context);
  }
}
