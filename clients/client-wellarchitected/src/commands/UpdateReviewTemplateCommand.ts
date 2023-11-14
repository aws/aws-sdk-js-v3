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

import { UpdateReviewTemplateInput, UpdateReviewTemplateOutput } from "../models/models_0";
import { de_UpdateReviewTemplateCommand, se_UpdateReviewTemplateCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateReviewTemplateCommand}.
 */
export interface UpdateReviewTemplateCommandInput extends UpdateReviewTemplateInput {}
/**
 * @public
 *
 * The output of {@link UpdateReviewTemplateCommand}.
 */
export interface UpdateReviewTemplateCommandOutput extends UpdateReviewTemplateOutput, __MetadataBearer {}

/**
 * @public
 * <p>Update a review template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateReviewTemplateCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateReviewTemplateCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // UpdateReviewTemplateInput
 *   TemplateArn: "STRING_VALUE", // required
 *   TemplateName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Notes: "STRING_VALUE",
 *   LensesToAssociate: [ // ReviewTemplateLensAliases
 *     "STRING_VALUE",
 *   ],
 *   LensesToDisassociate: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateReviewTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateReviewTemplateOutput
 * //   ReviewTemplate: { // ReviewTemplate
 * //     Description: "STRING_VALUE",
 * //     Lenses: [ // ReviewTemplateLenses
 * //       "STRING_VALUE",
 * //     ],
 * //     Notes: "STRING_VALUE",
 * //     QuestionCounts: { // QuestionCounts
 * //       "<keys>": Number("int"),
 * //     },
 * //     Owner: "STRING_VALUE",
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //     TemplateArn: "STRING_VALUE",
 * //     TemplateName: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     UpdateStatus: "CURRENT" || "LENS_NOT_CURRENT",
 * //     ShareInvitationId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateReviewTemplateCommandInput - {@link UpdateReviewTemplateCommandInput}
 * @returns {@link UpdateReviewTemplateCommandOutput}
 * @see {@link UpdateReviewTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateReviewTemplateCommandOutput} for command's `response` shape.
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
export class UpdateReviewTemplateCommand extends $Command<
  UpdateReviewTemplateCommandInput,
  UpdateReviewTemplateCommandOutput,
  WellArchitectedClientResolvedConfig
> {
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
  constructor(readonly input: UpdateReviewTemplateCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateReviewTemplateCommandInput, UpdateReviewTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateReviewTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "UpdateReviewTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WellArchitectedApiServiceLambda",
        operation: "UpdateReviewTemplate",
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
  private serialize(input: UpdateReviewTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateReviewTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateReviewTemplateCommandOutput> {
    return de_UpdateReviewTemplateCommand(output, context);
  }
}
