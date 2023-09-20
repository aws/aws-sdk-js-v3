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

import { GetProfileTemplateInput, GetProfileTemplateOutput } from "../models/models_0";
import { de_GetProfileTemplateCommand, se_GetProfileTemplateCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetProfileTemplateCommand}.
 */
export interface GetProfileTemplateCommandInput extends GetProfileTemplateInput {}
/**
 * @public
 *
 * The output of {@link GetProfileTemplateCommand}.
 */
export interface GetProfileTemplateCommandOutput extends GetProfileTemplateOutput, __MetadataBearer {}

/**
 * @public
 * <p>Get profile template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetProfileTemplateCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetProfileTemplateCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = {};
 * const command = new GetProfileTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetProfileTemplateOutput
 * //   ProfileTemplate: { // ProfileTemplate
 * //     TemplateName: "STRING_VALUE",
 * //     TemplateQuestions: [ // TemplateQuestions
 * //       { // ProfileTemplateQuestion
 * //         QuestionId: "STRING_VALUE",
 * //         QuestionTitle: "STRING_VALUE",
 * //         QuestionDescription: "STRING_VALUE",
 * //         QuestionChoices: [ // ProfileTemplateQuestionChoices
 * //           { // ProfileTemplateChoice
 * //             ChoiceId: "STRING_VALUE",
 * //             ChoiceTitle: "STRING_VALUE",
 * //             ChoiceDescription: "STRING_VALUE",
 * //           },
 * //         ],
 * //         MinSelectedChoices: Number("int"),
 * //         MaxSelectedChoices: Number("int"),
 * //       },
 * //     ],
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetProfileTemplateCommandInput - {@link GetProfileTemplateCommandInput}
 * @returns {@link GetProfileTemplateCommandOutput}
 * @see {@link GetProfileTemplateCommandInput} for command's `input` shape.
 * @see {@link GetProfileTemplateCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 */
export class GetProfileTemplateCommand extends $Command<
  GetProfileTemplateCommandInput,
  GetProfileTemplateCommandOutput,
  WellArchitectedClientResolvedConfig
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
  constructor(readonly input: GetProfileTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetProfileTemplateCommandInput, GetProfileTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetProfileTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "GetProfileTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WellArchitectedApiServiceLambda",
        operation: "GetProfileTemplate",
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
  private serialize(input: GetProfileTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetProfileTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetProfileTemplateCommandOutput> {
    return de_GetProfileTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
