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
import { CreatePodIdentityAssociationRequest, CreatePodIdentityAssociationResponse } from "../models/models_0";
import {
  de_CreatePodIdentityAssociationCommand,
  se_CreatePodIdentityAssociationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreatePodIdentityAssociationCommand}.
 */
export interface CreatePodIdentityAssociationCommandInput extends CreatePodIdentityAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreatePodIdentityAssociationCommand}.
 */
export interface CreatePodIdentityAssociationCommandOutput
  extends CreatePodIdentityAssociationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates an EKS Pod Identity association between a service account in an Amazon EKS cluster and an IAM role
 *             with <i>EKS Pod Identity</i>. Use EKS Pod Identity to give temporary IAM credentials to
 *             pods and the credentials are rotated automatically.</p>
 *          <p>Amazon EKS Pod Identity associations provide the ability to manage credentials for your applications, similar to the way that 7EC2l instance profiles provide credentials to Amazon EC2 instances.</p>
 *          <p>If a pod uses a service account that has an association, Amazon EKS sets environment variables
 *             in the containers of the pod. The environment variables configure the Amazon Web Services SDKs,
 *             including the Command Line Interface, to use the EKS Pod Identity credentials.</p>
 *          <p>Pod Identity is a simpler method than <i>IAM roles for service
 *                 accounts</i>, as this method doesn't use OIDC identity providers.
 *             Additionally, you can configure a role for Pod Identity once, and reuse it across
 *             clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, CreatePodIdentityAssociationCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreatePodIdentityAssociationCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // CreatePodIdentityAssociationRequest
 *   clusterName: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE", // required
 *   serviceAccount: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   clientRequestToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePodIdentityAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreatePodIdentityAssociationResponse
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
 * @param CreatePodIdentityAssociationCommandInput - {@link CreatePodIdentityAssociationCommandInput}
 * @returns {@link CreatePodIdentityAssociationCommandOutput}
 * @see {@link CreatePodIdentityAssociationCommandInput} for command's `input` shape.
 * @see {@link CreatePodIdentityAssociationCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>You have encountered a service limit on the specified resource.</p>
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
export class CreatePodIdentityAssociationCommand extends $Command<
  CreatePodIdentityAssociationCommandInput,
  CreatePodIdentityAssociationCommandOutput,
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
  constructor(readonly input: CreatePodIdentityAssociationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePodIdentityAssociationCommandInput, CreatePodIdentityAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePodIdentityAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "CreatePodIdentityAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWesleyFrontend",
        operation: "CreatePodIdentityAssociation",
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
  private serialize(input: CreatePodIdentityAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreatePodIdentityAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePodIdentityAssociationCommandOutput> {
    return de_CreatePodIdentityAssociationCommand(output, context);
  }
}
