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

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { GetEvidenceByEvidenceFolderRequest, GetEvidenceByEvidenceFolderResponse } from "../models/models_0";
import {
  de_GetEvidenceByEvidenceFolderCommand,
  se_GetEvidenceByEvidenceFolderCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEvidenceByEvidenceFolderCommand}.
 */
export interface GetEvidenceByEvidenceFolderCommandInput extends GetEvidenceByEvidenceFolderRequest {}
/**
 * @public
 *
 * The output of {@link GetEvidenceByEvidenceFolderCommand}.
 */
export interface GetEvidenceByEvidenceFolderCommandOutput
  extends GetEvidenceByEvidenceFolderResponse,
    __MetadataBearer {}

/**
 * @public
 * <p> Gets all evidence from a specified evidence folder in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetEvidenceByEvidenceFolderCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetEvidenceByEvidenceFolderCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // GetEvidenceByEvidenceFolderRequest
 *   assessmentId: "STRING_VALUE", // required
 *   controlSetId: "STRING_VALUE", // required
 *   evidenceFolderId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetEvidenceByEvidenceFolderCommand(input);
 * const response = await client.send(command);
 * // { // GetEvidenceByEvidenceFolderResponse
 * //   evidence: [ // EvidenceList
 * //     { // Evidence
 * //       dataSource: "STRING_VALUE",
 * //       evidenceAwsAccountId: "STRING_VALUE",
 * //       time: new Date("TIMESTAMP"),
 * //       eventSource: "STRING_VALUE",
 * //       eventName: "STRING_VALUE",
 * //       evidenceByType: "STRING_VALUE",
 * //       resourcesIncluded: [ // Resources
 * //         { // Resource
 * //           arn: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //           complianceCheck: "STRING_VALUE",
 * //         },
 * //       ],
 * //       attributes: { // EvidenceAttributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       iamId: "STRING_VALUE",
 * //       complianceCheck: "STRING_VALUE",
 * //       awsOrganization: "STRING_VALUE",
 * //       awsAccountId: "STRING_VALUE",
 * //       evidenceFolderId: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       assessmentReportSelection: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEvidenceByEvidenceFolderCommandInput - {@link GetEvidenceByEvidenceFolderCommandInput}
 * @returns {@link GetEvidenceByEvidenceFolderCommandOutput}
 * @see {@link GetEvidenceByEvidenceFolderCommandInput} for command's `input` shape.
 * @see {@link GetEvidenceByEvidenceFolderCommandOutput} for command's `response` shape.
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
export class GetEvidenceByEvidenceFolderCommand extends $Command<
  GetEvidenceByEvidenceFolderCommandInput,
  GetEvidenceByEvidenceFolderCommandOutput,
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
  constructor(readonly input: GetEvidenceByEvidenceFolderCommandInput) {
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
  ): Handler<GetEvidenceByEvidenceFolderCommandInput, GetEvidenceByEvidenceFolderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEvidenceByEvidenceFolderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "GetEvidenceByEvidenceFolderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "BedrockAssessmentManagerLambda",
        operation: "GetEvidenceByEvidenceFolder",
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
  private serialize(input: GetEvidenceByEvidenceFolderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetEvidenceByEvidenceFolderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEvidenceByEvidenceFolderCommandOutput> {
    return de_GetEvidenceByEvidenceFolderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
