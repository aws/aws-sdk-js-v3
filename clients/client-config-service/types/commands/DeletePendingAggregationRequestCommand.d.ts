import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeletePendingAggregationRequestRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeletePendingAggregationRequestCommandInput = DeletePendingAggregationRequestRequest;
export declare type DeletePendingAggregationRequestCommandOutput = __MetadataBearer;
export declare class DeletePendingAggregationRequestCommand extends $Command<DeletePendingAggregationRequestCommandInput, DeletePendingAggregationRequestCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeletePendingAggregationRequestCommandInput;
    constructor(input: DeletePendingAggregationRequestCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePendingAggregationRequestCommandInput, DeletePendingAggregationRequestCommandOutput>;
    private serialize;
    private deserialize;
}
