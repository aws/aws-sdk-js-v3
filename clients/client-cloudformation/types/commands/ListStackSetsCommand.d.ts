import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListStackSetsInput, ListStackSetsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListStackSetsCommandInput = ListStackSetsInput;
export declare type ListStackSetsCommandOutput = ListStackSetsOutput & __MetadataBearer;
export declare class ListStackSetsCommand extends $Command<ListStackSetsCommandInput, ListStackSetsCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: ListStackSetsCommandInput;
    constructor(input: ListStackSetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStackSetsCommandInput, ListStackSetsCommandOutput>;
    private serialize;
    private deserialize;
}
