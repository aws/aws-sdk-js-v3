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

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { CreateLayoutRequest, CreateLayoutResponse } from "../models/models_0";
import { de_CreateLayoutCommand, se_CreateLayoutCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLayoutCommand}.
 */
export interface CreateLayoutCommandInput extends CreateLayoutRequest {}
/**
 * @public
 *
 * The output of {@link CreateLayoutCommand}.
 */
export interface CreateLayoutCommandOutput extends CreateLayoutResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a layout in the Cases domain. Layouts define the following configuration in
 *       the top section and More Info tab of the Cases user interface:</p>
 *          <ul>
 *             <li>
 *                <p>Fields to display to the users</p>
 *             </li>
 *             <li>
 *                <p>Field ordering</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Title and Status fields cannot be part of layouts since they are not
 *         configurable.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, CreateLayoutCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, CreateLayoutCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const input = { // CreateLayoutRequest
 *   domainId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   content: { // LayoutContent Union: only one key present
 *     basic: { // BasicLayout
 *       topPanel: { // LayoutSections
 *         sections: [ // SectionsList
 *           { // Section Union: only one key present
 *             fieldGroup: { // FieldGroup
 *               name: "STRING_VALUE",
 *               fields: [ // FieldList // required
 *                 { // FieldItem
 *                   id: "STRING_VALUE", // required
 *                 },
 *               ],
 *             },
 *           },
 *         ],
 *       },
 *       moreInfo: {
 *         sections: [
 *           {//  Union: only one key present
 *             fieldGroup: {
 *               name: "STRING_VALUE",
 *               fields: [ // required
 *                 {
 *                   id: "STRING_VALUE", // required
 *                 },
 *               ],
 *             },
 *           },
 *         ],
 *       },
 *     },
 *   },
 * };
 * const command = new CreateLayoutCommand(input);
 * const response = await client.send(command);
 * // { // CreateLayoutResponse
 * //   layoutId: "STRING_VALUE", // required
 * //   layoutArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateLayoutCommandInput - {@link CreateLayoutCommandInput}
 * @returns {@link CreateLayoutCommandOutput}
 * @see {@link CreateLayoutCommandInput} for command's `input` shape.
 * @see {@link CreateLayoutCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service
 *       resource associated with the request. Resolve the conflict before retrying this request. See
 *       the accompanying error message for details.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded. For a list of service quotas, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect
 *         Administrator Guide</i>.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 */
export class CreateLayoutCommand extends $Command<
  CreateLayoutCommandInput,
  CreateLayoutCommandOutput,
  ConnectCasesClientResolvedConfig
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
  constructor(readonly input: CreateLayoutCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectCasesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLayoutCommandInput, CreateLayoutCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateLayoutCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCasesClient";
    const commandName = "CreateLayoutCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectCases",
        operation: "CreateLayout",
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
  private serialize(input: CreateLayoutCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLayoutCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLayoutCommandOutput> {
    return de_CreateLayoutCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
