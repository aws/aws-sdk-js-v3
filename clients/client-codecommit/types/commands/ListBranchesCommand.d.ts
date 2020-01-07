import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { ListBranchesInput, ListBranchesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListBranchesCommandInput = ListBranchesInput;
export declare type ListBranchesCommandOutput = ListBranchesOutput & __MetadataBearer;
export declare class ListBranchesCommand extends $Command<ListBranchesCommandInput, ListBranchesCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: ListBranchesCommandInput;
    constructor(input: ListBranchesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBranchesCommandInput, ListBranchesCommandOutput>;
    private serialize;
    private deserialize;
}
