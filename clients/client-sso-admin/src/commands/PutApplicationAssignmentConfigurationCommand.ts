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

import {
  PutApplicationAssignmentConfigurationRequest,
  PutApplicationAssignmentConfigurationResponse,
} from "../models/models_0";
import {
  de_PutApplicationAssignmentConfigurationCommand,
  se_PutApplicationAssignmentConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutApplicationAssignmentConfigurationCommand}.
 */
export interface PutApplicationAssignmentConfigurationCommandInput
  extends PutApplicationAssignmentConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutApplicationAssignmentConfigurationCommand}.
 */
export interface PutApplicationAssignmentConfigurationCommandOutput
  extends PutApplicationAssignmentConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Configure how users gain access to an application. If <code>AssignmentsRequired</code> is <code>true</code> (default value), users don’t have access to the application unless an assignment is created using the
 *             <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateApplicationAssignment.html">CreateApplicationAssignment API</a>. If <code>false</code>, all users have access to the application.
 *             If an assignment is created using <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateApplicationAssignment.html">CreateApplicationAssignment</a>., the user retains access if <code>AssignmentsRequired</code> is set to <code>true</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, PutApplicationAssignmentConfigurationCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, PutApplicationAssignmentConfigurationCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // PutApplicationAssignmentConfigurationRequest
 *   ApplicationArn: "STRING_VALUE", // required
 *   AssignmentRequired: true || false, // required
 * };
 * const command = new PutApplicationAssignmentConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutApplicationAssignmentConfigurationCommandInput - {@link PutApplicationAssignmentConfigurationCommandInput}
 * @returns {@link PutApplicationAssignmentConfigurationCommandOutput}
 * @see {@link PutApplicationAssignmentConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutApplicationAssignmentConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally
 *             occurs when the previous write did not have time to propagate to the host serving the
 *             current request. A retry (with appropriate backoff logic) is the recommended response to
 *             this exception.</p>
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
export class PutApplicationAssignmentConfigurationCommand extends $Command<
  PutApplicationAssignmentConfigurationCommandInput,
  PutApplicationAssignmentConfigurationCommandOutput,
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
  constructor(readonly input: PutApplicationAssignmentConfigurationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutApplicationAssignmentConfigurationCommandInput, PutApplicationAssignmentConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutApplicationAssignmentConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "PutApplicationAssignmentConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SWBExternalService",
        operation: "PutApplicationAssignmentConfiguration",
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
    input: PutApplicationAssignmentConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutApplicationAssignmentConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutApplicationAssignmentConfigurationCommandOutput> {
    return de_PutApplicationAssignmentConfigurationCommand(output, context);
  }
}
