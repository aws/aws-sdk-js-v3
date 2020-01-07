import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { PutFileInput, PutFileOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutFileCommandInput = PutFileInput;
export declare type PutFileCommandOutput = PutFileOutput & __MetadataBearer;
export declare class PutFileCommand extends $Command<PutFileCommandInput, PutFileCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: PutFileCommandInput;
    constructor(input: PutFileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutFileCommandInput, PutFileCommandOutput>;
    private serialize;
    private deserialize;
}
