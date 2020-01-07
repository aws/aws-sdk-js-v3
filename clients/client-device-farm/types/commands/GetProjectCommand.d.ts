import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetProjectRequest, GetProjectResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetProjectCommandInput = GetProjectRequest;
export declare type GetProjectCommandOutput = GetProjectResult & __MetadataBearer;
export declare class GetProjectCommand extends $Command<GetProjectCommandInput, GetProjectCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetProjectCommandInput;
    constructor(input: GetProjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetProjectCommandInput, GetProjectCommandOutput>;
    private serialize;
    private deserialize;
}
