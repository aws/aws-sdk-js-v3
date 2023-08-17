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

import {
  DeleteDataLakeOrganizationConfigurationRequest,
  DeleteDataLakeOrganizationConfigurationResponse,
} from "../models/models_0";
import {
  de_DeleteDataLakeOrganizationConfigurationCommand,
  se_DeleteDataLakeOrganizationConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataLakeOrganizationConfigurationCommand}.
 */
export interface DeleteDataLakeOrganizationConfigurationCommandInput
  extends DeleteDataLakeOrganizationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataLakeOrganizationConfigurationCommand}.
 */
export interface DeleteDataLakeOrganizationConfigurationCommandOutput
  extends DeleteDataLakeOrganizationConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Turns off automatic enablement of Amazon Security Lake for member accounts that are added to an organization in Organizations. Only the delegated
 *          Security Lake administrator for an organization can perform this operation. If the delegated Security Lake administrator performs this operation, new member
 *          accounts won't automatically contribute data to the data lake.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, DeleteDataLakeOrganizationConfigurationCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, DeleteDataLakeOrganizationConfigurationCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const input = { // DeleteDataLakeOrganizationConfigurationRequest
 *   autoEnableNewAccount: [ // DataLakeAutoEnableNewAccountConfigurationList // required
 *     { // DataLakeAutoEnableNewAccountConfiguration
 *       region: "STRING_VALUE", // required
 *       sources: [ // AwsLogSourceResourceList // required
 *         { // AwsLogSourceResource
 *           sourceName: "ROUTE53" || "VPC_FLOW" || "SH_FINDINGS" || "CLOUD_TRAIL_MGMT" || "LAMBDA_EXECUTION" || "S3_DATA",
 *           sourceVersion: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new DeleteDataLakeOrganizationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDataLakeOrganizationConfigurationCommandInput - {@link DeleteDataLakeOrganizationConfigurationCommandInput}
 * @returns {@link DeleteDataLakeOrganizationConfigurationCommandOutput}
 * @see {@link DeleteDataLakeOrganizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteDataLakeOrganizationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally
 *          occurs when the previous write did not have time to propagate to the host serving the
 *          current request. A retry (with appropriate backoff logic) is the recommended response to
 *          this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link SecurityLakeServiceException}
 * <p>Base exception class for all service exceptions from SecurityLake service.</p>
 *
 */
export class DeleteDataLakeOrganizationConfigurationCommand extends $Command<
  DeleteDataLakeOrganizationConfigurationCommandInput,
  DeleteDataLakeOrganizationConfigurationCommandOutput,
  SecurityLakeClientResolvedConfig
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
  constructor(readonly input: DeleteDataLakeOrganizationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteDataLakeOrganizationConfigurationCommandInput,
    DeleteDataLakeOrganizationConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DeleteDataLakeOrganizationConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "DeleteDataLakeOrganizationConfigurationCommand";
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
  private serialize(
    input: DeleteDataLakeOrganizationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteDataLakeOrganizationConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteDataLakeOrganizationConfigurationCommandOutput> {
    return de_DeleteDataLakeOrganizationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
