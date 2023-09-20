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

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { CreateCodeSigningConfigRequest, CreateCodeSigningConfigResponse } from "../models/models_0";
import { de_CreateCodeSigningConfigCommand, se_CreateCodeSigningConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCodeSigningConfigCommand}.
 */
export interface CreateCodeSigningConfigCommandInput extends CreateCodeSigningConfigRequest {}
/**
 * @public
 *
 * The output of {@link CreateCodeSigningConfigCommand}.
 */
export interface CreateCodeSigningConfigCommandOutput extends CreateCodeSigningConfigResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a code signing configuration. A <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">code signing configuration</a> defines a list of
 *       allowed signing profiles and defines the code-signing validation policy (action to be taken if deployment
 *       validation checks fail). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, CreateCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, CreateCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // CreateCodeSigningConfigRequest
 *   Description: "STRING_VALUE",
 *   AllowedPublishers: { // AllowedPublishers
 *     SigningProfileVersionArns: [ // SigningProfileVersionArns // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   CodeSigningPolicies: { // CodeSigningPolicies
 *     UntrustedArtifactOnDeployment: "Warn" || "Enforce",
 *   },
 * };
 * const command = new CreateCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreateCodeSigningConfigResponse
 * //   CodeSigningConfig: { // CodeSigningConfig
 * //     CodeSigningConfigId: "STRING_VALUE", // required
 * //     CodeSigningConfigArn: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     AllowedPublishers: { // AllowedPublishers
 * //       SigningProfileVersionArns: [ // SigningProfileVersionArns // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     CodeSigningPolicies: { // CodeSigningPolicies
 * //       UntrustedArtifactOnDeployment: "Warn" || "Enforce",
 * //     },
 * //     LastModified: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCodeSigningConfigCommandInput - {@link CreateCodeSigningConfigCommandInput}
 * @returns {@link CreateCodeSigningConfigCommandOutput}
 * @see {@link CreateCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link CreateCodeSigningConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 */
export class CreateCodeSigningConfigCommand extends $Command<
  CreateCodeSigningConfigCommandInput,
  CreateCodeSigningConfigCommandOutput,
  LambdaClientResolvedConfig
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
  constructor(readonly input: CreateCodeSigningConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCodeSigningConfigCommandInput, CreateCodeSigningConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCodeSigningConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "CreateCodeSigningConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGirApiService",
        operation: "CreateCodeSigningConfig",
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
  private serialize(input: CreateCodeSigningConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCodeSigningConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCodeSigningConfigCommandOutput> {
    return de_CreateCodeSigningConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
