import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListStackSetOperationResultsInput, ListStackSetOperationResultsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListStackSetOperationResultsCommandInput = ListStackSetOperationResultsInput;
export declare type ListStackSetOperationResultsCommandOutput = ListStackSetOperationResultsOutput & __MetadataBearer;
export declare class ListStackSetOperationResultsCommand extends $Command<ListStackSetOperationResultsCommandInput, ListStackSetOperationResultsCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: ListStackSetOperationResultsCommandInput;
    constructor(input: ListStackSetOperationResultsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStackSetOperationResultsCommandInput, ListStackSetOperationResultsCommandOutput>;
    private serialize;
    private deserialize;
}
