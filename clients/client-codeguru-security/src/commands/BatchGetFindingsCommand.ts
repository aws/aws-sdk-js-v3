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

import { CodeGuruSecurityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruSecurityClient";
import { BatchGetFindingsRequest, BatchGetFindingsResponse } from "../models/models_0";
import { de_BatchGetFindingsCommand, se_BatchGetFindingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetFindingsCommand}.
 */
export interface BatchGetFindingsCommandInput extends BatchGetFindingsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetFindingsCommand}.
 */
export interface BatchGetFindingsCommandOutput extends BatchGetFindingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of all requested findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruSecurityClient, BatchGetFindingsCommand } from "@aws-sdk/client-codeguru-security"; // ES Modules import
 * // const { CodeGuruSecurityClient, BatchGetFindingsCommand } = require("@aws-sdk/client-codeguru-security"); // CommonJS import
 * const client = new CodeGuruSecurityClient(config);
 * const input = { // BatchGetFindingsRequest
 *   findingIdentifiers: [ // FindingIdentifiers // required
 *     { // FindingIdentifier
 *       scanName: "STRING_VALUE", // required
 *       findingId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchGetFindingsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetFindingsResponse
 * //   findings: [ // Findings // required
 * //     { // Finding
 * //       createdAt: new Date("TIMESTAMP"),
 * //       description: "STRING_VALUE",
 * //       generatorId: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       type: "STRING_VALUE",
 * //       status: "Closed" || "Open" || "All",
 * //       resource: { // Resource
 * //         id: "STRING_VALUE",
 * //         subResourceId: "STRING_VALUE",
 * //       },
 * //       vulnerability: { // Vulnerability
 * //         referenceUrls: [ // ReferenceUrls
 * //           "STRING_VALUE",
 * //         ],
 * //         relatedVulnerabilities: [ // RelatedVulnerabilities
 * //           "STRING_VALUE",
 * //         ],
 * //         id: "STRING_VALUE",
 * //         filePath: { // FilePath
 * //           name: "STRING_VALUE",
 * //           path: "STRING_VALUE",
 * //           startLine: Number("int"),
 * //           endLine: Number("int"),
 * //           codeSnippet: [ // CodeSnippet
 * //             { // CodeLine
 * //               number: Number("int"),
 * //               content: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         itemCount: Number("int"),
 * //       },
 * //       severity: "Critical" || "High" || "Medium" || "Low" || "Info",
 * //       remediation: { // Remediation
 * //         recommendation: { // Recommendation
 * //           text: "STRING_VALUE",
 * //           url: "STRING_VALUE",
 * //         },
 * //         suggestedFixes: [ // SuggestedFixes
 * //           { // SuggestedFix
 * //             description: "STRING_VALUE",
 * //             code: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       title: "STRING_VALUE",
 * //       detectorTags: [ // DetectorTags
 * //         "STRING_VALUE",
 * //       ],
 * //       detectorId: "STRING_VALUE",
 * //       detectorName: "STRING_VALUE",
 * //       ruleId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   failedFindings: [ // BatchGetFindingsErrors // required
 * //     { // BatchGetFindingsError
 * //       scanName: "STRING_VALUE", // required
 * //       findingId: "STRING_VALUE", // required
 * //       errorCode: "DUPLICATE_IDENTIFIER" || "ITEM_DOES_NOT_EXIST" || "INTERNAL_ERROR" || "INVALID_FINDING_ID" || "INVALID_SCAN_NAME", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetFindingsCommandInput - {@link BatchGetFindingsCommandInput}
 * @returns {@link BatchGetFindingsCommandOutput}
 * @see {@link BatchGetFindingsCommandInput} for command's `input` shape.
 * @see {@link BatchGetFindingsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruSecurityClientResolvedConfig | config} for CodeGuruSecurityClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CodeGuruSecurityServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruSecurity service.</p>
 *
 */
export class BatchGetFindingsCommand extends $Command<
  BatchGetFindingsCommandInput,
  BatchGetFindingsCommandOutput,
  CodeGuruSecurityClientResolvedConfig
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
  constructor(readonly input: BatchGetFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruSecurityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetFindingsCommandInput, BatchGetFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetFindingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruSecurityClient";
    const commandName = "BatchGetFindingsCommand";
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
  private serialize(input: BatchGetFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetFindingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetFindingsCommandOutput> {
    return de_BatchGetFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
