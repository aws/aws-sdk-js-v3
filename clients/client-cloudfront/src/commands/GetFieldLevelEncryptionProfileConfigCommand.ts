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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import {
  GetFieldLevelEncryptionProfileConfigRequest,
  GetFieldLevelEncryptionProfileConfigResult,
} from "../models/models_1";
import {
  de_GetFieldLevelEncryptionProfileConfigCommand,
  se_GetFieldLevelEncryptionProfileConfigCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetFieldLevelEncryptionProfileConfigCommand}.
 */
export interface GetFieldLevelEncryptionProfileConfigCommandInput extends GetFieldLevelEncryptionProfileConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetFieldLevelEncryptionProfileConfigCommand}.
 */
export interface GetFieldLevelEncryptionProfileConfigCommandOutput
  extends GetFieldLevelEncryptionProfileConfigResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Get the field-level encryption profile configuration information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetFieldLevelEncryptionProfileConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetFieldLevelEncryptionProfileConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetFieldLevelEncryptionProfileConfigRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetFieldLevelEncryptionProfileConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetFieldLevelEncryptionProfileConfigResult
 * //   FieldLevelEncryptionProfileConfig: { // FieldLevelEncryptionProfileConfig
 * //     Name: "STRING_VALUE", // required
 * //     CallerReference: "STRING_VALUE", // required
 * //     Comment: "STRING_VALUE",
 * //     EncryptionEntities: { // EncryptionEntities
 * //       Quantity: Number("int"), // required
 * //       Items: [ // EncryptionEntityList
 * //         { // EncryptionEntity
 * //           PublicKeyId: "STRING_VALUE", // required
 * //           ProviderId: "STRING_VALUE", // required
 * //           FieldPatterns: { // FieldPatterns
 * //             Quantity: Number("int"), // required
 * //             Items: [ // FieldPatternList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFieldLevelEncryptionProfileConfigCommandInput - {@link GetFieldLevelEncryptionProfileConfigCommandInput}
 * @returns {@link GetFieldLevelEncryptionProfileConfigCommandOutput}
 * @see {@link GetFieldLevelEncryptionProfileConfigCommandInput} for command's `input` shape.
 * @see {@link GetFieldLevelEncryptionProfileConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchFieldLevelEncryptionProfile} (client fault)
 *  <p>The specified profile for field-level encryption doesn't exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class GetFieldLevelEncryptionProfileConfigCommand extends $Command<
  GetFieldLevelEncryptionProfileConfigCommandInput,
  GetFieldLevelEncryptionProfileConfigCommandOutput,
  CloudFrontClientResolvedConfig
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
  constructor(readonly input: GetFieldLevelEncryptionProfileConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFieldLevelEncryptionProfileConfigCommandInput, GetFieldLevelEncryptionProfileConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFieldLevelEncryptionProfileConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetFieldLevelEncryptionProfileConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Cloudfront2020_05_31",
        operation: "GetFieldLevelEncryptionProfileConfig",
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
    input: GetFieldLevelEncryptionProfileConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetFieldLevelEncryptionProfileConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetFieldLevelEncryptionProfileConfigCommandOutput> {
    return de_GetFieldLevelEncryptionProfileConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
