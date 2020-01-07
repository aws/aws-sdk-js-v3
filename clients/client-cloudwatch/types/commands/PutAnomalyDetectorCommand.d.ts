import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { PutAnomalyDetectorInput, PutAnomalyDetectorOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutAnomalyDetectorCommandInput = PutAnomalyDetectorInput;
export declare type PutAnomalyDetectorCommandOutput = PutAnomalyDetectorOutput & __MetadataBearer;
export declare class PutAnomalyDetectorCommand extends $Command<PutAnomalyDetectorCommandInput, PutAnomalyDetectorCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: PutAnomalyDetectorCommandInput;
    constructor(input: PutAnomalyDetectorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAnomalyDetectorCommandInput, PutAnomalyDetectorCommandOutput>;
    private serialize;
    private deserialize;
}
