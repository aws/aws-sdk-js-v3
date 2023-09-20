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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetPartitionIndexesRequest, GetPartitionIndexesResponse } from "../models/models_1";
import { de_GetPartitionIndexesCommand, se_GetPartitionIndexesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPartitionIndexesCommand}.
 */
export interface GetPartitionIndexesCommandInput extends GetPartitionIndexesRequest {}
/**
 * @public
 *
 * The output of {@link GetPartitionIndexesCommand}.
 */
export interface GetPartitionIndexesCommandOutput extends GetPartitionIndexesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the partition indexes associated with a table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetPartitionIndexesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetPartitionIndexesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetPartitionIndexesRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetPartitionIndexesCommand(input);
 * const response = await client.send(command);
 * // { // GetPartitionIndexesResponse
 * //   PartitionIndexDescriptorList: [ // PartitionIndexDescriptorList
 * //     { // PartitionIndexDescriptor
 * //       IndexName: "STRING_VALUE", // required
 * //       Keys: [ // KeySchemaElementList // required
 * //         { // KeySchemaElement
 * //           Name: "STRING_VALUE", // required
 * //           Type: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       IndexStatus: "CREATING" || "ACTIVE" || "DELETING" || "FAILED", // required
 * //       BackfillErrors: [ // BackfillErrors
 * //         { // BackfillError
 * //           Code: "ENCRYPTED_PARTITION_ERROR" || "INTERNAL_ERROR" || "INVALID_PARTITION_TYPE_DATA_ERROR" || "MISSING_PARTITION_VALUE_ERROR" || "UNSUPPORTED_PARTITION_CHARACTER_ERROR",
 * //           Partitions: [ // BackfillErroredPartitionsList
 * //             { // PartitionValueList
 * //               Values: [ // ValueStringList // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPartitionIndexesCommandInput - {@link GetPartitionIndexesCommandInput}
 * @returns {@link GetPartitionIndexesCommandOutput}
 * @see {@link GetPartitionIndexesCommandInput} for command's `input` shape.
 * @see {@link GetPartitionIndexesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The <code>CreatePartitions</code> API was called on a table that has indexes enabled.	</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class GetPartitionIndexesCommand extends $Command<
  GetPartitionIndexesCommandInput,
  GetPartitionIndexesCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: GetPartitionIndexesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPartitionIndexesCommandInput, GetPartitionIndexesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPartitionIndexesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetPartitionIndexesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetPartitionIndexes",
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
  private serialize(input: GetPartitionIndexesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPartitionIndexesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPartitionIndexesCommandOutput> {
    return de_GetPartitionIndexesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
