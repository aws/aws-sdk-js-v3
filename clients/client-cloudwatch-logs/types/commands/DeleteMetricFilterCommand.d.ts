import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DeleteMetricFilterRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteMetricFilterCommandInput = DeleteMetricFilterRequest;
export declare type DeleteMetricFilterCommandOutput = __MetadataBearer;
export declare class DeleteMetricFilterCommand extends $Command<DeleteMetricFilterCommandInput, DeleteMetricFilterCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DeleteMetricFilterCommandInput;
    constructor(input: DeleteMetricFilterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMetricFilterCommandInput, DeleteMetricFilterCommandOutput>;
    private serialize;
    private deserialize;
}
