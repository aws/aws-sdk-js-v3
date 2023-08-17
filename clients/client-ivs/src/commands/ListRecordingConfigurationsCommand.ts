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

import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { ListRecordingConfigurationsRequest, ListRecordingConfigurationsResponse } from "../models/models_0";
import {
  de_ListRecordingConfigurationsCommand,
  se_ListRecordingConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRecordingConfigurationsCommand}.
 */
export interface ListRecordingConfigurationsCommandInput extends ListRecordingConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListRecordingConfigurationsCommand}.
 */
export interface ListRecordingConfigurationsCommandOutput
  extends ListRecordingConfigurationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets summary information about all recording configurations in your account, in the
 *         Amazon Web Services region where the API request is processed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, ListRecordingConfigurationsCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, ListRecordingConfigurationsCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const input = { // ListRecordingConfigurationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRecordingConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecordingConfigurationsResponse
 * //   recordingConfigurations: [ // RecordingConfigurationList // required
 * //     { // RecordingConfigurationSummary
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       destinationConfiguration: { // DestinationConfiguration
 * //         s3: { // S3DestinationConfiguration
 * //           bucketName: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       state: "STRING_VALUE", // required
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecordingConfigurationsCommandInput - {@link ListRecordingConfigurationsCommandInput}
 * @returns {@link ListRecordingConfigurationsCommandOutput}
 * @see {@link ListRecordingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListRecordingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 */
export class ListRecordingConfigurationsCommand extends $Command<
  ListRecordingConfigurationsCommandInput,
  ListRecordingConfigurationsCommandOutput,
  IvsClientResolvedConfig
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
  constructor(readonly input: ListRecordingConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRecordingConfigurationsCommandInput, ListRecordingConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRecordingConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "ListRecordingConfigurationsCommand";
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
  private serialize(input: ListRecordingConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRecordingConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRecordingConfigurationsCommandOutput> {
    return de_ListRecordingConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
