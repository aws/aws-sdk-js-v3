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

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  ListAssessmentFrameworkShareRequestsRequest,
  ListAssessmentFrameworkShareRequestsResponse,
} from "../models/models_0";
import {
  de_ListAssessmentFrameworkShareRequestsCommand,
  se_ListAssessmentFrameworkShareRequestsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAssessmentFrameworkShareRequestsCommand}.
 */
export interface ListAssessmentFrameworkShareRequestsCommandInput extends ListAssessmentFrameworkShareRequestsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssessmentFrameworkShareRequestsCommand}.
 */
export interface ListAssessmentFrameworkShareRequestsCommandOutput
  extends ListAssessmentFrameworkShareRequestsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p> Returns a list of sent or received share requests for custom frameworks in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListAssessmentFrameworkShareRequestsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListAssessmentFrameworkShareRequestsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // ListAssessmentFrameworkShareRequestsRequest
 *   requestType: "SENT" || "RECEIVED", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssessmentFrameworkShareRequestsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssessmentFrameworkShareRequestsResponse
 * //   assessmentFrameworkShareRequests: [ // AssessmentFrameworkShareRequestList
 * //     { // AssessmentFrameworkShareRequest
 * //       id: "STRING_VALUE",
 * //       frameworkId: "STRING_VALUE",
 * //       frameworkName: "STRING_VALUE",
 * //       frameworkDescription: "STRING_VALUE",
 * //       status: "ACTIVE" || "REPLICATING" || "SHARED" || "EXPIRING" || "FAILED" || "EXPIRED" || "DECLINED" || "REVOKED",
 * //       sourceAccount: "STRING_VALUE",
 * //       destinationAccount: "STRING_VALUE",
 * //       destinationRegion: "STRING_VALUE",
 * //       expirationTime: new Date("TIMESTAMP"),
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdated: new Date("TIMESTAMP"),
 * //       comment: "STRING_VALUE",
 * //       standardControlsCount: Number("int"),
 * //       customControlsCount: Number("int"),
 * //       complianceType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssessmentFrameworkShareRequestsCommandInput - {@link ListAssessmentFrameworkShareRequestsCommandInput}
 * @returns {@link ListAssessmentFrameworkShareRequestsCommandOutput}
 * @see {@link ListAssessmentFrameworkShareRequestsCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentFrameworkShareRequestsCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Your account isn't registered with Audit Manager. Check the delegated
 *          administrator setup on the Audit Manager settings page, and try again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *          later. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
 *
 */
export class ListAssessmentFrameworkShareRequestsCommand extends $Command<
  ListAssessmentFrameworkShareRequestsCommandInput,
  ListAssessmentFrameworkShareRequestsCommandOutput,
  AuditManagerClientResolvedConfig
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
  constructor(readonly input: ListAssessmentFrameworkShareRequestsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssessmentFrameworkShareRequestsCommandInput, ListAssessmentFrameworkShareRequestsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAssessmentFrameworkShareRequestsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "ListAssessmentFrameworkShareRequestsCommand";
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
    input: ListAssessmentFrameworkShareRequestsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListAssessmentFrameworkShareRequestsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAssessmentFrameworkShareRequestsCommandOutput> {
    return de_ListAssessmentFrameworkShareRequestsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
