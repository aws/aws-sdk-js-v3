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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { StopAppBlockBuilderRequest, StopAppBlockBuilderResult } from "../models/models_0";
import { de_StopAppBlockBuilderCommand, se_StopAppBlockBuilderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopAppBlockBuilderCommand}.
 */
export interface StopAppBlockBuilderCommandInput extends StopAppBlockBuilderRequest {}
/**
 * @public
 *
 * The output of {@link StopAppBlockBuilderCommand}.
 */
export interface StopAppBlockBuilderCommandOutput extends StopAppBlockBuilderResult, __MetadataBearer {}

/**
 * @public
 * <p>Stops an app block builder.</p>
 *          <p>Stopping an app block builder terminates the instance, and the instance state is not
 *             persisted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, StopAppBlockBuilderCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, StopAppBlockBuilderCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // StopAppBlockBuilderRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new StopAppBlockBuilderCommand(input);
 * const response = await client.send(command);
 * // { // StopAppBlockBuilderResult
 * //   AppBlockBuilder: { // AppBlockBuilder
 * //     Arn: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     DisplayName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Platform: "WINDOWS_SERVER_2019", // required
 * //     InstanceType: "STRING_VALUE", // required
 * //     EnableDefaultInternetAccess: true || false,
 * //     IamRoleArn: "STRING_VALUE",
 * //     VpcConfig: { // VpcConfig
 * //       SubnetIds: [ // SubnetIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityGroupIds: [ // SecurityGroupIdList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     State: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED", // required
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     AppBlockBuilderErrors: [ // ResourceErrors
 * //       { // ResourceError
 * //         ErrorCode: "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION" || "NETWORK_INTERFACE_LIMIT_EXCEEDED" || "INTERNAL_SERVICE_ERROR" || "IAM_SERVICE_ROLE_IS_MISSING" || "MACHINE_ROLE_IS_MISSING" || "STS_DISABLED_IN_REGION" || "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION" || "SUBNET_NOT_FOUND" || "IMAGE_NOT_FOUND" || "INVALID_SUBNET_CONFIGURATION" || "SECURITY_GROUPS_NOT_FOUND" || "IGW_NOT_ATTACHED" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION" || "FLEET_STOPPED" || "FLEET_INSTANCE_PROVISIONING_FAILURE" || "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND" || "DOMAIN_JOIN_ERROR_ACCESS_DENIED" || "DOMAIN_JOIN_ERROR_LOGON_FAILURE" || "DOMAIN_JOIN_ERROR_INVALID_PARAMETER" || "DOMAIN_JOIN_ERROR_MORE_DATA" || "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN" || "DOMAIN_JOIN_ERROR_NOT_SUPPORTED" || "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME" || "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED" || "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED" || "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED" || "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR",
 * //         ErrorMessage: "STRING_VALUE",
 * //         ErrorTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     StateChangeReason: { // AppBlockBuilderStateChangeReason
 * //       Code: "INTERNAL_ERROR",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     AccessEndpoints: [ // AccessEndpointList
 * //       { // AccessEndpoint
 * //         EndpointType: "STREAMING", // required
 * //         VpceId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param StopAppBlockBuilderCommandInput - {@link StopAppBlockBuilderCommandInput}
 * @returns {@link StopAppBlockBuilderCommandOutput}
 * @see {@link StopAppBlockBuilderCommandInput} for command's `input` shape.
 * @see {@link StopAppBlockBuilderCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 */
export class StopAppBlockBuilderCommand extends $Command<
  StopAppBlockBuilderCommandInput,
  StopAppBlockBuilderCommandOutput,
  AppStreamClientResolvedConfig
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
  constructor(readonly input: StopAppBlockBuilderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopAppBlockBuilderCommandInput, StopAppBlockBuilderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopAppBlockBuilderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "StopAppBlockBuilderCommand";
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
  private serialize(input: StopAppBlockBuilderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopAppBlockBuilderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopAppBlockBuilderCommandOutput> {
    return de_StopAppBlockBuilderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
