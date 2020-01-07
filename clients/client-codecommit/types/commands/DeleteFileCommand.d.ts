import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DeleteFileInput, DeleteFileOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteFileCommandInput = DeleteFileInput;
export declare type DeleteFileCommandOutput = DeleteFileOutput & __MetadataBearer;
export declare class DeleteFileCommand extends $Command<DeleteFileCommandInput, DeleteFileCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: DeleteFileCommandInput;
    constructor(input: DeleteFileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFileCommandInput, DeleteFileCommandOutput>;
    private serialize;
    private deserialize;
}
