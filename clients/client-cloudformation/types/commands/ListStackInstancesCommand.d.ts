import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListStackInstancesInput, ListStackInstancesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListStackInstancesCommandInput = ListStackInstancesInput;
export declare type ListStackInstancesCommandOutput = ListStackInstancesOutput & __MetadataBearer;
export declare class ListStackInstancesCommand extends $Command<ListStackInstancesCommandInput, ListStackInstancesCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: ListStackInstancesCommandInput;
    constructor(input: ListStackInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStackInstancesCommandInput, ListStackInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
