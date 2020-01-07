import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { PutOutcomeRequest, PutOutcomeResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutOutcomeCommandInput = PutOutcomeRequest;
export declare type PutOutcomeCommandOutput = PutOutcomeResult & __MetadataBearer;
export declare class PutOutcomeCommand extends $Command<PutOutcomeCommandInput, PutOutcomeCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: PutOutcomeCommandInput;
    constructor(input: PutOutcomeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutOutcomeCommandInput, PutOutcomeCommandOutput>;
    private serialize;
    private deserialize;
}
