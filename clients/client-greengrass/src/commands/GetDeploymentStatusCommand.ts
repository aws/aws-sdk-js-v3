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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetDeploymentStatusRequest, GetDeploymentStatusResponse } from "../models/models_0";
import { de_GetDeploymentStatusCommand, se_GetDeploymentStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDeploymentStatusCommand}.
 */
export interface GetDeploymentStatusCommandInput extends GetDeploymentStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetDeploymentStatusCommand}.
 */
export interface GetDeploymentStatusCommandOutput extends GetDeploymentStatusResponse, __MetadataBearer {}

/**
 * @public
 * Returns the status of a deployment.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetDeploymentStatusCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetDeploymentStatusCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // GetDeploymentStatusRequest
 *   DeploymentId: "STRING_VALUE", // required
 *   GroupId: "STRING_VALUE", // required
 * };
 * const command = new GetDeploymentStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetDeploymentStatusResponse
 * //   DeploymentStatus: "STRING_VALUE",
 * //   DeploymentType: "NewDeployment" || "Redeployment" || "ResetDeployment" || "ForceResetDeployment",
 * //   ErrorDetails: [ // ErrorDetails
 * //     { // ErrorDetail
 * //       DetailedErrorCode: "STRING_VALUE",
 * //       DetailedErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ErrorMessage: "STRING_VALUE",
 * //   UpdatedAt: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDeploymentStatusCommandInput - {@link GetDeploymentStatusCommandInput}
 * @returns {@link GetDeploymentStatusCommandOutput}
 * @see {@link GetDeploymentStatusCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentStatusCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 */
export class GetDeploymentStatusCommand extends $Command<
  GetDeploymentStatusCommandInput,
  GetDeploymentStatusCommandOutput,
  GreengrassClientResolvedConfig
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
  constructor(readonly input: GetDeploymentStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDeploymentStatusCommandInput, GetDeploymentStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDeploymentStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "GetDeploymentStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Greengrass",
        operation: "GetDeploymentStatus",
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
  private serialize(input: GetDeploymentStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDeploymentStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeploymentStatusCommandOutput> {
    return de_GetDeploymentStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
