import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetRunRequest, GetRunResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRunCommandInput = GetRunRequest;
export declare type GetRunCommandOutput = GetRunResult & __MetadataBearer;
export declare class GetRunCommand extends $Command<GetRunCommandInput, GetRunCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetRunCommandInput;
    constructor(input: GetRunCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRunCommandInput, GetRunCommandOutput>;
    private serialize;
    private deserialize;
}
