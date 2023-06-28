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

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import {
  BatchGetRepositoryScanningConfigurationRequest,
  BatchGetRepositoryScanningConfigurationResponse,
} from "../models/models_0";
import {
  de_BatchGetRepositoryScanningConfigurationCommand,
  se_BatchGetRepositoryScanningConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetRepositoryScanningConfigurationCommand}.
 */
export interface BatchGetRepositoryScanningConfigurationCommandInput
  extends BatchGetRepositoryScanningConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetRepositoryScanningConfigurationCommand}.
 */
export interface BatchGetRepositoryScanningConfigurationCommandOutput
  extends BatchGetRepositoryScanningConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the scanning configuration for one or more repositories.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, BatchGetRepositoryScanningConfigurationCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, BatchGetRepositoryScanningConfigurationCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // BatchGetRepositoryScanningConfigurationRequest
 *   repositoryNames: [ // ScanningConfigurationRepositoryNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetRepositoryScanningConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetRepositoryScanningConfigurationResponse
 * //   scanningConfigurations: [ // RepositoryScanningConfigurationList
 * //     { // RepositoryScanningConfiguration
 * //       repositoryArn: "STRING_VALUE",
 * //       repositoryName: "STRING_VALUE",
 * //       scanOnPush: true || false,
 * //       scanFrequency: "STRING_VALUE",
 * //       appliedScanFilters: [ // ScanningRepositoryFilterList
 * //         { // ScanningRepositoryFilter
 * //           filter: "STRING_VALUE", // required
 * //           filterType: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   failures: [ // RepositoryScanningConfigurationFailureList
 * //     { // RepositoryScanningConfigurationFailure
 * //       repositoryName: "STRING_VALUE",
 * //       failureCode: "STRING_VALUE",
 * //       failureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetRepositoryScanningConfigurationCommandInput - {@link BatchGetRepositoryScanningConfigurationCommandInput}
 * @returns {@link BatchGetRepositoryScanningConfigurationCommandOutput}
 * @see {@link BatchGetRepositoryScanningConfigurationCommandInput} for command's `input` shape.
 * @see {@link BatchGetRepositoryScanningConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
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
export class BatchGetRepositoryScanningConfigurationCommand extends $Command<
  BatchGetRepositoryScanningConfigurationCommandInput,
  BatchGetRepositoryScanningConfigurationCommandOutput,
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
  constructor(readonly input: BatchGetRepositoryScanningConfigurationCommandInput) {
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
  ): Handler<
    BatchGetRepositoryScanningConfigurationCommandInput,
    BatchGetRepositoryScanningConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        BatchGetRepositoryScanningConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "BatchGetRepositoryScanningConfigurationCommand";
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
    input: BatchGetRepositoryScanningConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchGetRepositoryScanningConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetRepositoryScanningConfigurationCommandOutput> {
    return de_BatchGetRepositoryScanningConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
