import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListStackResourcesInput, ListStackResourcesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListStackResourcesCommandInput = ListStackResourcesInput;
export declare type ListStackResourcesCommandOutput = ListStackResourcesOutput & __MetadataBearer;
export declare class ListStackResourcesCommand extends $Command<ListStackResourcesCommandInput, ListStackResourcesCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: ListStackResourcesCommandInput;
    constructor(input: ListStackResourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStackResourcesCommandInput, ListStackResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
