import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetTestGridProjectRequest, GetTestGridProjectResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTestGridProjectCommandInput = GetTestGridProjectRequest;
export declare type GetTestGridProjectCommandOutput = GetTestGridProjectResult & __MetadataBearer;
export declare class GetTestGridProjectCommand extends $Command<GetTestGridProjectCommandInput, GetTestGridProjectCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetTestGridProjectCommandInput;
    constructor(input: GetTestGridProjectCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTestGridProjectCommandInput, GetTestGridProjectCommandOutput>;
    private serialize;
    private deserialize;
}
