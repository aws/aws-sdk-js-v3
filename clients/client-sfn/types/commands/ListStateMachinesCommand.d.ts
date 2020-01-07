import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { ListStateMachinesInput, ListStateMachinesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListStateMachinesCommandInput = ListStateMachinesInput;
export declare type ListStateMachinesCommandOutput = ListStateMachinesOutput & __MetadataBearer;
export declare class ListStateMachinesCommand extends $Command<ListStateMachinesCommandInput, ListStateMachinesCommandOutput, SFNClientResolvedConfig> {
    readonly input: ListStateMachinesCommandInput;
    constructor(input: ListStateMachinesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStateMachinesCommandInput, ListStateMachinesCommandOutput>;
    private serialize;
    private deserialize;
}
