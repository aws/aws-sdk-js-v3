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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { ListWavesRequest, ListWavesResponse, ListWavesResponseFilterSensitiveLog } from "../models/models_0";
import { de_ListWavesCommand, se_ListWavesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListWavesCommand}.
 */
export interface ListWavesCommandInput extends ListWavesRequest {}
/**
 * @public
 *
 * The output of {@link ListWavesCommand}.
 */
export interface ListWavesCommandOutput extends ListWavesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves all waves or multiple waves by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListWavesCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListWavesCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // ListWavesRequest
 *   filters: { // ListWavesRequestFilters
 *     waveIDs: [ // WaveIDsFilter
 *       "STRING_VALUE",
 *     ],
 *     isArchived: true || false,
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   accountID: "STRING_VALUE",
 * };
 * const command = new ListWavesCommand(input);
 * const response = await client.send(command);
 * // { // ListWavesResponse
 * //   items: [ // WavesList
 * //     { // Wave
 * //       waveID: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       isArchived: true || false,
 * //       waveAggregatedStatus: { // WaveAggregatedStatus
 * //         lastUpdateDateTime: "STRING_VALUE",
 * //         replicationStartedDateTime: "STRING_VALUE",
 * //         healthStatus: "STRING_VALUE",
 * //         progressStatus: "STRING_VALUE",
 * //         totalApplications: Number("long"),
 * //       },
 * //       creationDateTime: "STRING_VALUE",
 * //       lastModifiedDateTime: "STRING_VALUE",
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWavesCommandInput - {@link ListWavesCommandInput}
 * @returns {@link ListWavesCommandOutput}
 * @see {@link ListWavesCommandInput} for command's `input` shape.
 * @see {@link ListWavesCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 */
export class ListWavesCommand extends $Command<ListWavesCommandInput, ListWavesCommandOutput, MgnClientResolvedConfig> {
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
  constructor(readonly input: ListWavesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWavesCommandInput, ListWavesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListWavesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "ListWavesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListWavesResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ApplicationMigrationService",
        operation: "ListWaves",
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
  private serialize(input: ListWavesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListWavesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWavesCommandOutput> {
    return de_ListWavesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
