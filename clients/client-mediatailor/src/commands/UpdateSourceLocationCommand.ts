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

import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { UpdateSourceLocationRequest, UpdateSourceLocationResponse } from "../models/models_0";
import { de_UpdateSourceLocationCommand, se_UpdateSourceLocationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSourceLocationCommand}.
 */
export interface UpdateSourceLocationCommandInput extends UpdateSourceLocationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSourceLocationCommand}.
 */
export interface UpdateSourceLocationCommandOutput extends UpdateSourceLocationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a source location. A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, UpdateSourceLocationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, UpdateSourceLocationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // UpdateSourceLocationRequest
 *   AccessConfiguration: { // AccessConfiguration
 *     AccessType: "S3_SIGV4" || "SECRETS_MANAGER_ACCESS_TOKEN" || "AUTODETECT_SIGV4",
 *     SecretsManagerAccessTokenConfiguration: { // SecretsManagerAccessTokenConfiguration
 *       HeaderName: "STRING_VALUE",
 *       SecretArn: "STRING_VALUE",
 *       SecretStringKey: "STRING_VALUE",
 *     },
 *   },
 *   DefaultSegmentDeliveryConfiguration: { // DefaultSegmentDeliveryConfiguration
 *     BaseUrl: "STRING_VALUE",
 *   },
 *   HttpConfiguration: { // HttpConfiguration
 *     BaseUrl: "STRING_VALUE", // required
 *   },
 *   SegmentDeliveryConfigurations: [ // __listOfSegmentDeliveryConfiguration
 *     { // SegmentDeliveryConfiguration
 *       BaseUrl: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *     },
 *   ],
 *   SourceLocationName: "STRING_VALUE", // required
 * };
 * const command = new UpdateSourceLocationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSourceLocationResponse
 * //   AccessConfiguration: { // AccessConfiguration
 * //     AccessType: "S3_SIGV4" || "SECRETS_MANAGER_ACCESS_TOKEN" || "AUTODETECT_SIGV4",
 * //     SecretsManagerAccessTokenConfiguration: { // SecretsManagerAccessTokenConfiguration
 * //       HeaderName: "STRING_VALUE",
 * //       SecretArn: "STRING_VALUE",
 * //       SecretStringKey: "STRING_VALUE",
 * //     },
 * //   },
 * //   Arn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   DefaultSegmentDeliveryConfiguration: { // DefaultSegmentDeliveryConfiguration
 * //     BaseUrl: "STRING_VALUE",
 * //   },
 * //   HttpConfiguration: { // HttpConfiguration
 * //     BaseUrl: "STRING_VALUE", // required
 * //   },
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   SegmentDeliveryConfigurations: [ // __listOfSegmentDeliveryConfiguration
 * //     { // SegmentDeliveryConfiguration
 * //       BaseUrl: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   SourceLocationName: "STRING_VALUE",
 * //   Tags: { // __mapOf__string
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSourceLocationCommandInput - {@link UpdateSourceLocationCommandInput}
 * @returns {@link UpdateSourceLocationCommandOutput}
 * @see {@link UpdateSourceLocationCommandInput} for command's `input` shape.
 * @see {@link UpdateSourceLocationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 */
export class UpdateSourceLocationCommand extends $Command<
  UpdateSourceLocationCommandInput,
  UpdateSourceLocationCommandOutput,
  MediaTailorClientResolvedConfig
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
  constructor(readonly input: UpdateSourceLocationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaTailorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSourceLocationCommandInput, UpdateSourceLocationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSourceLocationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "UpdateSourceLocationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaTailor",
        operation: "UpdateSourceLocation",
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
  private serialize(input: UpdateSourceLocationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateSourceLocationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSourceLocationCommandOutput> {
    return de_UpdateSourceLocationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
