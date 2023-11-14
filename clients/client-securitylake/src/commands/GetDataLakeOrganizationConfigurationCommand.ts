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
  GetDataLakeOrganizationConfigurationRequest,
  GetDataLakeOrganizationConfigurationResponse,
} from "../models/models_0";
import {
  de_GetDataLakeOrganizationConfigurationCommand,
  se_GetDataLakeOrganizationConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDataLakeOrganizationConfigurationCommand}.
 */
export interface GetDataLakeOrganizationConfigurationCommandInput extends GetDataLakeOrganizationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetDataLakeOrganizationConfigurationCommand}.
 */
export interface GetDataLakeOrganizationConfigurationCommandOutput
  extends GetDataLakeOrganizationConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the configuration that will be automatically set up for accounts added to the
 *          organization after the organization has onboarded to Amazon Security Lake. This API does not take
 *          input parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, GetDataLakeOrganizationConfigurationCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, GetDataLakeOrganizationConfigurationCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const input = {};
 * const command = new GetDataLakeOrganizationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetDataLakeOrganizationConfigurationResponse
 * //   autoEnableNewAccount: [ // DataLakeAutoEnableNewAccountConfigurationList
 * //     { // DataLakeAutoEnableNewAccountConfiguration
 * //       region: "STRING_VALUE", // required
 * //       sources: [ // AwsLogSourceResourceList // required
 * //         { // AwsLogSourceResource
 * //           sourceName: "ROUTE53" || "VPC_FLOW" || "SH_FINDINGS" || "CLOUD_TRAIL_MGMT" || "LAMBDA_EXECUTION" || "S3_DATA",
 * //           sourceVersion: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDataLakeOrganizationConfigurationCommandInput - {@link GetDataLakeOrganizationConfigurationCommandInput}
 * @returns {@link GetDataLakeOrganizationConfigurationCommandOutput}
 * @see {@link GetDataLakeOrganizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetDataLakeOrganizationConfigurationCommandOutput} for command's `response` shape.
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
export class GetDataLakeOrganizationConfigurationCommand extends $Command<
  GetDataLakeOrganizationConfigurationCommandInput,
  GetDataLakeOrganizationConfigurationCommandOutput,
  SecurityLakeClientResolvedConfig
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
  constructor(readonly input: GetDataLakeOrganizationConfigurationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDataLakeOrganizationConfigurationCommandInput, GetDataLakeOrganizationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDataLakeOrganizationConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "GetDataLakeOrganizationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityLake",
        operation: "GetDataLakeOrganizationConfiguration",
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
    input: GetDataLakeOrganizationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetDataLakeOrganizationConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDataLakeOrganizationConfigurationCommandOutput> {
    return de_GetDataLakeOrganizationConfigurationCommand(output, context);
  }
}
