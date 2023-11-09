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
import { CreateEksAnywhereSubscriptionRequest, CreateEksAnywhereSubscriptionResponse } from "../models/models_0";
import {
  de_CreateEksAnywhereSubscriptionCommand,
  se_CreateEksAnywhereSubscriptionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateEksAnywhereSubscriptionCommand}.
 */
export interface CreateEksAnywhereSubscriptionCommandInput extends CreateEksAnywhereSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link CreateEksAnywhereSubscriptionCommand}.
 */
export interface CreateEksAnywhereSubscriptionCommandOutput
  extends CreateEksAnywhereSubscriptionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates an EKS Anywhere subscription. When a subscription is created, it is a contract
 *             agreement for the length of the term specified in the request. Licenses that are used to
 *             validate support are provisioned in Amazon Web Services License Manager and the caller account is
 *             granted access to EKS Anywhere Curated Packages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, CreateEksAnywhereSubscriptionCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreateEksAnywhereSubscriptionCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // CreateEksAnywhereSubscriptionRequest
 *   name: "STRING_VALUE", // required
 *   term: { // EksAnywhereSubscriptionTerm
 *     duration: Number("int"),
 *     unit: "MONTHS",
 *   },
 *   licenseQuantity: Number("int"),
 *   licenseType: "Cluster",
 *   autoRenew: true || false,
 *   clientRequestToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateEksAnywhereSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // CreateEksAnywhereSubscriptionResponse
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
 * @param CreateEksAnywhereSubscriptionCommandInput - {@link CreateEksAnywhereSubscriptionCommandInput}
 * @returns {@link CreateEksAnywhereSubscriptionCommandOutput}
 * @see {@link CreateEksAnywhereSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateEksAnywhereSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">IAM principal</a> that doesn't have permissions to use
 *             the action or resource or specifying an identifier that is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>You have encountered a service limit on the specified resource.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Back off and retry the operation.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 */
export class CreateEksAnywhereSubscriptionCommand extends $Command<
  CreateEksAnywhereSubscriptionCommandInput,
  CreateEksAnywhereSubscriptionCommandOutput,
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
  constructor(readonly input: CreateEksAnywhereSubscriptionCommandInput) {
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
  ): Handler<CreateEksAnywhereSubscriptionCommandInput, CreateEksAnywhereSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEksAnywhereSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "CreateEksAnywhereSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWesleyFrontend",
        operation: "CreateEksAnywhereSubscription",
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
  private serialize(input: CreateEksAnywhereSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateEksAnywhereSubscriptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateEksAnywhereSubscriptionCommandOutput> {
    return de_CreateEksAnywhereSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
