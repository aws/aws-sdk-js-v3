import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { StartDocumentClassificationJobRequest, StartDocumentClassificationJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartDocumentClassificationJobCommandInput = StartDocumentClassificationJobRequest;
export declare type StartDocumentClassificationJobCommandOutput = StartDocumentClassificationJobResponse & __MetadataBearer;
export declare class StartDocumentClassificationJobCommand extends $Command<StartDocumentClassificationJobCommandInput, StartDocumentClassificationJobCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: StartDocumentClassificationJobCommandInput;
    constructor(input: StartDocumentClassificationJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartDocumentClassificationJobCommandInput, StartDocumentClassificationJobCommandOutput>;
    private serialize;
    private deserialize;
}
