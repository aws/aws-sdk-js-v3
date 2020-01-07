import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListCommandInvocationsRequest, ListCommandInvocationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListCommandInvocationsCommandInput = ListCommandInvocationsRequest;
export declare type ListCommandInvocationsCommandOutput = ListCommandInvocationsResult & __MetadataBearer;
export declare class ListCommandInvocationsCommand extends $Command<ListCommandInvocationsCommandInput, ListCommandInvocationsCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListCommandInvocationsCommandInput;
    constructor(input: ListCommandInvocationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCommandInvocationsCommandInput, ListCommandInvocationsCommandOutput>;
    private serialize;
    private deserialize;
}
