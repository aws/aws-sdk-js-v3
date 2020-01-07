import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { GetExecutionHistoryInput, GetExecutionHistoryOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetExecutionHistoryCommandInput = GetExecutionHistoryInput;
export declare type GetExecutionHistoryCommandOutput = GetExecutionHistoryOutput & __MetadataBearer;
export declare class GetExecutionHistoryCommand extends $Command<GetExecutionHistoryCommandInput, GetExecutionHistoryCommandOutput, SFNClientResolvedConfig> {
    readonly input: GetExecutionHistoryCommandInput;
    constructor(input: GetExecutionHistoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetExecutionHistoryCommandInput, GetExecutionHistoryCommandOutput>;
    private serialize;
    private deserialize;
}
