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

import { UpdateProfileInput, UpdateProfileOutput } from "../models/models_0";
import { de_UpdateProfileCommand, se_UpdateProfileCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateProfileCommand}.
 */
export interface UpdateProfileCommandInput extends UpdateProfileInput {}
/**
 * @public
 *
 * The output of {@link UpdateProfileCommand}.
 */
export interface UpdateProfileCommandOutput extends UpdateProfileOutput, __MetadataBearer {}

/**
 * @public
 * <p>Update a profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateProfileCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateProfileCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // UpdateProfileInput
 *   ProfileArn: "STRING_VALUE", // required
 *   ProfileDescription: "STRING_VALUE",
 *   ProfileQuestions: [ // ProfileQuestionUpdates
 *     { // ProfileQuestionUpdate
 *       QuestionId: "STRING_VALUE",
 *       SelectedChoiceIds: [ // SelectedProfileChoiceIds
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProfileOutput
 * //   Profile: { // Profile
 * //     ProfileArn: "STRING_VALUE",
 * //     ProfileVersion: "STRING_VALUE",
 * //     ProfileName: "STRING_VALUE",
 * //     ProfileDescription: "STRING_VALUE",
 * //     ProfileQuestions: [ // ProfileQuestions
 * //       { // ProfileQuestion
 * //         QuestionId: "STRING_VALUE",
 * //         QuestionTitle: "STRING_VALUE",
 * //         QuestionDescription: "STRING_VALUE",
 * //         QuestionChoices: [ // ProfileQuestionChoices
 * //           { // ProfileChoice
 * //             ChoiceId: "STRING_VALUE",
 * //             ChoiceTitle: "STRING_VALUE",
 * //             ChoiceDescription: "STRING_VALUE",
 * //           },
 * //         ],
 * //         SelectedChoiceIds: [ // SelectedChoiceIds
 * //           "STRING_VALUE",
 * //         ],
 * //         MinSelectedChoices: Number("int"),
 * //         MaxSelectedChoices: Number("int"),
 * //       },
 * //     ],
 * //     Owner: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //     ShareInvitationId: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateProfileCommandInput - {@link UpdateProfileCommandInput}
 * @returns {@link UpdateProfileCommandOutput}
 * @see {@link UpdateProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateProfileCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
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
export class UpdateProfileCommand extends $Command<
  UpdateProfileCommandInput,
  UpdateProfileCommandOutput,
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
  constructor(readonly input: UpdateProfileCommandInput) {
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
  ): Handler<UpdateProfileCommandInput, UpdateProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateProfileCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "UpdateProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WellArchitectedApiServiceLambda",
        operation: "UpdateProfile",
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
  private serialize(input: UpdateProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateProfileCommandOutput> {
    return de_UpdateProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
