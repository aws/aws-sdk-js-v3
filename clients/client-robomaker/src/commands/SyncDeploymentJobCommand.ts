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

import { SyncDeploymentJobRequest, SyncDeploymentJobResponse } from "../models/models_0";
import { de_SyncDeploymentJobCommand, se_SyncDeploymentJobCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SyncDeploymentJobCommand}.
 */
export interface SyncDeploymentJobCommandInput extends SyncDeploymentJobRequest {}
/**
 * @public
 *
 * The output of {@link SyncDeploymentJobCommand}.
 */
export interface SyncDeploymentJobCommandOutput extends SyncDeploymentJobResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.</p>
 *          <important>
 *             <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, SyncDeploymentJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, SyncDeploymentJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // SyncDeploymentJobRequest
 *   clientRequestToken: "STRING_VALUE", // required
 *   fleet: "STRING_VALUE", // required
 * };
 * const command = new SyncDeploymentJobCommand(input);
 * const response = await client.send(command);
 * // { // SyncDeploymentJobResponse
 * //   arn: "STRING_VALUE",
 * //   fleet: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   deploymentConfig: { // DeploymentConfig
 * //     concurrentDeploymentPercentage: Number("int"),
 * //     failureThresholdPercentage: Number("int"),
 * //     robotDeploymentTimeoutInSeconds: Number("long"),
 * //     downloadConditionFile: { // S3Object
 * //       bucket: "STRING_VALUE", // required
 * //       key: "STRING_VALUE", // required
 * //       etag: "STRING_VALUE",
 * //     },
 * //   },
 * //   deploymentApplicationConfigs: [ // DeploymentApplicationConfigs
 * //     { // DeploymentApplicationConfig
 * //       application: "STRING_VALUE", // required
 * //       applicationVersion: "STRING_VALUE", // required
 * //       launchConfig: { // DeploymentLaunchConfig
 * //         packageName: "STRING_VALUE", // required
 * //         preLaunchFile: "STRING_VALUE",
 * //         launchFile: "STRING_VALUE", // required
 * //         postLaunchFile: "STRING_VALUE",
 * //         environmentVariables: { // EnvironmentVariableMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   failureReason: "STRING_VALUE",
 * //   failureCode: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param SyncDeploymentJobCommandInput - {@link SyncDeploymentJobCommandInput}
 * @returns {@link SyncDeploymentJobCommandOutput}
 * @see {@link SyncDeploymentJobCommandInput} for command's `input` shape.
 * @see {@link SyncDeploymentJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link ConcurrentDeploymentException} (client fault)
 *  <p>The failure percentage threshold percentage was met.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The request uses the same client token as a previous, but non-identical request. Do not
 *          reuse a client token with different requests, unless the requests are identical. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *          stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 */
export class SyncDeploymentJobCommand extends $Command<
  SyncDeploymentJobCommandInput,
  SyncDeploymentJobCommandOutput,
  RoboMakerClientResolvedConfig
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
  constructor(readonly input: SyncDeploymentJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SyncDeploymentJobCommandInput, SyncDeploymentJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SyncDeploymentJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "SyncDeploymentJobCommand";
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
  private serialize(input: SyncDeploymentJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SyncDeploymentJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SyncDeploymentJobCommandOutput> {
    return de_SyncDeploymentJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
