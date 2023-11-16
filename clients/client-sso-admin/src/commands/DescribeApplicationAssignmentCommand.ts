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

import { DescribeApplicationAssignmentRequest, DescribeApplicationAssignmentResponse } from "../models/models_0";
import {
  de_DescribeApplicationAssignmentCommand,
  se_DescribeApplicationAssignmentCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicationAssignmentCommand}.
 */
export interface DescribeApplicationAssignmentCommandInput extends DescribeApplicationAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationAssignmentCommand}.
 */
export interface DescribeApplicationAssignmentCommandOutput
  extends DescribeApplicationAssignmentResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a direct assignment of a user or group to an application. If the user doesn’t have a direct assignment to the application,
 *             the user may still have access to the application through a group. Therefore, don’t use this API to test access to an application for a user.
 *             Instead use <a>ListApplicationAssignmentsForPrincipal</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeApplicationAssignmentCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeApplicationAssignmentCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // DescribeApplicationAssignmentRequest
 *   ApplicationArn: "STRING_VALUE", // required
 *   PrincipalId: "STRING_VALUE", // required
 *   PrincipalType: "USER" || "GROUP", // required
 * };
 * const command = new DescribeApplicationAssignmentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationAssignmentResponse
 * //   PrincipalType: "USER" || "GROUP",
 * //   PrincipalId: "STRING_VALUE",
 * //   ApplicationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeApplicationAssignmentCommandInput - {@link DescribeApplicationAssignmentCommandInput}
 * @returns {@link DescribeApplicationAssignmentCommandOutput}
 * @see {@link DescribeApplicationAssignmentCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationAssignmentCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *             with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
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
export class DescribeApplicationAssignmentCommand extends $Command<
  DescribeApplicationAssignmentCommandInput,
  DescribeApplicationAssignmentCommandOutput,
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
  constructor(readonly input: DescribeApplicationAssignmentCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeApplicationAssignmentCommandInput, DescribeApplicationAssignmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeApplicationAssignmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "DescribeApplicationAssignmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SWBExternalService",
        operation: "DescribeApplicationAssignment",
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
  private serialize(input: DescribeApplicationAssignmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeApplicationAssignmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeApplicationAssignmentCommandOutput> {
    return de_DescribeApplicationAssignmentCommand(output, context);
  }
}
