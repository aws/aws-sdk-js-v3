import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListImportsInput, ListImportsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListImportsCommandInput = ListImportsInput;
export declare type ListImportsCommandOutput = ListImportsOutput & __MetadataBearer;
export declare class ListImportsCommand extends $Command<ListImportsCommandInput, ListImportsCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: ListImportsCommandInput;
    constructor(input: ListImportsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListImportsCommandInput, ListImportsCommandOutput>;
    private serialize;
    private deserialize;
}
