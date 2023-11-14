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
  ListPermissionSetProvisioningStatusRequest,
  ListPermissionSetProvisioningStatusResponse,
} from "../models/models_0";
import {
  de_ListPermissionSetProvisioningStatusCommand,
  se_ListPermissionSetProvisioningStatusCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPermissionSetProvisioningStatusCommand}.
 */
export interface ListPermissionSetProvisioningStatusCommandInput extends ListPermissionSetProvisioningStatusRequest {}
/**
 * @public
 *
 * The output of {@link ListPermissionSetProvisioningStatusCommand}.
 */
export interface ListPermissionSetProvisioningStatusCommandOutput
  extends ListPermissionSetProvisioningStatusResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the status of the permission set provisioning requests for a specified IAM Identity Center
 *       instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListPermissionSetProvisioningStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListPermissionSetProvisioningStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // ListPermissionSetProvisioningStatusRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filter: { // OperationStatusFilter
 *     Status: "IN_PROGRESS" || "FAILED" || "SUCCEEDED",
 *   },
 * };
 * const command = new ListPermissionSetProvisioningStatusCommand(input);
 * const response = await client.send(command);
 * // { // ListPermissionSetProvisioningStatusResponse
 * //   PermissionSetsProvisioningStatus: [ // PermissionSetProvisioningStatusList
 * //     { // PermissionSetProvisioningStatusMetadata
 * //       Status: "IN_PROGRESS" || "FAILED" || "SUCCEEDED",
 * //       RequestId: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPermissionSetProvisioningStatusCommandInput - {@link ListPermissionSetProvisioningStatusCommandInput}
 * @returns {@link ListPermissionSetProvisioningStatusCommandOutput}
 * @see {@link ListPermissionSetProvisioningStatusCommandInput} for command's `input` shape.
 * @see {@link ListPermissionSetProvisioningStatusCommandOutput} for command's `response` shape.
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
export class ListPermissionSetProvisioningStatusCommand extends $Command<
  ListPermissionSetProvisioningStatusCommandInput,
  ListPermissionSetProvisioningStatusCommandOutput,
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
  constructor(readonly input: ListPermissionSetProvisioningStatusCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPermissionSetProvisioningStatusCommandInput, ListPermissionSetProvisioningStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPermissionSetProvisioningStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "ListPermissionSetProvisioningStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SWBExternalService",
        operation: "ListPermissionSetProvisioningStatus",
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
    input: ListPermissionSetProvisioningStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListPermissionSetProvisioningStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPermissionSetProvisioningStatusCommandOutput> {
    return de_ListPermissionSetProvisioningStatusCommand(output, context);
  }
}
