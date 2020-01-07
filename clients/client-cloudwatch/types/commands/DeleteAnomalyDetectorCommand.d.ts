import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DeleteAnomalyDetectorInput, DeleteAnomalyDetectorOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAnomalyDetectorCommandInput = DeleteAnomalyDetectorInput;
export declare type DeleteAnomalyDetectorCommandOutput = DeleteAnomalyDetectorOutput & __MetadataBearer;
export declare class DeleteAnomalyDetectorCommand extends $Command<DeleteAnomalyDetectorCommandInput, DeleteAnomalyDetectorCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: DeleteAnomalyDetectorCommandInput;
    constructor(input: DeleteAnomalyDetectorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAnomalyDetectorCommandInput, DeleteAnomalyDetectorCommandOutput>;
    private serialize;
    private deserialize;
}
