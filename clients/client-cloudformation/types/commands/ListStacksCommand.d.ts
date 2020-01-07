import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListStacksInput, ListStacksOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListStacksCommandInput = ListStacksInput;
export declare type ListStacksCommandOutput = ListStacksOutput & __MetadataBearer;
export declare class ListStacksCommand extends $Command<ListStacksCommandInput, ListStacksCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: ListStacksCommandInput;
    constructor(input: ListStacksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStacksCommandInput, ListStacksCommandOutput>;
    private serialize;
    private deserialize;
}
