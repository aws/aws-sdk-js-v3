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

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { BatchGetReportGroupsInput, BatchGetReportGroupsOutput } from "../models/models_0";
import { de_BatchGetReportGroupsCommand, se_BatchGetReportGroupsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetReportGroupsCommand}.
 */
export interface BatchGetReportGroupsCommandInput extends BatchGetReportGroupsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetReportGroupsCommand}.
 */
export interface BatchGetReportGroupsCommandOutput extends BatchGetReportGroupsOutput, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Returns an array of report groups.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchGetReportGroupsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchGetReportGroupsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // BatchGetReportGroupsInput
 *   reportGroupArns: [ // ReportGroupArns // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetReportGroupsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetReportGroupsOutput
 * //   reportGroups: [ // ReportGroups
 * //     { // ReportGroup
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       exportConfig: { // ReportExportConfig
 * //         exportConfigType: "STRING_VALUE",
 * //         s3Destination: { // S3ReportExportConfig
 * //           bucket: "STRING_VALUE",
 * //           bucketOwner: "STRING_VALUE",
 * //           path: "STRING_VALUE",
 * //           packaging: "STRING_VALUE",
 * //           encryptionKey: "STRING_VALUE",
 * //           encryptionDisabled: true || false,
 * //         },
 * //       },
 * //       created: new Date("TIMESTAMP"),
 * //       lastModified: new Date("TIMESTAMP"),
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       status: "STRING_VALUE",
 * //     },
 * //   ],
 * //   reportGroupsNotFound: [ // ReportGroupArns
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetReportGroupsCommandInput - {@link BatchGetReportGroupsCommandInput}
 * @returns {@link BatchGetReportGroupsCommandOutput}
 * @see {@link BatchGetReportGroupsCommandInput} for command's `input` shape.
 * @see {@link BatchGetReportGroupsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 */
export class BatchGetReportGroupsCommand extends $Command<
  BatchGetReportGroupsCommandInput,
  BatchGetReportGroupsCommandOutput,
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
  constructor(readonly input: BatchGetReportGroupsCommandInput) {
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
  ): Handler<BatchGetReportGroupsCommandInput, BatchGetReportGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetReportGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "BatchGetReportGroupsCommand";
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
  private serialize(input: BatchGetReportGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetReportGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetReportGroupsCommandOutput> {
    return de_BatchGetReportGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
