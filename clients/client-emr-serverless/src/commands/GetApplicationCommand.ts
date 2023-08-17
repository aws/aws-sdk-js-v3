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

import { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRServerlessClient";
import { GetApplicationRequest, GetApplicationResponse } from "../models/models_0";
import { de_GetApplicationCommand, se_GetApplicationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetApplicationCommand}.
 */
export interface GetApplicationCommandInput extends GetApplicationRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationCommand}.
 */
export interface GetApplicationCommandOutput extends GetApplicationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Displays detailed information about a specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, GetApplicationCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, GetApplicationCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * const client = new EMRServerlessClient(config);
 * const input = { // GetApplicationRequest
 *   applicationId: "STRING_VALUE", // required
 * };
 * const command = new GetApplicationCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationResponse
 * //   application: { // Application
 * //     applicationId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE", // required
 * //     releaseLabel: "STRING_VALUE", // required
 * //     type: "STRING_VALUE", // required
 * //     state: "STRING_VALUE", // required
 * //     stateDetails: "STRING_VALUE",
 * //     initialCapacity: { // InitialCapacityConfigMap
 * //       "<keys>": { // InitialCapacityConfig
 * //         workerCount: Number("long"), // required
 * //         workerConfiguration: { // WorkerResourceConfig
 * //           cpu: "STRING_VALUE", // required
 * //           memory: "STRING_VALUE", // required
 * //           disk: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     maximumCapacity: { // MaximumAllowedResources
 * //       cpu: "STRING_VALUE", // required
 * //       memory: "STRING_VALUE", // required
 * //       disk: "STRING_VALUE",
 * //     },
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     autoStartConfiguration: { // AutoStartConfig
 * //       enabled: true || false,
 * //     },
 * //     autoStopConfiguration: { // AutoStopConfig
 * //       enabled: true || false,
 * //       idleTimeoutMinutes: Number("int"),
 * //     },
 * //     networkConfiguration: { // NetworkConfiguration
 * //       subnetIds: [ // SubnetIds
 * //         "STRING_VALUE",
 * //       ],
 * //       securityGroupIds: [ // SecurityGroupIds
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     architecture: "STRING_VALUE",
 * //     imageConfiguration: { // ImageConfiguration
 * //       imageUri: "STRING_VALUE", // required
 * //       resolvedImageDigest: "STRING_VALUE",
 * //     },
 * //     workerTypeSpecifications: { // WorkerTypeSpecificationMap
 * //       "<keys>": { // WorkerTypeSpecification
 * //         imageConfiguration: {
 * //           imageUri: "STRING_VALUE", // required
 * //           resolvedImageDigest: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetApplicationCommandInput - {@link GetApplicationCommandInput}
 * @returns {@link GetApplicationCommandOutput}
 * @see {@link GetApplicationCommandInput} for command's `input` shape.
 * @see {@link GetApplicationCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link EMRServerlessServiceException}
 * <p>Base exception class for all service exceptions from EMRServerless service.</p>
 *
 */
export class GetApplicationCommand extends $Command<
  GetApplicationCommandInput,
  GetApplicationCommandOutput,
  EMRServerlessClientResolvedConfig
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
  constructor(readonly input: GetApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetApplicationCommandInput, GetApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRServerlessClient";
    const commandName = "GetApplicationCommand";
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
  private serialize(input: GetApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetApplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetApplicationCommandOutput> {
    return de_GetApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
