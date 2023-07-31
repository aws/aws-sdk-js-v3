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

import { ListReadSetsRequest, ListReadSetsResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_ListReadSetsCommand, se_ListReadSetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListReadSetsCommand}.
 */
export interface ListReadSetsCommandInput extends ListReadSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListReadSetsCommand}.
 */
export interface ListReadSetsCommandOutput extends ListReadSetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of read sets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListReadSetsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListReadSetsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // ListReadSetsRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filter: { // ReadSetFilter
 *     name: "STRING_VALUE",
 *     status: "STRING_VALUE",
 *     referenceArn: "STRING_VALUE",
 *     createdAfter: new Date("TIMESTAMP"),
 *     createdBefore: new Date("TIMESTAMP"),
 *     sampleId: "STRING_VALUE",
 *     subjectId: "STRING_VALUE",
 *     generatedFrom: "STRING_VALUE",
 *     creationType: "STRING_VALUE",
 *   },
 * };
 * const command = new ListReadSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListReadSetsResponse
 * //   nextToken: "STRING_VALUE",
 * //   readSets: [ // ReadSetList // required
 * //     { // ReadSetListItem
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       sequenceStoreId: "STRING_VALUE", // required
 * //       subjectId: "STRING_VALUE",
 * //       sampleId: "STRING_VALUE",
 * //       status: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       referenceArn: "STRING_VALUE",
 * //       fileType: "STRING_VALUE", // required
 * //       sequenceInformation: { // SequenceInformation
 * //         totalReadCount: Number("long"),
 * //         totalBaseCount: Number("long"),
 * //         generatedFrom: "STRING_VALUE",
 * //         alignment: "STRING_VALUE",
 * //       },
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       statusMessage: "STRING_VALUE",
 * //       creationType: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListReadSetsCommandInput - {@link ListReadSetsCommandInput}
 * @returns {@link ListReadSetsCommandOutput}
 * @see {@link ListReadSetsCommandInput} for command's `input` shape.
 * @see {@link ListReadSetsCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 */
export class ListReadSetsCommand extends $Command<
  ListReadSetsCommandInput,
  ListReadSetsCommandOutput,
  OmicsClientResolvedConfig
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
  constructor(readonly input: ListReadSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OmicsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReadSetsCommandInput, ListReadSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListReadSetsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "ListReadSetsCommand";
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
  private serialize(input: ListReadSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListReadSetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReadSetsCommandOutput> {
    return de_ListReadSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
