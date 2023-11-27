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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import {
  DescribeLakeFormationIdentityCenterConfigurationRequest,
  DescribeLakeFormationIdentityCenterConfigurationResponse,
} from "../models/models_0";
import {
  de_DescribeLakeFormationIdentityCenterConfigurationCommand,
  se_DescribeLakeFormationIdentityCenterConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLakeFormationIdentityCenterConfigurationCommand}.
 */
export interface DescribeLakeFormationIdentityCenterConfigurationCommandInput
  extends DescribeLakeFormationIdentityCenterConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLakeFormationIdentityCenterConfigurationCommand}.
 */
export interface DescribeLakeFormationIdentityCenterConfigurationCommandOutput
  extends DescribeLakeFormationIdentityCenterConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the instance ARN and application ARN for the connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, DescribeLakeFormationIdentityCenterConfigurationCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, DescribeLakeFormationIdentityCenterConfigurationCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // DescribeLakeFormationIdentityCenterConfigurationRequest
 *   CatalogId: "STRING_VALUE",
 * };
 * const command = new DescribeLakeFormationIdentityCenterConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLakeFormationIdentityCenterConfigurationResponse
 * //   CatalogId: "STRING_VALUE",
 * //   InstanceArn: "STRING_VALUE",
 * //   ApplicationArn: "STRING_VALUE",
 * //   ExternalFiltering: { // ExternalFilteringConfiguration
 * //     Status: "ENABLED" || "DISABLED", // required
 * //     AuthorizedTargets: [ // ScopeTargets // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeLakeFormationIdentityCenterConfigurationCommandInput - {@link DescribeLakeFormationIdentityCenterConfigurationCommandInput}
 * @returns {@link DescribeLakeFormationIdentityCenterConfigurationCommandOutput}
 * @see {@link DescribeLakeFormationIdentityCenterConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeLakeFormationIdentityCenterConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 */
export class DescribeLakeFormationIdentityCenterConfigurationCommand extends $Command<
  DescribeLakeFormationIdentityCenterConfigurationCommandInput,
  DescribeLakeFormationIdentityCenterConfigurationCommandOutput,
  LakeFormationClientResolvedConfig
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
  constructor(readonly input: DescribeLakeFormationIdentityCenterConfigurationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeLakeFormationIdentityCenterConfigurationCommandInput,
    DescribeLakeFormationIdentityCenterConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeLakeFormationIdentityCenterConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "DescribeLakeFormationIdentityCenterConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLakeFormation",
        operation: "DescribeLakeFormationIdentityCenterConfiguration",
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
    input: DescribeLakeFormationIdentityCenterConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeLakeFormationIdentityCenterConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLakeFormationIdentityCenterConfigurationCommandOutput> {
    return de_DescribeLakeFormationIdentityCenterConfigurationCommand(output, context);
  }
}
