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
  GetCollaborationPrivacyBudgetTemplateInput,
  GetCollaborationPrivacyBudgetTemplateOutput,
} from "../models/models_0";
import {
  de_GetCollaborationPrivacyBudgetTemplateCommand,
  se_GetCollaborationPrivacyBudgetTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCollaborationPrivacyBudgetTemplateCommand}.
 */
export interface GetCollaborationPrivacyBudgetTemplateCommandInput extends GetCollaborationPrivacyBudgetTemplateInput {}
/**
 * @public
 *
 * The output of {@link GetCollaborationPrivacyBudgetTemplateCommand}.
 */
export interface GetCollaborationPrivacyBudgetTemplateCommandOutput
  extends GetCollaborationPrivacyBudgetTemplateOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns details about a specified privacy budget template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetCollaborationPrivacyBudgetTemplateCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetCollaborationPrivacyBudgetTemplateCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // GetCollaborationPrivacyBudgetTemplateInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   privacyBudgetTemplateIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetCollaborationPrivacyBudgetTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetCollaborationPrivacyBudgetTemplateOutput
 * //   collaborationPrivacyBudgetTemplate: { // CollaborationPrivacyBudgetTemplate
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
 * //     creatorAccountId: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     privacyBudgetType: "DIFFERENTIAL_PRIVACY", // required
 * //     autoRefresh: "CALENDAR_MONTH" || "NONE", // required
 * //     parameters: { // PrivacyBudgetTemplateParametersOutput Union: only one key present
 * //       differentialPrivacy: { // DifferentialPrivacyTemplateParametersOutput
 * //         epsilon: Number("int"), // required
 * //         usersNoisePerQuery: Number("int"), // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCollaborationPrivacyBudgetTemplateCommandInput - {@link GetCollaborationPrivacyBudgetTemplateCommandInput}
 * @returns {@link GetCollaborationPrivacyBudgetTemplateCommandOutput}
 * @see {@link GetCollaborationPrivacyBudgetTemplateCommandInput} for command's `input` shape.
 * @see {@link GetCollaborationPrivacyBudgetTemplateCommandOutput} for command's `response` shape.
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
export class GetCollaborationPrivacyBudgetTemplateCommand extends $Command<
  GetCollaborationPrivacyBudgetTemplateCommandInput,
  GetCollaborationPrivacyBudgetTemplateCommandOutput,
  CleanRoomsClientResolvedConfig
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
  constructor(readonly input: GetCollaborationPrivacyBudgetTemplateCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCollaborationPrivacyBudgetTemplateCommandInput, GetCollaborationPrivacyBudgetTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCollaborationPrivacyBudgetTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "GetCollaborationPrivacyBudgetTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBastionControlPlaneServiceLambda",
        operation: "GetCollaborationPrivacyBudgetTemplate",
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
  private serialize(
    input: GetCollaborationPrivacyBudgetTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetCollaborationPrivacyBudgetTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCollaborationPrivacyBudgetTemplateCommandOutput> {
    return de_GetCollaborationPrivacyBudgetTemplateCommand(output, context);
  }
}
