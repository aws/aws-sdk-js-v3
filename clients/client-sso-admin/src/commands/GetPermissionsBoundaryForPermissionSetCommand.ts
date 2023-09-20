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
  GetPermissionsBoundaryForPermissionSetRequest,
  GetPermissionsBoundaryForPermissionSetResponse,
} from "../models/models_0";
import {
  de_GetPermissionsBoundaryForPermissionSetCommand,
  se_GetPermissionsBoundaryForPermissionSetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPermissionsBoundaryForPermissionSetCommand}.
 */
export interface GetPermissionsBoundaryForPermissionSetCommandInput
  extends GetPermissionsBoundaryForPermissionSetRequest {}
/**
 * @public
 *
 * The output of {@link GetPermissionsBoundaryForPermissionSetCommand}.
 */
export interface GetPermissionsBoundaryForPermissionSetCommandOutput
  extends GetPermissionsBoundaryForPermissionSetResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Obtains the permissions boundary for a specified <a>PermissionSet</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, GetPermissionsBoundaryForPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, GetPermissionsBoundaryForPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // GetPermissionsBoundaryForPermissionSetRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 * };
 * const command = new GetPermissionsBoundaryForPermissionSetCommand(input);
 * const response = await client.send(command);
 * // { // GetPermissionsBoundaryForPermissionSetResponse
 * //   PermissionsBoundary: { // PermissionsBoundary
 * //     CustomerManagedPolicyReference: { // CustomerManagedPolicyReference
 * //       Name: "STRING_VALUE", // required
 * //       Path: "STRING_VALUE",
 * //     },
 * //     ManagedPolicyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPermissionsBoundaryForPermissionSetCommandInput - {@link GetPermissionsBoundaryForPermissionSetCommandInput}
 * @returns {@link GetPermissionsBoundaryForPermissionSetCommandOutput}
 * @see {@link GetPermissionsBoundaryForPermissionSetCommandInput} for command's `input` shape.
 * @see {@link GetPermissionsBoundaryForPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with
 *       an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API
 *       operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 */
export class GetPermissionsBoundaryForPermissionSetCommand extends $Command<
  GetPermissionsBoundaryForPermissionSetCommandInput,
  GetPermissionsBoundaryForPermissionSetCommandOutput,
  SSOAdminClientResolvedConfig
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
  constructor(readonly input: GetPermissionsBoundaryForPermissionSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPermissionsBoundaryForPermissionSetCommandInput, GetPermissionsBoundaryForPermissionSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPermissionsBoundaryForPermissionSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "GetPermissionsBoundaryForPermissionSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SWBExternalService",
        operation: "GetPermissionsBoundaryForPermissionSet",
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
    input: GetPermissionsBoundaryForPermissionSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetPermissionsBoundaryForPermissionSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPermissionsBoundaryForPermissionSetCommandOutput> {
    return de_GetPermissionsBoundaryForPermissionSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
