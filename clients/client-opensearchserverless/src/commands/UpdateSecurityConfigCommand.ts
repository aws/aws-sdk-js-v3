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

import { UpdateSecurityConfigRequest, UpdateSecurityConfigResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { de_UpdateSecurityConfigCommand, se_UpdateSecurityConfigCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSecurityConfigCommand}.
 */
export interface UpdateSecurityConfigCommandInput extends UpdateSecurityConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSecurityConfigCommand}.
 */
export interface UpdateSecurityConfigCommandOutput extends UpdateSecurityConfigResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a security configuration for OpenSearch Serverless. For more information, see
 *             <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML
 *                 authentication for Amazon OpenSearch Serverless</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, UpdateSecurityConfigCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, UpdateSecurityConfigCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // UpdateSecurityConfigRequest
 *   id: "STRING_VALUE", // required
 *   configVersion: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   samlOptions: { // SamlConfigOptions
 *     metadata: "STRING_VALUE", // required
 *     userAttribute: "STRING_VALUE",
 *     groupAttribute: "STRING_VALUE",
 *     sessionTimeout: Number("int"),
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateSecurityConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSecurityConfigResponse
 * //   securityConfigDetail: { // SecurityConfigDetail
 * //     id: "STRING_VALUE",
 * //     type: "STRING_VALUE",
 * //     configVersion: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     samlOptions: { // SamlConfigOptions
 * //       metadata: "STRING_VALUE", // required
 * //       userAttribute: "STRING_VALUE",
 * //       groupAttribute: "STRING_VALUE",
 * //       sessionTimeout: Number("int"),
 * //     },
 * //     createdDate: Number("long"),
 * //     lastModifiedDate: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSecurityConfigCommandInput - {@link UpdateSecurityConfigCommandInput}
 * @returns {@link UpdateSecurityConfigCommandOutput}
 * @see {@link UpdateSecurityConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityConfigCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>When creating a resource, thrown when a resource with the same name already exists
 *             or is being created. When deleting a resource, thrown when the resource is not in
 *             the ACTIVE or FAILED state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when accessing or deleting a resource that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the HTTP request contains invalid input or is missing required
 *             input.</p>
 *
 * @throws {@link OpenSearchServerlessServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchServerless service.</p>
 *
 */
export class UpdateSecurityConfigCommand extends $Command<
  UpdateSecurityConfigCommandInput,
  UpdateSecurityConfigCommandOutput,
  OpenSearchServerlessClientResolvedConfig
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
  constructor(readonly input: UpdateSecurityConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSecurityConfigCommandInput, UpdateSecurityConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSecurityConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchServerlessClient";
    const commandName = "UpdateSecurityConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OpenSearchServerless",
        operation: "UpdateSecurityConfig",
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
  private serialize(input: UpdateSecurityConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateSecurityConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSecurityConfigCommandOutput> {
    return de_UpdateSecurityConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
