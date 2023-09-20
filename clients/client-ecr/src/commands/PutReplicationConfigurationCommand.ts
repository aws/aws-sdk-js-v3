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
import { PutReplicationConfigurationRequest, PutReplicationConfigurationResponse } from "../models/models_0";
import { de_PutReplicationConfigurationCommand, se_PutReplicationConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutReplicationConfigurationCommand}.
 */
export interface PutReplicationConfigurationCommandInput extends PutReplicationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutReplicationConfigurationCommand}.
 */
export interface PutReplicationConfigurationCommandOutput
  extends PutReplicationConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates the replication configuration for a registry. The existing
 *             replication configuration for a repository can be retrieved with the <a>DescribeRegistry</a> API action. The first time the
 *             PutReplicationConfiguration API is called, a service-linked IAM role is created in
 *             your account for the replication process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html">Using
 *                 service-linked roles for Amazon ECR</a> in the
 *             <i>Amazon Elastic Container Registry User Guide</i>.</p>
 *          <note>
 *             <p>When configuring cross-account replication, the destination account must grant the
 *                 source account permission to replicate. This permission is controlled using a
 *                 registry permissions policy. For more information, see <a>PutRegistryPolicy</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutReplicationConfigurationCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutReplicationConfigurationCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // PutReplicationConfigurationRequest
 *   replicationConfiguration: { // ReplicationConfiguration
 *     rules: [ // ReplicationRuleList // required
 *       { // ReplicationRule
 *         destinations: [ // ReplicationDestinationList // required
 *           { // ReplicationDestination
 *             region: "STRING_VALUE", // required
 *             registryId: "STRING_VALUE", // required
 *           },
 *         ],
 *         repositoryFilters: [ // RepositoryFilterList
 *           { // RepositoryFilter
 *             filter: "STRING_VALUE", // required
 *             filterType: "PREFIX_MATCH", // required
 *           },
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new PutReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutReplicationConfigurationResponse
 * //   replicationConfiguration: { // ReplicationConfiguration
 * //     rules: [ // ReplicationRuleList // required
 * //       { // ReplicationRule
 * //         destinations: [ // ReplicationDestinationList // required
 * //           { // ReplicationDestination
 * //             region: "STRING_VALUE", // required
 * //             registryId: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         repositoryFilters: [ // RepositoryFilterList
 * //           { // RepositoryFilter
 * //             filter: "STRING_VALUE", // required
 * //             filterType: "PREFIX_MATCH", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param PutReplicationConfigurationCommandInput - {@link PutReplicationConfigurationCommandInput}
 * @returns {@link PutReplicationConfigurationCommandOutput}
 * @see {@link PutReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutReplicationConfigurationCommandOutput} for command's `response` shape.
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
export class PutReplicationConfigurationCommand extends $Command<
  PutReplicationConfigurationCommandInput,
  PutReplicationConfigurationCommandOutput,
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
  constructor(readonly input: PutReplicationConfigurationCommandInput) {
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
  ): Handler<PutReplicationConfigurationCommandInput, PutReplicationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutReplicationConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "PutReplicationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerRegistry_V20150921",
        operation: "PutReplicationConfiguration",
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
  private serialize(input: PutReplicationConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutReplicationConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutReplicationConfigurationCommandOutput> {
    return de_PutReplicationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
