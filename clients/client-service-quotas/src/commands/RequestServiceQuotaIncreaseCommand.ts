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

import { RequestServiceQuotaIncreaseRequest, RequestServiceQuotaIncreaseResponse } from "../models/models_0";
import { de_RequestServiceQuotaIncreaseCommand, se_RequestServiceQuotaIncreaseCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RequestServiceQuotaIncreaseCommand}.
 */
export interface RequestServiceQuotaIncreaseCommandInput extends RequestServiceQuotaIncreaseRequest {}
/**
 * @public
 *
 * The output of {@link RequestServiceQuotaIncreaseCommand}.
 */
export interface RequestServiceQuotaIncreaseCommandOutput
  extends RequestServiceQuotaIncreaseResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Submits a quota increase request for the specified quota.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, RequestServiceQuotaIncreaseCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, RequestServiceQuotaIncreaseCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const input = { // RequestServiceQuotaIncreaseRequest
 *   ServiceCode: "STRING_VALUE", // required
 *   QuotaCode: "STRING_VALUE", // required
 *   DesiredValue: Number("double"), // required
 *   ContextId: "STRING_VALUE",
 * };
 * const command = new RequestServiceQuotaIncreaseCommand(input);
 * const response = await client.send(command);
 * // { // RequestServiceQuotaIncreaseResponse
 * //   RequestedQuota: { // RequestedServiceQuotaChange
 * //     Id: "STRING_VALUE",
 * //     CaseId: "STRING_VALUE",
 * //     ServiceCode: "STRING_VALUE",
 * //     ServiceName: "STRING_VALUE",
 * //     QuotaCode: "STRING_VALUE",
 * //     QuotaName: "STRING_VALUE",
 * //     DesiredValue: Number("double"),
 * //     Status: "PENDING" || "CASE_OPENED" || "APPROVED" || "DENIED" || "CASE_CLOSED" || "NOT_APPROVED" || "INVALID_REQUEST",
 * //     Created: new Date("TIMESTAMP"),
 * //     LastUpdated: new Date("TIMESTAMP"),
 * //     Requester: "STRING_VALUE",
 * //     QuotaArn: "STRING_VALUE",
 * //     GlobalQuota: true || false,
 * //     Unit: "STRING_VALUE",
 * //     QuotaRequestedAtLevel: "ACCOUNT" || "RESOURCE" || "ALL",
 * //     QuotaContext: { // QuotaContextInfo
 * //       ContextScope: "RESOURCE" || "ACCOUNT",
 * //       ContextScopeType: "STRING_VALUE",
 * //       ContextId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param RequestServiceQuotaIncreaseCommandInput - {@link RequestServiceQuotaIncreaseCommandInput}
 * @returns {@link RequestServiceQuotaIncreaseCommandOutput}
 * @see {@link RequestServiceQuotaIncreaseCommandInput} for command's `input` shape.
 * @see {@link RequestServiceQuotaIncreaseCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for ServiceQuotasClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permission to perform this action.</p>
 *
 * @throws {@link DependencyAccessDeniedException} (client fault)
 *  <p>You can't perform this action because a dependency does not have access.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Invalid input was provided.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The resource is in an invalid state.</p>
 *
 * @throws {@link NoSuchResourceException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link QuotaExceededException} (client fault)
 *  <p>You have exceeded your service quota. To perform the requested action, remove some of
 *             the relevant resources, or use Service Quotas to request a service quota increase.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>Something went wrong.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Due to throttling, the request was denied. Slow down the rate of request calls, or
 *             request an increase for this quota.</p>
 *
 * @throws {@link ServiceQuotasServiceException}
 * <p>Base exception class for all service exceptions from ServiceQuotas service.</p>
 *
 */
export class RequestServiceQuotaIncreaseCommand extends $Command<
  RequestServiceQuotaIncreaseCommandInput,
  RequestServiceQuotaIncreaseCommandOutput,
  ServiceQuotasClientResolvedConfig
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
  constructor(readonly input: RequestServiceQuotaIncreaseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceQuotasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RequestServiceQuotaIncreaseCommandInput, RequestServiceQuotaIncreaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RequestServiceQuotaIncreaseCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "RequestServiceQuotaIncreaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ServiceQuotasV20190624",
        operation: "RequestServiceQuotaIncrease",
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
  private serialize(input: RequestServiceQuotaIncreaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RequestServiceQuotaIncreaseCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RequestServiceQuotaIncreaseCommandOutput> {
    return de_RequestServiceQuotaIncreaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
