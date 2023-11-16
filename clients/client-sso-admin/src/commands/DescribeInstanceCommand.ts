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

import { DescribeInstanceRequest, DescribeInstanceResponse } from "../models/models_0";
import { de_DescribeInstanceCommand, se_DescribeInstanceCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceCommand}.
 */
export interface DescribeInstanceCommandInput extends DescribeInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceCommand}.
 */
export interface DescribeInstanceCommandOutput extends DescribeInstanceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the details of an instance of IAM Identity Center. The status can be one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CREATE_IN_PROGRESS</code> - The instance is in the process of being created. When the
 *                 instance is ready for use, DescribeInstance returns the status of
 *                 <code>ACTIVE</code>. While the instance is in the
 *                 <code>CREATE_IN_PROGRESS</code> state, you can call only DescribeInstance
 *                 and DeleteInstance operations.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DELETE_IN_PROGRESS</code> - The instance is being deleted. Returns <code>AccessDeniedException</code> after the delete operation completes. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ACTIVE</code> - The instance is active.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeInstanceCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeInstanceCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // DescribeInstanceRequest
 *   InstanceArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeInstanceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceResponse
 * //   InstanceArn: "STRING_VALUE",
 * //   IdentityStoreId: "STRING_VALUE",
 * //   OwnerAccountId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   CreatedDate: new Date("TIMESTAMP"),
 * //   Status: "CREATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "ACTIVE",
 * // };
 *
 * ```
 *
 * @param DescribeInstanceCommandInput - {@link DescribeInstanceCommandInput}
 * @returns {@link DescribeInstanceCommandOutput}
 * @see {@link DescribeInstanceCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *             with an internal server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API
 *             operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 */
export class DescribeInstanceCommand extends $Command<
  DescribeInstanceCommandInput,
  DescribeInstanceCommandOutput,
  SSOAdminClientResolvedConfig
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
  constructor(readonly input: DescribeInstanceCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInstanceCommandInput, DescribeInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "DescribeInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SWBExternalService",
        operation: "DescribeInstance",
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
  private serialize(input: DescribeInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInstanceCommandOutput> {
    return de_DescribeInstanceCommand(output, context);
  }
}
