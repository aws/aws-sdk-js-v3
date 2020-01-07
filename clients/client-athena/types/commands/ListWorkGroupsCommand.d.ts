import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { ListWorkGroupsInput, ListWorkGroupsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListWorkGroupsCommandInput = ListWorkGroupsInput;
export declare type ListWorkGroupsCommandOutput = ListWorkGroupsOutput & __MetadataBearer;
export declare class ListWorkGroupsCommand extends $Command<ListWorkGroupsCommandInput, ListWorkGroupsCommandOutput, AthenaClientResolvedConfig> {
    readonly input: ListWorkGroupsCommandInput;
    constructor(input: ListWorkGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AthenaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWorkGroupsCommandInput, ListWorkGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
