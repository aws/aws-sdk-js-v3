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
import { DeleteEksAnywhereSubscriptionRequest, DeleteEksAnywhereSubscriptionResponse } from "../models/models_0";
import {
  de_DeleteEksAnywhereSubscriptionCommand,
  se_DeleteEksAnywhereSubscriptionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteEksAnywhereSubscriptionCommand}.
 */
export interface DeleteEksAnywhereSubscriptionCommandInput extends DeleteEksAnywhereSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEksAnywhereSubscriptionCommand}.
 */
export interface DeleteEksAnywhereSubscriptionCommandOutput
  extends DeleteEksAnywhereSubscriptionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes an expired / inactive subscription. Deleting inactive subscriptions removes
 *             them from the Amazon Web Services Management Console view and from list/describe API responses.
 *             Subscriptions can only be cancelled within 7 days of creation, and are cancelled by
 *             creating a ticket in the Amazon Web Services Support Center. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeleteEksAnywhereSubscriptionCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeleteEksAnywhereSubscriptionCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // DeleteEksAnywhereSubscriptionRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteEksAnywhereSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEksAnywhereSubscriptionResponse
 * //   subscription: { // EksAnywhereSubscription
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     effectiveDate: new Date("TIMESTAMP"),
 * //     expirationDate: new Date("TIMESTAMP"),
 * //     licenseQuantity: Number("int"),
 * //     licenseType: "Cluster",
 * //     term: { // EksAnywhereSubscriptionTerm
 * //       duration: Number("int"),
 * //       unit: "MONTHS",
 * //     },
 * //     status: "STRING_VALUE",
 * //     autoRenew: true || false,
 * //     licenseArns: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteEksAnywhereSubscriptionCommandInput - {@link DeleteEksAnywhereSubscriptionCommandInput}
 * @returns {@link DeleteEksAnywhereSubscriptionCommandOutput}
 * @see {@link DeleteEksAnywhereSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteEksAnywhereSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">IAM principal</a> that doesn't have permissions to use
 *             the action or resource or specifying an identifier that is not valid.</p>
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
export class DeleteEksAnywhereSubscriptionCommand extends $Command<
  DeleteEksAnywhereSubscriptionCommandInput,
  DeleteEksAnywhereSubscriptionCommandOutput,
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
  constructor(readonly input: DeleteEksAnywhereSubscriptionCommandInput) {
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
  ): Handler<DeleteEksAnywhereSubscriptionCommandInput, DeleteEksAnywhereSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteEksAnywhereSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DeleteEksAnywhereSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWesleyFrontend",
        operation: "DeleteEksAnywhereSubscription",
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
  private serialize(input: DeleteEksAnywhereSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteEksAnywhereSubscriptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteEksAnywhereSubscriptionCommandOutput> {
    return de_DeleteEksAnywhereSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
