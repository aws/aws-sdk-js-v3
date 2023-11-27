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
import { UpdatePodIdentityAssociationRequest, UpdatePodIdentityAssociationResponse } from "../models/models_0";
import {
  de_UpdatePodIdentityAssociationCommand,
  se_UpdatePodIdentityAssociationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdatePodIdentityAssociationCommand}.
 */
export interface UpdatePodIdentityAssociationCommandInput extends UpdatePodIdentityAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePodIdentityAssociationCommand}.
 */
export interface UpdatePodIdentityAssociationCommandOutput
  extends UpdatePodIdentityAssociationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates a EKS Pod Identity association. Only the IAM role can be changed; an association can't be moved
 *             between clusters, namespaces, or service accounts. If you need to edit the namespace
 *             or service account, you need to remove the association and then create a new
 *             association with your desired settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdatePodIdentityAssociationCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdatePodIdentityAssociationCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // UpdatePodIdentityAssociationRequest
 *   clusterName: "STRING_VALUE", // required
 *   associationId: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE",
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new UpdatePodIdentityAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePodIdentityAssociationResponse
 * //   association: { // PodIdentityAssociation
 * //     clusterName: "STRING_VALUE",
 * //     namespace: "STRING_VALUE",
 * //     serviceAccount: "STRING_VALUE",
 * //     roleArn: "STRING_VALUE",
 * //     associationArn: "STRING_VALUE",
 * //     associationId: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePodIdentityAssociationCommandInput - {@link UpdatePodIdentityAssociationCommandInput}
 * @returns {@link UpdatePodIdentityAssociationCommandOutput}
 * @see {@link UpdatePodIdentityAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdatePodIdentityAssociationCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
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
export class UpdatePodIdentityAssociationCommand extends $Command<
  UpdatePodIdentityAssociationCommandInput,
  UpdatePodIdentityAssociationCommandOutput,
  EKSClientResolvedConfig
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
  constructor(readonly input: UpdatePodIdentityAssociationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePodIdentityAssociationCommandInput, UpdatePodIdentityAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePodIdentityAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "UpdatePodIdentityAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWesleyFrontend",
        operation: "UpdatePodIdentityAssociation",
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
  private serialize(input: UpdatePodIdentityAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdatePodIdentityAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdatePodIdentityAssociationCommandOutput> {
    return de_UpdatePodIdentityAssociationCommand(output, context);
  }
}
