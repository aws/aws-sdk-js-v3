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

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DeleteAddonRequest, DeleteAddonResponse } from "../models/models_0";
import { de_DeleteAddonCommand, se_DeleteAddonCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteAddonCommand}.
 */
export interface DeleteAddonCommandInput extends DeleteAddonRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAddonCommand}.
 */
export interface DeleteAddonCommandOutput extends DeleteAddonResponse, __MetadataBearer {}

/**
 * @public
 * <p>Delete an Amazon EKS add-on.</p>
 *          <p>When you remove the add-on, it will also be deleted from the cluster. You can always
 *             manually start an add-on on the cluster using the Kubernetes API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeleteAddonCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeleteAddonCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // DeleteAddonRequest
 *   clusterName: "STRING_VALUE", // required
 *   addonName: "STRING_VALUE", // required
 *   preserve: true || false,
 * };
 * const command = new DeleteAddonCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAddonResponse
 * //   addon: { // Addon
 * //     addonName: "STRING_VALUE",
 * //     clusterName: "STRING_VALUE",
 * //     status: "CREATING" || "ACTIVE" || "CREATE_FAILED" || "UPDATING" || "DELETING" || "DELETE_FAILED" || "DEGRADED" || "UPDATE_FAILED",
 * //     addonVersion: "STRING_VALUE",
 * //     health: { // AddonHealth
 * //       issues: [ // AddonIssueList
 * //         { // AddonIssue
 * //           code: "AccessDenied" || "InternalFailure" || "ClusterUnreachable" || "InsufficientNumberOfReplicas" || "ConfigurationConflict" || "AdmissionRequestDenied" || "UnsupportedAddonModification" || "K8sResourceNotFound",
 * //           message: "STRING_VALUE",
 * //           resourceIds: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     addonArn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     serviceAccountRoleArn: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     publisher: "STRING_VALUE",
 * //     owner: "STRING_VALUE",
 * //     marketplaceInformation: { // MarketplaceInformation
 * //       productId: "STRING_VALUE",
 * //       productUrl: "STRING_VALUE",
 * //     },
 * //     configurationValues: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteAddonCommandInput - {@link DeleteAddonCommandInput}
 * @returns {@link DeleteAddonCommandOutput}
 * @see {@link DeleteAddonCommandInput} for command's `input` shape.
 * @see {@link DeleteAddonCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of a user that doesn't have permissions to use the action
 *             or resource or specifying an identifier that is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <a>ListClusters</a>. You can view your available managed node groups with
 *                 <a>ListNodegroups</a>. Amazon EKS clusters and node groups are
 *             Region-specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 */
export class DeleteAddonCommand extends $Command<
  DeleteAddonCommandInput,
  DeleteAddonCommandOutput,
  EKSClientResolvedConfig
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
  constructor(readonly input: DeleteAddonCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAddonCommandInput, DeleteAddonCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteAddonCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DeleteAddonCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWesleyFrontend",
        operation: "DeleteAddon",
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
  private serialize(input: DeleteAddonCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteAddonCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAddonCommandOutput> {
    return de_DeleteAddonCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
