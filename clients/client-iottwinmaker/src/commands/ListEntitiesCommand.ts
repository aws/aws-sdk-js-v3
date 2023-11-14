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

import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { ListEntitiesRequest, ListEntitiesResponse } from "../models/models_0";
import { de_ListEntitiesCommand, se_ListEntitiesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEntitiesCommand}.
 */
export interface ListEntitiesCommandInput extends ListEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListEntitiesCommand}.
 */
export interface ListEntitiesCommandOutput extends ListEntitiesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all entities in a workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, ListEntitiesCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, ListEntitiesCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const input = { // ListEntitiesRequest
 *   workspaceId: "STRING_VALUE", // required
 *   filters: [ // ListEntitiesFilters
 *     { // ListEntitiesFilter Union: only one key present
 *       parentEntityId: "STRING_VALUE",
 *       componentTypeId: "STRING_VALUE",
 *       externalId: "STRING_VALUE",
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListEntitiesResponse
 * //   entitySummaries: [ // EntitySummaries
 * //     { // EntitySummary
 * //       entityId: "STRING_VALUE", // required
 * //       entityName: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       parentEntityId: "STRING_VALUE",
 * //       status: { // Status
 * //         state: "STRING_VALUE",
 * //         error: { // ErrorDetails
 * //           code: "STRING_VALUE",
 * //           message: "STRING_VALUE",
 * //         },
 * //       },
 * //       description: "STRING_VALUE",
 * //       hasChildEntities: true || false,
 * //       creationDateTime: new Date("TIMESTAMP"), // required
 * //       updateDateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEntitiesCommandInput - {@link ListEntitiesCommandInput}
 * @returns {@link ListEntitiesCommandOutput}
 * @see {@link ListEntitiesCommandInput} for command's `input` shape.
 * @see {@link ListEntitiesCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota was exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Failed</p>
 *
 * @throws {@link IoTTwinMakerServiceException}
 * <p>Base exception class for all service exceptions from IoTTwinMaker service.</p>
 *
 */
export class ListEntitiesCommand extends $Command<
  ListEntitiesCommandInput,
  ListEntitiesCommandOutput,
  IoTTwinMakerClientResolvedConfig
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
  constructor(readonly input: ListEntitiesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTTwinMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEntitiesCommandInput, ListEntitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListEntitiesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTTwinMakerClient";
    const commandName = "ListEntitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIoTTwinMaker",
        operation: "ListEntities",
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
  private serialize(input: ListEntitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEntitiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEntitiesCommandOutput> {
    return de_ListEntitiesCommand(output, context);
  }
}
