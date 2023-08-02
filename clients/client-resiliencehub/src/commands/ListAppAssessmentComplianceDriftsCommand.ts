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
  ListAppAssessmentComplianceDriftsRequest,
  ListAppAssessmentComplianceDriftsResponse,
} from "../models/models_0";
import {
  de_ListAppAssessmentComplianceDriftsCommand,
  se_ListAppAssessmentComplianceDriftsCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAppAssessmentComplianceDriftsCommand}.
 */
export interface ListAppAssessmentComplianceDriftsCommandInput extends ListAppAssessmentComplianceDriftsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppAssessmentComplianceDriftsCommand}.
 */
export interface ListAppAssessmentComplianceDriftsCommandOutput
  extends ListAppAssessmentComplianceDriftsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>List of compliance drifts that were detected while running an assessment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListAppAssessmentComplianceDriftsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListAppAssessmentComplianceDriftsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // ListAppAssessmentComplianceDriftsRequest
 *   assessmentArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAppAssessmentComplianceDriftsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppAssessmentComplianceDriftsResponse
 * //   complianceDrifts: [ // ComplianceDriftList // required
 * //     { // ComplianceDrift
 * //       entityId: "STRING_VALUE",
 * //       entityType: "STRING_VALUE",
 * //       driftType: "STRING_VALUE",
 * //       appId: "STRING_VALUE",
 * //       appVersion: "STRING_VALUE",
 * //       expectedReferenceId: "STRING_VALUE",
 * //       expectedValue: { // AssessmentCompliance
 * //         "<keys>": { // DisruptionCompliance
 * //           achievableRtoInSecs: Number("int"),
 * //           currentRtoInSecs: Number("int"),
 * //           rtoReferenceId: "STRING_VALUE",
 * //           rtoDescription: "STRING_VALUE",
 * //           currentRpoInSecs: Number("int"),
 * //           rpoReferenceId: "STRING_VALUE",
 * //           rpoDescription: "STRING_VALUE",
 * //           complianceStatus: "STRING_VALUE", // required
 * //           achievableRpoInSecs: Number("int"),
 * //           message: "STRING_VALUE",
 * //         },
 * //       },
 * //       actualReferenceId: "STRING_VALUE",
 * //       actualValue: {
 * //         "<keys>": {
 * //           achievableRtoInSecs: Number("int"),
 * //           currentRtoInSecs: Number("int"),
 * //           rtoReferenceId: "STRING_VALUE",
 * //           rtoDescription: "STRING_VALUE",
 * //           currentRpoInSecs: Number("int"),
 * //           rpoReferenceId: "STRING_VALUE",
 * //           rpoDescription: "STRING_VALUE",
 * //           complianceStatus: "STRING_VALUE", // required
 * //           achievableRpoInSecs: Number("int"),
 * //           message: "STRING_VALUE",
 * //         },
 * //       },
 * //       diffType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppAssessmentComplianceDriftsCommandInput - {@link ListAppAssessmentComplianceDriftsCommandInput}
 * @returns {@link ListAppAssessmentComplianceDriftsCommandOutput}
 * @see {@link ListAppAssessmentComplianceDriftsCommandInput} for command's `input` shape.
 * @see {@link ListAppAssessmentComplianceDriftsCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 */
export class ListAppAssessmentComplianceDriftsCommand extends $Command<
  ListAppAssessmentComplianceDriftsCommandInput,
  ListAppAssessmentComplianceDriftsCommandOutput,
  ResiliencehubClientResolvedConfig
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
  constructor(readonly input: ListAppAssessmentComplianceDriftsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAppAssessmentComplianceDriftsCommandInput, ListAppAssessmentComplianceDriftsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAppAssessmentComplianceDriftsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "ListAppAssessmentComplianceDriftsCommand";
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
  private serialize(
    input: ListAppAssessmentComplianceDriftsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListAppAssessmentComplianceDriftsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAppAssessmentComplianceDriftsCommandOutput> {
    return de_ListAppAssessmentComplianceDriftsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
