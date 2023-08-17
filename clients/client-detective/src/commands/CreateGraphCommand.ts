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

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { CreateGraphRequest, CreateGraphResponse } from "../models/models_0";
import { de_CreateGraphCommand, se_CreateGraphCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateGraphCommand}.
 */
export interface CreateGraphCommandInput extends CreateGraphRequest {}
/**
 * @public
 *
 * The output of {@link CreateGraphCommand}.
 */
export interface CreateGraphCommandOutput extends CreateGraphResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new behavior graph for the calling account, and sets that account as the
 *          administrator account. This operation is called by the account that is enabling Detective.</p>
 *          <p>Before you try to enable Detective, make sure that your account has been
 *          enrolled in Amazon GuardDuty for at least 48 hours. If you do not meet this
 *          requirement, you cannot enable Detective. If you do meet the GuardDuty
 *          prerequisite, then when you make the request to enable Detective, it checks
 *          whether your data volume is within the Detective quota. If it exceeds the quota,
 *          then you cannot enable Detective. </p>
 *          <p>The operation also enables Detective for the calling account in the currently
 *          selected Region. It returns the ARN of the new behavior graph.</p>
 *          <p>
 *             <code>CreateGraph</code> triggers a process to create the corresponding data tables for
 *          the new behavior graph.</p>
 *          <p>An account can only be the administrator account for one behavior graph within a Region.
 *          If the same account calls <code>CreateGraph</code> with the same administrator account, it
 *          always returns the same behavior graph ARN. It does not create a new behavior graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, CreateGraphCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, CreateGraphCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const input = { // CreateGraphRequest
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateGraphCommand(input);
 * const response = await client.send(command);
 * // { // CreateGraphResponse
 * //   GraphArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateGraphCommandInput - {@link CreateGraphCommandInput}
 * @returns {@link CreateGraphCommandOutput}
 * @see {@link CreateGraphCommandInput} for command's `input` shape.
 * @see {@link CreateGraphCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request attempted an invalid action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request cannot be completed for one of the following reasons.</p>
 *          <ul>
 *             <li>
 *                <p>The request would cause the number of member accounts in the behavior graph to
 *                exceed the maximum allowed. A behavior graph cannot have more than 1200 member
 *                accounts.</p>
 *             </li>
 *             <li>
 *                <p>The request would cause the data rate for the behavior graph to exceed the maximum
 *                allowed.</p>
 *             </li>
 *             <li>
 *                <p>Detective is unable to verify the data rate for the member account. This
 *                is usually because the member account is not enrolled in Amazon GuardDuty.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 */
export class CreateGraphCommand extends $Command<
  CreateGraphCommandInput,
  CreateGraphCommandOutput,
  DetectiveClientResolvedConfig
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
  constructor(readonly input: CreateGraphCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateGraphCommandInput, CreateGraphCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateGraphCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "CreateGraphCommand";
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
  private serialize(input: CreateGraphCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateGraphCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGraphCommandOutput> {
    return de_CreateGraphCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
