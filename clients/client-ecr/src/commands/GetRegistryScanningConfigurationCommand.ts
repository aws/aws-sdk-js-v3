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

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { GetRegistryScanningConfigurationRequest, GetRegistryScanningConfigurationResponse } from "../models/models_0";
import {
  de_GetRegistryScanningConfigurationCommand,
  se_GetRegistryScanningConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRegistryScanningConfigurationCommand}.
 */
export interface GetRegistryScanningConfigurationCommandInput extends GetRegistryScanningConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetRegistryScanningConfigurationCommand}.
 */
export interface GetRegistryScanningConfigurationCommandOutput
  extends GetRegistryScanningConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the scanning configuration for a registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetRegistryScanningConfigurationCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetRegistryScanningConfigurationCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = {};
 * const command = new GetRegistryScanningConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetRegistryScanningConfigurationResponse
 * //   registryId: "STRING_VALUE",
 * //   scanningConfiguration: { // RegistryScanningConfiguration
 * //     scanType: "BASIC" || "ENHANCED",
 * //     rules: [ // RegistryScanningRuleList
 * //       { // RegistryScanningRule
 * //         scanFrequency: "SCAN_ON_PUSH" || "CONTINUOUS_SCAN" || "MANUAL", // required
 * //         repositoryFilters: [ // ScanningRepositoryFilterList // required
 * //           { // ScanningRepositoryFilter
 * //             filter: "STRING_VALUE", // required
 * //             filterType: "WILDCARD", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRegistryScanningConfigurationCommandInput - {@link GetRegistryScanningConfigurationCommandInput}
 * @returns {@link GetRegistryScanningConfigurationCommandOutput}
 * @see {@link GetRegistryScanningConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetRegistryScanningConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 */
export class GetRegistryScanningConfigurationCommand extends $Command<
  GetRegistryScanningConfigurationCommandInput,
  GetRegistryScanningConfigurationCommandOutput,
  ECRClientResolvedConfig
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
  constructor(readonly input: GetRegistryScanningConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRegistryScanningConfigurationCommandInput, GetRegistryScanningConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRegistryScanningConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "GetRegistryScanningConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerRegistry_V20150921",
        operation: "GetRegistryScanningConfiguration",
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
    input: GetRegistryScanningConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetRegistryScanningConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRegistryScanningConfigurationCommandOutput> {
    return de_GetRegistryScanningConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
