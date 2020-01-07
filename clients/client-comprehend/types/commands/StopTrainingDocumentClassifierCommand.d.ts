import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { StopTrainingDocumentClassifierRequest, StopTrainingDocumentClassifierResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopTrainingDocumentClassifierCommandInput = StopTrainingDocumentClassifierRequest;
export declare type StopTrainingDocumentClassifierCommandOutput = StopTrainingDocumentClassifierResponse & __MetadataBearer;
export declare class StopTrainingDocumentClassifierCommand extends $Command<StopTrainingDocumentClassifierCommandInput, StopTrainingDocumentClassifierCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: StopTrainingDocumentClassifierCommandInput;
    constructor(input: StopTrainingDocumentClassifierCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopTrainingDocumentClassifierCommandInput, StopTrainingDocumentClassifierCommandOutput>;
    private serialize;
    private deserialize;
}
