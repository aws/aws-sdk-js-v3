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
import { GetEvidenceRequest, GetEvidenceResponse } from "../models/models_0";
import { de_GetEvidenceCommand, se_GetEvidenceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEvidenceCommand}.
 */
export interface GetEvidenceCommandInput extends GetEvidenceRequest {}
/**
 * @public
 *
 * The output of {@link GetEvidenceCommand}.
 */
export interface GetEvidenceCommandOutput extends GetEvidenceResponse, __MetadataBearer {}

/**
 * @public
 * <p> Gets information about a specified evidence item.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetEvidenceCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetEvidenceCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // GetEvidenceRequest
 *   assessmentId: "STRING_VALUE", // required
 *   controlSetId: "STRING_VALUE", // required
 *   evidenceFolderId: "STRING_VALUE", // required
 *   evidenceId: "STRING_VALUE", // required
 * };
 * const command = new GetEvidenceCommand(input);
 * const response = await client.send(command);
 * // { // GetEvidenceResponse
 * //   evidence: { // Evidence
 * //     dataSource: "STRING_VALUE",
 * //     evidenceAwsAccountId: "STRING_VALUE",
 * //     time: new Date("TIMESTAMP"),
 * //     eventSource: "STRING_VALUE",
 * //     eventName: "STRING_VALUE",
 * //     evidenceByType: "STRING_VALUE",
 * //     resourcesIncluded: [ // Resources
 * //       { // Resource
 * //         arn: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //         complianceCheck: "STRING_VALUE",
 * //       },
 * //     ],
 * //     attributes: { // EvidenceAttributes
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     iamId: "STRING_VALUE",
 * //     complianceCheck: "STRING_VALUE",
 * //     awsOrganization: "STRING_VALUE",
 * //     awsAccountId: "STRING_VALUE",
 * //     evidenceFolderId: "STRING_VALUE",
 * //     id: "STRING_VALUE",
 * //     assessmentReportSelection: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEvidenceCommandInput - {@link GetEvidenceCommandInput}
 * @returns {@link GetEvidenceCommandOutput}
 * @see {@link GetEvidenceCommandInput} for command's `input` shape.
 * @see {@link GetEvidenceCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource that's specified in the request can't be found. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
 *
 */
export class GetEvidenceCommand extends $Command<
  GetEvidenceCommandInput,
  GetEvidenceCommandOutput,
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
  constructor(readonly input: GetEvidenceCommandInput) {
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
  ): Handler<GetEvidenceCommandInput, GetEvidenceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetEvidenceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "GetEvidenceCommand";
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
  private serialize(input: GetEvidenceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetEvidenceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEvidenceCommandOutput> {
    return de_GetEvidenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
