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

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import {
  CreateAnalysisTemplateInput,
  CreateAnalysisTemplateInputFilterSensitiveLog,
  CreateAnalysisTemplateOutput,
  CreateAnalysisTemplateOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateAnalysisTemplateCommand, se_CreateAnalysisTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAnalysisTemplateCommand}.
 */
export interface CreateAnalysisTemplateCommandInput extends CreateAnalysisTemplateInput {}
/**
 * @public
 *
 * The output of {@link CreateAnalysisTemplateCommand}.
 */
export interface CreateAnalysisTemplateCommandOutput extends CreateAnalysisTemplateOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new analysis template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreateAnalysisTemplateCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreateAnalysisTemplateCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // CreateAnalysisTemplateInput
 *   description: "STRING_VALUE",
 *   membershipIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   format: "STRING_VALUE", // required
 *   source: { // AnalysisSource Union: only one key present
 *     text: "STRING_VALUE",
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   analysisParameters: [ // AnalysisParameterList
 *     { // AnalysisParameter
 *       name: "STRING_VALUE", // required
 *       type: "SMALLINT" || "INTEGER" || "BIGINT" || "DECIMAL" || "REAL" || "DOUBLE_PRECISION" || "BOOLEAN" || "CHAR" || "VARCHAR" || "DATE" || "TIMESTAMP" || "TIMESTAMPTZ" || "TIME" || "TIMETZ" || "VARBYTE", // required
 *       defaultValue: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateAnalysisTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateAnalysisTemplateOutput
 * //   analysisTemplate: { // AnalysisTemplate
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
 * //     membershipId: "STRING_VALUE", // required
 * //     membershipArn: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
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
 * @param CreateAnalysisTemplateCommandInput - {@link CreateAnalysisTemplateCommandInput}
 * @returns {@link CreateAnalysisTemplateCommandOutput}
 * @see {@link CreateAnalysisTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateAnalysisTemplateCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request denied because service quota has been exceeded.</p>
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
export class CreateAnalysisTemplateCommand extends $Command<
  CreateAnalysisTemplateCommandInput,
  CreateAnalysisTemplateCommandOutput,
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
  constructor(readonly input: CreateAnalysisTemplateCommandInput) {
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
  ): Handler<CreateAnalysisTemplateCommandInput, CreateAnalysisTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAnalysisTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "CreateAnalysisTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAnalysisTemplateInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAnalysisTemplateOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBastionControlPlaneServiceLambda",
        operation: "CreateAnalysisTemplate",
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
  private serialize(input: CreateAnalysisTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAnalysisTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAnalysisTemplateCommandOutput> {
    return de_CreateAnalysisTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
