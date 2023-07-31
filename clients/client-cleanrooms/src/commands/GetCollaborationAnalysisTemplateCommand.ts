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

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import {
  GetCollaborationAnalysisTemplateInput,
  GetCollaborationAnalysisTemplateOutput,
  GetCollaborationAnalysisTemplateOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetCollaborationAnalysisTemplateCommand,
  se_GetCollaborationAnalysisTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCollaborationAnalysisTemplateCommand}.
 */
export interface GetCollaborationAnalysisTemplateCommandInput extends GetCollaborationAnalysisTemplateInput {}
/**
 * @public
 *
 * The output of {@link GetCollaborationAnalysisTemplateCommand}.
 */
export interface GetCollaborationAnalysisTemplateCommandOutput
  extends GetCollaborationAnalysisTemplateOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves an analysis template within a collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetCollaborationAnalysisTemplateCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetCollaborationAnalysisTemplateCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // GetCollaborationAnalysisTemplateInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   analysisTemplateArn: "STRING_VALUE", // required
 * };
 * const command = new GetCollaborationAnalysisTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetCollaborationAnalysisTemplateOutput
 * //   collaborationAnalysisTemplate: { // CollaborationAnalysisTemplate
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     creatorAccountId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     schema: { // AnalysisSchema
 * //       referencedTables: [ // QueryTables
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     format: "STRING_VALUE", // required
 * //     source: { // AnalysisSource Union: only one key present
 * //       text: "STRING_VALUE",
 * //     },
 * //     analysisParameters: [ // AnalysisParameterList
 * //       { // AnalysisParameter
 * //         name: "STRING_VALUE", // required
 * //         type: "SMALLINT" || "INTEGER" || "BIGINT" || "DECIMAL" || "REAL" || "DOUBLE_PRECISION" || "BOOLEAN" || "CHAR" || "VARCHAR" || "DATE" || "TIMESTAMP" || "TIMESTAMPTZ" || "TIME" || "TIMETZ" || "VARBYTE", // required
 * //         defaultValue: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCollaborationAnalysisTemplateCommandInput - {@link GetCollaborationAnalysisTemplateCommandInput}
 * @returns {@link GetCollaborationAnalysisTemplateCommandOutput}
 * @see {@link GetCollaborationAnalysisTemplateCommandInput} for command's `input` shape.
 * @see {@link GetCollaborationAnalysisTemplateCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 */
export class GetCollaborationAnalysisTemplateCommand extends $Command<
  GetCollaborationAnalysisTemplateCommandInput,
  GetCollaborationAnalysisTemplateCommandOutput,
  CleanRoomsClientResolvedConfig
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
  constructor(readonly input: GetCollaborationAnalysisTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCollaborationAnalysisTemplateCommandInput, GetCollaborationAnalysisTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCollaborationAnalysisTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "GetCollaborationAnalysisTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetCollaborationAnalysisTemplateOutputFilterSensitiveLog,
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
  private serialize(
    input: GetCollaborationAnalysisTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetCollaborationAnalysisTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCollaborationAnalysisTemplateCommandOutput> {
    return de_GetCollaborationAnalysisTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
