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

import {
  ListServiceQuotaIncreaseRequestsInTemplateRequest,
  ListServiceQuotaIncreaseRequestsInTemplateResponse,
} from "../models/models_0";
import {
  de_ListServiceQuotaIncreaseRequestsInTemplateCommand,
  se_ListServiceQuotaIncreaseRequestsInTemplateCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListServiceQuotaIncreaseRequestsInTemplateCommand}.
 */
export interface ListServiceQuotaIncreaseRequestsInTemplateCommandInput
  extends ListServiceQuotaIncreaseRequestsInTemplateRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceQuotaIncreaseRequestsInTemplateCommand}.
 */
export interface ListServiceQuotaIncreaseRequestsInTemplateCommandOutput
  extends ListServiceQuotaIncreaseRequestsInTemplateResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the quota increase requests in the specified quota request template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListServiceQuotaIncreaseRequestsInTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListServiceQuotaIncreaseRequestsInTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const input = { // ListServiceQuotaIncreaseRequestsInTemplateRequest
 *   ServiceCode: "STRING_VALUE",
 *   AwsRegion: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListServiceQuotaIncreaseRequestsInTemplateCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceQuotaIncreaseRequestsInTemplateResponse
 * //   ServiceQuotaIncreaseRequestInTemplateList: [ // ServiceQuotaIncreaseRequestInTemplateList
 * //     { // ServiceQuotaIncreaseRequestInTemplate
 * //       ServiceCode: "STRING_VALUE",
 * //       ServiceName: "STRING_VALUE",
 * //       QuotaCode: "STRING_VALUE",
 * //       QuotaName: "STRING_VALUE",
 * //       DesiredValue: Number("double"),
 * //       AwsRegion: "STRING_VALUE",
 * //       Unit: "STRING_VALUE",
 * //       GlobalQuota: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceQuotaIncreaseRequestsInTemplateCommandInput - {@link ListServiceQuotaIncreaseRequestsInTemplateCommandInput}
 * @returns {@link ListServiceQuotaIncreaseRequestsInTemplateCommandOutput}
 * @see {@link ListServiceQuotaIncreaseRequestsInTemplateCommandInput} for command's `input` shape.
 * @see {@link ListServiceQuotaIncreaseRequestsInTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for ServiceQuotasClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permission to perform this action.</p>
 *
 * @throws {@link AWSServiceAccessNotEnabledException} (client fault)
 *  <p>The action you attempted is not allowed unless Service Access with Service Quotas is enabled in
 *             your organization.</p>
 *
 * @throws {@link DependencyAccessDeniedException} (client fault)
 *  <p>You can't perform this action because a dependency does not have access.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Invalid input was provided.</p>
 *
 * @throws {@link NoAvailableOrganizationException} (client fault)
 *  <p>The Amazon Web Services account making this call is not a member of an organization.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>Something went wrong.</p>
 *
 * @throws {@link TemplatesNotAvailableInRegionException} (client fault)
 *  <p>The Service Quotas template is not available in this Amazon Web Services Region.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Due to throttling, the request was denied. Slow down the rate of request calls, or
 *             request an increase for this quota.</p>
 *
 * @throws {@link ServiceQuotasServiceException}
 * <p>Base exception class for all service exceptions from ServiceQuotas service.</p>
 *
 */
export class ListServiceQuotaIncreaseRequestsInTemplateCommand extends $Command<
  ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  ListServiceQuotaIncreaseRequestsInTemplateCommandOutput,
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
  constructor(readonly input: ListServiceQuotaIncreaseRequestsInTemplateCommandInput) {
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
  ): Handler<
    ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
    ListServiceQuotaIncreaseRequestsInTemplateCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListServiceQuotaIncreaseRequestsInTemplateCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "ListServiceQuotaIncreaseRequestsInTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ServiceQuotasV20190624",
        operation: "ListServiceQuotaIncreaseRequestsInTemplate",
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
    input: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListServiceQuotaIncreaseRequestsInTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput> {
    return de_ListServiceQuotaIncreaseRequestsInTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
