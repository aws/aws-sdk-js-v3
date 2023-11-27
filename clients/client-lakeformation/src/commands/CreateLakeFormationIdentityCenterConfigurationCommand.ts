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
  CreateLakeFormationIdentityCenterConfigurationRequest,
  CreateLakeFormationIdentityCenterConfigurationResponse,
} from "../models/models_0";
import {
  de_CreateLakeFormationIdentityCenterConfigurationCommand,
  se_CreateLakeFormationIdentityCenterConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLakeFormationIdentityCenterConfigurationCommand}.
 */
export interface CreateLakeFormationIdentityCenterConfigurationCommandInput
  extends CreateLakeFormationIdentityCenterConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateLakeFormationIdentityCenterConfigurationCommand}.
 */
export interface CreateLakeFormationIdentityCenterConfigurationCommandOutput
  extends CreateLakeFormationIdentityCenterConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates an IAM Identity Center connection with Lake Formation to allow IAM Identity Center users and groups to access Data Catalog resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, CreateLakeFormationIdentityCenterConfigurationCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, CreateLakeFormationIdentityCenterConfigurationCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // CreateLakeFormationIdentityCenterConfigurationRequest
 *   CatalogId: "STRING_VALUE",
 *   InstanceArn: "STRING_VALUE",
 *   ExternalFiltering: { // ExternalFilteringConfiguration
 *     Status: "ENABLED" || "DISABLED", // required
 *     AuthorizedTargets: [ // ScopeTargets // required
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new CreateLakeFormationIdentityCenterConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateLakeFormationIdentityCenterConfigurationResponse
 * //   ApplicationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLakeFormationIdentityCenterConfigurationCommandInput - {@link CreateLakeFormationIdentityCenterConfigurationCommandInput}
 * @returns {@link CreateLakeFormationIdentityCenterConfigurationCommandOutput}
 * @see {@link CreateLakeFormationIdentityCenterConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateLakeFormationIdentityCenterConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
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
export class CreateLakeFormationIdentityCenterConfigurationCommand extends $Command<
  CreateLakeFormationIdentityCenterConfigurationCommandInput,
  CreateLakeFormationIdentityCenterConfigurationCommandOutput,
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
  constructor(readonly input: CreateLakeFormationIdentityCenterConfigurationCommandInput) {
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
    CreateLakeFormationIdentityCenterConfigurationCommandInput,
    CreateLakeFormationIdentityCenterConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        CreateLakeFormationIdentityCenterConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "CreateLakeFormationIdentityCenterConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLakeFormation",
        operation: "CreateLakeFormationIdentityCenterConfiguration",
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
    input: CreateLakeFormationIdentityCenterConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateLakeFormationIdentityCenterConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateLakeFormationIdentityCenterConfigurationCommandOutput> {
    return de_CreateLakeFormationIdentityCenterConfigurationCommand(output, context);
  }
}
