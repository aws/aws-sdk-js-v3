import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { PutExternalModelRequest, PutExternalModelResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutExternalModelCommandInput = PutExternalModelRequest;
export declare type PutExternalModelCommandOutput = PutExternalModelResult & __MetadataBearer;
export declare class PutExternalModelCommand extends $Command<PutExternalModelCommandInput, PutExternalModelCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: PutExternalModelCommandInput;
    constructor(input: PutExternalModelCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutExternalModelCommandInput, PutExternalModelCommandOutput>;
    private serialize;
    private deserialize;
}
