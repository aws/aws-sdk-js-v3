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

import { GetAWSOrganizationsAccessStatusInput, GetAWSOrganizationsAccessStatusOutput } from "../models/models_0";
import {
  de_GetAWSOrganizationsAccessStatusCommand,
  se_GetAWSOrganizationsAccessStatusCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAWSOrganizationsAccessStatusCommand}.
 */
export interface GetAWSOrganizationsAccessStatusCommandInput extends GetAWSOrganizationsAccessStatusInput {}
/**
 * @public
 *
 * The output of {@link GetAWSOrganizationsAccessStatusCommand}.
 */
export interface GetAWSOrganizationsAccessStatusCommandOutput
  extends GetAWSOrganizationsAccessStatusOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Get the Access Status for Organizations portfolio share feature. This API can only be
 *          called by the management account in the organization or by a delegated admin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, GetAWSOrganizationsAccessStatusCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, GetAWSOrganizationsAccessStatusCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = {};
 * const command = new GetAWSOrganizationsAccessStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetAWSOrganizationsAccessStatusOutput
 * //   AccessStatus: "ENABLED" || "UNDER_CHANGE" || "DISABLED",
 * // };
 *
 * ```
 *
 * @param GetAWSOrganizationsAccessStatusCommandInput - {@link GetAWSOrganizationsAccessStatusCommandInput}
 * @returns {@link GetAWSOrganizationsAccessStatusCommandOutput}
 * @see {@link GetAWSOrganizationsAccessStatusCommandInput} for command's `input` shape.
 * @see {@link GetAWSOrganizationsAccessStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 */
export class GetAWSOrganizationsAccessStatusCommand extends $Command<
  GetAWSOrganizationsAccessStatusCommandInput,
  GetAWSOrganizationsAccessStatusCommandOutput,
  ServiceCatalogClientResolvedConfig
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
  constructor(readonly input: GetAWSOrganizationsAccessStatusCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAWSOrganizationsAccessStatusCommandInput, GetAWSOrganizationsAccessStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAWSOrganizationsAccessStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "GetAWSOrganizationsAccessStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWS242ServiceCatalogService",
        operation: "GetAWSOrganizationsAccessStatus",
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
    input: GetAWSOrganizationsAccessStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetAWSOrganizationsAccessStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAWSOrganizationsAccessStatusCommandOutput> {
    return de_GetAWSOrganizationsAccessStatusCommand(output, context);
  }
}
