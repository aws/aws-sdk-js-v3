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

import { ListSnapshotCopyConfigurationsRequest, ListSnapshotCopyConfigurationsResponse } from "../models/models_0";
import {
  de_ListSnapshotCopyConfigurationsCommand,
  se_ListSnapshotCopyConfigurationsCommand,
} from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSnapshotCopyConfigurationsCommand}.
 */
export interface ListSnapshotCopyConfigurationsCommandInput extends ListSnapshotCopyConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSnapshotCopyConfigurationsCommand}.
 */
export interface ListSnapshotCopyConfigurationsCommandOutput
  extends ListSnapshotCopyConfigurationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of snapshot copy configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ListSnapshotCopyConfigurationsCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ListSnapshotCopyConfigurationsCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // ListSnapshotCopyConfigurationsRequest
 *   namespaceName: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSnapshotCopyConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSnapshotCopyConfigurationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   snapshotCopyConfigurations: [ // SnapshotCopyConfigurations // required
 * //     { // SnapshotCopyConfiguration
 * //       snapshotCopyConfigurationId: "STRING_VALUE",
 * //       snapshotCopyConfigurationArn: "STRING_VALUE",
 * //       namespaceName: "STRING_VALUE",
 * //       destinationRegion: "STRING_VALUE",
 * //       snapshotRetentionPeriod: Number("int"),
 * //       destinationKmsKeyId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSnapshotCopyConfigurationsCommandInput - {@link ListSnapshotCopyConfigurationsCommandInput}
 * @returns {@link ListSnapshotCopyConfigurationsCommandOutput}
 * @see {@link ListSnapshotCopyConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListSnapshotCopyConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link InvalidPaginationException} (client fault)
 *  <p>The provided pagination token is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 */
export class ListSnapshotCopyConfigurationsCommand extends $Command<
  ListSnapshotCopyConfigurationsCommandInput,
  ListSnapshotCopyConfigurationsCommandOutput,
  RedshiftServerlessClientResolvedConfig
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
  constructor(readonly input: ListSnapshotCopyConfigurationsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSnapshotCopyConfigurationsCommandInput, ListSnapshotCopyConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSnapshotCopyConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftServerlessClient";
    const commandName = "ListSnapshotCopyConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServerless",
        operation: "ListSnapshotCopyConfigurations",
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
    input: ListSnapshotCopyConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListSnapshotCopyConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSnapshotCopyConfigurationsCommandOutput> {
    return de_ListSnapshotCopyConfigurationsCommand(output, context);
  }
}
