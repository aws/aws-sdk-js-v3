import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { PutDetectorRequest, PutDetectorResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutDetectorCommandInput = PutDetectorRequest;
export declare type PutDetectorCommandOutput = PutDetectorResult & __MetadataBearer;
export declare class PutDetectorCommand extends $Command<PutDetectorCommandInput, PutDetectorCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: PutDetectorCommandInput;
    constructor(input: PutDetectorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutDetectorCommandInput, PutDetectorCommandOutput>;
    private serialize;
    private deserialize;
}
