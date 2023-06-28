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
import { ListAssessmentsRequest, ListAssessmentsResponse } from "../models/models_0";
import { de_ListAssessmentsCommand, se_ListAssessmentsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAssessmentsCommand}.
 */
export interface ListAssessmentsCommandInput extends ListAssessmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssessmentsCommand}.
 */
export interface ListAssessmentsCommandOutput extends ListAssessmentsResponse, __MetadataBearer {}

/**
 * @public
 * <p> Returns a list of current and past assessments from Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListAssessmentsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListAssessmentsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // ListAssessmentsRequest
 *   status: "ACTIVE" || "INACTIVE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssessmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssessmentsResponse
 * //   assessmentMetadata: [ // ListAssessmentMetadata
 * //     { // AssessmentMetadataItem
 * //       name: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       complianceType: "STRING_VALUE",
 * //       status: "ACTIVE" || "INACTIVE",
 * //       roles: [ // Roles
 * //         { // Role
 * //           roleType: "PROCESS_OWNER" || "RESOURCE_OWNER", // required
 * //           roleArn: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       delegations: [ // Delegations
 * //         { // Delegation
 * //           id: "STRING_VALUE",
 * //           assessmentName: "STRING_VALUE",
 * //           assessmentId: "STRING_VALUE",
 * //           status: "IN_PROGRESS" || "UNDER_REVIEW" || "COMPLETE",
 * //           roleArn: "STRING_VALUE",
 * //           roleType: "PROCESS_OWNER" || "RESOURCE_OWNER",
 * //           creationTime: new Date("TIMESTAMP"),
 * //           lastUpdated: new Date("TIMESTAMP"),
 * //           controlSetId: "STRING_VALUE",
 * //           comment: "STRING_VALUE",
 * //           createdBy: "STRING_VALUE",
 * //         },
 * //       ],
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdated: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssessmentsCommandInput - {@link ListAssessmentsCommandInput}
 * @returns {@link ListAssessmentsCommandOutput}
 * @see {@link ListAssessmentsCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentsCommandOutput} for command's `response` shape.
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
export class ListAssessmentsCommand extends $Command<
  ListAssessmentsCommandInput,
  ListAssessmentsCommandOutput,
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
  constructor(readonly input: ListAssessmentsCommandInput) {
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
  ): Handler<ListAssessmentsCommandInput, ListAssessmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAssessmentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "ListAssessmentsCommand";
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
  private serialize(input: ListAssessmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAssessmentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssessmentsCommandOutput> {
    return de_ListAssessmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
