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

import { GetDeploymentsRequest, GetDeploymentsResult } from "../models/models_0";
import { de_GetDeploymentsCommand, se_GetDeploymentsCommand } from "../protocols/Aws_restJson1";
import { SagemakerEdgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SagemakerEdgeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDeploymentsCommand}.
 */
export interface GetDeploymentsCommandInput extends GetDeploymentsRequest {}
/**
 * @public
 *
 * The output of {@link GetDeploymentsCommand}.
 */
export interface GetDeploymentsCommandOutput extends GetDeploymentsResult, __MetadataBearer {}

/**
 * @public
 * <p>Use to get the active deployments from a device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SagemakerEdgeClient, GetDeploymentsCommand } from "@aws-sdk/client-sagemaker-edge"; // ES Modules import
 * // const { SagemakerEdgeClient, GetDeploymentsCommand } = require("@aws-sdk/client-sagemaker-edge"); // CommonJS import
 * const client = new SagemakerEdgeClient(config);
 * const input = { // GetDeploymentsRequest
 *   DeviceName: "STRING_VALUE", // required
 *   DeviceFleetName: "STRING_VALUE", // required
 * };
 * const command = new GetDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // GetDeploymentsResult
 * //   Deployments: [ // EdgeDeployments
 * //     { // EdgeDeployment
 * //       DeploymentName: "STRING_VALUE",
 * //       Type: "Model",
 * //       FailureHandlingPolicy: "ROLLBACK_ON_FAILURE" || "DO_NOTHING",
 * //       Definitions: [ // Definitions
 * //         { // Definition
 * //           ModelHandle: "STRING_VALUE",
 * //           S3Url: "STRING_VALUE",
 * //           Checksum: { // Checksum
 * //             Type: "SHA1",
 * //             Sum: "STRING_VALUE",
 * //           },
 * //           State: "DEPLOY" || "UNDEPLOY",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDeploymentsCommandInput - {@link GetDeploymentsCommandInput}
 * @returns {@link GetDeploymentsCommandOutput}
 * @see {@link GetDeploymentsCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link SagemakerEdgeClientResolvedConfig | config} for SagemakerEdgeClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (client fault)
 *  <p>An internal failure occurred. Try your request again. If the problem
 *       persists, contact Amazon Web Services customer support.</p>
 *
 * @throws {@link SagemakerEdgeServiceException}
 * <p>Base exception class for all service exceptions from SagemakerEdge service.</p>
 *
 */
export class GetDeploymentsCommand extends $Command<
  GetDeploymentsCommandInput,
  GetDeploymentsCommandOutput,
  SagemakerEdgeClientResolvedConfig
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
  constructor(readonly input: GetDeploymentsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SagemakerEdgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDeploymentsCommandInput, GetDeploymentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDeploymentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SagemakerEdgeClient";
    const commandName = "GetDeploymentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSageMakerEdge",
        operation: "GetDeployments",
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
  private serialize(input: GetDeploymentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDeploymentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeploymentsCommandOutput> {
    return de_GetDeploymentsCommand(output, context);
  }
}
