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

import { GetDocumentRequest, GetDocumentResult } from "../models/models_1";
import { de_GetDocumentCommand, se_GetDocumentCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDocumentCommand}.
 */
export interface GetDocumentCommandInput extends GetDocumentRequest {}
/**
 * @public
 *
 * The output of {@link GetDocumentCommand}.
 */
export interface GetDocumentCommandOutput extends GetDocumentResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets the contents of the specified Amazon Web Services Systems Manager document (SSM document).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetDocumentCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetDocumentCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetDocumentRequest
 *   Name: "STRING_VALUE", // required
 *   VersionName: "STRING_VALUE",
 *   DocumentVersion: "STRING_VALUE",
 *   DocumentFormat: "YAML" || "JSON" || "TEXT",
 * };
 * const command = new GetDocumentCommand(input);
 * const response = await client.send(command);
 * // { // GetDocumentResult
 * //   Name: "STRING_VALUE",
 * //   CreatedDate: new Date("TIMESTAMP"),
 * //   DisplayName: "STRING_VALUE",
 * //   VersionName: "STRING_VALUE",
 * //   DocumentVersion: "STRING_VALUE",
 * //   Status: "Creating" || "Active" || "Updating" || "Deleting" || "Failed",
 * //   StatusInformation: "STRING_VALUE",
 * //   Content: "STRING_VALUE",
 * //   DocumentType: "Command" || "Policy" || "Automation" || "Session" || "Package" || "ApplicationConfiguration" || "ApplicationConfigurationSchema" || "DeploymentStrategy" || "ChangeCalendar" || "Automation.ChangeTemplate" || "ProblemAnalysis" || "ProblemAnalysisTemplate" || "CloudFormation" || "ConformancePackTemplate" || "QuickSetup",
 * //   DocumentFormat: "YAML" || "JSON" || "TEXT",
 * //   Requires: [ // DocumentRequiresList
 * //     { // DocumentRequires
 * //       Name: "STRING_VALUE", // required
 * //       Version: "STRING_VALUE",
 * //       RequireType: "STRING_VALUE",
 * //       VersionName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   AttachmentsContent: [ // AttachmentContentList
 * //     { // AttachmentContent
 * //       Name: "STRING_VALUE",
 * //       Size: Number("long"),
 * //       Hash: "STRING_VALUE",
 * //       HashType: "Sha256",
 * //       Url: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ReviewStatus: "APPROVED" || "NOT_REVIEWED" || "PENDING" || "REJECTED",
 * // };
 *
 * ```
 *
 * @param GetDocumentCommandInput - {@link GetDocumentCommandInput}
 * @returns {@link GetDocumentCommandOutput}
 * @see {@link GetDocumentCommandInput} for command's `input` shape.
 * @see {@link GetDocumentCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDocument} (client fault)
 *  <p>The specified SSM document doesn't exist.</p>
 *
 * @throws {@link InvalidDocumentVersion} (client fault)
 *  <p>The document version isn't valid or doesn't exist.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class GetDocumentCommand extends $Command<
  GetDocumentCommandInput,
  GetDocumentCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: GetDocumentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDocumentCommandInput, GetDocumentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetDocumentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetDocumentCommand";
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
  private serialize(input: GetDocumentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDocumentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDocumentCommandOutput> {
    return de_GetDocumentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
