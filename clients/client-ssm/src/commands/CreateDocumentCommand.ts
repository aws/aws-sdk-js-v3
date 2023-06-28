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

import { CreateDocumentRequest, CreateDocumentResult } from "../models/models_0";
import { de_CreateDocumentCommand, se_CreateDocumentCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDocumentCommand}.
 */
export interface CreateDocumentCommandInput extends CreateDocumentRequest {}
/**
 * @public
 *
 * The output of {@link CreateDocumentCommand}.
 */
export interface CreateDocumentCommandOutput extends CreateDocumentResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a Amazon Web Services Systems Manager (SSM document). An SSM document defines the actions that Systems Manager performs
 *    on your managed nodes. For more information about SSM documents, including information about
 *    supported schemas, features, and syntax, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-ssm-docs.html">Amazon Web Services Systems Manager Documents</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateDocumentCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateDocumentCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // CreateDocumentRequest
 *   Content: "STRING_VALUE", // required
 *   Requires: [ // DocumentRequiresList
 *     { // DocumentRequires
 *       Name: "STRING_VALUE", // required
 *       Version: "STRING_VALUE",
 *       RequireType: "STRING_VALUE",
 *       VersionName: "STRING_VALUE",
 *     },
 *   ],
 *   Attachments: [ // AttachmentsSourceList
 *     { // AttachmentsSource
 *       Key: "SourceUrl" || "S3FileUrl" || "AttachmentReference",
 *       Values: [ // AttachmentsSourceValues
 *         "STRING_VALUE",
 *       ],
 *       Name: "STRING_VALUE",
 *     },
 *   ],
 *   Name: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE",
 *   VersionName: "STRING_VALUE",
 *   DocumentType: "Command" || "Policy" || "Automation" || "Session" || "Package" || "ApplicationConfiguration" || "ApplicationConfigurationSchema" || "DeploymentStrategy" || "ChangeCalendar" || "Automation.ChangeTemplate" || "ProblemAnalysis" || "ProblemAnalysisTemplate" || "CloudFormation" || "ConformancePackTemplate" || "QuickSetup",
 *   DocumentFormat: "YAML" || "JSON" || "TEXT",
 *   TargetType: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDocumentCommand(input);
 * const response = await client.send(command);
 * // { // CreateDocumentResult
 * //   DocumentDescription: { // DocumentDescription
 * //     Sha1: "STRING_VALUE",
 * //     Hash: "STRING_VALUE",
 * //     HashType: "Sha256" || "Sha1",
 * //     Name: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     VersionName: "STRING_VALUE",
 * //     Owner: "STRING_VALUE",
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //     Status: "Creating" || "Active" || "Updating" || "Deleting" || "Failed",
 * //     StatusInformation: "STRING_VALUE",
 * //     DocumentVersion: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Parameters: [ // DocumentParameterList
 * //       { // DocumentParameter
 * //         Name: "STRING_VALUE",
 * //         Type: "String" || "StringList",
 * //         Description: "STRING_VALUE",
 * //         DefaultValue: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PlatformTypes: [ // PlatformTypeList
 * //       "Windows" || "Linux" || "MacOS",
 * //     ],
 * //     DocumentType: "Command" || "Policy" || "Automation" || "Session" || "Package" || "ApplicationConfiguration" || "ApplicationConfigurationSchema" || "DeploymentStrategy" || "ChangeCalendar" || "Automation.ChangeTemplate" || "ProblemAnalysis" || "ProblemAnalysisTemplate" || "CloudFormation" || "ConformancePackTemplate" || "QuickSetup",
 * //     SchemaVersion: "STRING_VALUE",
 * //     LatestVersion: "STRING_VALUE",
 * //     DefaultVersion: "STRING_VALUE",
 * //     DocumentFormat: "YAML" || "JSON" || "TEXT",
 * //     TargetType: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     AttachmentsInformation: [ // AttachmentInformationList
 * //       { // AttachmentInformation
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Requires: [ // DocumentRequiresList
 * //       { // DocumentRequires
 * //         Name: "STRING_VALUE", // required
 * //         Version: "STRING_VALUE",
 * //         RequireType: "STRING_VALUE",
 * //         VersionName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Author: "STRING_VALUE",
 * //     ReviewInformation: [ // ReviewInformationList
 * //       { // ReviewInformation
 * //         ReviewedTime: new Date("TIMESTAMP"),
 * //         Status: "APPROVED" || "NOT_REVIEWED" || "PENDING" || "REJECTED",
 * //         Reviewer: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ApprovedVersion: "STRING_VALUE",
 * //     PendingReviewVersion: "STRING_VALUE",
 * //     ReviewStatus: "APPROVED" || "NOT_REVIEWED" || "PENDING" || "REJECTED",
 * //     Category: [ // CategoryList
 * //       "STRING_VALUE",
 * //     ],
 * //     CategoryEnum: [ // CategoryEnumList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDocumentCommandInput - {@link CreateDocumentCommandInput}
 * @returns {@link CreateDocumentCommandOutput}
 * @see {@link CreateDocumentCommandInput} for command's `input` shape.
 * @see {@link CreateDocumentCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DocumentAlreadyExists} (client fault)
 *  <p>The specified document already exists.</p>
 *
 * @throws {@link DocumentLimitExceeded} (client fault)
 *  <p>You can have at most 500 active SSM documents.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDocumentContent} (client fault)
 *  <p>The content for the document isn't valid.</p>
 *
 * @throws {@link InvalidDocumentSchemaVersion} (client fault)
 *  <p>The version of the document schema isn't supported.</p>
 *
 * @throws {@link MaxDocumentSizeExceeded} (client fault)
 *  <p>The size limit of a document is 64 KB.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class CreateDocumentCommand extends $Command<
  CreateDocumentCommandInput,
  CreateDocumentCommandOutput,
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
  constructor(readonly input: CreateDocumentCommandInput) {
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
  ): Handler<CreateDocumentCommandInput, CreateDocumentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDocumentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "CreateDocumentCommand";
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
  private serialize(input: CreateDocumentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDocumentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDocumentCommandOutput> {
    return de_CreateDocumentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
