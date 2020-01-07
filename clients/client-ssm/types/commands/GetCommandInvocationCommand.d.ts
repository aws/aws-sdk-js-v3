import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetCommandInvocationRequest, GetCommandInvocationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCommandInvocationCommandInput = GetCommandInvocationRequest;
export declare type GetCommandInvocationCommandOutput = GetCommandInvocationResult & __MetadataBearer;
export declare class GetCommandInvocationCommand extends $Command<GetCommandInvocationCommandInput, GetCommandInvocationCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetCommandInvocationCommandInput;
    constructor(input: GetCommandInvocationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCommandInvocationCommandInput, GetCommandInvocationCommandOutput>;
    private serialize;
    private deserialize;
}
