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

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { CreateReportGroupInput, CreateReportGroupOutput } from "../models/models_0";
import { de_CreateReportGroupCommand, se_CreateReportGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateReportGroupCommand}.
 */
export interface CreateReportGroupCommandInput extends CreateReportGroupInput {}
/**
 * @public
 *
 * The output of {@link CreateReportGroupCommand}.
 */
export interface CreateReportGroupCommandOutput extends CreateReportGroupOutput, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Creates a report group. A report group contains a collection of reports.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, CreateReportGroupCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, CreateReportGroupCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // CreateReportGroupInput
 *   name: "STRING_VALUE", // required
 *   type: "TEST" || "CODE_COVERAGE", // required
 *   exportConfig: { // ReportExportConfig
 *     exportConfigType: "S3" || "NO_EXPORT",
 *     s3Destination: { // S3ReportExportConfig
 *       bucket: "STRING_VALUE",
 *       bucketOwner: "STRING_VALUE",
 *       path: "STRING_VALUE",
 *       packaging: "ZIP" || "NONE",
 *       encryptionKey: "STRING_VALUE",
 *       encryptionDisabled: true || false,
 *     },
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateReportGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateReportGroupOutput
 * //   reportGroup: { // ReportGroup
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     type: "TEST" || "CODE_COVERAGE",
 * //     exportConfig: { // ReportExportConfig
 * //       exportConfigType: "S3" || "NO_EXPORT",
 * //       s3Destination: { // S3ReportExportConfig
 * //         bucket: "STRING_VALUE",
 * //         bucketOwner: "STRING_VALUE",
 * //         path: "STRING_VALUE",
 * //         packaging: "ZIP" || "NONE",
 * //         encryptionKey: "STRING_VALUE",
 * //         encryptionDisabled: true || false,
 * //       },
 * //     },
 * //     created: new Date("TIMESTAMP"),
 * //     lastModified: new Date("TIMESTAMP"),
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     status: "ACTIVE" || "DELETING",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateReportGroupCommandInput - {@link CreateReportGroupCommandInput}
 * @returns {@link CreateReportGroupCommandOutput}
 * @see {@link CreateReportGroupCommandInput} for command's `input` shape.
 * @see {@link CreateReportGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link AccountLimitExceededException} (client fault)
 *  <p>An Amazon Web Services service limit was exceeded for the calling Amazon Web Services account.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be created, because an Amazon Web Services resource with the same
 *             settings already exists.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 */
export class CreateReportGroupCommand extends $Command<
  CreateReportGroupCommandInput,
  CreateReportGroupCommandOutput,
  CodeBuildClientResolvedConfig
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
  constructor(readonly input: CreateReportGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateReportGroupCommandInput, CreateReportGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateReportGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "CreateReportGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeBuild_20161006",
        operation: "CreateReportGroup",
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
  private serialize(input: CreateReportGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateReportGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateReportGroupCommandOutput> {
    return de_CreateReportGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
