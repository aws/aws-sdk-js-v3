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
  DescribePermissionSetProvisioningStatusRequest,
  DescribePermissionSetProvisioningStatusResponse,
} from "../models/models_0";
import {
  de_DescribePermissionSetProvisioningStatusCommand,
  se_DescribePermissionSetProvisioningStatusCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePermissionSetProvisioningStatusCommand}.
 */
export interface DescribePermissionSetProvisioningStatusCommandInput
  extends DescribePermissionSetProvisioningStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribePermissionSetProvisioningStatusCommand}.
 */
export interface DescribePermissionSetProvisioningStatusCommandOutput
  extends DescribePermissionSetProvisioningStatusResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the status for the given permission set provisioning request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribePermissionSetProvisioningStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribePermissionSetProvisioningStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // DescribePermissionSetProvisioningStatusRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   ProvisionPermissionSetRequestId: "STRING_VALUE", // required
 * };
 * const command = new DescribePermissionSetProvisioningStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribePermissionSetProvisioningStatusResponse
 * //   PermissionSetProvisioningStatus: { // PermissionSetProvisioningStatus
 * //     Status: "IN_PROGRESS" || "FAILED" || "SUCCEEDED",
 * //     RequestId: "STRING_VALUE",
 * //     AccountId: "STRING_VALUE",
 * //     PermissionSetArn: "STRING_VALUE",
 * //     FailureReason: "STRING_VALUE",
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePermissionSetProvisioningStatusCommandInput - {@link DescribePermissionSetProvisioningStatusCommandInput}
 * @returns {@link DescribePermissionSetProvisioningStatusCommandOutput}
 * @see {@link DescribePermissionSetProvisioningStatusCommandInput} for command's `input` shape.
 * @see {@link DescribePermissionSetProvisioningStatusCommandOutput} for command's `response` shape.
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
export class DescribePermissionSetProvisioningStatusCommand extends $Command<
  DescribePermissionSetProvisioningStatusCommandInput,
  DescribePermissionSetProvisioningStatusCommandOutput,
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
  constructor(readonly input: DescribePermissionSetProvisioningStatusCommandInput) {
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
  ): Handler<
    DescribePermissionSetProvisioningStatusCommandInput,
    DescribePermissionSetProvisioningStatusCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribePermissionSetProvisioningStatusCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "DescribePermissionSetProvisioningStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SWBExternalService",
        operation: "DescribePermissionSetProvisioningStatus",
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
    input: DescribePermissionSetProvisioningStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribePermissionSetProvisioningStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePermissionSetProvisioningStatusCommandOutput> {
    return de_DescribePermissionSetProvisioningStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
