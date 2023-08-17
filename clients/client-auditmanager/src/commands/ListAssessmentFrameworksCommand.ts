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
import { ListAssessmentFrameworksRequest, ListAssessmentFrameworksResponse } from "../models/models_0";
import { de_ListAssessmentFrameworksCommand, se_ListAssessmentFrameworksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAssessmentFrameworksCommand}.
 */
export interface ListAssessmentFrameworksCommandInput extends ListAssessmentFrameworksRequest {}
/**
 * @public
 *
 * The output of {@link ListAssessmentFrameworksCommand}.
 */
export interface ListAssessmentFrameworksCommandOutput extends ListAssessmentFrameworksResponse, __MetadataBearer {}

/**
 * @public
 * <p> Returns a list of the frameworks that are available in the Audit Manager framework
 *          library. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListAssessmentFrameworksCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListAssessmentFrameworksCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // ListAssessmentFrameworksRequest
 *   frameworkType: "Standard" || "Custom", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssessmentFrameworksCommand(input);
 * const response = await client.send(command);
 * // { // ListAssessmentFrameworksResponse
 * //   frameworkMetadataList: [ // FrameworkMetadataList
 * //     { // AssessmentFrameworkMetadata
 * //       arn: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       type: "Standard" || "Custom",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       logo: "STRING_VALUE",
 * //       complianceType: "STRING_VALUE",
 * //       controlsCount: Number("int"),
 * //       controlSetsCount: Number("int"),
 * //       createdAt: new Date("TIMESTAMP"),
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssessmentFrameworksCommandInput - {@link ListAssessmentFrameworksCommandInput}
 * @returns {@link ListAssessmentFrameworksCommandOutput}
 * @see {@link ListAssessmentFrameworksCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentFrameworksCommandOutput} for command's `response` shape.
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
export class ListAssessmentFrameworksCommand extends $Command<
  ListAssessmentFrameworksCommandInput,
  ListAssessmentFrameworksCommandOutput,
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
  constructor(readonly input: ListAssessmentFrameworksCommandInput) {
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
  ): Handler<ListAssessmentFrameworksCommandInput, ListAssessmentFrameworksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAssessmentFrameworksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "ListAssessmentFrameworksCommand";
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
  private serialize(input: ListAssessmentFrameworksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAssessmentFrameworksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssessmentFrameworksCommandOutput> {
    return de_ListAssessmentFrameworksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
