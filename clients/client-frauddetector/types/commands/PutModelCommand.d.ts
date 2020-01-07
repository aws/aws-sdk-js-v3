import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { PutModelRequest, PutModelResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutModelCommandInput = PutModelRequest;
export declare type PutModelCommandOutput = PutModelResult & __MetadataBearer;
export declare class PutModelCommand extends $Command<PutModelCommandInput, PutModelCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: PutModelCommandInput;
    constructor(input: PutModelCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutModelCommandInput, PutModelCommandOutput>;
    private serialize;
    private deserialize;
}
