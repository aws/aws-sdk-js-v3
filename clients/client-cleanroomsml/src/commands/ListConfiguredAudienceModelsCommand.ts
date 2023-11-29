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

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { ListConfiguredAudienceModelsRequest, ListConfiguredAudienceModelsResponse } from "../models/models_0";
import {
  de_ListConfiguredAudienceModelsCommand,
  se_ListConfiguredAudienceModelsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListConfiguredAudienceModelsCommand}.
 */
export interface ListConfiguredAudienceModelsCommandInput extends ListConfiguredAudienceModelsRequest {}
/**
 * @public
 *
 * The output of {@link ListConfiguredAudienceModelsCommand}.
 */
export interface ListConfiguredAudienceModelsCommandOutput
  extends ListConfiguredAudienceModelsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the configured audience models.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, ListConfiguredAudienceModelsCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, ListConfiguredAudienceModelsCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // ListConfiguredAudienceModelsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListConfiguredAudienceModelsCommand(input);
 * const response = await client.send(command);
 * // { // ListConfiguredAudienceModelsResponse
 * //   nextToken: "STRING_VALUE",
 * //   configuredAudienceModels: [ // ConfiguredAudienceModelList // required
 * //     { // ConfiguredAudienceModelSummary
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       name: "STRING_VALUE", // required
 * //       audienceModelArn: "STRING_VALUE", // required
 * //       outputConfig: { // ConfiguredAudienceModelOutputConfig
 * //         destination: { // AudienceDestination
 * //           s3Destination: { // S3ConfigMap
 * //             s3Uri: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         roleArn: "STRING_VALUE", // required
 * //       },
 * //       description: "STRING_VALUE",
 * //       configuredAudienceModelArn: "STRING_VALUE", // required
 * //       status: "ACTIVE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListConfiguredAudienceModelsCommandInput - {@link ListConfiguredAudienceModelsCommandInput}
 * @returns {@link ListConfiguredAudienceModelsCommandOutput}
 * @see {@link ListConfiguredAudienceModelsCommandInput} for command's `input` shape.
 * @see {@link ListConfiguredAudienceModelsCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 */
export class ListConfiguredAudienceModelsCommand extends $Command<
  ListConfiguredAudienceModelsCommandInput,
  ListConfiguredAudienceModelsCommandOutput,
  CleanRoomsMLClientResolvedConfig
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
  constructor(readonly input: ListConfiguredAudienceModelsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsMLClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListConfiguredAudienceModelsCommandInput, ListConfiguredAudienceModelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListConfiguredAudienceModelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsMLClient";
    const commandName = "ListConfiguredAudienceModelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSStarkControlService",
        operation: "ListConfiguredAudienceModels",
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
  private serialize(input: ListConfiguredAudienceModelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListConfiguredAudienceModelsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListConfiguredAudienceModelsCommandOutput> {
    return de_ListConfiguredAudienceModelsCommand(output, context);
  }
}
