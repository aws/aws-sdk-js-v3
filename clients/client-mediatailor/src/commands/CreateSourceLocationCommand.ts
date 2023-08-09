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
} from "@smithy/types";

import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { CreateSourceLocationRequest, CreateSourceLocationResponse } from "../models/models_0";
import { de_CreateSourceLocationCommand, se_CreateSourceLocationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSourceLocationCommand}.
 */
export interface CreateSourceLocationCommandInput extends CreateSourceLocationRequest {}
/**
 * @public
 *
 * The output of {@link CreateSourceLocationCommand}.
 */
export interface CreateSourceLocationCommandOutput extends CreateSourceLocationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a source location. A source location is a container for sources. For more information about source locations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html">Working with source locations</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, CreateSourceLocationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, CreateSourceLocationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // CreateSourceLocationRequest
 *   AccessConfiguration: { // AccessConfiguration
 *     AccessType: "S3_SIGV4" || "SECRETS_MANAGER_ACCESS_TOKEN",
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
 *   Tags: { // __mapOf__string
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSourceLocationCommand(input);
 * const response = await client.send(command);
 * // { // CreateSourceLocationResponse
 * //   AccessConfiguration: { // AccessConfiguration
 * //     AccessType: "S3_SIGV4" || "SECRETS_MANAGER_ACCESS_TOKEN",
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
 * @param CreateSourceLocationCommandInput - {@link CreateSourceLocationCommandInput}
 * @returns {@link CreateSourceLocationCommandOutput}
 * @see {@link CreateSourceLocationCommandInput} for command's `input` shape.
 * @see {@link CreateSourceLocationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 */
export class CreateSourceLocationCommand extends $Command<
  CreateSourceLocationCommandInput,
  CreateSourceLocationCommandOutput,
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
  constructor(readonly input: CreateSourceLocationCommandInput) {
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
  ): Handler<CreateSourceLocationCommandInput, CreateSourceLocationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSourceLocationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "CreateSourceLocationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: CreateSourceLocationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSourceLocationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSourceLocationCommandOutput> {
    return de_CreateSourceLocationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
