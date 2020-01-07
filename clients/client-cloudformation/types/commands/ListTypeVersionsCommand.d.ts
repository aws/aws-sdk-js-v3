import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListTypeVersionsInput, ListTypeVersionsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTypeVersionsCommandInput = ListTypeVersionsInput;
export declare type ListTypeVersionsCommandOutput = ListTypeVersionsOutput & __MetadataBearer;
export declare class ListTypeVersionsCommand extends $Command<ListTypeVersionsCommandInput, ListTypeVersionsCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: ListTypeVersionsCommandInput;
    constructor(input: ListTypeVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTypeVersionsCommandInput, ListTypeVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
