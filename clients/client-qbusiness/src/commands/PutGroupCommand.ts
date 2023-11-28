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

import { PutGroupRequest, PutGroupResponse } from "../models/models_0";
import { de_PutGroupCommand, se_PutGroupCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutGroupCommand}.
 */
export interface PutGroupCommandInput extends PutGroupRequest {}
/**
 * @public
 *
 * The output of {@link PutGroupCommand}.
 */
export interface PutGroupCommandOutput extends PutGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Create, or updates, a mapping of users—who have access to a document—to
 *             groups.</p>
 *          <p>You can also map sub groups to groups. For example, the group "Company Intellectual
 *             Property Teams" includes sub groups "Research" and "Engineering". These sub groups
 *             include their own list of users or people who work in these teams. Only users who work
 *             in research and engineering, and therefore belong in the intellectual property group,
 *             can see top-secret company documents in their Amazon Q chat results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, PutGroupCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, PutGroupCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // PutGroupRequest
 *   applicationId: "STRING_VALUE", // required
 *   indexId: "STRING_VALUE", // required
 *   groupName: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE",
 *   type: "INDEX" || "DATASOURCE", // required
 *   groupMembers: { // GroupMembers
 *     memberGroups: [ // MemberGroups
 *       { // MemberGroup
 *         groupName: "STRING_VALUE", // required
 *         type: "INDEX" || "DATASOURCE",
 *       },
 *     ],
 *     memberUsers: [ // MemberUsers
 *       { // MemberUser
 *         userId: "STRING_VALUE", // required
 *         type: "INDEX" || "DATASOURCE",
 *       },
 *     ],
 *   },
 * };
 * const command = new PutGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutGroupCommandInput - {@link PutGroupCommandInput}
 * @returns {@link PutGroupCommandOutput}
 * @see {@link PutGroupCommandInput} for command's `input` shape.
 * @see {@link PutGroupCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your
 *             resource. Fix any inconsistences with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Make sure you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the set limits for your Amazon Q service. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try
 *             again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q service. Provide the
 *             correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 */
export class PutGroupCommand extends $Command<
  PutGroupCommandInput,
  PutGroupCommandOutput,
  QBusinessClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: PutGroupCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutGroupCommandInput, PutGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutGroupCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QBusinessClient";
    const commandName = "PutGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ExpertQ",
        operation: "PutGroup",
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
  private serialize(input: PutGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutGroupCommandOutput> {
    return de_PutGroupCommand(output, context);
  }
}
