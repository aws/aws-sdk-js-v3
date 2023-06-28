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

import { DescribeDocumentRequest, DescribeDocumentResult } from "../models/models_0";
import { de_DescribeDocumentCommand, se_DescribeDocumentCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDocumentCommand}.
 */
export interface DescribeDocumentCommandInput extends DescribeDocumentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDocumentCommand}.
 */
export interface DescribeDocumentCommandOutput extends DescribeDocumentResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified Amazon Web Services Systems Manager document (SSM document).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeDocumentCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeDocumentCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeDocumentRequest
 *   Name: "STRING_VALUE", // required
 *   DocumentVersion: "STRING_VALUE",
 *   VersionName: "STRING_VALUE",
 * };
 * const command = new DescribeDocumentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDocumentResult
 * //   Document: { // DocumentDescription
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
 * @param DescribeDocumentCommandInput - {@link DescribeDocumentCommandInput}
 * @returns {@link DescribeDocumentCommandOutput}
 * @see {@link DescribeDocumentCommandInput} for command's `input` shape.
 * @see {@link DescribeDocumentCommandOutput} for command's `response` shape.
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
export class DescribeDocumentCommand extends $Command<
  DescribeDocumentCommandInput,
  DescribeDocumentCommandOutput,
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
  constructor(readonly input: DescribeDocumentCommandInput) {
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
  ): Handler<DescribeDocumentCommandInput, DescribeDocumentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDocumentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeDocumentCommand";
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
  private serialize(input: DescribeDocumentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDocumentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDocumentCommandOutput> {
    return de_DescribeDocumentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
