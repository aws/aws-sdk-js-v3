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
  UpdateLakeFormationIdentityCenterConfigurationRequest,
  UpdateLakeFormationIdentityCenterConfigurationResponse,
} from "../models/models_0";
import {
  de_UpdateLakeFormationIdentityCenterConfigurationCommand,
  se_UpdateLakeFormationIdentityCenterConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateLakeFormationIdentityCenterConfigurationCommand}.
 */
export interface UpdateLakeFormationIdentityCenterConfigurationCommandInput
  extends UpdateLakeFormationIdentityCenterConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLakeFormationIdentityCenterConfigurationCommand}.
 */
export interface UpdateLakeFormationIdentityCenterConfigurationCommandOutput
  extends UpdateLakeFormationIdentityCenterConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates the IAM Identity Center connection parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, UpdateLakeFormationIdentityCenterConfigurationCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, UpdateLakeFormationIdentityCenterConfigurationCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // UpdateLakeFormationIdentityCenterConfigurationRequest
 *   CatalogId: "STRING_VALUE",
 *   ApplicationStatus: "ENABLED" || "DISABLED",
 *   ExternalFiltering: { // ExternalFilteringConfiguration
 *     Status: "ENABLED" || "DISABLED", // required
 *     AuthorizedTargets: [ // ScopeTargets // required
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateLakeFormationIdentityCenterConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLakeFormationIdentityCenterConfigurationCommandInput - {@link UpdateLakeFormationIdentityCenterConfigurationCommandInput}
 * @returns {@link UpdateLakeFormationIdentityCenterConfigurationCommandOutput}
 * @see {@link UpdateLakeFormationIdentityCenterConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateLakeFormationIdentityCenterConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
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
export class UpdateLakeFormationIdentityCenterConfigurationCommand extends $Command<
  UpdateLakeFormationIdentityCenterConfigurationCommandInput,
  UpdateLakeFormationIdentityCenterConfigurationCommandOutput,
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
  constructor(readonly input: UpdateLakeFormationIdentityCenterConfigurationCommandInput) {
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
    UpdateLakeFormationIdentityCenterConfigurationCommandInput,
    UpdateLakeFormationIdentityCenterConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        UpdateLakeFormationIdentityCenterConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "UpdateLakeFormationIdentityCenterConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLakeFormation",
        operation: "UpdateLakeFormationIdentityCenterConfiguration",
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
    input: UpdateLakeFormationIdentityCenterConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateLakeFormationIdentityCenterConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateLakeFormationIdentityCenterConfigurationCommandOutput> {
    return de_UpdateLakeFormationIdentityCenterConfigurationCommand(output, context);
  }
}
