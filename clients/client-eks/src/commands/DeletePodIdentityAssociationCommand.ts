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
import { DeletePodIdentityAssociationRequest, DeletePodIdentityAssociationResponse } from "../models/models_0";
import {
  de_DeletePodIdentityAssociationCommand,
  se_DeletePodIdentityAssociationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeletePodIdentityAssociationCommand}.
 */
export interface DeletePodIdentityAssociationCommandInput extends DeletePodIdentityAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeletePodIdentityAssociationCommand}.
 */
export interface DeletePodIdentityAssociationCommandOutput
  extends DeletePodIdentityAssociationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes a EKS Pod Identity association.</p>
 *          <p>The temporary Amazon Web Services credentials from the previous IAM role session might still be valid until the session expiry. If you need to immediately revoke the temporary session credentials, then go to the role in the IAM console.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeletePodIdentityAssociationCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeletePodIdentityAssociationCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // DeletePodIdentityAssociationRequest
 *   clusterName: "STRING_VALUE", // required
 *   associationId: "STRING_VALUE", // required
 * };
 * const command = new DeletePodIdentityAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DeletePodIdentityAssociationResponse
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
 * @param DeletePodIdentityAssociationCommandInput - {@link DeletePodIdentityAssociationCommandInput}
 * @returns {@link DeletePodIdentityAssociationCommandOutput}
 * @see {@link DeletePodIdentityAssociationCommandInput} for command's `input` shape.
 * @see {@link DeletePodIdentityAssociationCommandOutput} for command's `response` shape.
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
 *                 <code>ListClusters</code>. You can view your available managed node groups with
 *                 <code>ListNodegroups</code>. Amazon EKS clusters and node groups are Amazon Web Services Region specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 */
export class DeletePodIdentityAssociationCommand extends $Command<
  DeletePodIdentityAssociationCommandInput,
  DeletePodIdentityAssociationCommandOutput,
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
  constructor(readonly input: DeletePodIdentityAssociationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePodIdentityAssociationCommandInput, DeletePodIdentityAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeletePodIdentityAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DeletePodIdentityAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWesleyFrontend",
        operation: "DeletePodIdentityAssociation",
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
  private serialize(input: DeletePodIdentityAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeletePodIdentityAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeletePodIdentityAssociationCommandOutput> {
    return de_DeletePodIdentityAssociationCommand(output, context);
  }
}
