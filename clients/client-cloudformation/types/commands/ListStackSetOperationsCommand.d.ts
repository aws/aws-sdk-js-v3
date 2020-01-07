import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListStackSetOperationsInput, ListStackSetOperationsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListStackSetOperationsCommandInput = ListStackSetOperationsInput;
export declare type ListStackSetOperationsCommandOutput = ListStackSetOperationsOutput & __MetadataBearer;
export declare class ListStackSetOperationsCommand extends $Command<ListStackSetOperationsCommandInput, ListStackSetOperationsCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: ListStackSetOperationsCommandInput;
    constructor(input: ListStackSetOperationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStackSetOperationsCommandInput, ListStackSetOperationsCommandOutput>;
    private serialize;
    private deserialize;
}
